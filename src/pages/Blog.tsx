import { Link } from 'react-router-dom';
import BlogPostPreview from '../components/BlogPostPreview';

const posts = [
  {
    id: 1,
    title: 'My First Blog Post',
    excerpt: 'A brief excerpt from the blog post that gives a preview of the content...',
    date: 'May 24, 2024',
    readTime: '5 min read',
    slug: 'my-first-blog-post'
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogPostPreview key={post.id} post={post} />
          ))
        ) : (
          <p className="text-gray-600">No blog posts yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default Blog;