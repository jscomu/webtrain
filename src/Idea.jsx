
import { useState, useEffect, use } from 'react'
import './Idea.css'
import { io } from 'socket.io-client';
//import { connected } from 'process';

function Idea() {

  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [sendMsg, setSendMsg] = useState('');   //전송할 메시지 변수
  const [messages, setMessages] = useState([])  //채팅메시지 배열

  //접속 - 사용안함
  function conServer() {
    console.log(`접속버튼클릭 ${username}`);
    const _socket = io('http://localhost:5050', {
      autoConnect: false,
      query: {
        username: username,
      }
    });
    _socket.connect();
    setSocket(_socket);
  }
  //접속 종료 - 사용안함
  function disconServer() {
    console.log('접속종료');
    socket?.disconnect();
  }
  function actCon() {
    if(isConnected) {
      //접속중이면 disconnect
      console.log('접속종료');
      socket?.disconnect();
    } else {
      //접속중이 아니면 connect
      console.log(`접속버튼클릭 ${username}`);
      const _socket = io('http://localhost:5050', {
        autoConnect: false,
        query: {
          username: username,
        }
      });
      _socket.connect();
      setSocket(_socket);
    }
  }

  function onCon() {
    console.log('onCon Log');
    setIsConnected(true);
  }
  function onDiscon() {
    console.log('onDiscon Log');
    setIsConnected(false);
  }
  function onMsgReceived(msg) {
    console.log(msg);
    setMessages(previous => [...previous, msg]); // ... 기존 배열에 새로운 배열을 추가하는 경우
  }

  useEffect( () => {
    console.log('useEffect call');
    socket?.on('connect', onCon);
    socket?.on('disconnect', onDiscon);
    socket?.on('new message', onMsgReceived);

    return () => {
      //console.log('useEffect Clean up');
      socket?.off('connect', onCon);
      socket?.off('disconnect', onDiscon);
      socket?.off('new message', onMsgReceived);
    };
  }, [socket]);

  function sendMessage() {
    console.log(`sendMessage ${sendMsg}`);
    socket?.emit('new message', { username: username, message: sendMsg }, (response) => {
      console.log(response);
    });
  }

  const messageList = messages.map((aMsg, index) =>
    <li key = {index}>
      {aMsg.username} :{aMsg.message}
    </li>
  );

  return (
    <>
    <div className='Infobar'>
      <div className='InfoBox'>
        <div className='Neon'>{isConnected ? '접속중' : '미접속'} 사용자: {username}</div>
      </div>
      <div className='InfoBox'>
        <input placeholder='username'
              disabled={isConnected}
              value={username}
              onChange={e => setUsername(e.target.value)} 
        />
        {/*
        <button onClick={() => conServer()}>접속</button>
        <button onClick={() => disconServer()}>접속종료</button>
        */}
        <button onClick={() => actCon()}>{isConnected ? '접속종료' : '접속'}</button>
      </div>
    </div>

{/*
    <ul className='ChatList'>
<div class="container">
  <p>Hello. How are you today?</p>
  <span class="time-right">11:00</span>
</div>


<div class="container darker">
  
  <p>Hey! I'm fine. Thanks for asking!</p>
  <span class="time-left">11:01</span>
</div>

<div class="container">
  
  <p>Sweet! So, what do you wanna do today?</p>
  <span class="time-right">11:02</span>
</div>

<div class="container darker">
  
  <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?Nah, I dunno. Play soccer.. or learn more coding perhaps?Nah, I dunno. Play soccer.. or learn more coding perhaps?Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
  <span class="time-left">11:05</span>

  
</div>
</ul>
*/}
      <ul className='ChatList'>
        {messageList}
      </ul>


    <div className='InputBar'>
      <input placeholder='메시지를 입력하세요'
            disabled={!isConnected}
            value={sendMsg}
            onChange={e => setSendMsg(e.target.value)}
      />
      <button onClick={() => sendMessage()}>
        보내기
      </button>
    </div>
    </>
  )
}

export default Idea
