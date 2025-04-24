import React, { useState } from "react";
import '../styling/Guidelines.css';
import Layout from '../components/Layout';

const guidelines = [ 
    
  
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