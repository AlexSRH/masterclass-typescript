import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  {
    name: 'Alex',
    email: 'aalexo1313@gmail.com'
  }
]

export default {
  async index (request: Request, response: Response) {
    return response.json(users)
  },

  async create (request: Request, response: Response) {
    const emailService = new EmailService()

    emailService.sendMail({
      to: { name: 'Alex', email: 'aalexo' },
      message: { subject: 'test', body: 'isso mesmo' }
    })

    return response.send()
  }
}
