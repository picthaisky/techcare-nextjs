import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send to CRM system
    // 4. etc.

    console.log("Contact form submission:", validatedData);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // You could integrate with email services like:
    // - SendGrid
    // - Nodemailer
    // - Resend
    // - etc.

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validation error",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle GET requests (optional)
export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint is working" },
    { status: 200 }
  );
}
