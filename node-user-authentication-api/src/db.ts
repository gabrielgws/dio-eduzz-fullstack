import { Pool } from 'pg';

const connectionString = 'postgres://endhugcq:ZKvFJhoJ_wDbuxvs4eyn1YKJYyW5YpCd@kashin.db.elephantsql.com/endhugcq';

const db = new Pool({ connectionString });

export default db;
