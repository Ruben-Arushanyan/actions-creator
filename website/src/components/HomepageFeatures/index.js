import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple',
    Svg: require('@site/static/images/features/simple.svg').default,
    description: <></>,
  },
  {
    title: 'Fast',
    Svg: require('@site/static/images/features/fast.svg').default,
    description: <></>,
  },
  {
    title: 'Predictable',
    Svg: require('@site/static/images/features/predictable.svg').default,
    description: <></>,
  },
  // {
  //   title: 'Flexible',
  //   Svg: require('@site/static/images/features/flexible.svg').default,
  //   description: <></>,
  // },
  // {
  //   title: 'Powerful',
  //   Svg: require('@site/static/images/features/powerful.svg').default,
  //   description: <></>,
  // },
  // {
  //   title: 'Effective',
  //   Svg: require('@site/static/images/features/effective.svg').default,
  //   description: <></>,
  // },
  // {
  //   title: 'Secure',
  //   Svg: require('@site/static/images/features/secure.svg').default,
  //   description: <></>,
  // },
  // {
  //   title: 'Debuggable',
  //   Svg: require('@site/static/images/features/debuggable.svg').default,
  //   description: <></>,
  // },
  // {
  //   title: 'Encapsulated',
  //   Svg: require('@site/static/images/features/encapsulated.svg').default,
  //   description: <></>,
  // },
  // {
  //   title: 'Optimized',
  //   Svg: require('@site/static/images/features/optimized.svg').default,
  //   description: <></>,
  // },
  // {
  //   title: 'Intuitive',
  //   Svg: require('@site/static/images/features/intuitive.svg').default,
  //   description: <></>,
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row justify-content-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
