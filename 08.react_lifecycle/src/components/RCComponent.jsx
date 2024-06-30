import React, { Component } from 'react'

/*
    1. Life Cycle(생명주기)
    - React 컴포넌트의 생성부터 소멸까지 이르는 일련의 과정
    - Mount, Update, UnMount
    Mount: 컴포넌트가 화면에 처음 그려진 상태
    Update : props, state, force Update 변화가 발생했을 때 리렌더링되는 상태
        + 부모컴포넌트가 갱신되었을 때도 동작
        ex) 특정 state가 변경되었을 때 활용
    UnMount : 컴포넌트가 화면에서 사라진 상태
    -함수형 컴포넌트에서는 useEffect() 사용 (클래스 컴포넌트에서는 사용불가)    
*/
export default class RCComponent extends Component {
  //생성자 : state, 변수, 함수 값들을 초기화할 때 사용
  //화면이 렌더링 되기 전 실행
  constructor() {
    //state 초기화
    super()
    this.state = { num: 0 }

    //실행할 함수 연결
    this.handleIncrement = this.handleIncrement.bind(this)

    console.log('1. constructor - 컴포넌트생성')
  }

  handleIncrement() {
    this.setState({ num: this.state.num + 1 })
  }

  //Mount
  componentDidMount() {
    console.log('3. 화면 첫 렌더링!')
  }

  //   Update
  componentDidUpdate() {
    console.log('화면 업데이트!')
  }

  render() {
    console.log('2.render - 화면이 렌더링 되는 중...')
    return (
      <div>
        RCComponent"{this.state.num}
        <button onClick={this.handleIncrement}>증가</button>
      </div>
    )
  }
}
