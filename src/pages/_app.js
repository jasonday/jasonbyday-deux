import '../css/main.css';

// posthog
import { PostHogProvider } from 'posthog-js/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// original
// export default function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            if (window.posthog) {
                window.posthog.capture('$pageview');
            }
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        handleRouteChange();

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <PostHogProvider
            apiKey={process.env.NEXT_PUBLIC_POSTHOG_API_KEY}
            options={{
                api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
                capture_pageview: false
            }}
        >
            <Component {...pageProps} />
        </PostHogProvider>
    );
}

export default MyApp;
