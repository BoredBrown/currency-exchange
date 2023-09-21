import {PrimaryColumn, Entity} from 'typeorm'


@Entity()
export class CurrenciesEntity {
    @PrimaryColumn()
    label: string
    value: string
}