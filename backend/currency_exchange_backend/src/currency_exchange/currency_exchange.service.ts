import { Injectable } from '@nestjs/common';
import { ChangeRateDto } from 'src/DTO/change-rate.dto';

@Injectable()
export class CurrencyExchangeService {
 // Ran out of time on here as well, it would simply invoke a different set of functions (repository layer) to communicate with the db, then pass the responses back to the controller.
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
