// app/api/resume/route.ts (for Next.js App Router)
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  try {
    // Determine the path to your resume.pdf within the public directory
    const filePath = path.resolve(process.cwd(), 'public', 'myresume.pdf'); // Corrected filename

    // Read the file buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Convert Buffer to Uint8Array (This is usually not necessary, but harmless)
    const fileArrayBuffer = new Uint8Array(fileBuffer);

    // Set appropriate headers for PDF content
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');

    // **Crucial Change:** Use 'inline' for viewing and rely on the <a> tag's 'download' attribute
    //  for the download link.
    headers.set('Content-Disposition', 'inline; filename="myresume.pdf"'); // Corrected filename

    // Return the file buffer as a Next.js response
    return new NextResponse(fileArrayBuffer, { headers });
  } catch (error) {
    console.error('Error serving resume:', error);
    // Return a 404 or 500 error if the file isn't found or an error occurs
    return new NextResponse('Resume not found or an error occurred.', { status: 404 });
  }
}