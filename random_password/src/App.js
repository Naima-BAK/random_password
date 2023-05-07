import logo from './logo.svg';
import './App.css';
import emailjs from '@emailjs/browser';
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
      // const hashedPassword = bcrypt.hashSync(pass, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up

    }
    console.log(pass);
    // console.log(hashedPassword);
    <a href="mailto:n.bakenchich@gmail.com">Click to Send an Email</a>
  }


  const sendEmail = (e) => {
    let user_name = "ali";
    let user_email = "naimabenmalkek@gmail.com";
    let subject = "send email test ";
    let message = "hello this is the test of sending an random password"
    e.preventDefault();

    emailjs.sendForm(
      'service_gc8x1kp',
      'template_66vty8o',
      form.current,
      'W2ETjMCSG_Bx0y2NF')

      .then((result) => {
        console.log(result.text);
      },
        (error) => {
          console.log(error.text);
        });
    // e.target.reset();
  };
  return (
    // <div className="App">
    //   <form ref={form} onSubmit={sendEmail}>
    //     <input type="text" name="" id="" />
    //     <button onClick={generatePwd}>Generate Password </button>
    //     <button onClick={sendEmail}> Copy Password</button>
    //   </form>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="" id="" />
      {/* <button onClick={generatePwd}>Generate Password </button> */}
      <button onClick={sendEmail}> Copy Password</button>
    </form>

  );
}

export default App;
