import React from 'react';
import {Admin,Resource }  from "react-admin";
import dataProvider from "./dataprovider";
import Dashboard from './dashboard.js';
import { data } from "./dataprovider.js";


function App() {
  return (
    <div className="App">
    <Admin dashboard={Dashboard} dataProvider={dataProvider} >
      <Resource name="users" list={data} />
    </Admin>
    </div>
  );
}

export default App;
