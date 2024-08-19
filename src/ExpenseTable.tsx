// src/ExpenseTable.tsx
import React from 'react';
import { Link } from 'react-router-dom';
interface Expense {
  id: number;
  title: string;
  amount: string;
}

interface ExpenseTableProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
  onAdd: () => void;
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, onDelete, onAdd }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <Link to="/add-expense">
      <button
        onClick={onAdd}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        Ajouter Dépense
      </button>
      </Link>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border-b text-center">Titre</th>
            <th className="p-2 border-b">Montant</th>
            <th className="p-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-b">
              <td className="p-2">{expense.title}</td>
              <td className="p-2">{expense.amount}</td>
              <td className="p-2">
                <button
                  onClick={() => onDelete(expense.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  

}






export default ExpenseTable;
