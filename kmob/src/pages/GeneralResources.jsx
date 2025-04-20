import React, { useState } from "react";
import '../styling/GeneralResources.css';
import Layout from '../components/Layout';

const generalResources = [
    {
        title: " General Resource ",
        url: " Resource link when click on the title",
        excerpt: " Resource excerpt just small introduction ",
        body: `
            <p>Resource body not too much in detail but more in detail if there is no link, fill it up to show we did something Check example below </p>
           
        `,
    },
    {
        title: "York University Knowledge Mobilization Support Services",
        url: "https://www.yorku.ca/laps/research/support-services/knowledge-mobilization/#connect",
        excerpt: "The Knowledge Mobilization Specialist (KMS) at the LA&PS Research Office provides support with grant applications, knowledge mobilization plans, and amplifying research impact through various services and resources.",
        body: `
            <p>The Knowledge Mobilization Specialist at the LA&PS Research Office offers targeted feedback for grant applications and develops knowledge mobilization plans. 
            One-on-one consultations are available on knowledge mobilization plans and best practices. 
            The specialist also assists with raising research profiles through impact stories and communications, and provides training and development on research design and grant support. 
            Additionally, templates, resources, and technical services are available. Contact Talveen Saini at talveen@yorku.ca for more information or to book a consultation.</p>
           
        `,
    },
];

const GeneralResources = () => {
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (title) => {
        setExpanded((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <Layout>
            <section className="general-resources">
                {generalResources.map((resource) => (
                    <article key={resource.title} className="general-resource-card">
                        <h3 className="general-resource-title">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                {resource.title}
                            </a>
                        </h3>
                        <div className="general-resource-excerpt">{resource.excerpt}</div>

                        
                        <button
                            onClick={() => toggleReadMore(resource.title)}
                            className="read-more-link"
                        >
                            {expanded[resource.title] ? "Read Less" : "Read More"}
                        </button>

                        
                        {expanded[resource.title] && (
                            <div
                                className="general-resource-body"
                                dangerouslySetInnerHTML={{ __html: resource.body }}
                            />
                        )}
                    </article>
                ))}
            </section>
        </Layout>
    );
};

export default GeneralResources;
