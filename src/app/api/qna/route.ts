import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function GET(request: NextRequest) {
  const question = request.nextUrl.searchParams.get("question");

  const data = await openai.chat.completions.create({
    max_tokens: 64,
    messages: [
      {
        content:
          'You will be provided with a description of a mood, and your task is to generate the CSS code for a color that matches it. The color should be in hexadecimal format (e.g., #FF5733). Write your output in JSON with a single key called "css_code".',
        role: "system",
      },
      {
        content: question,
        role: "user",
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    top_p: 1,
  });
  console.info(data.choices[0].message.content);
  const color = data.choices[0].message.content
    ?.split("#")[1]
    .replace(/[^0-9a-zA-Z]/g, "");

  return NextResponse.json({ color });
}
