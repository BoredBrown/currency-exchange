import { Module } from '@nestjs/common';
import { CurrencyExchangeController } from './currency_exchange.controller';
import { CurrencyExchangeService } from './currency_exchange.service';

@Module({
  controllers: [CurrencyExchangeController],
  providers: [CurrencyExchangeService]
})
export class CurrencyExchangeModule {}
