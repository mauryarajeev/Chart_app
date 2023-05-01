import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Alcohol Categories'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Minimum Magnesium Value'
      }
    }
  }
};

const Horizontalchart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Minimum Magnesium Value',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.5)'
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await import('./data.json');
      console.log('data from json file', data);
      console.log(typeof(data))
      
      const dataArray = Object.values(data);
      // const alcoholCategories = dataArray.map((d) => d.Alcohol);
      const alcoholCategories = Array.from(new Set(dataArray.map((d) => d.Alcohol)));
      const minMagnesiumValues = dataArray.map((d) => Math.min(d.Magnesium));

      setData({
        labels: alcoholCategories,
        datasets: [
          {
            label: 'Minimum Magnesium Value',
            data: minMagnesiumValues,
            backgroundColor: 'rgba(54, 162, 235, 0.5)'
          }
        ]
      });
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '96%', height: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};
export default Horizontalchart;
