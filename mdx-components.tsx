import type { MDXComponents } from 'mdx/types';
import { CustomMDXComponents, CalloutBox, PricingTable, StepList } from './components/mdx/mdx-components';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    ...CustomMDXComponents,
    // Add custom components here
    CalloutBox,
    PricingTable,
    StepList,
    ...components,
  };
}

export default useMDXComponents;