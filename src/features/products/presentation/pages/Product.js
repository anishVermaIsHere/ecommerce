import { nanoid } from 'nanoid';
import {useLocation} from 'react-router-dom';
import React, { useState, useEffect} from 'react'
import { getProducts } from '../../../../utils/services/clientapis/api';
import Loader from '../../../../utils/widgets/Loader';
import Breadcrumbs from '../../../../components/common/Breadcrumbs';
import PaginationNav from '../components/products/PaginationNav';
import ProductCard from '../components/products/ProductCard';
import FilterSection from '../components/products/FilterSection';
import { filterConstants } from '../../../../utils/constants/constant-data';
import { fetchProducts, renderProducts} from '../../../../utils/services/reducer/filter/filter-slice';
import { useSelector, useDispatch } from 'react-redux';


 const Product = () => {
  const url=useLocation();
  const{products}=filterConstants;
const dispatcher=useDispatch();
  // all states
  const[isChecked,setIsChecked]=useState(products);
  let loading = useSelector(state=>state.filterSlice.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

 const productState=useSelector(state=>state.filterSlice.products);

 // to pagination of products
 const indexOfLastProds=productsPerPage*currentPage;
 const indexOfFirstProds=indexOfLastProds-productsPerPage;
  let sliceProducts=productState.slice(indexOfFirstProds,indexOfLastProds);

  
  // render products on the page
  const showProducts = () => {
   return sliceProducts.map((product) => <ProductCard key={nanoid()} item={product} /> )
  }

  // to change the pages
  const paginate=(pageNum)=>{
    setCurrentPage(pageNum);
  };


  // to handle rating checkboxes
  const handleCheckbox=(id)=>{
    const ratingList=isChecked;
    let checkedRatings=ratingList.map(item=>item.id===id ? {...item,checked:!item.checked} : item)
    setIsChecked(checkedRatings);
}


const handleFilters=()=>{
  let checkBoxRate=isChecked.filter(item=>item.checked).map(item=>item.value);
  const response = getProducts();
  if(checkBoxRate.length){
    response.then((res) => {
      let filteredProducts=res.data.filter(item=>checkBoxRate.includes(Math.trunc(item.rating.rate)))
      dispatcher(renderProducts(filteredProducts));
    }).catch((error) => console.log('get error', error))
      .finally(() => {
      })
  }
  else {
    dispatcher(fetchProducts());
  }
}

// to load products
  useEffect(() => {
    dispatcher(fetchProducts());
  },[]);

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
        />
      </div>

      <div className='col-lg-9 col-md-9'>
        <div className='col-lg-12'>
            <Breadcrumbs link={url}/>
          </div>
        <div className='row' style={{minHeight:'800px'}}>
          {loading? <Loader /> : showProducts()}
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

export default Product;

