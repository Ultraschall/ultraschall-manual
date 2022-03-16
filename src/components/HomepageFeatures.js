import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Einfach zum loslegen',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Einfache Anleitung - von Ultraschall-Nutzer für Ultraschall-Nutzer
      </>
    ),
  },
  {
    title: 'Reduziert auf das Wichtigste',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Du musst keine 100 Seiten Bedienungsanleitung lesen, um mit Ultraschall loszulegen.
      Das Ultraschall-Handbuch ist kompakt und auf den Punkt.
      </>
    ),
  },
  {
    title: 'Weiterentwickelt von euch',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Hilf auch Du mit, dieses Handbuch noch ein kleines bisschen besser zu machen.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
