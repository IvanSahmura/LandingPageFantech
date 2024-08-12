import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: string;
  rating: number;
  discount?: string;
}

const Product: React.FC<ProductCardProps> = ({ imageUrl, name, price, rating, discount }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-sm">
      <div className="relative">
        <Image src={imageUrl} alt={name} width={400} height={300} className="rounded-t-lg" />
        {discount && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-{discount}</span>}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"} />
          ))}
        </div>
        <p className="text-gray-600 mb-4">{price}</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Product;
