import { useState } from 'react';
import Layout from '@/components/Layout';

export default function Settings() {
  const [settings, setSettings] = useState({
    storeName: 'Coffee Shop',
    address: '123 Coffee Street',
    phone: '(555) 123-4567',
    email: 'contact@coffeeshop.com',
    currency: 'USD',
    theme: 'dark',
    notifications: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the settings to a backend
    alert('Settings saved successfully!');
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-coffee-dark mb-6">Settings</h1>
        
        <div className="coffee-card p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Store Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-coffee-dark">Store Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Store Name
                  </label>
                  <input
                    type="text"
                    name="storeName"
                    value={settings.storeName}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={settings.address}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={settings.phone}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={settings.email}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-coffee-dark">Preferences</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Currency
                  </label>
                  <select
                    name="currency"
                    value={settings.currency}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Theme
                  </label>
                  <select
                    name="theme"
                    value={settings.theme}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                    className="h-4 w-4 text-coffee border-gray-300 rounded"
                  />
                  <label className="text-sm font-medium text-gray-700">
                    Enable Notifications
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="btn-primary"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
} 