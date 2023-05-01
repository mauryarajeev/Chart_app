import './App.css';
import Horizontalchart from './chart-horizontal';
import Linechart from './lineChart';
function App() {
  return (
    <div className="chart-container">
      <div className="App">
        <Horizontalchart />
      </div>

      <div className="Linechart">
        <Linechart />
      </div>
    </div>
  );
}


export default App;
