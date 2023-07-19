# webpack-react-template

## React application with Express server

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Then an Express server was added in the `backend` directory.

## Using this project

1. Clone the project, change into the directory and install the dependencies.

   ```bash
   git clone https://github.com/claudemirtech/webpack-react-template.git
   cd webpack-react-template
   npm install
   ```

2. Create a `.env` file for environment variables in your server.

   ```bash
   touch .env
   ```
   | Key     | Value     |
   |---------|-----------|
   | PORT    | 3000      |
   | HOST    | 0.0.0.0   |
   | DB_HOST | localhost |
   | DB_NAME | postgres  |
   | DB_USER | postgres  |
   | DB_PASS | adi1177   |

3. Build and start the server

   You can build the application on its own with the command:

   ```bash
   npm run build
   ```
   Run both applications together with the command:

   ```bash
   node backend
   ```
   Both React application and server will run on defined port.
