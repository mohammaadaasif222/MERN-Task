import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Card from '../components/Card'
import {fetchProducts} from '../redux/product/productSlice'
function Home() {
  const token = useSelector((state)=>state.user.currentUser)
  const dispacth = useDispatch()
  const {products} = useSelector((state)=>state.products)
  console.log(products);
  useEffect(()=>{
    dispacth(fetchProducts(token))
  },[])
  return (
    <div>
      {products?.map((product)=>(
        <Card key={product._id} product={product}/>
      ))}
    </div>
  )
}

export default Home