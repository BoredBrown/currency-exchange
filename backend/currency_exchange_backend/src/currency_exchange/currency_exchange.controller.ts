import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CurrencyExchangeService } from './currency_exchange.service';
import { ChangeRateDto } from 'src/DTO/change-rate.dto';

@Controller('currency-exchange')
export class CurrencyExchangeController {
    constructor(private readonly CurrencyExchangeService: CurrencyExchangeService){}

    @Get('symbols')
    findAll(){}

    @Get("convert")
    convert(@Param (':amount') amount:number, @Query('from') from: ChangeRateDto["rate"], @Query('to') to: ChangeRateDto["rate"]){
        return this.CurrencyExchangeService.convert(amount, from, to)
    }

    @Post('change-rate')
    create(@Body() body:ChangeRateDto){
        return this.CurrencyExchangeService.create(body)
    }
}
