import debug from 'debug'
import { config } from 'dotenv'
config()

const serverConfig = {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  mongoDbUri: process.env.MONGODB_URI,
  defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
  jwtSecret: process.env.JWT_SECRETE_KEY,
  
  DEBUG: process.env.NODE_ENV == 'development' ? debug('dev') : console.log,
 
}

export default serverConfig