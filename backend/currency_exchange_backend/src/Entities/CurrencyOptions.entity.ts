import {Column, Entity} from 'typeorm'


@Entity()
export class CurrenciesEntity {
    @Column()
    currencies: [{label: string, value: string}]
}