import { useState } from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: 'Espresso',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 3,
    name: 'Latte',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
  },
  {
    id: 4,
    name: 'Mocha',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 5,
    name: 'Americano',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 6,
    name: 'Cold Brew',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
];

export default function Sales() {
  const [currentOrder, setCurrentOrder] = useState([]);

  const addToOrder = (product) => {
    setCurrentOrder([...currentOrder, { ...product, orderId: Date.now() }]);
  };

  const removeFromOrder = (orderId) => {
    setCurrentOrder(currentOrder.filter(item => item.orderId !== orderId));
  };

  const calculateTotal = () => {
    return currentOrder.reduce((sum, item) => sum + item.price, 0);
  };

  const handleCheckout = () => {
    // Here you would typically process the transaction
    alert('Order completed! Total: $' + calculateTotal().toFixed(2));
    setCurrentOrder([]);
  };

  return (
    <Layout>
      <div className="flex gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="grid grid-cols-3 gap-4">
            {SAMPLE_PRODUCTS.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToOrder={addToOrder}
              />
            ))}
          </div>
        </div>
        
        <div className="w-80">
          <h2 className="text-2xl font-bold mb-4">Current Order</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            {currentOrder.map(item => (
              <div key={item.orderId} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <div>
                  <span className="mr-2">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => removeFromOrder(item.orderId)}
                    className="text-red-600"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={currentOrder.length === 0}
                className="mt-4 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:bg-gray-400"
              >
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 