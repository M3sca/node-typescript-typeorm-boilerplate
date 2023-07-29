import { DataSource } from "typeorm";
import { getDatabaseConfig } from "./config";

let connectionReadyPromise: Promise<DataSource> | null = null;

export function getDataSource() {
    if (!connectionReadyPromise) {
        connectionReadyPromise = (async () => {

            // console.log(process.cwd());
            let dd = Date.now();

            const databaseConfig = getDatabaseConfig();
            const dataSource = new DataSource(databaseConfig)            

            await dataSource.initialize();

            console.log(`Completed in +${(Date.now() - dd) / 1000}s`);
            dd = Date.now();
            // await connection.synchronize();

            console.log(`Sync in +${(Date.now() - dd) / 1000}s`);

            return dataSource;

        })();
    }

    return connectionReadyPromise;
}

