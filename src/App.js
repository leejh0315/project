//Container에 있는 6개의 각각의 버튼에 onClick 함수를 적용
//onClick으로 isShow의 boolean값을 true일때 false로, false일때 true로 반전되도록 함
//isShow의 boolean값이 true라면, Container에 지역에 맞는 이미지가 보이게끔
//isShow의 boolean값이 false라면, Container에 렌더링된 이미지가 숨겨짐

//배열로 된 isShow
import './App.css';
import moving from './image/moving.png';
import { useState } from 'react';
// import bsimage2 from './image/busan/bsimage2.jpg';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Intro from './components/intro';
import Main from './components/main';
import Seoul from './components/seoul';
import Cheonan from './components/cheonan';
import Yeosu from './components/yeosu';
import Jeju from './components/jeju';
import Busan from './components/busan';
import Pyeongchang from './components/pyeongchang';
//1번 인덱스만 true, 나머지 인덱스는 false가 되도록 세팅

function App() {
  let [isShow, setIsShow] = useState([false, false, false, false, false, false]);
  let navigate = useNavigate();
  return (
    <div>
      
      <div className='head'  style={{cursor:"pointer" }}
      onClick={()=>{
        navigate("/main")
      }}>
      <img className='move' src={moving}></img>
      </div>

      <Routes>
          <Route path='/'element={<Intro/>}></Route>
          <Route path='/main' element={<Main isShow ={isShow} setIsShow = {setIsShow}/>}></Route>
          <Route path='/seoul' element={<Seoul/>}></Route>
          <Route path='/cheonan' element={<Cheonan/>}></Route>
          <Route path='/yeosu' element={<Yeosu/>}></Route>
          <Route path='/jeju' element={<Jeju/>}></Route>
          <Route path='/busan' element={<Busan/>}></Route>
          <Route path='/pyeongchang' element={<Pyeongchang/>}></Route>
      </Routes>
    </div>
  )
}


export default App;