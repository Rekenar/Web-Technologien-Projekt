module.exports = {
    HOST: "localhost",
    DB: "WebTechProject",
    USER: "postgres",
    PASSWORD: "159357WebTech",
    PORT: "5432",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};