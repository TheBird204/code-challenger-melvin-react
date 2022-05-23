//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const [info, setInfo] = useState(false);

  
  useEffect(() => {
    dataFile();
  }, []);


  const dataFile = async () => {
    const requets = await fetch('http://localhost:3000/files/data');
    const jsonResponse = await requets.json();
    setInfo(jsonResponse);

  }

  return (
    <div className="row">
      <div className="d-flex align-items-center justify-content-center bg-danger">
        <h3 style={{color: 'white'}}>React Test App</h3>  
      </div>
      <div className="card">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">File Name</th>
              <th scope="col">Text</th>
              <th scope="col">Number</th>
              <th scope="col">Hex</th>
            </tr>
          </thead>
          <tbody>
              {
                !info ? <tr><th>Sin data</th></tr> : info.data.map(item => (
                  item.lines.map((itemLine, index) => (
                    <tr key={item.file+'-'+index}>
                      <th scope="row">{item.file}</th>
                      <td>{itemLine.text}</td>
                      <td>{itemLine.number}</td>
                      <td>{itemLine.hex}</td>
                    </tr>
                  ))
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default App;
