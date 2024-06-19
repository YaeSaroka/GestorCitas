import React, { useState } from 'react';
import Intro from './Views/Intro.jsx';
import View1 from './Views/View1.jsx';
import View2 from './Views/View2.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <div>
      <Intro />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <View1 setCitas={setCitas} />
          </div>
          <div className="col-md-6">
            <View2 citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;