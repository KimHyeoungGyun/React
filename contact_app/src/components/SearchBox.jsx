import React from 'react'

const SearchBox = () => {

     const searchClick = () =>{

     }
  return (
    <div>
        <input type="text"
        placeholder='검색할 키워드를 입력하세요.' />
        <input type="button"
         value="찾기"
         //onClick={searchClick} 
         />
    </div>
  )
}

export default SearchBox