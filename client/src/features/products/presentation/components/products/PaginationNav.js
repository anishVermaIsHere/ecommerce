import React from 'react';
import { nanoid } from 'nanoid';
import Pagination from 'react-bootstrap/Pagination';

function PaginationNav({
  currentPage,
  productsPerPage,
  totalProducts,
  paginate
}) {

  let items = [];
  for (let number = 1; number <= Math.ceil(totalProducts/productsPerPage); number++) {
    items.push(
      <Pagination.Item 
      key={nanoid()} 
      onClick={()=>paginate(number)} 
      active={currentPage == number}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination size='sm' style={{justifyContent:'center'}}>
      {items}
    </Pagination>
  );
}

export default PaginationNav;