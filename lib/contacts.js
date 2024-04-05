const API_URL = process.env.API_URL;

export async function createEmail(data){
    const send = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(await send.status);
}