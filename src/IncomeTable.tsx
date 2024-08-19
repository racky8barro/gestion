// src/IncomeTable.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface Income {
  id: number;
  title: string;
  amount: string;
}

interface IncomeTableProps {
  incomes: Income[];
  onDelete: (id: number) => void;
  onAdd: () => void;
}

const IncomeTable: React.FC<IncomeTableProps> = ({ incomes, onDelete, onAdd }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Liste des Revenus</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Titre</th>
            <th className="border p-2">Montant</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income) => (
            <tr key={income.id}>
              <td className="border p-2">{income.title}</td>
              <td className="border p-2">{income.amount}</td>
              <td className="border p-2 text-center">
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => onDelete(income.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-income">
      <button
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={onAdd}
      >
        Ajouter un revenu
      </button>
      </Link>
    </div>
  );
};

export default IncomeTable;
