/**
 * Utility to send form submissions via Web3Forms (or your preferred service)
 * To use: 
 * 1. Get a free access key from https://web3forms.com/
 * 2. Replace the placeholder below with your key.
 */

const WEB3_FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // Need to replace this with a real key

export interface EmailData {
  from_name: string;
  from_email: string;
  recipient_email: string;
  subject: string;
  message: string;
  [key: string]: string; // Support for additional fields
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  // If no access key is provided, log a warning and return true for "simulated success"
  if (WEB3_FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
    console.warn("Email submission: No access key provided. This is a simulated success for development.");
    console.log("Form Data that would be sent:", data);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
    return true;
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3_FORMS_ACCESS_KEY,
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
