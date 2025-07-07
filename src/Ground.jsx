
import { useState, useEffect, useRef } from 'react';
import './Ground.css'
import jData from '/public/flag.json'

function Ground() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [inputStr, setInpuStr] = useState('');
  const [correct, setCorrect] = useState(false);
  const inputRef = useRef(null);

  function onConfirm() {
    console.log('버튼 클릭 : ' + inputStr);
    console.log(jData.flags[num]);
    inputRef.current.value = null;  //값 초기화
    if(jData.flags[num] === inputStr) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setCount(count+1);
  }

  useEffect( () => {
    console.log('useEffect call');
    //const randomNumber = Math.floor(Math.random() * 10)+1;  // 1~10
    const randomNum = Math.floor(Math.random() * 10);  // 0~9
    setNum(randomNum);
  }, [count]);

  //const keyDown = (e) => {}
  function keyDown(e) {
    if(e.key === 'Enter') {
      console.log('엔터');
      onConfirm();
    }
  }

  return (
    <>
    <div className='mainbox'>
      <div>국기 맞추기</div>
      <div><img src={'/imgFlag/' + String(num) + '.png'} alt="국기" /></div>
      {/*<div>Your Dream : {jData.flags[num]}</div>*/}
      <div>{count > 0 ? (correct ? '정답' : '오답') : '-'}</div>
      <div>횟수 : {count}</div>
      <div>
        <input placeholder='정답을 입력하세요'
          onChange={e => setInpuStr(e.target.value)}
          onKeyDown={keyDown} // Enter 입력시
          ref = {inputRef}  //https://w-world.tistory.com/343
        />
        <button class="btn" onClick={() => onConfirm()}>확인</button>
      </div>
    </div>
    </>
  )
}

export default Ground
