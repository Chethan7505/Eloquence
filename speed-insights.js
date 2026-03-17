/**
 * Vercel Speed Insights Integration
 * This file initializes Speed Insights for the Eloquence 2026 website
 */

import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false // Set to true in development for debugging
});
