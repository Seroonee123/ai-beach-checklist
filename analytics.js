import { inject } from '@vercel/analytics';

// Inject Vercel Analytics tracking script
// Mode is set to 'auto' to automatically detect development vs production
inject({
    mode: 'auto'
});
