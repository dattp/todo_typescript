import app from './app'
import dotenv from 'dotenv'
dotenv.config()

app.listen(process.env.PORT || 9007, () => {
  console.log('Server started on port: ', process.env.PORT || 9007);
})