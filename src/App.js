import {FiSearch} from 'react-icons/fi';
import './style.css';
import {useState} from 'react';
import api from './services/api';

function App() {
  const [input, setInput] = useState('')
  const [Cep, setCep] = useState({});


  async function handleSearch(){

    if(input === ''){
      alert("Preencha Algum CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    }
    catch {
      alert("Ops Erro ao Buscar...");
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" 
        placeholder="Digite seu CEP.."
        value={input}
        onChange={(event) => setInput(event.target.value) }
        />
        <button className="ButtobSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>

      <main className='main'> 
        <h2>CEP: 07856070</h2>
        <span>Rua Teste Algum</span>
        <span>Complemento: Algum Complemento</span>
        <span>Vila Rosa</span>
        <span>São Paulo - SP</span>
      </main>
    </div>
  );
}

export default App;
