import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /*
          비구조화 할당문법 (아래코드와 동일)
          const scrollHeight = this.box.scrollHegiht;
          const clientHegiht  = this.box.clientHeight;
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px soild black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };
    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white,black)'
    };
    /*
    ㅇ scrollTop : 세로스크롤바 위치(0~350)
    ㅇ scrollHeight : 스크롤이 있는 박스 안의 div 높이(650)
    ㅇ clientHeight : 스크롤이 있는 박스의 높이(300)
    */

    return (
      <div style={style} ref={ref => (this.box = ref)}>
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
