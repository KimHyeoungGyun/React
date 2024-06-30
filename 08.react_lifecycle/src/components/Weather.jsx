import React from 'react'

const Weather = ({ weather, day }) => {
    // 객체?.속성 : 객체에 정보가 null인지 판단하고 접근하는 문법
  console.log(weather)
  console.log('도시',weather?.name)
  console.log('온도',weather?.main.temp)
  console.log('아이콘',weather?.weather[0].icon)
 

//   let today = new Date()
//   let year = today.getFullYear() // 년도
//   let month = today.getMonth() + 1 // 월
//   let date = today.getDate() // 날짜
  return (
    <div>
      <h2>{day}</h2>
      <div>
        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
      </div>
      <p>
        현재 {weather?.name}은 {weather?.main.temp}℃ 입니다
      </p>
    </div>
  )
}

export default Weather
