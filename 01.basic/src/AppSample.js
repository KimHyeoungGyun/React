function AppSample() {
  let today = new Date()
  let season = ''
  let date = today.toLocaleDateString()

  let name = prompt('이름을 입력하세용')
  //현재 달 가져오기
  let month = today.getMonth() + 1

  //계절 판단하는 로직 구현
  if (month >= 3 && month <= 5) {
    season = '봄'
  } else if (month >= 6 && month <= 8) {
    season = '여름'
  } else if (month >= 9 && month <= 22) {
    season = '가을'
  } else {
    season = '겨울'
  }
  return (
    <div>
      <h1>{date}</h1>
      <hr></hr>
      <p>
        {name}님 지금은 {season}입니다. 좋은 하루 보내세요~!
      </p>
    </div>
  )
}

export default AppSample
  