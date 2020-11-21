//STRING DE CONEXAO

module.exports = {
    development: {
        database: {
            host: 'dbsreact.ci3m3x5uzji8.us-east-2.rds.amazonaws.com',
            port: 3306,
            name: 'dbreact',
            dialect: 'mysql',
            user: 'root',
            password: 'senha1234'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
