import { Injectable } from '@nestjs/common';
import { ChangeRateDto } from 'src/DTO/change-rate.dto';

@Injectable()
export class CurrencyExchangeService {

    findOne(){
        return {}
    }

    convert(amount:number, from: ChangeRateDto["rate"], to: ChangeRateDto["rate"]){
        return 1000
    }

    create(body:ChangeRateDto){
        return {body}
    }


}
