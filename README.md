# Учебный проект построение API

### создать файл config.js в каталоге ./config

    *  export const env = {
    *  PORT: 3000, // порт для запуска сервера. Если порт не задан, порт: 3005 по умолчанию
    *  DB_NAME: "имя базы", // имя базы данных
    *  DB_USER: "имя пользователя", // имя пользователя базы данных
    *  DB_PASS: "пароль пользователя", // пароль пользователя базы данных
    *  DB_HOST: "localhost" // адрес базы данных
    *  DB_DIALECT: "mariadb" // 'mysql' | 'postgres' | 'sqlite' | 'mariadb'
    *  SECRET: "secret sting" // строка для формирования jwt tokena }
