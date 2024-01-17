const sql = require('mssql');
const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server',
    database: 'your_database',

};
async function executeQuery() {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT * from <table_name`;
        console.log('Query result:',result.recordset);
    } catch (err) {
        console.error('Error', err);

    } finally {
        sql.close();
    }
}

executeQuery();
