//STRING DE CONEXAO

module.exports = {
    development: {
        database: {
            host: 'dbreact.cwpa15q8hgk1.sa-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'dbreact',
            dialect: 'mysql',
            user: 'admin',
            password: '26040604'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}