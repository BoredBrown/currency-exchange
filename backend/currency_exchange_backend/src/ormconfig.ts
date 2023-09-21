import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { CurrenciesEntity } from './Entities/CurrencyOptions.entity';
import { ExchangeRateEntity } from './Entities/ExchangeRate.entity';


const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'test_database',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres', /// put the whole thing in environment variables
    entities: [CurrenciesEntity, ExchangeRateEntity],
    synchronize: true,
}

export default config;