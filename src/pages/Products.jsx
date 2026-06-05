import React from "react";
import SEO from "../components/SEO";

const Products = () => {
  return (
    <div className="page">
      <SEO
        title="Our Products | Prabhakar Technologies"
        description="Explore the products developed by Prabhakar Technologies including the Aarati & Bhajan App and Work Tracker Pro App."
        keywords="Prabhakar Technologies products, Aarati & Bhajan App, Work Tracker Pro App"
        url="https://prabhakartechnologies.in/products"
      />
      
      <h1>Our Products</h1>

      <div style={{ marginTop: '20px', lineHeight: '1.8' }}>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ marginBottom: '15px' }}>
            <h3>📱 Aarati & Bhajan App</h3>
            <p>A comprehensive spiritual app featuring a wide collection of Aaratis and Bhajans.</p>
          </li>
          <li>
            <h3>💼 Work Tracker Pro App</h3>
            <p>A professional productivity tool designed to help you track your work hours, overtime, and manage tasks efficiently.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
