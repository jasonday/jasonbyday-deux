import '../css/main.css';

// posthog
import { SessionProvider } from 'next-auth/react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';

// original
// export default function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
            // Enable debug mode in development
            loaded: (posthog) => {
                if (process.env.NODE_ENV === 'development') posthog.debug();
            }
        });
    }, []);

    return (
        <>
            <PostHogProvider client={posthog}>
                <SessionProvider session={session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </PostHogProvider>
        </>
    );
}
