import React, { useState } from "react";
import '../styling/Guidelines.css';
import Layout from '../components/Layout';

const guidelines = [ 
    {
        title: "Just an example : Academic Integrity Guidelines",
        url: "https://example.com/academic-integrity",
        excerpt: "A guide to understanding and maintaining academic integrity in your studies, including policies on plagiarism and cheating.",
        body: `
            <p>This outlines the principles of academic integrity, providing guidance on how to uphold ethical standards in your academic work. 
            It covers topics such as proper citation, avoiding plagiarism, and understanding institutional policies on cheating. 
            Students can find practical tips for maintaining integrity and resources for seeking help. 
            For more details, consult your institution’s academic integrity office or visit the provided link.</p>
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