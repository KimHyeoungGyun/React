import React, { useCallback, useEffect, useState } from 'react'
import Weather from './components/Weather'
import axios from 'axios'
import SyncLoader from 'react-spinners/SyncLoader'

const Ex02 = () => {
  //날씨 정보를 저장하는 state
  const [weather, setWeather] = useState(null)
  const [day, setDay] = useState('0000.00.00')
  const [isLoading, setIsLoading] = useState(false)

  const API_KEY = process.env.REACT_APP_API_KEY

  console.log(API_KEY)
  // 현재 위치(위, 경도)를 가져오는 함수
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lng = position.coords.longitude

      console.log('현재 위치(위,경도)', lat, lng)
      getCurrentWeather(lat, lng)
    })
  }

  const getCurrentWeather = async (lat, lng) => {
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    
    setIsLoading(true)

    let response = await axios.get(weather_url)
    // let data = await response.json()

    console.log('현재 날씨정보:', response)
    setWeather(response.data)

    setIsLoading(false)
  }

  useEffect(() => {
    // 현재 날짜 정보 가져오기
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1 // 월
    let date = today.getDate() // 날짜

    console.log(year, month, date)
    //날짜 정보를 state에 저장
    setDay(`${year}.${month}.${date}`)

    //현재 날씨 정보 요청
    getCurrentLocation()
  }, [])

  return (
    <div>
      {isLoading ? (
        <SyncLoader loading={isLoading} />
      ) : (
        <Weather weather={weather} day={day} />
      )}
    </div>
  )
}

export default Ex02
