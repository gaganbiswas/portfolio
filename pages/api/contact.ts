import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import Isemail from 'isemail'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    res.status(400).json({ status: 'One or more fields are empty' })
  }

  if (!Isemail.validate(email)) {
    res.status(400).json({ status: 'Invalid email address' })
  }

  if (message.length <= 20) {
    res
      .status(400)
      .json({ status: 'Message should be atleast 20 characters long' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  })

  try {
    const sendEmailResponse = await transporter.sendMail({
      to: process.env.MY_EMAIL,
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p>
      <p><strong>Name: </strong>${name}</p>
      <p><strong>Email: </strong>${email}</p>
      <p><strong>Message: </strong></p>
      <p>${message}</p>
      `,
    })

    if (sendEmailResponse.rejected.length <= 0)
      res.status(200).json({ status: 'O.K. Success' })
    else res.status(400).json({ status: 'Failed' })
  } catch (error) {
    //Silently catch errors
    res.status(500).json({ status: 'Internal Server Error' })
  }
}

export default handler
