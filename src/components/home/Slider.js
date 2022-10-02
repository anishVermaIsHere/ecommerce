import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default function Slider({title,data}) {
    let sliderData=data;
  return (
    <>
        <Carousel>
            {
                sliderData.map((ele,index)=>{
                    return(
                        <Carousel.Item key={index} interval={3000}>
                            <img className="d-block w-100" src={ele.url} alt={title} />
                        </Carousel.Item>   
                    )
                })
            }
        </Carousel>
    </>
  )
}
