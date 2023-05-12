// import {useState} from 'react';


import {BrowserRouter, } from 'react-router-dom'
import Reza from './reza';
import Table from './components/Table';


function App() {


const data = [{
  _id: 1,
  age: 21,
  name: 'jonjon' 
}]


  return (
    <BrowserRouter>
    <Reza name='reza' umur='rekan' />
     <Table users={data} children={'halo'}/>
    </BrowserRouter>
  );
}

export default App;
