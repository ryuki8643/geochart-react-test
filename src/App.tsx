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
    ["japan",1003]
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

const allCountries=[
    ['Country', "Popularity"],
    ['Afghanistan',1],	 //	AF
    ['Åland Islands',2],	 //	AX
    ['Albania',3],	 //	AL
    ['Algeria',4],	 //	DZ
    ['American Samoa',5],	 //	AS
    ['Andorra',6],	 //	AD
    ['Angola',7],	 //	AO
    ['Anguilla',8],	 //	AI
    ['Antarctica',9],	 //	AQ
    ['Antigua and Barbuda',10],	 //	AG
    ['Argentina',11],	 //	AR
    ['Armenia',12],	 //	AM
    ['Aruba',13],	 //	AW
    ['Australia',14],	 //	AU
    ['Austria',15],	 //	AT
    ['Azerbaijan',16],	 //	AZ
    ['Bahamas',17],	 //	BS
    ['Bahrain',18],	 //	BH
    ['Bangladesh',19],	 //	BD
    ['Barbados',20],	 //	BB
    ['Belarus',21],	 //	BY
    ['Belgium',22],	 //	BE
    ['Belize',23],	 //	BZ
    ['Benin',24],	 //	BJ
    ['Bermuda',25],	 //	BM
    ['Bhutan',26],	 //	BT
    ['Bolivia',27],	 //	BO
    ['Bonaire, Sint Eustatius and Saba',28],	 //	BQ
    ['Bosnia and Herzegovina',29],	 //	BA
    ['Botswana',30],	 //	BW
    ['Bouvet Island',31],	 //	BV
    ['Brazil',32],	 //	BR
    ['British Indian Ocean Territory',33],	 //	IO
    ['Brunei Darussalam',34],	 //	BN
    ['Bulgaria',35],	 //	BG
    ['Burkina Faso',36],	 //	BF
    ['Burundi',37],	 //	BI
    ['Cabo Verde',38],	 //	CV
    ['Cambodia',39],	 //	KH
    ['Cameroon',40],	 //	CM
    ['Canada',41],	 //	CA
    ['Cayman Islands',42],	 //	KY
    ['Central African Republic',43],	 //	CF
    ['Chad',44],	 //	TD
    ['Chile',45],	 //	CL
    ['China',46],	 //	CN
    ['Christmas Island',47],	 //	CX
    ['Cocos (Keeling) Islands',48],	 //	CC
    ['Colombia',49],	 //	CO
    ['Comoros',50],	 //	KM
    ['CG',51],	 //	CG
    ['CD',52],	 //	CD
    ['Cook Islands',53],	 //	CK
    ['Costa Rica',54],	 //	CR
    ['CI',55],	 //	CI
    ['Croatia',56],	 //	HR
    ['Cuba',57],	 //	CU
    ['Curaçao',58],	 //	CW
    ['Cyprus',59],	 //	CY
    ['CZ',60],	 //	CZ
    ['Denmark',61],	 //	DK
    ['Djibouti',62],	 //	DJ
    ['Dominica',63],	 //	DM
    ['Dominican Republic',64],	 //	DO
    ['Ecuador',65],	 //	EC
    ['Egypt',66],	 //	EG
    ['El Salvador',67],	 //	SV
    ['Equatorial Guinea',68],	 //	GQ
    ['Eritrea',69],	 //	ER
    ['Estonia',70],	 //	EE
    ['Ethiopia',71],	 //	ET
    ['Falkland Islands',72],	 //	FK
    ['Faroe Islands',73],	 //	FO
    ['Fiji',74],	 //	FJ
    ['Finland',75],	 //	FI
    ['France',76],	 //	FR
    ['French Guiana',77],	 //	GF
    ['French Polynesia',78],	 //	PF
    ['French Southern Territories',79],	 //	TF
    ['Gabon',80],	 //	GA
    ['Gambia',81],	 //	GM
    ['Georgia',82],	 //	GE
    ['Germany',83],	 //	DE
    ['Ghana',84],	 //	GH
    ['Gibraltar',85],	 //	GI
    ['Greece',86],	 //	GR
    ['Greenland',87],	 //	GL
    ['Grenada',88],	 //	GD
    ['Guadeloupe',89],	 //	GP
    ['Guam',90],	 //	GU
    ['Guatemala',91],	 //	GT
    ['Guernsey',92],	 //	GG
    ['Guinea',93],	 //	GN
    ['Guinea-Bissau',94],	 //	GW
    ['Guyana',95],	 //	GY
    ['Haiti',96],	 //	HT
    ['Heard Island and McDonald Islands',97],	 //	HM
    ['Holy See',98],	 //	VA
    ['Honduras',99],	 //	HN
    ['Hong Kong',100],	 //	HK
    ['Hungary',101],	 //	HU
    ['Iceland',102],	 //	IS
    ['India',103],	 //	IN
    ['Indonesia',104],	 //	ID
    ['Iran',105],	 //	IR
    ['Iraq',106],	 //	IQ
    ['Ireland',106],	 //	IE
    ['Isle of Man',107],	 //	IM
    ['Israel',108],	 //	IL
    ['Italy',109],	 //	IT
    ['Jamaica',110],	 //	JM
    ['Japan',111],	 //	JP
    ['Jersey',112],	 //	JE
    ['Jordan',113],	 //	JO
    ['Kazakhstan',114],	 //	KZ
    ['Kenya',115],	 //	KE
    ['Kiribati',116],	 //	KI
    ['KP',117],	 //	KP
    ['KR',118],	 //	KR
    ['Kuwait',119],	 //	KW

    ['Kyrgyzstan',120],	 //	KG
    ['Laos',121],	 //	LA
    ['Latvia',122],	 //	LV
    ['Lebanon',123],	 //	LB
    ['Lesotho',124],	 //	LS
    ['Liberia',125],	 //	LR
    ['Libya',126],	 //	LY
    ['Liechtenstein',127],	 //	LI
    ['Lithuania',128],	 //	LT
    ['Luxembourg',129],	 //	LU
    ['Macao',130],	 //	MO
    ['Macedonia',131],	 //	MK
    ['Madagascar',132],	 //	MG
    ['Malawi',133],	 //	MW
    ['Malaysia',134],	 //	MY
    ['Maldives',135],	 //	MV
    ['Mali',136],	 //	ML
    ['Malta',137],	 //	MT
    ['Marshall Islands',138],	 //	MH
    ['Martinique',139],	 //	MQ
    ['Mauritania',140],	 //	MR
    ['Mauritius',140],	 //	MU
    ['Mayotte',141],	 //	YT
    ['Mexico',142],	 //	MX
    ['Micronesia',143],	 //	FM
    ['Moldova',144],	 //	MD
    ['Monaco',145],	 //	MC
    ['Mongolia',146],	 //	MN
    ['Montenegro',147],	 //	ME
    ['Montserrat',148],	 //	MS
    ['Morocco',149],	 //	MA
    ['Mozambique',150],	 //	MZ
    ['Myanmar',151],	 //	MM
    ['Namibia',152],	 //	NA
    ['Nauru',153],	 //	NR
    ['Nepal',154],	 //	NP
    ['Netherlands',154],	 //	NL
    ['New Caledonia',155],	 //	NC
    ['New Zealand',156],	 //	NZ
    ['Nicaragua',157],	 //	NI
    ['Niger',158],	 //	NE
    ['Nigeria',159],	 //	NG
    ['Niue',160],	 //	NU
    ['Norfolk Island',161],	 //	NF
    ['Northern Mariana Islands',162],	 //	MP
    ['Norway',163],	 //	NO
    ['Oman',164],	 //	OM
    ['Pakistan',165],	 //	PK
    ['Palau',166],	 //	PW
    ['PS',167],	 //	PS
    ['Panama',168],	 //	PA
    ['Papua New Guinea',169],	 //	PG
    ['Paraguay',170],	 //	PY
    ['Peru',171],	 //	PE
    ['Philippines',172],	 //	PH
    ['Pitcairn',173],	 //	PN
    ['Poland',174],	 //	PL
    ['Portugal',175],	 //	PT
    ['Puerto Rico',176],	 //	PR
    ['Qatar',177],	 //	QA
    ['Reunion',178],	 //	RE
    ['Romania',179],	 //	RO
    ['RU',180],	 //	RU
    ['Rwanda',181],	 //	RW
    ['Saint Barthélemy',182],	 //	BL
    ['Saint Helena, Ascension and Tristan da Cunha',183],	 //	SH
    ['Saint Kitts and Nevis',184],	 //	KN
    ['Saint Lucia',185],	 //	LC
    ['Saint Martin (French part)',186],	 //	MF
    ['Saint Pierre and Miquelon',187],	 //	PM
    ['Saint Vincent and the Grenadines',188],	 //	VC
    ['Samoa',189],	 //	WS
    ['San Marino',190],	 //	SM
    ['Sao Tome and Principe',191],	 //	ST
    ['Saudi Arabia',192],	 //	SA
    ['Senegal',193],	 //	SN
    ['Serbia',194],	 //	RS
    ['Seychelles',195],	 //	SC
    ['Sierra Leone',196],	 //	SL
    ['Singapore',197],	 //	SG
    ['Sint Maarten (Dutch part)',198],	 //	SX
    ['Slovakia',199],	 //	SK
    ['Slovenia',200],	 //	SI
    ['Solomon Islands',201],	 //	SB
    ['Somalia',202],	 //	SO
    ['South Africa',203],	 //	ZA
    ['South Georgia and the South Sandwich Islands',204],	 //	GS
    ['SS',205],	 //	SS
    ['Spain',206],	 //	ES
    ['Sri Lanka',207],	 //	LK
    ['Sudan',208],	 //	SD
    ['Suriname',209],	 //	SR
    ['Svalbard and Jan Mayen',210],	 //	SJ
    ['Swaziland',211],	 //	SZ
    ['Sweden',212],	 //	SE
    ['Switzerland',213],	 //	CH
    ['Syria',214],	 //	SY
    ['Taiwan',215],	 //	TW
    ['Tajikistan',216],	 //	TJ
    ['Tanzania',217],	 //	TZ
    ['Thailand',218],	 //	TH
    ['TL',219],	 //	TL
    ['Togo',220],	 //	TG
    ['Tokelau',221],	 //	TK
    ['Tonga',222],	 //	TO
    ['Trinidad and Tobago',223],	 //	TT
    ['Tunisia',224],	 //	TN
    ['Turkey',225],	 //	TR
    ['Turkmenistan',226],	 //	TM
    ['Turks and Caicos Islands',227],	 //	TC
    ['Tuvalu',228],	 //	TV
    ['Uganda',229],	 //	UG
    ['Ukraine',230],	 //	UA
    ['United Arab Emirates',231],	 //	AE
    ['GB',232],	 //	GB
    ['United States',233],	 //	US
    ['United States Minor Outlying Islands',234],	 //	UM
    ['Uruguay',235],	 //	UY
    ['Uzbekistan',236],	 //	UZ
    ['Vanuatu',237],	 //	VU
    ['Venezuela',238],	 //	VE
    ['VietNam',239],	 //	VN
    ['Virgin Islands (British)',240],	 //	VG
    ['Virgin Islands (U.S.)',241],	 //	VI
    ['Wallis and Futuna',242],	 //	WF
    ['Western Sahara',243],	 //	EH
    ['Yemen',244],	 //	YE
    ['Zambia',245],	 //	ZM
    ['Zimbabwe',246]	 //	ZW
];

