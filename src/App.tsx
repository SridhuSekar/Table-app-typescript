import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from './components/table'
import { TableData } from './components/tableData';
import { Pagination } from './components/Pagination';
import { Paginations } from './components/paginations';
import * as ReactBootStrap from 'react-bootstrap'
/* import {loading} from './components/paginations' */
import { SelectDropDown } from "./components/selectDropDown"



function App() {

  /* const [loading, setLoading] = useState<boolean>(false); */
  return (
    <div className="App">
      <SelectDropDown/>
      {/* <AsyncDropDown/> */}
     
      <Paginations />
       {/* <Pagination /> */}
           {/* <Table />  */}
          {/*  <TableData /> */}
    </div>
  );
}

export default App;