import React from 'react'
import './Charts.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,AreaChart, Area, BarChart,
     Bar,Rectangle,PieChart,Pie,RadarChart,Radar,PolarGrid,PolarAngleAxis,PolarRadiusAxis,
     RadialBarChart,RadialBar,ComposedChart,Scatter,
     Treemap} from 'recharts';
     
const Charts = () => {

    const line = [{name: 'Page A', uv: 400, pv:50},{name: 'Page B', uv: 300 , pv:200},{name: 'Page C' , uv: 350, pv:300},
    {name: 'Page D' , uv: 250 ,pv:300},
    {name: 'Page E', uv: 300 ,pv:350},{name: 'Page F' , uv: 200,pv:300},{name: 'Page G' , uv: 50,pv:400} ];

    const area = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      const bar = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
      const pie = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];
     
      const radar = [
        {
          subject: 'Math',
          A: 120,
          B: 110,
          fullMark: 150,
        },
        {
          subject: 'Chinese',
          A: 98,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'English',
          A: 86,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Geography',
          A: 99,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Physics',
          A: 85,
          B: 90,
          fullMark: 150,
        },
        {
          subject: 'History',
          A: 65,
          B: 85,
          fullMark: 150,
        },
      ];
      
      const radial = [
        {
          name: '18-24',
          uv: 31.47,
          pv: 2400,
          fill: '#8884d8',
        },
        {
          name: '25-29',
          uv: 26.69,
          pv: 4567,
          fill: '#83a6ed',
        },
        {
          name: '30-34',
          uv: 15.69,
          pv: 1398,
          fill: '#8dd1e1',
        },
        {
          name: '35-39',
          uv: 8.22,
          pv: 9800,
          fill: '#82ca9d',
        },
        {
          name: '40-49',
          uv: 8.63,
          pv: 3908,
          fill: '#a4de6c',
        },
        {
          name: '50+',
          uv: 2.63,
          pv: 4800,
          fill: '#d0ed57',
        },
        {
          name: 'unknow',
          uv: 6.67,
          pv: 4800,
          fill: '#ffc658',
        },
      ];

      const tree = [
        {
          name: 'axis',
          children: [
            { name: 'Axes', size: 1302 },
            { name: 'Axis', size: 24593 },
            { name: 'AxisGridLine', size: 652 },
            { name: 'AxisLabel', size: 636 },
            { name: 'CartesianAxes', size: 6703 },
          ],
        },
        {
          name: 'controls',
          children: [
            { name: 'AnchorControl', size: 2138 },
            { name: 'ClickControl', size: 3824 },
            { name: 'Control', size: 1353 },
            { name: 'ControlList', size: 4665 },
            { name: 'DragControl', size: 2649 },
            { name: 'ExpandControl', size: 2832 },
            { name: 'HoverControl', size: 4896 },
            { name: 'IControl', size: 763 },
            { name: 'PanZoomControl', size: 5222 },
            { name: 'SelectionControl', size: 7862 },
            { name: 'TooltipControl', size: 8435 },
          ],
        },
        {
          name: 'data',
          children: [
            { name: 'Data', size: 20544 },
            { name: 'DataList', size: 19788 },
            { name: 'DataSprite', size: 10349 },
            { name: 'EdgeSprite', size: 3301 },
            { name: 'NodeSprite', size: 19382 },
            {
              name: 'render',
              children: [
                { name: 'ArrowType', size: 698 },
                { name: 'EdgeRenderer', size: 5569 },
                { name: 'IRenderer', size: 353 },
                { name: 'ShapeRenderer', size: 2247 },
              ],
            },
            { name: 'ScaleBinding', size: 11275 },
            { name: 'Tree', size: 7147 },
            { name: 'TreeBuilder', size: 9930 },
          ],
        },
        {
          name: 'events',
          children: [
            { name: 'DataEvent', size: 7313 },
            { name: 'SelectionEvent', size: 6880 },
            { name: 'TooltipEvent', size: 3701 },
            { name: 'VisualizationEvent', size: 2117 },
          ],
        },
        {
          name: 'legend',
          children: [
            { name: 'Legend', size: 20859 },
            { name: 'LegendItem', size: 4614 },
            { name: 'LegendRange', size: 10530 },
          ],
        },
        {
          name: 'operator',
          children: [
            {
              name: 'distortion',
              children: [
                { name: 'BifocalDistortion', size: 4461 },
                { name: 'Distortion', size: 6314 },
                { name: 'FisheyeDistortion', size: 3444 },
              ],
            },
            {
              name: 'encoder',
              children: [
                { name: 'ColorEncoder', size: 3179 },
                { name: 'Encoder', size: 4060 },
                { name: 'PropertyEncoder', size: 4138 },
                { name: 'ShapeEncoder', size: 1690 },
                { name: 'SizeEncoder', size: 1830 },
              ],
            },
            {
              name: 'filter',
              children: [
                { name: 'FisheyeTreeFilter', size: 5219 },
                { name: 'GraphDistanceFilter', size: 3165 },
                { name: 'VisibilityFilter', size: 3509 },
              ],
            },
            { name: 'IOperator', size: 1286 },
            {
              name: 'label',
              children: [
                { name: 'Labeler', size: 9956 },
                { name: 'RadialLabeler', size: 3899 },
                { name: 'StackedAreaLabeler', size: 3202 },
              ],
            },
            {
              name: 'layout',
              children: [
                { name: 'AxisLayout', size: 6725 },
                { name: 'BundledEdgeRouter', size: 3727 },
                { name: 'CircleLayout', size: 9317 },
                { name: 'CirclePackingLayout', size: 12003 },
                { name: 'DendrogramLayout', size: 4853 },
                { name: 'ForceDirectedLayout', size: 8411 },
                { name: 'IcicleTreeLayout', size: 4864 },
                { name: 'IndentedTreeLayout', size: 3174 },
                { name: 'Layout', size: 7881 },
                { name: 'NodeLinkTreeLayout', size: 12870 },
                { name: 'PieLayout', size: 2728 },
                { name: 'RadialTreeLayout', size: 12348 },
                { name: 'RandomLayout', size: 870 },
                { name: 'StackedAreaLayout', size: 9121 },
                { name: 'TreeMapLayout', size: 9191 },
              ],
            },
            { name: 'Operator', size: 2490 },
            { name: 'OperatorList', size: 5248 },
            { name: 'OperatorSequence', size: 4190 },
            { name: 'OperatorSwitch', size: 2581 },
            { name: 'SortOperator', size: 2023 },
          ],
        },
      ];
      
      const style = {
        right: 0,
        lineHeight: '24px',
      };

      const getIntroOfPage = (label) => {
        if (label === 'Page A') {
          return "Page A is about men's clothing";
        }
        if (label === 'Page B') {
          return "Page B is about women's dress";
        }
        if (label === 'Page C') {
          return "Page C is about women's bag";
        }
        if (label === 'Page D') {
          return 'Page D is about household goods';
        }
        if (label === 'Page E') {
          return 'Page E is about food';
        }
        if (label === 'Page F') {
          return 'Page F is about baby food';
        }
        return '';
      };
      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${payload[0].value}`}</p>
              <p className="intro">{getIntroOfPage(label)}</p>
              <p className="desc">Anything you want can be displayed here.</p>
            </div>
          );

        }

    }

   
  return (
    <>
    
    <div className="header">Charts</div>

    <div className="container-fluid">
        <div className="row">
        <div className="line">
         <p>Line Chart</p>
         <LineChart width={600} height={500} data={line}>
         <Line type="monotone" dataKey="uv" stroke="Red" />
         <Line type="monotone" dataKey="pv" stroke="green" strokeDasharray="5 5" />
         {/* <CartesianGrid stroke="grey" strokeDasharray="5 5" /> */}
         <XAxis padding={{ left: 30}} dataKey="name" />
         <YAxis />
         <Tooltip/>
         <Legend/>
         </LineChart>

         </div>

         <div className="area">
            <p>Area Chart</p>
          <AreaChart width={600} height={500} data={area}>
          <Area type="monotone" dataKey="uv"  stackId="1" stroke="black" fill="yellow" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="red" fill="green" />
          <XAxis padding={{ left: 30}} dataKey="name" />
          <YAxis />
          <Tooltip/>
          <Legend/>
          </AreaChart>
         </div>
         </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="bar">
                <p>Bar Chart</p>
              <BarChart width={600} height={500} data={bar}>
              {/* <CartesianGrid stroke="grey" strokeDasharray="5 5" /> */}
                <XAxis padding={{ left: 30}} dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />}/>
                <Legend/>
                <Bar dataKey="uv" fill="#8884d8" background={{ fill: '#eee' }} /> 
                <Bar dataKey="pv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
            </div>
            <div className="pie">
                <p>Pie Chart</p>
               <PieChart width={600} height={500} >
                <Pie  dataKey="value" isAnimationActive={true} data={pie} cx="60%" cy="40%" innerRadius={40}
                 outerRadius={150} fill="#8884d8" label/>
               </PieChart>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="radar">
                <p>Radar Chart</p>
              <RadarChart width={600} height={500} outerRadius="80%" data={radar}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Lily" dataKey="B" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Mike" dataKey="A" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend/>

              </RadarChart>
            </div>

            <div className="radial">
                <p>Radial Chart</p>
            <RadialBarChart width={600} height={500} innerRadius="20%" outerRadius="80%" barSize={20} data={radial}>
             <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise  dataKey="uv" />
             <Legend iconSize={15} layout="vertical" verticalAlign="middle" wrapperStyle={style}/>
             </RadialBarChart>
            </div>
            
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="composed">
                <p>Composed Chart</p>
                <ComposedChart width={500} height={400} data={line}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis padding={{ left: 30}} dataKey="name" scale="band" />
                    <YAxis/>
                    <Tooltip/>
                <Bar dataKey="uv" barSize={20} fill="#8884d8" background={{ fill: '#eee' }} /> 
                <Line type="monotone" dataKey="uv" stroke="green" />
                <Scatter dataKey="pv" fill='green'/>
                <Legend padding={{ left: 30}}/>
                </ComposedChart>
            </div>

            <div className="tree">
                <p>Tree Map</p>
            <Treemap width={500} height={400} data={tree} dataKey="size" aspectRatio={4 / 3} stroke="#fff" fill="#8884d8" />
            <Tooltip/>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="striped">
                <BarChart width={500} height={400} data={bar}>
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="uv" stackId="a" fill="#ffc658" />
        </BarChart>
            </div>

            <div className="pie-doughnut">
            <PieChart width={600} height={500} >
                <Pie  dataKey="value" isAnimationActive={true} data={pie} cx="60%" cy="40%" innerRadius={100}
                 outerRadius={150} fill="#8884d8" label/>
               </PieChart>
            </div>
        </div>
    </div>


    </>
  )
}

export default Charts
