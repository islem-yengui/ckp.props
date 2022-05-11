import React from 'react'

const Chocolate = ({chocolat, price}) => {
  console.log(chocolat);
    return (
    <div> 
        { chocolat.map((el) => ( 
         <div> 
             <h1> {el.brand} </h1>
             <img src={el.imgSrc} height='300px' width={350}  />
             <button onClick={()=>price(el.brand, el.price)}> Show price</button>
         </div>

                ))}
    </div>
  ); 
};

export default Chocolate;