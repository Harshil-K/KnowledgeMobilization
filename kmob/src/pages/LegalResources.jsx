import React, { useState } from "react";
import '../styling/LegalResources.css';
import Layout from '../components/Layout';

const legalResources = [
    {
        title: "Resource ",
        url: " Resource link when click on the title",
        excerpt: " Resource excerpt just small introduction ",
        body: `
            <p>Resource body not too much in detail but more in detail if there is no link, fill it up to show we did something Check example below </p>
           
        `,
    },
    {
        title: "Osgoode Community Legal Services",
        url: "https://www.osgoode.yorku.ca/community-legal-services/",
        excerpt: "Implement robust data security and privacy measures to protect sensitive patient information.",
        body: `
            <p>Community clinics provided by Osgoode students, supervised by qualified lawyers. These clinics offer free or low-cost legal services in several areas, including:
            Administrative, criminal, and immigration lawInvestor protection
            Intellectual property innovation Business law Mediation and conflict resolution Venture capital and entrepreneurship
            Each clinic provides unique services, such as free legal advice, representation, and training in conflict resolution.</p>
           
        `,
    },
];

const LegalResources = () => {
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (title) => {
        setExpanded((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <Layout>
            <section className="legal-resources">
                {legalResources.map((resource) => (
                    <article key={resource.title} className="legal-resource-card">
                        <h3 className="legal-resource-title">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                {resource.title}
                            </a>
                        </h3>
                        <div className="legal-resource-excerpt">{resource.excerpt}</div>

                        
                        <button
                            onClick={() => toggleReadMore(resource.title)}
                            className="read-more-link"
                        >
                            {expanded[resource.title] ? "Read Less" : "Read More"}
                        </button>

                        
                        {expanded[resource.title] && (
                            <div
                                className="legal-resource-body"
                                dangerouslySetInnerHTML={{ __html: resource.body }}
                            />
                        )}
                    </article>
                ))}
            </section>
        </Layout>
    );
};

export default LegalResources;
