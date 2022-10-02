import { nanoid } from 'nanoid';
import {useLocation} from 'react-router-dom';
import React, { useState, useEffect} from 'react'
import { getProducts } from '../../../../../utils/services/clientapis/api';
import {MdOutlineFilterNone} from 'react-icons/md';
import Loader from '../../../../../utils/widgets/Loader';
import Breadcrumbs from '../../../../../components/common/Breadcrumbs';
import PaginationNav from './PaginationNav';
import ProductCard from './ProductCard';
import FilterSection from './FilterSection';
import { filterConstants} from '../../../../../utils/constants/constant-data';
import { categoriseProducts, renderCategProducts} from '../../../../../utils/services/reducer/filter/filter-slice';
import { useSelector, useDispatch } from 'react-redux';

 const ProductCategory = (props) => {
  const url=useLocation();
  const route=url.pathname.slice(1);
  let labels='';
  for(let i in filterConstants){
    if(i==route){
        labels=filterConstants[i]
    }
  }

  let routeArray=url.pathname.split('/');
  routeArray=routeArray.slice(1);

  const category=props.routeData.title;

  let dispatcher=useDispatch();
  // all states
  const[isChecked,setIsChecked]=useState(labels);
  const loader=<Loader />
  let loading = true;
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
 const productState=useSelector(state=>state.filterSlice.filteredProducts);


 // to pagination of products
 const indexOfLastProds=productsPerPage*currentPage;
 const indexOfFirstProds=indexOfLastProds-productsPerPage;
  const sliceProducts=productState.slice(indexOfFirstProds,indexOfLastProds);

  
  
  // render products on the page
  const showProducts = () => {
   return productState.length==0 ?
   <div className='m-auto'> 
    <MdOutlineFilterNone style={{fontSize:'3rem', color:'#a19e9eaf'}}/>
    <h3 className=''>No items here</h3> 
   </div>
   :
    sliceProducts.map((product) => <ProductCard key={nanoid()} item={product} /> )
  }

  // to change the pages
  const paginate=(pageNum)=>{
    setCurrentPage(pageNum)
    // setCurrentProds(sliceProducts)
  };

  // to handle rating checkboxes
  const handleCheckbox=(id)=>{
    const ratingList=isChecked;
    let checkedRatings=ratingList.map(item=>item.id===id ? {...item,checked:!item.checked} : item)
    setIsChecked(checkedRatings);
}


const handleFilters=()=>{
  let checkBoxRate=isChecked.filter(item=>item.checked).map(item=>item.value);
  if(checkBoxRate.length){
    // api request by axios
    const response = getProducts();
    response.then((res) => {
      let filterProducts=res.data.filter(item=>checkBoxRate.includes(item.type))
      dispatcher(renderCategProducts(filterProducts));
    }).catch((error) => console.log('get error', error))
      .finally(() => {
      })
  }
  else {
    dispatcher(categoriseProducts(category));
  }
}

// to get JSON data from api
  useEffect(() => {
    dispatcher(categoriseProducts(category));
    setIsChecked(labels);
    setCurrentPage(1);
  },[url]);

  // to handle filters of checkboxes
  useEffect(()=>{
    handleFilters();
  },[isChecked])



  return (
    <>
      <div className='col-lg-3 col-md-3'>
        <FilterSection 
        checkboxFn={handleCheckbox} 
        filterLabels={isChecked} 
        productType={category}
        />
      </div>

      <div className='col-lg-9 col-md-9'>
        <div className='col-lg-12'>
            <Breadcrumbs link={url}/>
          </div>
        <div className='row' style={{minHeight:'800px'}}>
          {productState.loading ? loader : showProducts()}
        </div>
        <div className='mt-5'>
          {productState.length<=12?
              ""
              :
              <PaginationNav 
              currentPage={currentPage}
              productsPerPage={productsPerPage}
              paginate={paginate}
              totalProducts={productState.length}
              />
              }
          </div>
      </div>
    </>
  )
}

export default ProductCategory;
