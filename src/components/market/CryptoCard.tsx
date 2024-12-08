import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { CryptoData } from '../../types';
import { formatCurrency, formatPercentage } from '../../lib/utils';

interface CryptoCardProps {
  data: CryptoData;
  onBuyClick: () => void;
  onSellClick: () => void;
}

export const CryptoCard: React.FC<CryptoCardProps> = ({
  data,
  onBuyClick,
  onSellClick,
}) => {
  const isPositiveChange = data.change24h >= 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={data.imageUrl}
            alt={data.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{data.name}</h3>
            <p className="text-sm text-gray-500 uppercase">{data.symbol}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {isPositiveChange ? (
            <ArrowUpRight className="w-4 h-4 text-green-500" />
          ) : (
            <ArrowDownRight className="w-4 h-4 text-red-500" />
          )}
          <span
            className={`text-sm font-medium ${
              isPositiveChange ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {formatPercentage(data.change24h)}
          </span>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-2xl font-bold text-gray-900">
          {formatCurrency(data.price)}
        </p>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={onBuyClick}
          className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          Buy
        </button>
        <button
          onClick={onSellClick}
          className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          Sell
        </button>
      </div>
    </div>
  );
};