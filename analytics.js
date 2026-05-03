import { inject } from '@vercel/analytics';

// Inject Vercel Analytics tracking script
inject({
    mode: 'auto',
    debug: false
});
