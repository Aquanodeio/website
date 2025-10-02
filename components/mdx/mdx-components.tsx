import React from 'react';
import type { MDXComponents } from 'mdx/types';

// Minimal MDX components - inherit all styling from parent
export const CustomMDXComponents: MDXComponents = {
  // Just basic HTML elements with minimal spacing
  h1: ({ children, ...props }) => (
    <h1 className="text-2xl font-bold mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-xl font-semibold mb-3" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-lg font-semibold mb-2" {...props}>
      {children}
    </h3>
  ),

  p: ({ children, ...props }) => (
    <p className="mb-4" {...props}>
      {children}
    </p>
  ),

  ul: ({ children, ...props }) => (
    <ul className="mb-4 pl-6 list-disc" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-4 pl-6 list-decimal" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="mb-1" {...props}>
      {children}
    </li>
  ),

  // Simple table - clean borders that work with dark theme
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-collapse border border-gray-600" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody {...props}>
      {children}
    </tbody>
  ),
  th: ({ children, ...props }) => (
    <th className="border border-gray-600 px-4 py-2 text-left font-bold" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-gray-600 px-4 py-2" {...props}>
      {children}
    </td>
  ),

  // Minimal code styling
  code: ({ children, ...props }) => (
    <code className="font-mono text-sm" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre className="font-mono text-sm mb-4 overflow-x-auto" {...props}>
      {children}
    </pre>
  ),

  // Simple link
  a: ({ children, href, ...props }) => (
    <a href={href} className="underline" {...props}>
      {children}
    </a>
  ),

  // Simple blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-2 pl-4 mb-4 italic" {...props}>
      {children}
    </blockquote>
  ),

  hr: (props) => (
    <hr className="my-6" {...props} />
  ),

  strong: ({ children, ...props }) => (
    <strong className="font-bold" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
};

// Custom components for enhanced blog content
export const CalloutBox = ({
  children,
  type = 'info',
  title,
  className = ''
}: {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  className?: string;
}) => {
  const typeStyles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  };

  const iconMap = {
    info: '💡',
    warning: '⚠️',
    success: '✅',
    error: '❌',
  };

  return (
    <div className={`border rounded-lg p-6 my-6 ${typeStyles[type]} ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <span>{iconMap[type]}</span>
          {title}
        </h3>
      )}
      <div className="prose prose-sm max-w-none">
        {children}
      </div>
    </div>
  );
};

export const PricingTable = ({
  data,
  title
}: {
  data: Array<{ name: string; memory?: string; price: string }>;
  title: string;
}) => (
  <div className="my-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              GPU Model
            </th>
            {data[0]?.memory && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Memory
              </th>
            )}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price/Hour
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.name}
              </td>
              {item.memory && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {item.memory}
                </td>
              )}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const StepList = ({
  steps,
  title
}: {
  steps: string[];
  title?: string;
}) => (
  <div className="bg-gray-50 p-6 rounded-lg my-6">
    {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
    <ol className="list-decimal list-inside space-y-2">
      {steps.map((step, index) => (
        <li key={index} className="text-gray-700">
          {step}
        </li>
      ))}
    </ol>
  </div>
);

// Export all components for use in MDX
export default CustomMDXComponents;