import React, { useState, useEffect} from 'react'
import { nanoid } from 'nanoid';
import {useLocation} from 'react-router-dom';
import Loader from '../../../../utils/widgets/Loader';
import PaginationNav from '../components/products/PaginationNav';
import ProductCard from '../components/products/ProductCard';
import FilterSection from '../components/products/FilterSection';
import { filterRatings } from '../../../../utils/constants/constant-data';
import { renderProducts, searchProducts } from '../../../../lib/reducer/filter/filter-slice';
import { useSelector, useDispatch } from 'react-redux';
import { getProductByQuery } from '../../../../services/api/product';



 const SearchResult = () => {
  const queryString=new URLSearchParams(useLocation().search);
  let query=queryString.get('q');  

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
  
  // render products on the page
  const showProducts = () => {
    return productState.length==0 ?
    <div className='d-flex align-items-center m-auto' style={{minHeight:'80vh'}}> 
     <h4 className='ml-2'>No Products</h4> 
    </div>
    :
     sliceProducts.map((product) => <ProductCard key={product.id} item={product} /> )
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
    
    const response=await getProductByQuery(query);
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
    dispatch(searchProducts(query));
   const response=await getProductByQuery(query);
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

  },[query]);



  // to handle filters effects
  useEffect(()=>{
    handleFilters();
   return ()=>{}

  },[productTypes,ratings])


    return loading? <Loader /> :
      <>
      <div className='col-xl-2 col-lg-3 col-md-12'>
        <FilterSection 
        handleRatings={handleRatings} 
        handleTypes={handleCheckbox}
        ratingLabels={ratings} 
        typesLabels={productTypes}
        category={query}
        handleProducts={getProductByQuery}
        />

      </div>

      <div className='col-xl-8 col-lg-9 col-md-12'>
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

export default SearchResult;
