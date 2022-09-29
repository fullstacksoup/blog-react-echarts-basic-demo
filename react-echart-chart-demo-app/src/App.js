import React from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import NightingaleChart from "./components/NightingaleChart";
import './App.css'


export default function App() {       
  return (
    <div className="container">
      <div className="parent">
        <div className="div1"> 
          <LineChart/>
        </div>
        <div className="div2"> 
          <BarChart/>
        </div>
        <div className="div3"> 
          <PieChart/>
        </div>
        <div className="div4">
          <NightingaleChart/>
        </div>
      </div>
    </div>     
  );  
}

