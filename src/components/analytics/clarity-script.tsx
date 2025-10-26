/**
 * Microsoft Clarity - Free heatmaps and session recordings
 *
 * Clarity provides:
 * - Heatmaps (click, scroll, area)
 * - Session recordings
 * - User behavior insights
 * - Free forever (no limits)
 *
 * Setup: https://clarity.microsoft.com
 */

'use client';

import { useEffect } from 'react';

export function ClarityScript() {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

    if (!clarityId) {
      return; // Clarity not configured
    }

    // Check if Clarity is already loaded
    if (typeof window !== 'undefined' && (window as any).clarity) {
      return;
    }

    // Load Microsoft Clarity script
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Clarity IIFE initialization pattern
    (function(c, l, a, r, i, t, y) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      c[a] = c[a] || function(...args: any[]) {
        (c[a].q = c[a].q || []).push(args);
      };
      t = l.createElement(r) as any;
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0] as any;
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', clarityId);
  }, []);

  return null; // This component doesn't render anything
}
