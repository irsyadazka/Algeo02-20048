import React from 'react';
import ImgSelectWithPrevComponent from './ImgSelectWithPrevComponent';
// import InputOnlyNumber from './InputOnlyNumber';
import "./App.css";

function App() {
  return (
    <body>
      <div className="App">
        <header className="head">
          <h1>Image Compressor</h1>
        </header>
        
        <br />
        <section>
          <div className="Show">
            <ImgSelectWithPrevComponent/>
          </div>
        </section>
      </div>
    </body>
    
  );
}

export default App;
