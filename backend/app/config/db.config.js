module.exports = {
    HOST: "ep-dark-queen-11405827-pooler.us-east-1.postgres.vercel-storage.com",
    USER: "default",
    PASSWORD: "kMxGY7Vgz0Kf",
    DB: "verceldb",
    PORT: 5432,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
