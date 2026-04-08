/**
 * Utility to send form submissions via Web3Forms (or your preferred service)
 * To use: 
 * 1. Get a free access key from https://web3forms.com/
 * 2. Replace the placeholder below with your key.
 */

export type FormType = 'contact' | 'tour' | 'stay' | 'events';

const WEB3_FORMS_KEYS: Record<FormType, string> = {
  contact: "81e86e52-317b-4059-9a3c-41d3c1d477e9",
  tour: "81e86e52-317b-4059-9a3c-41d3c1d477e9",       // shares Contact key
  stay: "4a00051a-fa9d-4d22-979c-70fd2bd2fde3",         // About Us key
  events: "cf953fea-ea3c-47ff-a064-12acc2f1a2db",
};

export interface EmailData {
  from_name: string;
  from_email: string;
  recipient_email: string;
  subject: string;
  message: string;
  [key: string]: string; // Support for additional fields
}

export async function sendEmail(data: EmailData, formType: FormType = 'contact'): Promise<boolean> {
  const accessKey = WEB3_FORMS_KEYS[formType];

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...data,
      }),
    });

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
