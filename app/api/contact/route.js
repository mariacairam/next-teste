export async function POST(request) {
  try {
    const contact = await request.json();
    console.log(contact);

    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    const message = {
      from: contact.email,
      to: process.env.GMAIL_EMAIL_ADDRESS,
      subject: 'Novo contato',
      text: contact.message,
      html: `<p>${contact.message}</p>`,
    };

    transporter.sendMail(message, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    });

    return new Response('Received JSON data successfully', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain'
      }
    });

  } catch (error) {
    console.error(error);
    return new Response('Error processing JSON data', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
} 