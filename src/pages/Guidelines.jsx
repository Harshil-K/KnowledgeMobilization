import React, { useState } from "react";
import '../styling/Guidelines.css';
import Layout from '../components/Layout';

const guidelines = [ 
    {
        title: "Research and Publishing Support",
        url: "https://www.library.yorku.ca/web/research-learn/research/",
        excerpt: "Research and Publishing Support provided at York University.",
        body: `
            <p>The Research & Learn – Research and Publishing Support page from York University Libraries offers a comprehensive suite of services and resources designed to support students, faculty, and researchers throughout the research and publication process.​</p>
        `,
    },
    {
        title: "Just an example Remove this : York University Code of Student Rights & Responsibilities",
        url: "https://www.yorku.ca/secretariat/policies/document.php?document=203",
        excerpt: "The Code of Student Rights & Responsibilities outlines the expectations for student conduct at York University.",
        body: `
            <p>The Code of Student Rights & Responsibilities at York University sets out the standards for student behavior, both academically and socially. 
            It details rights such as access to a safe learning environment and responsibilities like respecting others and adhering to university policies. 
            The code also explains the process for addressing violations and seeking support. 
            For further information, visit the official website or contact the Office of Student Community Relations.</p>
        `,
    },
];

const Guidelines = () => {
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (title) => {
        setExpanded((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <Layout>
            <h1 className="page-title">Guidelines</h1>
            <section className="guidelines">
                {guidelines.map((resource) => (
                    <article key={resource.title} className="guidelines-resource-card">
                        <h3 className="guidelines-resource-title">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                {resource.title}
                            </a>
                        </h3>
                        <div className="guidelines-resource-excerpt">{resource.excerpt}</div>
                        <button
                            onClick={() => toggleReadMore(resource.title)}
                            className="read-more-link"
                        >
                            {expanded[resource.title] ? "Read Less" : "Read More"}
                        </button>
                        {expanded[resource.title] && (
                            <div
                                className="guidelines-resource-body"
                                dangerouslySetInnerHTML={{ __html: resource.body }}
                            />
                        )}
                    </article>
                ))}
            </section>
        </Layout>
    );
};

export default Guidelines;