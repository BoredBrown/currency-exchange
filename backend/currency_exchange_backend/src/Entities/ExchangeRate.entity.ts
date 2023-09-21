import { ChangeRateDto } from 'src/DTO/change-rate.dto'
import {Column, Entity} from 'typeorm'


@Entity()
export class ExchangeRateEntity {
    @Column()
    currency: ChangeRateDto['rate']
    exchangeValueToEuro: number
}