import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  const [ name, setName ] = useState("Heimdall");
  const [ bg, setBg ] = useState("#f00");
  const [ age, setAge ] = useState(120);
  let message = "O mundo está calmo aqui.";

  const [ list, setList ] = useState([
    'Sou o tudo, sou o nada, me instanciam como algo mas nada me satisfaço. Quem eu sou?',
    'My inspiration is Francielly💜',
    'La venturas, desventuras são los regressos delas venturas'
  ]);

  const handle20 = () => {
    setAge(20);
    setBg("#4eb84e")
  }
  const handle90 = () => {
    setAge(90);
    setBg("#3898e7")
  }

  return (
    <div style={{backgroundColor: bg}}>
      
      <Header 
        name={name} 
        age={age}
        message={message} 
      />

      {age <= 20 && 
        <button onClick={handle90}>
          Tenho 90 anos
        </button>
      }
      <br />
      {age >= 90 && 
        <button onClick={handle20}>
          Tenho 20 anos
        </button>
      }

      <hr />

      <ul>
        {list.map((frase, index) => (
          <li key={index}>{frase}</li>
        ))}
      </ul>

      <Footer />

    </div>
  );

}

export default App;
