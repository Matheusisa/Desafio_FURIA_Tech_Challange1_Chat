# 🐆 FURIA Fan Chat – Challenge 1

## 🔥 Sobre o Projeto

O **FURIA Fan Chat** é uma plataforma conversacional desenvolvida para proporcionar uma experiência imersiva aos fãs do time de CS:GO da FURIA. O objetivo é criar um espaço interativo onde os fãs possam acompanhar partidas em tempo real, simular conversas de torcida e se manter conectados com o time de forma divertida e dinâmica.

Este projeto foi desenvolvido como parte do processo seletivo para Assistente de Engenharia de Software da FURIA Tech.

---

## 🎯 Funcionalidades

- **Landing Page de Boas-Vindas**:
  - Tema escuro e detalhes em dourado.
  - Logo da FURIA e imagem "Future is Black".
- **Sistema de Chat Simulado**:
  - Mensagens do time e dos fãs em tempo real.
  - Atualizações automáticas de status da partida.
  - Reações da torcida com emojis e frases animadas.
  - Scroll automático para a última mensagem.
- **Design Responsivo**:
  - Interface inspirada em comunidades gamers e esportivas.

---

## 🛠️ Tecnologias Utilizadas

- **Front-end**: React.js
- **Estilização**: CSS inline (tema dark + dourado)
- **Simulações**: Funções mock para status ao vivo e torcida

---

## 🚀 Instalação e Execução

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Matheusisa/Desafio_FURIA_Tech_Challange1_Chat.git
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd Desafio_FURIA_Tech_Challange1_Chat/furia-fan-chat
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   ```

4. **Inicie a aplicação**:

   ```bash
   npm start
   ```

5. **Acesse em** [http://localhost:3000](http://localhost:3000).

---

## 📂 Estrutura do Projeto

```
furia-fan-chat/
├── public/
│   ├── Furia_Esports_logo.png
│   └── Future_is_black.png
├── src/
│   ├── components/
│   │   ├── ChatBox.jsx
│   │   ├── InputMessage.jsx
│   │   └── Message.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── services/
│   │   └── liveStatus.js
│   ├── App.jsx
│   └── index.js
```

---

## 🎨 Estilo Visual

- **Tema**: Escuro com dourado (identidade visual da FURIA).
- **Logo da FURIA**: Visível na Home e no topo do chat.
- **Imagem "Future is Black"**: Fixa no canto inferior direito em todas as telas.

---

## 🎥 Demonstração em Vídeo

Veja abaixo uma demonstração do projeto em vídeo:

<video controls width="100%">
  <source src="./public/FURIA Fan Chat.mp4" type="video/mp4">
  Seu navegador não suporta a exibição de vídeos.
</video>

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
