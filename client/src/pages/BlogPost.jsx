import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <h2>Blog not found</h2>
          <Link to="/benefits" className="btn-primary">Back to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <article className="blog-post-container">
        <header className="post-header reveal">
          <Link to="/benefits" className="back-link">&larr; Back to Blogs</Link>
          <h1 className="post-title">{blog.title}</h1>
          <div className="post-meta">
            <span>Published on {blog.date}</span>
          </div>
        </header>

        <div className="post-featured-image reveal">
          <img src={blog.image} alt={blog.title} />
        </div>

        <div className="post-content reveal" dangerouslySetInnerHTML={{ __html: blog.content }} />
        
        <footer className="post-footer reveal">
          <div className="share-section">
            <h4>Share this benefit:</h4>
            <div className="share-links">
              {/* Dummy share icons */}
              <button className="share-btn">Facebook</button>
              <button className="share-btn">Twitter</button>
              <button className="share-btn">WhatsApp</button>
            </div>
          </div>
          <Link to="/benefits" className="btn-primary">View All Benefits</Link>
        </footer>
      </article>
    </div>
  );
}

export default BlogPost;
