## Folder structure

| Folder   | Description                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| routes   | in the routes folder we will define all the routes. It will be the glue between the URI and the corresponding function from the files in the `service` folder |
| services | the services folder will house all our services. One of them is `db.js`, which we use to talk with a database.                                                |

## File explanation

| File      | Description                                                                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| helper.js | home for all the helper functions                                                                                                                     |
| config.js | the config.js will contain configuration for information like the database credentials and the rows we want to show per page when we paginate results |

## Installed packages

1. express -> `npm install express`
2. dotenv -> `npm install dotenv`
