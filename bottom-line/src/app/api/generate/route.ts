import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { buildPrompt } from "@/lib/prompt";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { sermonNotes } = await req.json();
    if (!sermonNotes || typeof sermonNotes !== "string") {
      return NextResponse.json({ error: "Missing sermonNotes" }, { status: 400 });
    }

    const userPrompt = buildPrompt(sermonNotes);

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Follow the instructions exactly. Do not reveal hidden steps. Only return the final list requested in STEP 4.",
        },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
    });

    const text = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Generation failed" }, { status: 500 });
  }
}
