import React, { useState } from "react";
import '../styling/GeneralResources.css';
import Layout from '../components/Layout';

const generalResources = [
    {
        title: "Canadian Association of University Teachers ",
        url: "https://www.caut.ca/content/targeted-online-harassment-academic-staff",
        body: `
            <p>This guide addresses online harassment of academic staff, a significant risk for HPSM researchers sharing controversial work. It recommends documenting incidents, reporting to equity offices, and adjusting social media privacy settings, with legal options like cease-and-desist letters or human rights complaints for identity-based harassment. Advising against engaging harassers and suggesting mental health support, it aligns with Obscura’s “Responding to Online Harassment” category, equipping researchers with practical steps to manage backlash, protect safety, and uphold legal rights in knowledge mobilization.</p>
        `,
    },
    {
        title: "York’s Response to Online Harassment",
        url: "https://www.canva.com/design/DAFvMpmyff8/Zl-rjkpISH8LX_BiFtRxvQ/view",
        body: `
            <p>This infographic outlines York University’s protocol for addressing online harassment for students and staff, including researchers. It advises reporting to the Centre for Human Rights, Equity and Inclusion, documenting evidence, and accessing counselling. Legal steps include contacting campus security for threats or legal aid for lawsuits, emphasizing privacy protection and mediation. For HPSM researchers facing backlash, it provides institution-specific guidance, aligning with Obscura’s mission to centralize support, ensuring safety and legal recourse during knowledge mobilization challenges.</p>
        `,
    },
    {
        title: "York University Knowledge Mobilization Support Services",
        url: "https://www.yorku.ca/laps/research/support-services/knowledge-mobilization/#connect",
        body: `
            <p>The Knowledge Mobilization Specialist at the LA&PS Research Office offers targeted feedback for grant applications and develops knowledge mobilization plans. 
            One-on-one consultations are available on knowledge mobilization plans and best practices. 
            The specialist also assists with raising research profiles through impact stories and communications, and provides training and development on research design and grant support. 
            Additionally, templates, resources, and technical services are available. Contact Talveen Saini at talveen@yorku.ca for more information or to book a consultation.</p>
           
        `,
    },
    {
        title: "Academic Freedom and the Inclusive University",
        url: "https://www.tandfonline.com/doi/full/10.1080/14680777.2025.2455933?src=",
        body: `
            <p>This article explores tensions between academic freedom and university inclusivity, critical for HPSM researchers facing backlash. It notes that academic freedom protects controversial research but can conflict with demands for safe spaces, recommending institutional policies like clear harassment protocols and legal support. Suggesting transparent communication to mitigate misinterpretations, it clarifies how academic freedom empowers HPSM researchers to share sensitive work while navigating inclusivity concerns, supporting fearless knowledge mobilization within equitable frameworks.</p>
        `,
    },
    {
        title: "Academic Freedom FAQS",
        url: "https://www.aaup.org/programs/academic-freedom/faqs-academic-freedom",
        body: `
            <p>This FAQ defines academic freedom as the right to research, teach, and speak without censorship, vital for controversial topics. It outlines protections against retaliation for public scholarship, advising documentation of institutional violations and legal recourse via unions or courts. Though U.S.-focused, its principles apply to Canadian contexts like York University, empowering HPSM researchers to defend their work under academic freedom, reducing fear of backlash and supporting confident knowledge mobilization in sensitive research areas.</p>
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
            <h1 className="page-title">General Resources</h1>
            <section className="general-resources">
                {generalResources.map((resource) => (
                    <article key={resource.title} className="general-resource-card">
                        <h3 className="general-resource-title">
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
