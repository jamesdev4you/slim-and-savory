import { NextResponse } from "next/server";
import { Resend } from "resend";
import { renderRecipeEmail } from "@/emails/RecipeEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, recipe } = await req.json();

    if (!email || !recipe) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const html = renderRecipeEmail(recipe);

    await resend.emails.send({
      from: "Slim & Savory <onboarding@resend.dev>",
      to: email,
      subject: `Recipe: ${recipe.title}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email recipe error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
