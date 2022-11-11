import React, { useState, Link, BrowserRouter as Route } from "react";
import './App.css';
import modules from './modules';


function GetStock(stock) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/" + stock)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
}

function App() {
  // const stock = GetStock("twtr");

  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <div className="App">
      <header className="App-header">
        {/* <ul>
          { modules.map(module => (
            <li key={module.name} className={currentTab == module.name ? 'active' : ''}>
              <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
            </li>
          ))}
        </ul> */}
      </header>
      {/* <div className="App-content">
          {modules.map(module => (
            <Route {...module.routeProps} key={module.name} />
          ))}
      </div> */}
    </div>
  );
}

export default App;
