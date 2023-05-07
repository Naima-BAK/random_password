import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
function App() {

  const form = useRef();
  const { state, setState } = useState({
    password: ''
  });
  const generatePwd = () => {
    let pass = "";
    let i = 1;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "azertyuiopqsdfghjklmwcxvbn1234567890#&@";
    for (i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setState({
      password: pass
    });
    console.log(pass);

  }



  return (
    <div className="App">
      <form ref={form}>
        <input type="text" name="" id="" value={state} />
        <button onClick={generatePwd}>Generate Password </button>
      </form>
    </div>


  );
}

export default App;
