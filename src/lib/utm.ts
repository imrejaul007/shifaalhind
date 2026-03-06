/**
 * UTM Parameter Capture
 * Captures marketing attribution from URL query parameters
 */

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const STORAGE_KEY = 'shifa_utm';

/**
 * Capture UTM params from URL and store in sessionStorage
 * Call this on page load / route change
 */
export function captureUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utm: UTMParams = {};
  let hasNew = false;

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      utm[key] = value;
      hasNew = true;
    }
  }

  // Store if we found new UTM params (overwrite previous)
  if (hasNew) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
    } catch {
      // sessionStorage not available
    }
    return utm;
  }

  // Otherwise return stored params
  return getStoredUTMParams();
}

/**
 * Get stored UTM params from sessionStorage
 */
export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/**
 * Format UTM params as a string for inclusion in form submissions
 */
export function formatUTMString(utm: UTMParams): string {
  const parts = Object.entries(utm)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${v}`);
  return parts.length > 0 ? parts.join(', ') : '';
}
