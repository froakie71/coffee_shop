export default function ProductCard({ product, onAddToOrder }) {
  return (
    <div className="coffee-card p-4 transform hover:scale-105 transition-transform duration-200">
      <div className="relative h-48 mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute top-2 right-2 bg-coffee text-white px-2 py-1 rounded-full text-sm">
          ${product.price.toFixed(2)}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-coffee-dark">{product.name}</h3>
      <button
        onClick={() => onAddToOrder(product)}
        className="mt-4 w-full btn-primary flex items-center justify-center gap-2"
      >
        <span>Add to Order</span>
        <span>+</span>
      </button>
    </div>
  );
} 