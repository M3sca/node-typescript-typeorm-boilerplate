import { getConnection, createConnection, getConnectionOptions, Connection } from "typeorm";

import { User } from "../models/user.model";


let connectionReadyPromise: Promise<Connection> | null = null;

function dbConnect() {
    if (!connectionReadyPromise) {
        connectionReadyPromise = (async () => {

            // clean up old connection that references outdated hot-reload classes
            try {
                const staleConnection = getConnection();

                console.log(staleConnection);
                await staleConnection.close();
            } catch (error) {
                // no stale connection to clean up
            }

            const connectionOptions = await getConnectionOptions();

            const options: any = {
                ...connectionOptions,
                entities: [User],
                //...optionOverrides
            };

            // wait for new default connection
            const connection = await createConnection(options);

            await connection.synchronize();


            return connection;

        })();
    }

    return connectionReadyPromise;
}


export default dbConnect;