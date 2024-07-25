import { stripe } from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const sessionId = request.nextUrl.searchParams.get('session_id');
	if (!sessionId) return NextResponse.json({ error: 'Session not found' }, { status: 404 });

	console.log('solicitação', sessionId);
	const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
		expand: ['line_items', 'line_items.data.price.product'],
	});

	return NextResponse.json(
		{ checkoutSession: checkoutSession.line_items?.data[0]?.price?.product },
		{ status: 200 }
	);
}

export async function POST(request: NextRequest) {
	const body = await request.json();

	if (request.method !== 'POST') return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
	if (!body.priceId) return NextResponse.json({ error: 'Price not found' });
	// return NextResponse.json({ priceId: body.priceId });

	const checkoutSession = await stripe.checkout.sessions.create({
		mode: 'payment',
		line_items: [
			{
				price: 'price_1PfTWURvxt0X1YviXAjIgLGp',
				quantity: 1,
			},
		],
		success_url: `${process.env.APP_URL}/purshaseSuccess?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.APP_URL}/product`,
	});

	return NextResponse.json({ checkoutUrl: checkoutSession.url }, { status: 201 });
}
