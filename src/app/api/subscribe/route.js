import { NextResponse } from 'next/server';

export async function POST(request) {
    const payload = await request.json();

    const options = {
        method: 'POST',
        body: JSON.stringify({profiles: [payload]}),
        headers: {accept: 'application/json', 'content-type': 'application/json'}
    };

    const url = `https://a.klaviyo.com/api/v2/list/LIST_ID/subscribe?api_key=${process.env.KLAVIYO_PRIVATE_API_KEY}`;

    try {
        const resp = await fetch(url, options);

        if (resp.ok) return NextResponse.json({success: true, message: 'Success! Check your inbox, to accept the subscription'});


        return NextResponse.json({success: false, message: 'Sorry, we\'re unable to subscribe you at the moment'});
    } catch (error) {
        console.error('error:' + error);
        return NextResponse.json({success: false, message: 'Sorry, we\'re unable to subscribe you at the moment'});
    }
}
