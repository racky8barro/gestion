// src/components/IncomeList.tsx

import React, { useEffect, useState } from 'react';

import { Income } from './types';
import axiosInstance from './api/axiosInstance';

const IncomeList: React.FC = () => {
  const [incomes, setIncomes] = useState<Income[]>([]);

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const response = await axiosInstance.get<Income[]>('/incomes');
        setIncomes(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des revenus:', error);
      }
    };

    fetchIncomes();
  }, []);

  return (
    <div>
      <h2>Liste des Revenus</h2>
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>{income.title} - {income.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
