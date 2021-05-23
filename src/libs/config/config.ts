export interface ConfigSettings {
  active: 'binance';
  minAmount: number;
  sessionLimit: number;
  broker: {
    [broker: string]: ConfigBroker;
  };
}

export enum SupportBroker {
  Binance = 'binance',
}

export interface ConfigBroker {
  fee: number;
  startAssets: string[];
  whitelist: string[];
  blacklist: string[];
  mode: 'real' | 'test';
  real: ConfigAPIKey;
  test: ConfigAPIKey;
}

export interface ConfigAPIKey {
  apiKey: string;
  secret: string;
}

// tslint:disable-next-line:no-var-requires
const root: ConfigSettings = require('config');
const activeBroker = root.broker[root.active];
const credential = activeBroker[activeBroker.mode];

const Config = {
  root,
  activeBroker,
  credential,
};

export { Config };
