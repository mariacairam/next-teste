const nodemailer = require('nodemailer');

export async function POST(request) {
  try {
    const contact = await request.json();
    console.log(contact);

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD
      },
      secure: true,
    });

    const message = {
      from: contact.email,
      to: process.env.GMAIL_EMAIL_ADDRESS,
      subject: 'Novo contato',
      text: contact.message,
      html: `<p>${contact.message}</p>`,
    };

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
    });

    await new Promise ((resolve, reject) => {
      transporter.sendMail(message, function (err, info) {
        if(err){
          console.log(err);
          reject(err);
        }
        else{
          console.log(info);
          resolve(info);
        }
      });
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