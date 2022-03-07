import React, {  useState} from "react";
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
        sizeAxis: { minValue: 100, maxValue: 100 },

        colorAxis: {colors: ['#00853f', 'black', '#FFFF00']},
        legend:{textStyle: {color: 'black', fontSize: 30}},
        tooltip:{textStyle: {fontSize: 30,bold:true}, showColorCode: true},

        backgroundColor: '#81d4fa',
        datalessRegionColor: '#f8bbd0',
        defaultColor: '#f5f5f5',
        magnifyingGlass: {enable: true, zoomFactor: 7.5}

    };
    var tableOption={
        cssClassNames :{headerRow: 'bigAndBoldClass',
            hoverTableRow: 'highlightClass'}
    };
    var pieChartOption={
        chartArea:{left:'20%',top:20,width:'170%',height:'170%'},
        fontSize:16
    }



    const dataChange =(e:React.ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value=="first") {setDataset(data1)}
        else if(e.target.value=="second"){setDataset(data2)}

    }

    return (
        <div className="App">
          <select name="change_table"  onChange={(e)=>dataChange(e)} className="changeTable">
            <option value="first" >first</option>
            <option value="second" >second</option>
          </select>
          <Chart chartType="GeoChart" width="100%" height="500px" data={dataset} options={options}  />
          <tr>
          <th><Chart className="tableCLass" chartType="Table" width="100%" height="100%" data={dataset}  options={tableOption}/></th>

          <th><Chart className="pieChartClass" chartType="PieChart" width="100%" height="100%" data={dataset}  options={pieChartOption}/></th>
          </tr>

        </div>
    );

}



