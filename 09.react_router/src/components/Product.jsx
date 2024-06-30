import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()
    
    const goToProdouctDetail = () => {
        navigate('/productDetail2?cate=shirt')
    }
  
    return (
    <div>
        <h1>Product</h1>
        <button onClick={goToProdouctDetail}>상품상세페이지로 이동하기!</button>
    </div>
  )
}

export default Product