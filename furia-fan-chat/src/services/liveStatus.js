// src/services/liveStatus.js

export const getLiveStatus = () => {
    const statuses = [
      "FURIA 1 x 0 MIBR 🔥",
      "FURIA 2 x 1 Imperial 💥",
      "FURIA está dominando o mapa!",
      "Timeout tático FURIA ⏱️",
      "Placar parcial: FURIA 3 x 2"
    ];
  
    const random = Math.floor(Math.random() * statuses.length);
    return statuses[random];
  };
  