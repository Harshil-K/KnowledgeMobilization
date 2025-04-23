import React, { useState } from "react";
import '../styling/FinancialResources.css';
import Layout from '../components/Layout';

const financialResources = [
    {
        title: "Opportunities, and Threats of Crowdfunding",
        url: "https://crowdfundinghealth.org/strengths-weaknesses-opportunities-and-threats-of-crowdfunding/",
        excerpt: "Strengths, Weaknesses, Opportunities, and Threats of Crowdfunding by CrowdfundingHealth.org",
        body: `
            <p>This article conducts a SWOT analysis of crowdfunding for research funding, particularly in health sciences. Strengths include public engagement and rapid fundraising, while weaknesses involve time investment and scrutiny risks for controversial topics. Opportunities include diversified funding, and threats include platform fees. For HPSM researchers with limited institutional support, it suggests ethical crowdfunding to fund publication or legal costs, offering an accessible financial strategy to support knowledge mobilization and maintain stability.</p>
        `,
    },
    {
        title: "Racial Equity Special Research Grants",
        url: "https://example.com/financial-aid",
        excerpt: "Racial Equity Special Research Grants by The Spencer Foundation",
        body: `
            <p>This grant program funds education research addressing racial equity, offering up to $75,000 for projects by HPSM researchers or those studying racialized communities. It supports studies confronting structural racism, covering research, publication, and dissemination costs. Requiring a narrative, budget, and EDI statement, it eases financial burdens for HPSM researchers tackling controversial racial equity topics, providing a key resource for funding knowledge mobilization and legal consultations.</p>
        `,
    },
    {
        title: "Opportunities, and Threats of Crowdfunding",
        url: "https://example.com/financial-aid",
        excerpt: "Strengths, Weaknesses, Opportunities, and Threats of Crowdfunding by CrowdfundingHealth.org",
        body: `
            <p></p>
        `,
    },
    {
        title: "Opportunities, and Threats of Crowdfunding",
        url: "https://example.com/financial-aid",
        excerpt: "Strengths, Weaknesses, Opportunities, and Threats of Crowdfunding by CrowdfundingHealth.org",
        body: `
            <p></p>
        `,
    },
    {
        title: "Opportunities, and Threats of Crowdfunding",
        url: "https://example.com/financial-aid",
        excerpt: "Strengths, Weaknesses, Opportunities, and Threats of Crowdfunding by CrowdfundingHealth.org",
        body: `
            <p></p>
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