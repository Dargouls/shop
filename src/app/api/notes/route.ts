import { NextResponse } from 'next/server';

const notes = [
	{
		id: 2,
		text: 'Note 2',
	},
	{
		id: 3,
		text: 'Note 3',
	},
	{
		id: 4,
		text: 'Note 4',
	},
];

export async function GET() {
	return await NextResponse.json({ notes });
}
