import { Link } from 'react-router-dom';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

interface BlogPostPreviewProps {
  post: BlogPost;
}

const BlogPostPreview = ({ post }: BlogPostPreviewProps) => {
  return (
    <article className="border-b border-gray-200 pb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
        <span className="mx-2">•</span>
        <span>{post.readTime}</span>
      </div>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="text-blue-600 hover:underline font-medium"
      >
        Read more →
      </Link>
    </article>
  );
};

export default BlogPostPreview;