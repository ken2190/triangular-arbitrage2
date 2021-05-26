import { BrokerApiModule } from '@arbitrage-libs/broker-api';
import { LogLevels, LoggerModule, MultiLogStrategy } from '@arbitrage-libs/logger';
import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { EngineModule } from './modules';
import { SharedModule } from './shared';

@Module({
  imports: [
    EngineModule,
    BrokerApiModule,
    LoggerModule.forRoot({
      enableColors: true,
      minLogLevel: LogLevels.Debug,
      strategy: MultiLogStrategy,
    }),
    SharedModule,
  ],
  providers: [AppService],
})
export class AppModule {}
