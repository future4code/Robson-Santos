import react from "react";

function Etapa1() {
    return (
      <div>
          <h1>ETAPA 1 - DADOS GERAIS</h1>
          <ol>Qual o seu nome?</ol>
          <input type="text"></input>
          <ol>Qual sua idade?</ol>
          <input type="text"></input>
          <ol>Qual o seu e-mail?</ol>
          <input type="text"></input>
          <ol>Qual a sua escolaridade?</ol>
          <select>
              <option> Ensino Médio incompleto</option>
              <option> Ensino Médio completo</option>
              <option> Ensino Superior incompleto</option>
              <option> Ensino Superior completo</option>
          </select>

        
      </div>
    );
  }
  
export default Etapa1;