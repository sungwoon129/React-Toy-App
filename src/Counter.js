import React, { Component } from 'react';

class Counter extends Component {
  // state 의 초기값 설정
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때 this.state를 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState, props) => {
              return {
                number: prevState.number + 1
              };
            });

            this.setState(
              prevState => ({
                number: prevState.number + 1
              }),
              () => {
                console.log('방금 setState가 호출되었습니당!!');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
