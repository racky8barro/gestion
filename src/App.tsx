import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import './App.css';
import frameImage from './assets/Frame 2 1 (1).png';
import Card from './card';
import ExpenseTable from './ExpenseTable';
import IncomeTable from './IncomeTable';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';

interface Expense {
  id: number;
  title: string;
  amount: string;
}

interface Income {
  id: number;
  title: string;
  amount: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, title: 'Loyer', amount: '$1,200' },
    { id: 2, title: 'Courses', amount: '$200' },
    { id: 3, title: 'Abonnement Internet', amount: '$50' },
  ]);

  const [incomes, setIncomes] = useState<Income[]>([
    { id: 1, title: 'Salaire', amount: '$3,000' },
    { id: 2, title: 'Freelance', amount: '$500' },
  ]);

  const handleAddExpense = () => {
    const newExpense: Expense = { id: Date.now(), title: 'Nouvelle Dépense', amount: '$0' };
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const handleAddIncome = () => {
    const newIncome: Income = { id: Date.now(), title: 'Nouveau Revenu', amount: '$0' };
    setIncomes([...incomes, newIncome]);
  };

  const handleDeleteIncome = (id: number) => {
    setIncomes(incomes.filter(income => income.id !== id));
  };

  return (
    <Router>
      <div>
        <img src={frameImage} alt="frame" className='mx-auto text-center' />

        <nav className="bg-gray-200 p-4">
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-income">Add Income</Link></li>
          </ul>
        </nav>

        <div className="bg-gray-100 flex items-center justify-center h-screen p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
            <Card title="Budget" amount="120000 CFA" color="text-white" />
            <Card title="Dépenses" amount="100000 CFA" color="text-red-600" />
            <Card title="Soldes" amount="20000 CFA" color="text-blue-600" />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <Routes>
            <Route path="/" element={
              <>
                <ExpenseTable expenses={expenses} onDelete={handleDeleteExpense} onAdd={handleAddExpense} />
                <IncomeTable incomes={incomes} onDelete={handleDeleteIncome} onAdd={handleAddIncome} />
              </>
            } />
            <Route path="/add-income" element={<AddIncome />} />

            <Route path="/add-expense" element={<AddExpense />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
