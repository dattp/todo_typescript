import app from './app'
import dotenv from 'dotenv'
dotenv.config()

app.listen(9007, () => {
  console.log('Server started on port: ', 9007);
})