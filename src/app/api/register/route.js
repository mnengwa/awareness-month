import { NextResponse } from 'next/server';

export async function POST(request) {
    const { searchParams } = new URL(request.url);
    const slot = searchParams.get('slot');
    const payload = await request.json();
    
    const options = {
        method: 'POST',
        body: JSON.stringify({profiles: [payload]}),
        headers: {accept: 'application/json', 'content-type': 'application/json'}
    };

    let list_id;
    switch (slot) {
    case '10':
        list_id = process.env.KLAVIYO_10AM_SLOT;
        break;
    case '11':
        list_id = process.env.KLAVIYO_11AM_SLOT;
        break;
    default:
        list_id = process.env.KLAVIYO_MAILING_LIST;
        break;
    }
    
    let url = `https://a.klaviyo.com/api/v2/list/${list_id}/subscribe?api_key=${process.env.KLAVIYO_PRIVATE_API_KEY}`;

    try {
        const resp = await fetch(url, options);

        const json = await resp.json();

        if (resp.ok) return NextResponse.json({success: true, message: 'Success! Check your inbox.'});

        return NextResponse.json({success: false, message: json?.detail ? json?.detail : 'Sorry, we\'re unable to sign you up.'});
    } catch (error) {
        console.error('error:' + error);
        return NextResponse.json({success: false, message: 'Sorry, we\'re unable to sign you up.'});
    }
}
