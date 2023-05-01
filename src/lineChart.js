import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function Linechart() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Flavanoids vs Ash",
        data: [],
        borderColor: 'green',
        fill: false,
      }
    ]
  })
  
  useEffect(() => {
    const fetchData = async () => {
            const data = await import('./data.json');
            console.log('data from json file', data);
            console.log(typeof(data))
            
            const dataArray = Object.values(data);
            const Alcohol_Data = dataArray.map((d) => d.Flavanoids);
            const setLabel = dataArray.map((d) => d.Ash);
            console.log(Alcohol_Data)
      setData({
        labels: setLabel,
        datasets: [
          {
            label: "Flavanoids vs Ash",
            data: Alcohol_Data,
            borderColor: 'green',
            fill: false,
          }
        ]
      })
    };
fetchData();
}, [])

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Ash'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Flavanoids'
        }
      }
    }
  }

  return (
    <div className="Linechart" style={{ width: '96%', height: '100%' }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default Linechart;
