
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Contact Form Submission:', body);
    // You can add further processing here, like sending an email or saving to a database.
    // For example, if you wanted to call your Firebase Function from here:
    // const firebaseFunctionUrl = 'YOUR_FIREBASE_FUNCTION_URL';
    // await fetch(firebaseFunctionUrl, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body),
    // });
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    let errorMessage = 'Error processing form';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
