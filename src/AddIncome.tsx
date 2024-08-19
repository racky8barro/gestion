// src/AddIncome.tsx

import React, { useState } from 'react';
import axios from 'axios';

const AddIncome: React.FC = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/transactions', {
        title,
        amount,
      });
      console.log('Revenu ajouté avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du revenu:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Ajouter un Revenu</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Titre</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Montant</label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIncome;
