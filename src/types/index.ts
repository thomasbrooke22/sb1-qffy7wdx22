export interface User {
  id: string;
  email: string;
  name: string;
  balance: {
    usd: number;
    crypto: Record<string, number>;
  };
}

export interface CryptoRate {
  usd: number;
  usd_24h_change: number;
}

export interface CryptoData {
  name: string;
  symbol: string;
  imageUrl: string;
  price: number;
  change24h: number;
}

export interface AuthFormData {
  email: string;
  password: string;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  cryptoSymbol: string;
  amount: number;
  price: number;
  timestamp: number;
  status: 'pending' | 'completed' | 'failed';
}