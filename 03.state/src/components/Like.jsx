import React from 'react'
import { useState } from 'react'
const Like = () => {

const[heart,setHeart] = useState("🤍")
const[count,setCount] = useState(0)
    
const handleLike= () =>{
    if(heart == '🤍'){
        setCount(1)
        setHeart('❤️')
    }else{
        setCount(0)
        setHeart('🤍')
    }
}

  return (
    <div> <span onClick={handleLike}>{heart}</span> 좋아요 {count}개</div>
  )
}

export default Like