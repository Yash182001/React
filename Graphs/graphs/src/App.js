
import './App.css';
import Charts from './Components/Charts';
import Doughnutchart from './Components/Doughnutchart';
import LineChart from './Components/LineChart';
import UserData from './Components/Data'
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  
  return (
    <>
    <Charts/>
    <Doughnutchart/>
    <LineChart chartData={userData}/>
    
    </>
  );
}

export default App;
