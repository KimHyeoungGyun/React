import React, { useEffect, useState } from 'react'
import Weather from './components/Weather'

/*
    실습) 날씨앱 만들기
    1. 현재 위치(위도, 경도)를 navigator.geolocation 객체로부터 가져온다.
    2. 위도, 경도 정보를 Weather API 로 현재 날씨 정보를 요청한다.
     - fetch API 활용, useEffect 활용
     * fetch API : 서버의 데이터를 비동기 방식으로 요청하는 Web API
       fetch API 구조 )
        fetch(url)
        .then((response)=>{
            실행할 로직
        })
        .catch((error)=>{
            오류가 발생했을 때 실행할 로직
        })
        .finally(()=>{
            무조건 실행할 로직
        })
    3. 받아온 정보를 중에서 지역, 온도, 날씨이미지를 화면에 출력한다.
     - 날씨정보는 state로 관리
     - 날짜정보 출력
     */
const Ex01 = () => {
    //날씨 정보를 저장하는 state
    const [weather, setWeather] = useState(null)
    const [day, setDay] = useState('0000.00.00')

  // 현재 위치(위, 경도)를 가져오는 함수
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lng = position.coords.longitude

      console.log('현재 위치(위,경도)', lat, lng)
      getCurrentWeather(lat, lng)
    })
  }

  const getCurrentWeather = async(lat, lng) => {
    const api_key = 'c5eacd0e5c37b6d1e8e3d4de93c2c553'
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`
  
    let response = await fetch(weather_url)
    let data = await response.json()

    console.log('현재 날씨정보:', data)
    setWeather(data)
}



useEffect(()=>{
    // 현재 날짜 정보 가져오기
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1 // 월
    let date = today.getDate() // 날짜
    
    console.log(year,month,date)
    //날짜 정보를 state에 저장
    setDay(`${year}.${month}.${date}`)

    //현재 날씨 정보 요청
    getCurrentLocation()
},[])


  return (
    <div>
      <Weather weather={weather} day={day}/>
    </div>
  )
}

export default Ex01
