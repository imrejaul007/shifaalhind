/**
 * Snippet-Optimized Components
 * Structured to match Google Featured Snippet formats and AI answer extraction patterns
 * Paragraph snippets, table snippets, list snippets, and People Also Ask sections
 * Server components - no 'use client' directive needed
 */

import React from 'react';

// Paragraph snippet (H2 question + 40-60 word direct answer)
export function SnippetParagraph({
  question,
  answer,
  details,
}: {
  question: string;
  answer: string;
  details?: string;
}) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{question}</h2>
      <p className="text-gray-800 font-medium leading-relaxed text-lg mb-4">
        {answer}
      </p>
      {details && (
        <p className="text-gray-600 leading-relaxed">{details}</p>
      )}
    </section>
  );
}

// Table snippet (structured data Google can extract)
export function SnippetTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm text-left">
        <caption className="px-4 py-3 text-base font-semibold text-gray-900 bg-gray-50 text-left">
          {caption}
        </caption>
        <thead>
          <tr className="bg-primary-50 border-b border-gray-200">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 font-semibold text-primary-900 whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// List snippet (ordered / unordered)
export function SnippetList({
  title,
  items,
  ordered = false,
}: {
  title: string;
  items: Array<{ text: string; detail?: string }>;
  ordered?: boolean;
}) {
  const Tag = ordered ? 'ol' : 'ul';

  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <Tag
        className={`space-y-2 pl-6 ${
          ordered ? 'list-decimal' : 'list-disc'
        } marker:text-primary-500`}
      >
        {items.map((item, index) => (
          <li key={index} className="text-gray-800 leading-relaxed">
            <span className="font-medium">{item.text}</span>
            {item.detail && (
              <span className="block text-sm text-gray-500 mt-0.5">
                {item.detail}
              </span>
            )}
          </li>
        ))}
      </Tag>
    </div>
  );
}

// People Also Ask section
export function PAASection({
  questions,
}: {
  questions: Array<{ question: string; answer: string }>;
}) {
  return (
    <section className="my-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        People Also Ask
      </h3>
      <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
        {questions.map((item, index) => (
          <details
            key={index}
            className="group bg-white"
          >
            <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-gray-900 font-medium hover:bg-gray-50 transition-colors">
              <span>{item.question}</span>
              <svg
                className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <div className="px-5 pb-4 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
