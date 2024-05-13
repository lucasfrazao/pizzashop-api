import { Elysia } from 'elysia'
import { sendAuthLink } from '../db/schema/send-auth-link'
import { registerRestaurant } from './routes/register-restaurant'

const app = new Elysia().use(registerRestaurant).use(sendAuthLink)

app.listen(3333, () => {
  console.log('🔥 HTTP server running')
})
