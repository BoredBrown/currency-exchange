import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { CurrenciesEntity } from './src/Entities/CurrencyOptions.entity';
import { ExchangeRateEntity } from './src/Entities/ExchangeRate.entity';


const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'currency-exchange-db',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres', /// put the whole thing in environment variables
    entities: [CurrenciesEntity, ExchangeRateEntity],
    synchronize: true,
}

export default config;