import dotenv from "dotenv";
import { DataSourceOptions } from "typeorm/data-source";
import { models } from "../../models";
import { castToInt, castToBoolean } from "../../utils/caster";

dotenv.config();


export function getDatabaseConfig(): DataSourceOptions {
    return {
        type: getConnectionType(process.env.TYPEORM_CONNECTION),
        host: process.env.TYPEORM_HOST,
        port: castToInt(process.env.TYPEORM_PORT),
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: castToBoolean(process.env.TYPEORM_SYNCHRONIZE),
        logging: castToBoolean(process.env.TYPEORM_LOGGING),
        entities: models,
        charset: 'utf8mb4',
        cache: {
            alwaysEnabled: true,
            duration: 60000 // 60 seconds
        },
        migrations: [process.env.TYPEORM_MIGRATIONS],
    }

}


function getConnectionType(connection: string): "mysql" | "mariadb" | "postgres" {
    switch (connection) {
        case "mysql":
            return "mysql";
        case "mariadb":
            return "mariadb";
        case "postgres":
            return "postgres";
        default:
            return "mysql";
    }
}