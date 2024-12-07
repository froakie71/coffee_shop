import { useState } from 'react';
import Layout from '@/components/Layout';

const SAMPLE_TRANSACTIONS = [
  {
    id: 1,
    date: '2024-03-20',
    time: '14:30',
    items: ['Espresso', 'Cappuccino'],
    total: 8.00,
    status: 'completed'
  },
  {
    id: 2,
    date: '2024-03-20',
    time: '15:45',
    items: ['Latte', 'Mocha', 'Cold Brew'],
    total: 13.50,
    status: 'completed'
  }
];

export default function Transactions() {
  const [dateFilter, setDateFilter] = useState('');
  const [transactions, setTransactions] = useState(SAMPLE_TRANSACTIONS);

  const filterTransactions = (date) => {
    if (!date) {
      setTransactions(SAMPLE_TRANSACTIONS);
    } else {
      setTransactions(SAMPLE_TRANSACTIONS.filter(t => t.date === date));
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-coffee-dark">Transactions History</h1>
          <div className="flex gap-4">
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => {
                setDateFilter(e.target.value);
                filterTransactions(e.target.value);
              }}
              className="input-field max-w-xs"
            />
          </div>
        </div>

        <div className="coffee-card overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-coffee text-white">
              <tr>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Time</th>
                <th className="px-6 py-3 text-left">Items</th>
                <th className="px-6 py-3 text-left">Total</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{transaction.date}</td>
                  <td className="px-6 py-4">{transaction.time}</td>
                  <td className="px-6 py-4">{transaction.items.join(', ')}</td>
                  <td className="px-6 py-4">${transaction.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
} 