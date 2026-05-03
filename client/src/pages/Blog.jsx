import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-container">
        <div className="blog-main-content">
          <h1 className="section-heading">Benefits (Blog)</h1>
          
          <div className="blog-list">
            {blogs.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id} className="blog-card-link">
                <div className="blog-card reveal">
                  <div className="blog-card-image">
                    <img src={blog.image} alt={blog.title} />
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-date">{blog.date}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <span className="read-more">Read Full Blog &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Blog;
