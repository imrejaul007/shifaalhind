/**
 * Citation-Worthy Content Components
 * Designed to produce content that AI engines and search snippets are likely to cite
 * Statistical anchors and comparison blocks optimized for GEO / AEO extraction
 * Server components - no 'use client' directive needed
 */

import React from 'react';

// Statistical anchor block (AI systems prefer to cite authoritative stats)
export function StatBlock({
  stat,
  source,
  year,
  context,
}: {
  stat: string;
  source: string;
  year: string;
  context?: string;
}) {
  return (
    <blockquote className="border-l-4 border-primary-500 bg-primary-50 p-4 my-6 rounded-r-lg">
      <p className="text-gray-800 italic leading-relaxed">
        According to <strong className="text-primary-700">{source}</strong> ({year}),{' '}
        {stat}.
        {context && (
          <span className="text-gray-600"> {context}</span>
        )}
      </p>
      <cite className="block mt-2 text-xs text-gray-500 not-italic">
        Source: {source}, {year}
      </cite>
    </blockquote>
  );
}

// Definitive comparison block (for "vs" queries)
export function ComparisonHighlight({
  itemA,
  itemB,
  winner,
  reason,
}: {
  itemA: { name: string; value: string };
  itemB: { name: string; value: string };
  winner: 'A' | 'B';
  reason: string;
}) {
  const isAWinner = winner === 'A';
  const isBWinner = winner === 'B';

  return (
    <div className="my-6">
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`rounded-lg p-4 text-center ${
            isAWinner
              ? 'border-2 border-green-500 bg-green-50 ring-1 ring-green-200'
              : 'border border-gray-200 bg-white'
          }`}
        >
          {isAWinner && (
            <span className="inline-block text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full mb-2">
              &#10003; Best Value
            </span>
          )}
          <h4 className="font-semibold text-gray-900 mb-1">{itemA.name}</h4>
          <p className={`text-lg font-bold ${isAWinner ? 'text-green-700' : 'text-gray-700'}`}>
            {itemA.value}
          </p>
        </div>

        <div
          className={`rounded-lg p-4 text-center ${
            isBWinner
              ? 'border-2 border-green-500 bg-green-50 ring-1 ring-green-200'
              : 'border border-gray-200 bg-white'
          }`}
        >
          {isBWinner && (
            <span className="inline-block text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full mb-2">
              &#10003; Best Value
            </span>
          )}
          <h4 className="font-semibold text-gray-900 mb-1">{itemB.name}</h4>
          <p className={`text-lg font-bold ${isBWinner ? 'text-green-700' : 'text-gray-700'}`}>
            {itemB.value}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-600 text-center italic">
        {reason}
      </p>
    </div>
  );
}
