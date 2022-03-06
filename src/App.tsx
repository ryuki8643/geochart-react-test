import React, { useEffect, useState} from "react";
import "./index.css"
import Chart from "react-google-charts";


const data1 = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700]
];


const data2 = [
    ["Country", "Popularity"],
    ["Germany", 700],
    ["United States", 600],
    ["Brazil", 400],
    ["Canada", 300],
    ["France", 200],
    ["RU", 100]
];

const dataStats={"first":data1,"second":data2}

export default function App(){


    const [dataset,setDataset]=useState(data1)
    var options = {

        colorAxis: {colors: ['#00853f', 'black', '#FFFF00']},
        backgroundColor: '#81d4fa',
        datalessRegionColor: '#f8bbd0',
        defaultColor: '#f5f5f5',
    };


    useEffect(()=>{console.log(dataset)},dataset)
    const dataChange =(e:any) => {
        if(e.target.value=="first") {setDataset(data1)}
        else if(e.target.value=="second"){setDataset(data2)}

    }

    return (
        <div className="App">
          <select name="change_table"  onChange={(e)=>dataChange(e)} className="changeTable">
            <option value="first" >first</option>
            <option value="second" >second</option>
          </select>
          <Chart chartType="GeoChart" width="100%" height="500px" data={dataset} options={options} />
        </div>
    );

}



