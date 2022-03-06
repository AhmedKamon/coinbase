import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { useState } from "react";

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
 
  
  export const data = {
    labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [56,59,80,81,56,72,45,55,42],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [56,59,80,81,56,72,45,55,42],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

// const labels = [
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sept',
//     'Oct',
//     'Nov',
//     'Des',
//     'Jan',
// ]

// const data = {
//     labels:[
//         'Apr',
//         'May',
//         'Jun',
//         'Jul',
//         'Aug',
//         'Sept',
//         'Oct',
//         'Nov',
//         'Des',
//         'Jan',
//     ],
//     labels: labels,
//     datasets:{
//         label: 'My First Dataset',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor:'#3773f5',
//         borderColor:'#3773f5',
//         borderCapStyle:'butt',
//         borderDash:[],
//         borderDashOffset: 0.0,
//         borderJoinStyle: 'miter',
//         pointBorderColor:'#3773f5',
//         pointBackgroundColor:'#3773f5',
//         pointBorderWidth:1,
//         pointHoverRadius:5,
//         pointHoverBackgroundColor:'#3773f5',
//         pointHoverBorderColor:'#3773f5',
//         pointHoverBorderWidth:2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data:[56,59,80,81,56,72,45,55,42],
//     },
// }
// export const data = {
//     labels: [
//         'Apr',
//         'May',
//         'Jun',
//         'Jul',
//         'Aug',
//         'Sept',
//         'Oct',
//         'Nov',
//         'Des',
//         'Jan',
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor:'#3773f5',
//         borderColor:'#3773f5',
//         borderCapStyle:'butt',
//         borderDash:[],
//         borderDashOffset: 0.0,
//         borderJoinStyle: 'miter',
//         pointBorderColor:'#3773f5',
//         pointBackgroundColor:'#3773f5',
//         pointBorderWidth:1,
//         pointHoverRadius:5,
//         pointHoverBackgroundColor:'#3773f5',
//         pointHoverBorderColor:'#3773f5',
//         pointHoverBorderWidth:2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data:[56,59,80,81,56,72,45,55,42],
//     },]
//   };
const BalanceChart = ({data,options}) => {
  // const [chartData, setChartData] = useState({});
    return (
        <Wrapper>
         {/* <Line options={options} data={data} />:<Line options={options} data={data} /> */}
        </Wrapper>
    );
};

export default BalanceChart;

const Wrapper = styled.div``