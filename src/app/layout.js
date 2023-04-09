import './globals.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
    themeColor: 'white',
    manifest: '/site.webmanifest',
    viewport: {
        initialScale: 1,
        maximumScale: 1,
        width: 'device-width',
    },
    icons: {
        icon: [
            {
                rel: 'icon',
                sizes: '16x16',
                type: 'image/png',
                url: '/favicon-16x16.png',
            },
            {
                rel: 'icon',
                sizes: '32x32',
                type: 'image/png',
                url: '/favicon-32x32.png',
            }
        ],
        other: [
            {
                rel: 'mask-icon',
                color: '#5bbad5',
                href: '/safari-pinned-tab.svg'
            },
            {
                sizes: '180x180',
                rel: 'apple-touch-icon',
                url: '/apple-touch-icon.png',
            },
        ],
    },
    title: 'Sexual Assault Awareness Month',
    description: 'April is Sexual Assault Awareness Month, a time to raise awareness about sexual violence and educate our communities about prevention strategies.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
