import React from 'react';
import ImgSelectWithPrevComponent from './ImgSelectWithPrevComponent';
import InputOnlyNumber from './InputOnlyNumber';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Upload Image and Commpressed It</h2>

      <div className="Show">
        <ImgSelectWithPrevComponent/>
      </div>

      <div className="">
        <InputOnlyNumber/>%
      </div>
    </div>
  );
}

export default App;
