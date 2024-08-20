import React from 'react'

const Cards = ({img, name, price, desc }) => {
  return (
    <>
     <div className='h-auto rounded shadow hover:shadow-md w-[250px]'>
       <div className="img-container">

        <img src={img} className='p-1 rounded h-[230px] w-full' alt="" />
       </div>


       <div className="card-container p-1">
        <p>{name}</p>
        <p className='font-bold'>${price}</p>
        <p className='mt-1'>{desc}</p>
        <button className='w-full bg-gray-400 text-white rounded py-2 mt-1 hover:bg-gray-500'>Add to card</button>
       </div>


     </div>
    
    </>
  )
}

export default Cards
