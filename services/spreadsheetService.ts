
/**
 * Service to handle Google Sheets integration.
 * To use this, you must deploy a Google Apps Script as a Web App and paste the URL below.
 */

// Replace this URL with your deployed Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwPl7NZ-pZm-NOFTt8YGTg87Ypjjysh07QXqQBhgFQDL2jlb9nRHZebgfs56Yc0IKUW/exec';

export interface RsvpData {
  fullName: string;
  phone: string;
  attendance: string;
  guests: number;
  message: string;
}

export const submitRsvpToSheet = async (data: RsvpData): Promise<boolean> => {
  // If no URL is provided, we simulate a successful submission for development/demo purposes
  if (SCRIPT_URL.includes('REPLACE_WITH_YOUR_ID')) {
    console.warn("Spreadsheet SCRIPT_URL not set. RSVP is only being simulated.");
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network latency
    return true;
  }

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Allows sending data without complex CORS setup on the script side
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Note: With 'no-cors', we won't get a standard response body, 
    // but the request will still reach the Google Apps Script.
    return true;
  } catch (error) {
    console.error("Error submitting RSVP to Google Sheets:", error);
    throw error;
  }
};
