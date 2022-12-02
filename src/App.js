import "./App.css";
import image from "./img/bot_image.png";
import { useState, useRef } from "react";

function App() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${seconds}`); 
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  ); 

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Aug 13 2022") {
      isActive = false;
    }
    const status = document.querySelector(".status");
    if (isActive === true) {
      status.innerHTML = "Ativo";
      status.style.color = "green";
    } else {
      status.innerHTML = "Desativado";
      status.style.color = "red";
    }
  };
  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let palavroes = ["foda|mau|estúpido|inútil|vadia|louco|absurdo|vai se fuder|cu|caralho"];
    let entrada = new RegExp(palavroes);
    if (entrada.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Por favor, não use palavras ruins";
        inputRef.value = "";
      }, 2000);
    }

    let bemvindo = [
      "oi|olá|o que está acontecendo|olá|saudações|bom dia|boa tarde|boa noite",
    ];
    let entranda2 = new RegExp(bemvindo);
    if (entranda2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Olá, como você está hoje?"; 
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }


    let resposta = [
      "de boa|suave|tranquilo|bem|estou indo|tudo bem|bem|sentado|em pé",
    ];
    let resp = new RegExp(resposta);
    if (resp.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Isso é muito bom, como eu posso ajudar?"; 
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }





    let tchau = ["tchau|adeus|te vejo mais tarde|a deus|vai la|sai fora|vai embora"];
    let entrada3 = new RegExp(tchau);
    if (entrada3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Tchau, tenha um bom dia";
        inputRef.value = ""; 
      }, 2000);
      setTimeout(() => {
        status.innerText = "Desativado";
        status.style.color = "red";
      }, 5000);
    }
    let obrigado = [
      "Obrigado|obrigado|valeu|muito obrigado|muito obrigado",
    ];
    let entrada4 = new RegExp(obrigado);
    if (entrada4.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "De nada!";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }
    let agora = [
      "como você está hoje|como você está",
    ];
    let entrada5 = new RegExp(agora);
    if (entrada5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Estou bem, obrigado";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }
    let bom = [
      "Isso é bom|Parece bom|isso parece ótimo|Ótimo|ótimo|parece ótimo|isso parece bom|Bom|legal|top|Top|que bom|Que bom|bom|Bom",
    ];
    let entrada6 = new RegExp(bom);
    if (entrada6.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 1000);
    }

    let resposta1 = [
      "Estou bem|Estou bem|Estou bem hoje|Estou bem hoje|Estou bem|Estou ótimo|Estou bem|Estou ótimo|Estou bem|Estou bem| ótimo|Ótimo",
    ];
    let words7 = new RegExp(resposta1);
    if (words7.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Que bom";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }

    let nome = [
      "Qual é o seu nome?|qual é o seu nome?|qual e o seu nome",
    ];
    let entrada8 = new RegExp(nome);
    if (entrada8.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Meu nome é  ChatBot-Ctrlz";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }

    let pessoal = [
      "Quem é o dono|quem é o dono|Quem é o dono deste bot|quem é o dono deste bot|Quem fez você|quem fez você|Quem é o seu criador|Quem fez você|quem é o seu criador|quem é seu dono|Quem é seu dono",
    ];
    let entrada9 = new RegExp(pessoal);
    if (entrada9.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevevndo...";
      setTimeout(() => {
        getBotMessage.innerText = "Os 7 anões do curso CC, turma 31";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }

    let proprietario2 = [
      "O que é CTRLZ?",
    ];
    let entrada10 = new RegExp(proprietario2);
    if (entrada10.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText =
          "é uma loja virtua focada em vendas de serviços.";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }

    let pessoal2 = [
      "Quantos anos você tem?|qual é a sua idade?",
    ]; 
    let entrada11 = new RegExp(pessoal2);
    if (entrada11.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Eu tenho 3 meses";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 1000);
    }

    let pessoal3 = [
      "ajuda|Ajuda|preciso de ajuda|Preciso de ajuda|help",
    ]; 
    let entrada12 = new RegExp(pessoal3);
    if (entrada12.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Diga em poucas palavras, setup, programação, recuperação";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 1000);
    }

    let setup = [
      "Setup|setup",
    ]; 
    let entrada14 = new RegExp(setup);
    if (entrada14.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Navegue até a guia E-Sports";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 1000);
    }
    let prog = [
      "programação|Programação|Quero desenvolver um app|app",
    ]; 
    let entrada17 = new RegExp(prog);
    if (entrada17.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Veio ao lugar certo, entre em contato";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 1000);
    }

    let contato = [
      "contato|Qual é o seu contato?|qual é o seu contato?|Qual é o seu contato|qual é o seu contato|qual é o seu telefone|telefone",
    ]; 
    let entrada15 = new RegExp(contato);
    if (entrada15.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "(11)250320222";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 1000);
    }

    let email = [
      "email|E-mail|Qual é o seu email?|qual é o seu E-mail?|Qual é o seu email|qual é o seu e-mail",
    ]; 
    let entrada16 = new RegExp(email);
    if (entrada16.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "contato@ctrlzinformatica.com.br";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 1000);
    }




    let perguntas1 = [
      "pode me ajudar?|Pode me ajudar|Posso fazer uma pergunta?|posso fazer uma pergunta",
    ];
    let entrada13 = new RegExp(perguntas1);
    if (entrada13.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escrevendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Sim";
        status.innerText = "Ativo";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 500);
    }
    //else{
      //getBotMessage.innerText = "Escrevendo...";
      //setTimeout(() => {
        //getBotMessage.innerText = "Não entendi, digite ajuda.";
        //inputRef.value = ""; 
      //}, 500);
    //}
   




    getHumanMessage.innerText = inputRef.value; 
  };
  return (
    <div className="App" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">ChatBot-Ctrlz</div>
              <div className="status">Ativo</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  id="message1"
                  ref={botmessage}
                ></div>
                <div
                  className="human-message"
                  id="message2"
                  ref={humanMessage}
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Escreva sua Mensagen"
                  ref={input}
                />
              </div>
              <div className="botao">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane"></i> Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
