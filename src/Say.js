import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  const obj = {
    a: 1,
    b: 2,
    c: 3
  };
  const nextObj = useState({ ...obj, b: 4 });

  const arr = [
    { id: 'swy', value: true },
    { id: 'amg', value: true },
    { id: 'bsh', value: false }
  ];
  const nextArr = arr
    .filter(item => item.id !== 'amg')
    .map(item => (item.id = 'swy' ? { ...item, value: false } : item));
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      {console.log(nextArr)}
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
