import { ChangeRateDto } from 'src/DTO/change-rate.dto'
import {PrimaryColumn, Entity} from 'typeorm'


@Entity()
export class ExchangeRateEntity {
    @PrimaryColumn()
    currency: string
    exchangeValueToEuro: number
}