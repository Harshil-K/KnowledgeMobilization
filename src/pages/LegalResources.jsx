import React, { useState } from "react";
import '../styling/LegalResources.css';
import Layout from '../components/Layout';

const legalResources = [
    {
        title: "Defamation Law in the Age of Social Media",
        url: "https://www.cba.org/sections/civil-litigation/resources/defamation-law-in-the-age-of-social-media-the-criticisms-and-potential-reforms-for-the-issue-of-cou/",
        body: `
            <p>This article critiques defamation law in Canada’s social media era, noting that platforms amplify defamatory statements, heightening risks for researchers sharing controversial work on platforms like X or Obscura. It highlights barriers to court access, such as high litigation costs, which disproportionately affect HPSM researchers. Proposed reforms include simplified court processes and alternative dispute resolution. It advises verifying facts and using cautious language (e.g., “in my view”) to avoid lawsuits, making it critical for mitigating defamation risks in knowledge mobilization and ensuring legal safety for sensitive topics.</p>
           
        `,
    },
    {
        title: "Osgoode Community Legal Services",
        url: "https://www.osgoode.yorku.ca/community-legal-services/",
        body: `
                <p>Community clinics, provided by Osgoode students and supervised by qualified lawyers, offer free or low-cost legal services in several areas, including administrative, criminal, and immigration law, investor protection, intellectual property innovation, business law, mediation and conflict resolution, and venture capital and entrepreneurship. Each clinic provides unique services, such as free legal advice, representation, and training in conflict resolution.</p>
           
        `,
    },
    {
        title: "Inclusion in Research",
        url: "https://www.sshrc-crsh.gc.ca/funding-financement/nfrf-fnfr/edi-eng.aspx",
        body: `
                <p>This guide supports New Frontiers in Research Fund (NFRF) applicants in integrating equity, diversity, and inclusion (EDI) into research practice (inclusive team composition) and design (diversity in methodology). It advises against disclosing team members’ identities to protect privacy under laws like PIPEDA and provides strategies to avoid harm, such as inclusive recruitment. For HPSM researchers, it ensures legal and ethical compliance, minimizing risks of privacy violations or harm when mobilizing controversial research, which is essential for safe and equitable knowledge sharing.</p>
           
        `,
    },
    {
        title: "Best Practices by First Nations Information Governance Centre",
        url: "https://www.uottawa.ca/library/sites/g/files/bhrskd381/files/2022-12/bestpractices_fnigc_ocap_fact_sheet_en_final.pdf",
        body: `
                <p>This fact sheet outlines the OCAP® principles (Ownership, Control, Access, Possession) for Indigenous data sovereignty, guiding researchers on ethical and legal research with First Nations communities. It emphasizes community-led data governance, advising consent and protocol adherence to prevent misuse, particularly for controversial Indigenous-related topics. For HPSM researchers, it protects against legal and cultural disputes, ensuring Indigenous research aligns with community standards, which is vital for ethical knowledge mobilization.</p>
           
        `,
    },
    {
        title: "Office of Equity, People and Culture – Scholarship Harassment",
        url: "https://www.yorku.ca/vpepc/faculty-affairs/scholarship-harassment/",
        body: `
            <p>This page offers guidance for faculty and researchers experiencing scholarship harassment, including information on policies, support systems, and institutional reporting procedures. It aims to foster a safer and more inclusive academic environment.​</p>
        `,
    },
    {
        title: "Online Security – Office of Equity, People and Culture",
        url: "https://www.yorku.ca/vpepc/faculty-affairs/scholarship-harassment-online/",
        body: `
            <p>A specialized resource to help faculty and researchers protect their digital identity, manage online abuse, and take preventive action. This page offers strategies and support for maintaining online safety in academic and public-facing work.​</p>
        `,
    },
    {
        title: "York Centre for Human Rights, Equity and Inclusion (REI)",
        url: "https://www.yorku.ca/vpepc/faculty-affairs/scholarship-harassment-online/",
        body: `
            <p>The REI is York University’s central office for promoting equity, diversity, and inclusion. It provides education, advocacy, policy guidance, and case support for individuals facing harassment or discrimination on campus.​</p>
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
