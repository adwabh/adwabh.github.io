import React from 'react';
import { FiExternalLink, FiCalendar, FiClock } from 'react-icons/fi';
import { SiMedium, SiDevdotto } from 'react-icons/si';
import { blogPosts, socialLinks } from '../data/portfolio';

const Blog: React.FC = () => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'medium':
        return <SiMedium size={16} />;
      case 'dev.to':
        return <SiDevdotto size={16} />;
      default:
        return <FiExternalLink size={16} />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Latest Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    {getPlatformIcon(post.platform)}
                    <span className="text-sm capitalize">{post.platform}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                    <FiClock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                    <FiCalendar size={14} />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href={socialLinks.find(link => link.label === 'Medium')?.href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <span>View All Articles</span>
              <FiExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;