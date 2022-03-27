import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title:  <Translate
        id="Feature.simpleGuideHeadline"
          description="Guide headline">
            Einfach zum loslegen </Translate>,
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      <Translate
        id="Feature.simpleGuide"
          description="Guide">
            Einfache Anleitung - von Ultraschall-Nutzer für Ultraschall-Nutzer
       </Translate>
      </>
    ),
  },
  {
    title:  <Translate
        id="Feature.reducedToTheEssentialsHeadline"
          description="reducedToTheEssentials headline">
            Reduziert auf das Wichtigste
          </Translate>          ,
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      <Translate
          id="Feature.reducedToTheEssentials"
          description="reduced to the essentials">
            Du musst keine 100 Seiten Bedienungsanleitung lesen, um mit Ultraschall loszulegen.
            Das Ultraschall-Handbuch ist kompakt und auf den Punkt.
      </Translate>
      </>
        )
  },
  {
    title: <Translate
          id="Feature.furtherDevelopedByYouHeadline"
          description="further developed by yo">
          Weiterentwickelt von euch
          </Translate>,
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <Translate
        id="Feature.furtherDevelopedByYou"
          description="further developed by you">
            Hilf auch Du mit, dieses Handbuch noch ein kleines bisschen besser zu machen.
        </Translate>
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
