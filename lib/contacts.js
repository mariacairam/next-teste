const API_URL = process.env.API_URL;

export async function createEmail(data){
    const send = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(await send.status);
}