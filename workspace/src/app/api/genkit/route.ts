// IMPORTANT: This file is not used in the development environment.
// It is used in production to expose the Genkit API.
//
// When running in development, the Genkit API is exposed on a separate port
// and the Next.js dev server is configured to proxy requests to it.

import { createNextHandler } from '@genkit-ai/next';
import '@/ai/dev';

export const POST = createNextHandler();
