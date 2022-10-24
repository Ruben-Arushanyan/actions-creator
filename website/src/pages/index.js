import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeroBanner from '@site/src/components/HeroBanner';
import AdditonalInfoLog from '@site/src/components/AdditonalInfoLog';


import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home() {
  const {
    siteConfig: {
      customFields: {
        description,
      },
    },
  } = useDocusaurusContext()

  return (
    <Layout
      title=""
      description={description}
    >
      <HeroBanner />
      <HomepageFeatures />
      <AdditonalInfoLog />
    </Layout>
  )
}
