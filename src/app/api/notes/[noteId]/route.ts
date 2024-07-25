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
// app/api/notes/[noteId]/route.ts

export async function GET(request: NextRequest, context: { params: { noteId: string } }) {
	const { params } = context;

	const note = notes.find((note) => note.id === Number(params.noteId));

	return NextResponse.json({ messageNote: note?.text });
}
