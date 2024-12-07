import Layout from '@/components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-coffee-dark mb-6">Welcome to Coffee Shop Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="coffee-card p-6">
            <h2 className="text-xl font-semibold mb-2">Today's Sales</h2>
            <p className="text-2xl text-coffee">$0.00</p>
          </div>
          <div className="coffee-card p-6">
            <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
            <p className="text-2xl text-coffee">0</p>
          </div>
          <div className="coffee-card p-6">
            <h2 className="text-xl font-semibold mb-2">Popular Items</h2>
            <p className="text-coffee">No orders yet</p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 