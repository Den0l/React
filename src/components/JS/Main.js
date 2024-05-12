import React from 'react';
import '../CSS/Main.css';


const Main = () => {
  return (
    <div className="Back">
      <div>
        <p className="Kalush">Kalush</p>
      </div>
      <div>
        <pre className="Photo">
          <img src="Image.svg" width="80%" />
        </pre>
      </div>
      <div className="TextTwo">
        <p style={{ position: 'relative' }}>Orchestra</p>
      </div>
      <div className="Text">
        <p>
          <b>
            <span id="BText">Latest release</span>
          </b>
          <br />
          <br />
          The Kalush Orchestra won the Eurovision Song Contest 2022 with the song “Stefania”.
        </p>
      </div>
    </div>
  );
};

export default Main;
