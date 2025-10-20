'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '1rem',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Something went wrong!
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem' }}>
            A critical error has occurred. Please try refreshing the page.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#047857',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
          <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#999' }}>
            Error ID: {error.digest}
          </p>
        </div>
      </body>
    </html>
  );
}
