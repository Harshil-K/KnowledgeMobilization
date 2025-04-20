import React from 'react';
import Layout from '../components/Layout';
import '../styling/RAform.css';

function RAFormPage() {
  return (
    <Layout>
      <div className="pdf-wrapper">
        <h2 className="pdf-title">Risk Assessment and Mitigation Form</h2>
        <embed
          src="/assets/RiskAssessmentfinalC4.pdf"
          type="application/pdf"
          className="pdf-viewer"
        />
      </div>
    </Layout>
  );
}

export default RAFormPage;
