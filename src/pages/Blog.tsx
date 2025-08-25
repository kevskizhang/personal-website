import BlogPostPreview from '../components/BlogPostPreview';
import { FaTwitter } from 'react-icons/fa';

const posts = [
  // Add blog posts here as needed
];

const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogPostPreview key={post.id} post={post} />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="max-w-lg mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                I don't have any blogs yet, but I'm pretty active on Twitter/X where I'll share thoughts and updates.
              </p>
              <a 
                href="https://twitter.com/KevskiZhang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-link"
              >
                <FaTwitter size={20} />
                <span>Follow me on Twitter/X</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;