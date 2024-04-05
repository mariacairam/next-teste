'use server';

import { createEmail } from "@/lib/contacts";

export async function createEmailAction(formData){
    const data = {
        first: formData.get('first'),
        last: formData.get('last'),
        email: formData.get('email'),
        message: formData.get('message'),
      };
    const result = await createEmail(data);
}