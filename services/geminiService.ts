import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateBlessing = async (theme: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a short, heartfelt, and elegant wedding blessing or a 4-line poem for a couple named Lakmini and Shalinda. The tone should be ${theme}. Use sophisticated English vocabulary. Do not include any meta-talk or placeholders.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text || "May your journey together be filled with eternal joy and boundless love.";
  } catch (error) {
    console.error("Error generating blessing:", error);
    return "Wishing you a lifetime of love and happiness together.";
  }
};

export const generateWishFromGuest = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a beautiful, poetic, and soulful wedding wish for Lakmini and Shalinda. It should be written from the perspective of a loving guest. Keep it concise (2-3 sentences max). Focus on themes of eternal love, serendipity, and a shared future.`,
      config: {
        temperature: 1.0,
      },
    });

    return response.text || "To Lakmini and Shalinda: May your love story continue to bloom with the grace of a thousand lilies, and may every day together be more beautiful than the last.";
  } catch (error) {
    console.error("Error generating guest wish:", error);
    return "Warmest wishes to a wonderful couple. May your marriage be filled with endless love and laughter.";
  }
};