import '../css/main.css';

// posthog
import { Router } from 'next/router';
import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

// original
// export default function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }

export default function App({ Component, pageProps: { ...pageProps } }) {
    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
            // Enable debug mode in development
            loaded: (posthog) => {
                if (process.env.NODE_ENV === 'development') posthog.debug();
            }
        });

        // Track page views
        const handleRouteChange = () => posthog?.capture('$pageview');
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    return (
        <>
            <PostHogProvider client={posthog}>
                <Component {...pageProps} />
            </PostHogProvider>
        </>
    );
}
