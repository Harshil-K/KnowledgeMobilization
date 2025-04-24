import React, { useState } from "react";
import '../styling/Guidelines.css';
import Layout from '../components/Layout';

const guidelines = [ 
    {
        title: "Research and Publishing Support",
        url: "https://www.library.yorku.ca/web/research-learn/research/",
        body: `
            <p>The Research & Learn – Research and Publishing Support page from York University Libraries offers a comprehensive suite of services and resources designed to support students, faculty, and researchers throughout the research and publication process.​</p>
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