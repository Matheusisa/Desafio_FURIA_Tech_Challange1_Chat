// services/liveStatus.js

const statusMessages = [
  "FURIA entrou no servidor.",
  "Início do mapa: Mirage 🗺️",
  "Round 1: FURIA venceu o pistol! 🔫",
  "Round 2: Forçado inimigo. FURIA confirma! 💪",
  "Round 5: KSCERATO 3K! 💥",
  "Round 10: Clutch 1v3 do yuurih 🔥",
  "Intervalo: FURIA lidera por 9x6 🐆",
  "Round 16: Agressiva e vitória no force!",
  "Match point: 15x10 para a FURIA!",
  "FIM DE JOGO: VITÓRIA DA FURIA! 🏆"
];

let index = 0;

export const getLiveStatus = () => {
  if (index < statusMessages.length) {
    return statusMessages[index++];
  } else {
    return "Partida encerrada. Obrigado por torcer com a gente! 💛";
  }
};