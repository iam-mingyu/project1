/* eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {

  let [팀원이름,글제목변경] = useState(['박민규', '이채영', '민소영', '이해준', '강우성']);
  let [나이, 나이변경] = useState(['24','25', '23']);
  let [like, like변경] = useState(0);
  let post = {color: 'yellow', fontSize: '30px'};
  let [투자금액, 금액변경] = useState(0);
  function funding(){
    금액변경(투자금액 + 10000000);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={post}> Welcome to Coect </div>
      </div>
      <div className="list">
        <h3> {'누적 투자 유치 금액'} </h3>
        <p> {투자금액}₩ </p>
        <hr/>
      </div>
      <button onClick = {funding} >Coect 투자하기</button>
      <div className="list">
        <h3> {팀원이름[0]} <span onClick={()=> {like변경(like++)}}> 👍 </span> {like} </h3>
        <p> {나이[0]} </p>
        <hr/>
      </div>
      <div className="list">
        <h3> {팀원이름[1]} </h3>
        <p> {나이[0]} </p>
        <hr/>
      </div>
      <div className="list">
        <h3> {팀원이름[2]} </h3>
        <p> {나이[0]} </p>
        <hr/>
      </div>
      <div className="list">
        <h3> {팀원이름[3]} </h3>
        <p> {나이[1]} </p>
        <hr/>
      </div>
      <div className="list">
        <h3> {팀원이름[4]} </h3>
        <p> {나이[2]} </p>
        <hr/>
      </div>
    </div>
  );
}
export default App;

