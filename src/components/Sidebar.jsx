import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="w-64 sidebar min-h-screen p-4">
      <div className="text-cream-light text-2xl font-bold mb-8 p-4">
        ☕ Coffee Shop
      </div>
      <nav>
        <ul className="space-y-3">
          {[
            { href: '/dashboard', label: '🏠 Dashboard' },
            { href: '/dashboard/sales', label: '💰 Sales' },
            { href: '/dashboard/transactions', label: '📊 Transactions' },
            { href: '/dashboard/settings', label: '⚙️ Settings' },
          ].map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`block p-3 rounded-md transition-all duration-200 ${
                  router.pathname === item.href
                    ? 'bg-coffee-light text-white'
                    : 'text-cream-light hover:bg-coffee-dark hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="w-full text-left p-3 text-cream-light hover:bg-coffee-dark hover:text-white rounded-md transition-all duration-200"
            >
              🚪 Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
} 