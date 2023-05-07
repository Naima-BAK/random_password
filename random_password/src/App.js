import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
function App() {

  const form = useRef();

  const generatePwd = () => {
    let pass = "";
    let i = 1;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "azertyuiopqsdfghjklmwcxvbn1234567890#&@";
    for (i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    console.log(pass);
    // console.log(hashedPassword);
  }



  return (
    <div className="App">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="" id="" />
        <button onClick={generatePwd}>Generate Password </button>
      </form>
    </div>


  );
}

export default App;
