//Container에 있는 6개의 각각의 버튼에 onClick 함수를 적용
//onClick으로 isShow의 boolean값을 true일때 false로, false일때 true로 반전되도록 함
//isShow의 boolean값이 true라면, Container에 지역에 맞는 이미지가 보이게끔
//isShow의 boolean값이 false라면, Container에 렌더링된 이미지가 숨겨짐

//배열로 된 isShow
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useHistory } from 'react-router-dom';
import Intro from './components/intro';
import End from './components/end';
import Main from './components/main';

import Seoul from './components/seoul';
import Cheonan from './components/cheonan';
import Yeosu from './components/yeosu';
import Jeju from './components/jeju';
import Busan from './components/busan';
import Pyeongchang from './components/pyeongchang';
import Gyeongju from './components/gyeongju';
import Jeonju from './components/jeonju';
import Sokcho from './components/sokcho';

import Busancomp from './components/busan/busancomp';
import Cheonancomp from './components/cheonan/cheonancomp';
import Seoulcomp from './components/seoul/seoulcomp';
import Yeosucomp from './components/yeosu/yeosucomp';
import Jejucomp from './components/jeju/jejucomp';
import Pyeongchangcomp from './components/pyeongchang/pyeongchangcomp';
import Gyeongjucomp from './components/gyeongju/gyeongjucomp';
import Jeonjucomp from './components/jeonju/jeonjucomp';
import Sokchocomp from './components/sokcho/sokchocomp';


//1번 인덱스만 true, 나머지 인덱스는 false가 되도록 세팅

function App() {
  let [isShow, setIsShow] = useState([false, false, false, false, false, false, false, false, false]);
  let [isShow1, setIsShow1] = useState([false, false, false, false, false, false, false, false, false]);
  let navigate = useNavigate();
  let {item_id} = useParams();
  return (
    <div>
      <div className='hi'>
        <img src={process.env.PUBLIC_URL +'/image/head.png'} className='head'
        onClick={()=>{ 
        navigate("/main")
        }}></img>
        <img className='move' src={process.env.PUBLIC_URL +"/image/moving.png"}></img>
      </div>

      <Routes>
          <Route path='/'element={<Intro/>}></Route>
          <Route path='/end'element={<End/>}></Route>
          <Route path='/main' element={<Main
          isShow ={isShow} setIsShow = {setIsShow}
          isShow1 = {isShow1} setIsShow1 = {setIsShow1}/>}></Route>
          <Route path='/seoul' element={<Seoul/>}></Route>
          <Route path='/cheonan' element={<Cheonan/>}></Route>
          <Route path='/yeosu' element={<Yeosu/>}></Route>
          <Route path='/jeju' element={<Jeju/>}></Route>
          <Route path='/busan' element={<Busan/>}></Route>
          <Route path='/pyeongchang' element={<Pyeongchang/>}></Route>
          <Route path='/gyeongju' element={<Gyeongju/>}></Route>
          <Route path='/jeonju' element={<Jeonju/>}></Route>
          <Route path='/sokcho' element={<Sokcho/>}></Route>

          <Route path='/busancomp/:item_id' element={<Busancomp/>}></Route>
          <Route path='/cheonancomp/:item_id' element={<Cheonancomp/>}></Route>
          <Route path='/seoulcomp/:item_id' element={<Seoulcomp/>}></Route>
          <Route path='/yeosucomp/:item_id' element={<Yeosucomp/>}></Route>
          <Route path='/jejucomp/:item_id' element={<Jejucomp/>}></Route>
          <Route path='/pyeongchangcomp/:item_id' element={<Pyeongchangcomp/>}></Route>
          <Route path='/gyeongjucomp/:item_id' element={<Gyeongjucomp/>}></Route>
          <Route path='/jeonjucomp/:item_id' element={<Jeonjucomp/>}></Route>
          <Route path='/sokchocomp/:item_id' element={<Sokchocomp/>}></Route>

      </Routes>
    </div>
  )
}


export default App;