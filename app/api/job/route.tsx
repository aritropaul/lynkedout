import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const job = searchParams.get('job');
  let cleanID = job? job.match(/(\d){10}/g) : []
 
  try {
    if (!job) throw new Error('Job link or ID reqd');
    await sql`INSERT INTO roles (id) VALUES (${cleanID ?  cleanID[0] : ''});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const roles = await sql`SELECT * FROM roles;`;
  return NextResponse.json({ roles }, { status: 200 });
}