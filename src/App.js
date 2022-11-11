import React, { useState, useEffect } from "react";
import "./App.css";

// function GetStock(stock) {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/" + stock)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return data;
// }

function App() {
  // const stock = GetStock("twtr");

  const [getData, setGetData] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    //This is a GET request
    fetch("http://localhost:5000/api/user")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //The Backend is will send back hard coded data
        setGetData(data.users);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    //This is a POST request so it requires a "headers", "method", and a "body" that conversts are javscript object into a JSON using the JSON.stringify() method.
    //For every .then() block that modifies your data you must return it so it can then move on to the next .then() block other wise you dont need to use "return"
    fetch("http://localhost:5000/api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //The Backend is set up in a way were it only responds back with the data you sent it like below
        name: "Taj",
        email: "Created@gmail.com",
        password: "password123",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPostData(data);
        console.log("POST DATA", data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>GET DATA</h1>
        <ul>
          {getData.map((user) => {
            return (
              <li key={Math.random()}>
                <div>
                  <p>{user.user}</p>
                  <p>{user.email}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <h1>POST DATA</h1>
        <ul>
          {postData.map((user) => {
            return (
              <li key={Math.random()}>
                <div>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <p>{user.password}</p>
                </div>
              </li>
            );
          })}
        </ul>
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