//https://unstats.un.org/unsd/methodology/m49/

const dataStats={"first":data1,"second":data2}

export default function App(){


    const [dataset,setDataset]=useState(data1)
    const [regions,setRegions]=useState("world")
    var options = {
        region:regions,
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
        chartArea:{left:"0%",right:"0%",top:20,width:'60%',height:'80%'},
        fontSize:12,
        tooltip:{textStyle: {fontSize: 15,bold:true}, showColorCode: true},

        legend:{position: 'bottom', maxLines:2,textStyle: {color: 'blue', fontSize: 11}}
    }




    const dataChange =(e:React.ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value=="first") {setDataset(data1)}
        else if(e.target.value=="second"){setDataset(data2)}
        else if(e.target.value=="allCountries"){setDataset(allCountries)}

    }

    const mapZoom=(e:any)=>{

    }

    return (
        <div className="App">
          <select name="change_table"  onChange={(e)=>dataChange(e)} className="changeTable">
            <option value="first" >first</option>
            <option value="second" >second</option>
            <option value="allCountries" >All Countries</option>
          </select>
          <Chart chartType="GeoChart" width="100%" height="420px" data={dataset} options={options}  />
          <div className="regionButtonParent">

              <button className="regionButton" onClick={()=>setRegions("world")}>World</button>
              <button className="regionButton" onClick={()=>setRegions("002")}>Africa</button>
              <button className="regionButton" onClick={()=>setRegions("150")}>Europe</button>
              <button className="regionButton" onClick={()=>setRegions("021")}>North Americas</button>
              <button className="regionButton" onClick={()=>setRegions("005")}>South Americas</button>
              <button className="regionButton" onClick={()=>setRegions("142")}>Asia</button>
              <button className="regionButton" onClick={()=>setRegions("009")}>Oceania</button>


          </div>
          <div className="chartParent">
          <Chart className="tableCLass" chartType="Table"  data={dataset} width="100%" height="200px" options={tableOption}/>

          <Chart className="pieChartClass" chartType="PieChart" data={dataset} width="100%" height="200px" options={pieChartOption}/>
          </div>

        </div>
    );

}



