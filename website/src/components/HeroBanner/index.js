import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  const {
    organizationName,
    projectName,
  } = siteConfig;

  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTitle}>
          {siteConfig.title}
          <img
            alt='logo'
            className={styles.heroLogo}
            src={useBaseUrl('/images/300x300.png')}
            width="300"
            height="300"
          />
        </h1>
        <h2 className={styles.heroProjectTagline}>
            Create <b>Actions</b> in <b>Redux</b> more <b>Conveniently</b> than ever
        </h2>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/introduction">
            Get Started
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src={`https://ghbtns.com/github-btn.html?user=${organizationName}&repo=${projectName}&type=star&count=true&size=large`}
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  )
}