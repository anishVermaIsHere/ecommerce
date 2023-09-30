import React, { useState, useEffect} from 'react'
import { nanoid } from 'nanoid';
import {useLocation, useParams} from 'react-router-dom';
import Loader from '../../../../../utils/widgets/Loader';
import Breadcrumbs from '../../../../../components/common/Breadcrumbs';
import PaginationNav from './PaginationNav';
import ProductCard from './ProductCard';
import FilterSection from './FilterSection';
import {filterRatings} from '../../../../../utils/constants/constant-data';
import { categoriseProducts, renderProducts} from '../../../../../utils/services/reducer/filter/filter-slice';
import { useSelector, useDispatch } from 'react-redux';
import { getProductByCategory } from '../../../../../utils/services/clientapis/api';



 const ProductCategory = () => {
  const url=useLocation();
  const params=useParams();
  let category=params['category'];
  category= category.replace(/\w\S*/g, (str)=>str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());

  // all states
  const [productTypes,setProductTypes]=useState([]);
  const[ratings,setRatings]=useState(filterRatings);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const productState=useSelector(state=>state.filterSlice.products);
  const loading=useSelector(state=>state.filterSlice.loading);
  let dispatch=useDispatch();


 // to pagination of products
 const indexOfLastProds=productsPerPage*currentPage;
 const indexOfFirstProds=indexOfLastProds-productsPerPage;
  const sliceProducts=productState.slice(indexOfFirstProds,indexOfLastProds);
  

  const showProducts = () => {
   return productState.length==0 ?
   <div className='d-flex align-items-center m-auto' style={{minHeight:'80vh'}}> 
    <h4 className='ml-2'>No Products</h4> 
   </div>
   :
    sliceProducts.map((product) => <ProductCard index={nanoid()} item={product} /> )
  }


  // to change the pages
  const paginate=(pageNum)=>{
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); 
  };

  // to handle rating checkboxes
  const handleCheckbox=(id)=>{
    let selectedTypes=productTypes.map(item=>item.id===id ? {...item,checked:!item.checked} : item)
    setProductTypes(selectedTypes);
  }

  const handleRatings=(id)=>{
    const selectedRating=ratings.map(item=>item.id===id?{...item,selected:!item.selected}:{...item,selected:false});
    setRatings(selectedRating);
  }

  const handleFilters= async ()=>{
    
    const response=await getProductByCategory(category);
    let updated=response.data;
  
    let rated=ratings.filter(item=>item.selected).map(item=>item.value);
    if(rated.length) {
      updated=updated.filter(item=>item.rating.rate>=Math.trunc(rated[0]));
    }
    let checked=productTypes.filter(item=>item.checked).map(item=>item.value);
    if(checked.length){
        updated=updated.filter(item=>checked.includes(item.type));
    }
    dispatch(renderProducts(updated));

  }


  useEffect(async() => {
    dispatch(categoriseProducts(category));
   const response=await getProductByCategory(category);
    const types=[...new Set(response.data.map(item=>item.type))];
    setCurrentPage(1);
    let prodTypes=[];
    types.map((item,index)=>{
        return prodTypes.push({
            label:item,
            value:item,
            id:index+1,
            checked:false
        });
        });
      setProductTypes(prodTypes);

   return ()=>{}

  },[category]);



  // to handle filters effects
  useEffect(()=>{
    handleFilters();
   return ()=>{}

  },[productTypes,ratings])

    return loading ? <Loader /> :
    <>
      <div className='col-xl-2 col-lg-3 col-md-12'>
        <FilterSection 
        handleRatings={handleRatings} 
        handleTypes={handleCheckbox}
        ratingLabels={ratings} 
        typesLabels={productTypes}
        category={category}
        handleProducts={getProductByCategory}
        />

      </div>

      <div className='col-xl-8 col-lg-9 col-md-12'>
        {sliceProducts.length!=0?<div className='col-lg-12'>
            <Breadcrumbs link={url}/>
          </div>:''}
        <div className='row'>
          {showProducts()}
        </div>
        <div className='mt-5'>
          {productState.length<=productsPerPage?
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
}

export default ProductCategory;
