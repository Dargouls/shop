import { NextRequest, NextResponse } from 'next/server';

const notes = [
	{
		id: 1,
		text: 'Note 1',
	},
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

export async function GET(req: NextRequest) {
	const text = req.nextUrl.searchParams.get('text');
	const note = notes.find((note) => note.text === text);
	return NextResponse.json({ note });
}
