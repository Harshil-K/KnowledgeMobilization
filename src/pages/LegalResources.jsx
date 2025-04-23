import React, { useState } from "react";
import '../styling/LegalResources.css';
import Layout from '../components/Layout';

const legalResources = [
    {
        title: "Defamation Law in the Age of Social Media",
        url: "https://www.cba.org/sections/civil-litigation/resources/defamation-law-in-the-age-of-social-media-the-criticisms-and-potential-reforms-for-the-issue-of-cou/",
        excerpt: "Defamation Law in the Age of Social Media: The Criticisms and Potential Reforms for the Issue of Court Access by Canadian Bar Association (CBA) Civil Litigation Section",
        body: `
            <p>This article critiques defamation law in Canada’s social media era, noting that platforms amplify defamatory statements, heightening risks for researchers sharing controversial work on platforms like X or Obscura. It highlights barriers to court access, such as high litigation costs, which disproportionately affect HPSM researchers. Proposed reforms include simplified court processes and alternative dispute resolution. It advises verifying facts and using cautious language (e.g., “in my view”) to avoid lawsuits, making it critical for mitigating defamation risks in knowledge mobilization and ensuring legal safety for sensitive topics.</p>
           
        `,
    },
    {
        title: "Osgoode Community Legal Services",
        url: "https://www.osgoode.yorku.ca/community-legal-services/",
        excerpt: "Osgoode Community Legal Services offers various free clinics providing legal advice, representation, and mediation services to residents and small businesses in Toronto.",
        body: `
                <p>Community clinics, provided by Osgoode students and supervised by qualified lawyers, offer free or low-cost legal services in several areas, including administrative, criminal, and immigration law, investor protection, intellectual property innovation, business law, mediation and conflict resolution, and venture capital and entrepreneurship. Each clinic provides unique services, such as free legal advice, representation, and training in conflict resolution.</p>
           
        `,
    },
    {
        title: "Inclusion in Research",
        url: "https://www.sshrc-crsh.gc.ca/funding-financement/nfrf-fnfr/edi-eng.aspx",
        excerpt: "Best Practices in Equity, Diversity and Inclusion in Research by Social Sciences and Humanities Research Council (SSHRC), Canada Research Coordinating Committee",
        body: `
                <p>This guide supports New Frontiers in Research Fund (NFRF) applicants in integrating equity, diversity, and inclusion (EDI) into research practice (inclusive team composition) and design (diversity in methodology). It advises against disclosing team members’ identities to protect privacy under laws like PIPEDA and provides strategies to avoid harm, such as inclusive recruitment. For HPSM researchers, it ensures legal and ethical compliance, minimizing risks of privacy violations or harm when mobilizing controversial research, which is essential for safe and equitable knowledge sharing.</p>
           
        `,
    },
    {
        title: "Best Practices by First Nations Information Governance Centre",
        url: "https://www.uottawa.ca/library/sites/g/files/bhrskd381/files/2022-12/bestpractices_fnigc_ocap_fact_sheet_en_final.pdf",
        excerpt: "OCAP Fact Sheet: Best Practices by First Nations Information Governance Centre (FNIGC)",
        body: `
                <p>This fact sheet outlines the OCAP® principles (Ownership, Control, Access, Possession) for Indigenous data sovereignty, guiding researchers on ethical and legal research with First Nations communities. It emphasizes community-led data governance, advising consent and protocol adherence to prevent misuse, particularly for controversial Indigenous-related topics. For HPSM researchers, it protects against legal and cultural disputes, ensuring Indigenous research aligns with community standards, which is vital for ethical knowledge mobilization.</p>
           
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
            <h1 className="page-title">Legal Resources</h1>
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
