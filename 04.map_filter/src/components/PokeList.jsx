import React from 'react'
import PokeCard from './PokeCard'

const PokeList = ({pokemons}) => {

    const styleDiv = {
        display:'flex',
        flexWrap:'wrap',
        gap:'10px',
        width:'100%',
        margin:'0 auto',
        justifyContent: 'center'
    }
  return (
    <div style={styleDiv}>
        {pokemons.map((item)=>(
            <PokeCard pokemon={item}/> 
            //props 로 pokeCard에 pokeBoard에서 받아온 포켓몬 데이터 넘겨주기
            //pokeBoard -> pokeList -> pokeCard
       ))}
    </div>
  )
}

export default PokeList