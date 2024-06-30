import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const MenuItem = ({ name, price, img }) => {
  //props 방식으로 받기
  console.log(name)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">주문하기</Button>
      </Card.Body>
    </Card>
  )
}

export default MenuItem
