//import Card from 'react-bootstrap/Card'
//import ListGroup from 'react-bootstrap/ListGroup'
//import coffee_List from '../data/coffee_menus.json'
import menuData from '../data/coffee_menus.json'
import { useState } from 'react'
import MenuItem from './MenuItem'
import MenuNav from './MenuNav'
function ListGroupExample() {
  // console.log(coffee_List)

  // const [menus, setMenus] = useState(coffee_List)
  // console.log(menus)
  console.log(menuData)
  const [menus, setMenus] = useState(menuData)
  const [filter, setFilter] = useState(menus)

  // 특정 메뉴를 눌렀을 때 해당 메뉴데이터만 필터링하는 기능
  const filterMenus = (e) => {
    let category = e.target.innerText
    console.log('MenuBoard :', category)

    if (category === '커피') {
      setFilter(coffeeList)
    } else if (category === '에이드') {
      setFilter(AdeList)
    } else if (category === '디저트') {
      setFilter(DessertList)
    } else if (category === '베이커리') {
      setFilter(BakeryList)
    } else {
      setFilter(menus)
    }
  }

  // '커피'메뉴만 필터링 한 후 저장하는 변수 생성
  const coffeeList = menus.filter((item) => item.category === '커피')
  const AdeList = menus.filter((item) => item.category === '에이드')
  const DessertList = menus.filter((item) => item.category === '디저트')
  const BakeryList = menus.filter((item) => item.category === '베이커리')

  console.log(coffeeList)
  return (
    <div>
      {/* 네비게이션바영역 */}
      <div className="menu-nav">
        <MenuNav onClick={filterMenus} />
      </div>
      {/* 커피메뉴출력영역 */}
      <div className="menu-list">
        {filter.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name} //props 형태로 MenuItem에 전달
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </div>
    // <div>
    //   {menus.map((item) => (
    //     <Card key = {item.id} style={{Width : '18rem',}}>
    //       <ListGroup variant="flush" >
    //         <ListGroup.Item>{item.category}</ListGroup.Item>
    //         <ListGroup.Item>{item.name}</ListGroup.Item>
    //         <ListGroup.Item>{item.price}</ListGroup.Item>
    //       </ListGroup>
    //     </Card>
    //   ))}
    // </div>
  )
}

export default ListGroupExample
