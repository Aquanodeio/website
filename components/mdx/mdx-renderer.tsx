import { MDXRemote } from 'next-mdx-remote/rsc';
import { CustomMDXComponents } from './mdx-components';
import remarkGfm from 'remark-gfm';

interface MDXRendererProps {
  content: string;
  components?: Record<string, React.ComponentType<any>>;
}

export default function MDXRenderer({ content, components = {} }: MDXRendererProps) {
  return (
    <div>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [],
          },
        }}
        components={{
          ...CustomMDXComponents,
          ...components,
        }}
      />
    </div>
  );
}