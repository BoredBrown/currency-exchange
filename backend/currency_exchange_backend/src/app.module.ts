import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyExchangeModule } from './currency_exchange/currency_exchange.module';

@Module({
  imports: [CurrencyExchangeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
