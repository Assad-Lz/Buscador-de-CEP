import { FiSearch } from "react-icons/fi";
import "./style.css";
import { useState } from "react";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha Algum CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops Erro ao Buscar...");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Encontre seu Cep</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP.."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="ButtobSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main class="containerCEP">
          <div class="box">
            <span class="titleCEP">CEP: {cep.cep}</span>

            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>
              {cep.localidade} - {cep.uf}
            </span>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
