import React from 'react'
import pokemonData from '../data/pokemon.json'
import { useState } from 'react'
import PokeNav from './PokeNav'
import PokeList from './PokeList'

const PokeBoard = () => {
  const [pokemons, setPokemons] = useState(pokemonData)

  const handleClick = (e) => {
    let menu = e.target.innerText
    console.log('선택한 메뉴', menu)

    let filter = [];

    if(menu === 'All'){
        setPokemons(pokemonData)
    }else{
        if(menu === '1~50'){
            filter = pokemonData.filter((item)=>item.id >= 1 && item.id <= 50)
            setPokemons(filter)
        }else if(menu === '51~100'){
            filter = pokemonData.filter((item)=>item.id >= 51 && item.id <= 100)
            setPokemons(filter)
        }else{
            filter = pokemonData.filter((item)=>item.id > 100)
            setPokemons(filter)
        }
    }

    
  }
  return (
    <div>
      {/* 메뉴 영역 */}
      <PokeNav  onClick ={handleClick}/>
      {/* 포켓몬 정보를 보여주는 영역 */}
      <PokeList pokemons={pokemons} />
    </div>
  )
}

export default PokeBoard
