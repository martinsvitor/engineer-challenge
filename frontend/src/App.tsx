import Navbar from './Navbar';
import Header from './Header';
import Table from './Table';
// import UserSearch from './UserSearch';

import './index.css';
import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';

const App = () => {

  // const [params, setParams] = useState({
  //   search:'',
  //   insuranceType:''
  // });

  return (
  <div>
    <Navbar />
    {/* <UserSearch /> */}
    <div className='w-full p-8'>
     
      <Header />
      <Table />
    </div>
  </div>
)};

export default App;
