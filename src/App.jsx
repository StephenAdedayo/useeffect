import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'


const App = () => {

   const [products, setProducts] = useState(null)


    const fetchData = async () => {
       try {
        const res = await fetch("http://localhost:3000/products")
        const data = await res.json()
        setProducts(data)
       } catch (error) {
        console.err(error)
       }
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
<>
<div className='flex flex-wrap items-center justify-center gap-5'>
  {/* <button onClick={fetchData}>Click Me</button> */}
{/* <Cards /> */}
{
  products && products.map((product) => (
    <Cards key={product.id} img={product.img} name={product.name} price={product.price} desc={product.description}/>
  ))
}



</div>
</>
  )
}

export default App
