/**
 * 交易状态
 */
export const TradeStatus = {
  Open: 'open',
  Closed: 'closed',
  Canceled: 'canceled',
  Todo: 'todo',
} as const;

export type TradeStatus = typeof TradeStatus[keyof typeof TradeStatus];

/**
 * 三角组合的边
 */
export interface Edge {
  pair: string;
  fromAsset: string;
  toAsset: string;
  // 交易方向
  side: 'sell' | 'buy';
  // 最佳价格
  price: number;
  // 最佳数量
  quantity: number;
}

export interface TradeEdge extends Edge {
  id: string;
  fee: number;
  status: TradeStatus;
}

/**
 * 三角组合
 */
export interface Triangle {
  // 三角组合唯一id（例:btc-bnb-bcd）
  id: string;
  edges: Edge[];
  // 利率
  rate: string;
  // 时间戳
  time: number;
  logs: TriangleRateLogs;
}

/**
 * 可交易三角组合
 */
export interface TradeTriangle extends Triangle {
  edges: TradeEdge[];
  status: TradeStatus;
  openTime: number;
}

export interface ABCAssetName {
  aAssetName: string;
  bAssetName: string;
  cAssetName: string;
}

export interface TriangleRate {
  rate: string;
  logs: TriangleRateLogs;
}

export interface TriangleRateLogs {
  aRate: string;
  bRate: string;
  cRate: string;
}
