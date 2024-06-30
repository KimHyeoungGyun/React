import React from 'react'
import Card from 'react-bootstrap/Card'

const PokeCard = ({pokemon}) => {
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pokemon.img} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>{pokemon.weight}</Card.Text>
          <Card.Text>{pokemon.height}</Card.Text>
          <Card.Text>{pokemon.type}</Card.Text>
          <Card.Text>{pokemon.weaknesses}</Card.Text>
        </Card.Body>
      </Card>
  )
}

export default PokeCard