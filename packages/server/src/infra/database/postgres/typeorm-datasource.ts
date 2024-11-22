import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'connect-food',
  // ssl: environment.POSTGRES_SSL as boolean,
  // migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  // entities: [`${__dirname}/../../../modules/**/*.entity{.ts,.js}`],
  synchronize: true,
};

export default new DataSource(dataSourceOptions);
