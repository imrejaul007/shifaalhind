/**
 * E-E-A-T Signals Components
 * Experience, Expertise, Authoritativeness, Trustworthiness signals
 * Helps AI engines and search engines evaluate content quality and credibility
 * Server components - no 'use client' directive needed
 */

import React from 'react';

// "Medically Reviewed by" badge
export function MedicalReviewBadge({
  reviewerName,
  credentials,
  date,
}: {
  reviewerName: string;
  credentials: string;
  date: string;
}) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center gap-3">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
        <svg
          className="w-5 h-5 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      </div>
      <p className="text-sm text-blue-900">
        <span className="font-semibold">&#10003; Medically Reviewed</span> by Dr.{' '}
        {reviewerName}, {credentials}{' '}
        <span className="text-blue-600">|</span>{' '}
        <time dateTime={date} className="text-blue-700">
          {date}
        </time>
      </p>
    </div>
  );
}

// Last Updated Banner (freshness signal for AI + search engines)
export function LastUpdatedBanner({
  lastUpdated,
  medicallyReviewed,
  reviewerName,
}: {
  lastUpdated: string;
  medicallyReviewed?: string;
  reviewerName?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 py-2">
      <svg
        className="w-4 h-4 text-gray-400 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>
        Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
      </span>
      {medicallyReviewed && (
        <>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span>
            Medically reviewed: <time dateTime={medicallyReviewed}>{medicallyReviewed}</time>
            {reviewerName && <> by {reviewerName}</>}
          </span>
        </>
      )}
    </div>
  );
}

// Source Citations footer
export function SourceCitations({
  sources,
}: {
  sources: Array<{
    title: string;
    url?: string;
    accessDate?: string;
    publisher?: string;
  }>;
}) {
  if (sources.length === 0) return null;

  return (
    <footer className="bg-gray-50 border-t border-gray-200 p-6 mt-8 rounded-b-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Sources &amp; References
      </h3>
      <ol className="list-none space-y-2">
        {sources.map((source, index) => (
          <li key={index} className="text-sm text-gray-700 leading-relaxed">
            <span className="font-medium text-gray-500 mr-1">[{index + 1}]</span>
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 underline underline-offset-2"
              >
                {source.title}
              </a>
            ) : (
              <span>{source.title}</span>
            )}
            {source.publisher && (
              <span className="text-gray-500"> &mdash; {source.publisher}</span>
            )}
            {source.accessDate && (
              <span className="text-gray-400"> (Accessed: {source.accessDate})</span>
            )}
          </li>
        ))}
      </ol>
    </footer>
  );
}
