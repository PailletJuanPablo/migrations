# Paso a paso de sequelize

- Instale mysql2 y sequelize
- Creo archivo .sequelizerc
- Inicializar con "npx sequelize-cli init"
- Tener levantado el servidor de la base en local (XAMP, WAMP, MAMP)
- Crear base vacía: CREATE DATABASE ecommerce
- Configurar conexión en database.js

## Migrations
- Código de Javascript para modificar la estructura de la base
- Se generan ejecutando:
            npx sequelize-cli migration:generate --name nombreDescriptivoDeLaAlteracionEnBase
- Ejecutar las migraciones con npx sequelize-cli db:migrate
- Se almacena en mi base local un registro de las migraciones ejecutadas

# Modelos

- Representaciones de entidades de un sistema, que se mapean con tablas y columnas en nuestra base de datos
- Debe existir la base de datos y sus tablas / columnas previamente a su definición
- Archivos .js Primer letra en Mayúscula y nombre en singular
- npx sequelize-cli model:generate --name Product --attributes name:string,price:float,description:text,categoryId:integer
- npx sequelize-cli model:generate --name Category --attributes name:string,description:text,image:string,backgroundColor:string


Categoria 
id 1 nombre zapatillas
id 2 nombre buzos

Productos


