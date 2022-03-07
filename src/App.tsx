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
  ["RU", 700],
  ["Australia",300],
    ["japan",1000]
];


const data2 = [
    ["Country", "Popularity"],
    ["Germany", 700],
    ["United States", 600],
    ["Brazil", 400],
    ["Canada", 300],
    ["France", 200],
    ["RU", 100],

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
        chartArea:{left:"0%",top:20,width:'60%',height:'80%'},
        fontSize:12,
        tooltip:{textStyle: {fontSize: 15,bold:true}, showColorCode: true},

        legend:{position: 'bottom', maxLines:2,textStyle: {color: 'blue', fontSize: 11}}
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
          <div className="chartParent">
          <div><Chart className="tableCLass" chartType="Table"  data={dataset} width="100%" height="200px" options={tableOption}/></div>

          <div><Chart className="pieChartClass" chartType="PieChart" data={dataset} width="100%" height="200px" options={pieChartOption}/></div>
          </div>

        </div>
    );

}



