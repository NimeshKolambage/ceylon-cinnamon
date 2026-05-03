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
      <div className="blog-container">
        <article className="blog-post-container">
          <header className="post-header reveal">
            <Link to="/benefits" className="back-link">&larr; Back to Benefits</Link>
            <h1 className="post-title">{blog.title}</h1>
            <div className="post-meta">
              <span className="post-category">Health & Wellness</span>
              <span className="post-date">{blog.date}</span>
            </div>
          </header>

          <div className="post-featured-image reveal">
            <img src={blog.image} alt={blog.title} />
          </div>

          <div className="post-content reveal" dangerouslySetInnerHTML={{ __html: blog.content }} />
          
        
        </article>

        <aside className="blog-sidebar reveal">
          <div className="sidebar-widget">
            <h3>Recent Benefits</h3>
            <div className="recent-posts">
              {blogs.filter(b => b.id !== blog.id).slice(0, 3).map(recent => (
                <Link to={`/blog/${recent.id}`} key={recent.id} className="recent-post-item">
                  <div className="recent-post-thumb">
                    <img src={recent.image} alt={recent.title} />
                  </div>
                  <div className="recent-post-info">
                    <h4>{recent.title}</h4>
                    <span>{recent.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

         
        </aside>
      </div>
    </div>
  );
}

export default BlogPost;
