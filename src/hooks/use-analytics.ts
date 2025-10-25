/**
 * React hooks for automatic analytics tracking
 */

'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackScrollDepth, trackTimeOnPage, trackPageView } from '@/lib/analytics';

/**
 * Track page views automatically on route changes
 */
export const usePageTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);
};

/**
 * Track scroll depth automatically (25%, 50%, 75%, 100%)
 */
export const useScrollTracking = () => {
  const pathname = usePathname();
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      // Track at 25%, 50%, 75%, 100% milestones
      const milestones = [25, 50, 75, 100];
      milestones.forEach((milestone) => {
        if (
          scrollPercentage >= milestone &&
          !trackedDepths.current.has(milestone)
        ) {
          trackedDepths.current.add(milestone);
          trackScrollDepth(milestone, pathname);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);
};

/**
 * Track time spent on page (fires on unmount)
 */
export const useTimeTracking = () => {
  const pathname = usePathname();
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    startTime.current = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      if (timeSpent > 5) {
        // Only track if user spent more than 5 seconds
        trackTimeOnPage(timeSpent, pathname);
      }
    };
  }, [pathname]);
};

/**
 * Combined analytics hook (use this in layout or pages)
 */
export const useAnalytics = () => {
  usePageTracking();
  useScrollTracking();
  useTimeTracking();
};
