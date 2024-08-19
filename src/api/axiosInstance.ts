// src/api/axiosInstance.ts

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // URL de votre backend
  timeout: 1000, // Temps d'attente avant l'échec de la requête
  headers: {
    'Content-Type': 'application/json',
    // Ajoutez des en-têtes si nécessaire
  },
});

export default axiosInstance;
