import React, { useState } from "react";
import '../styling/FinancialResources.css';
import Layout from '../components/Layout';

const financialResources = [
    {
        title: "Financial Aid Overview",
        url: "https://example.com/financial-aid",
        excerpt: "An introduction to financial aid options available for students, including scholarships, grants, and loans.",
        body: `
            <p>This resource provides a comprehensive overview of financial aid options for students. It covers scholarships, grants, and loans, including eligibility criteria and application processes. 
            Learn how to navigate financial aid applications and maximize your funding opportunities. For more details, contact your institution's financial aid office or visit the provided link.</p>
        `,
    },
   
];

const FinancialResources = () => {
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (title) => {
        setExpanded((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <Layout>
            <h1 className="page-title">Financial Resources</h1>
            <section className="financial-resources">
                {financialResources.map((resource) => (
                    <article key={resource.title} className="financial-resource-card">
                        <h3 className="financial-resource-title">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                {resource.title}
                            </a>
                        </h3>
                        <div className="financial-resource-excerpt">{resource.excerpt}</div>
                        <button
                            onClick={() => toggleReadMore(resource.title)}
                            className="read-more-link"
                        >
                            {expanded[resource.title] ? "Read Less" : "Read More"}
                        </button>
                        {expanded[resource.title] && (
                            <div
                                className="financial-resource-body"
                                dangerouslySetInnerHTML={{ __html: resource.body }}
                            />
                        )}
                    </article>
                ))}
            </section>
        </Layout>
    );
};

export default FinancialResources;