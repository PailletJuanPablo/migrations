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

---
