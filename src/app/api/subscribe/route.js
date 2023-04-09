import { NextResponse } from 'next/server';

export async function POST(request) {
    const payload = await request.json();
    
    return NextResponse.json(payload);
    // const url = `https://a.klaviyo.com/api/v2/list/LIST_ID/subscribe?api_key=${process.env.KLAVIYO_PRIVATE_API_KEY}`;

    // const options = {
    //     method: 'POST',
    //     headers: {accept: 'application/json', 'content-type': 'application/json'},
    //     body: JSON.stringify({
    //         profiles: [payload]
    //     })
    // };

    // try {
    //     const resp = await fetch(url, options);

    //     const json = await resp.json();

    //     console.log(json);
    //     return new Response('Success! Check your inbox, to accept the subscription');
    // } catch (error) {
    //     console.error('error:' + err);
    //     return new Response('Sorry, we\'re unable to subscribe you at the moment');
    // }

}
