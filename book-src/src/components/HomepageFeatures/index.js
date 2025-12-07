import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Humanoid Robotics',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Humanoid robots are designed to move, react, and work like humans. 
        With AI-driven sensors and motion systems, they can understand their environment 
        and perform complex tasks intelligently.
      </>
    ),
  },
  {
    title: 'Artificial Intelligence Systems',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        AI enables robots to learn, analyze data, and make decisions. 
        Through neural networks, machine learning, and computer vision, 
        robots gain the ability to think and adapt in real time.
      </>
    ),
  },
  {
    title: 'Future of Automation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The combination of robotics and AI is revolutionizing industries. 
        From automated factories to smart healthcare systems, 
        intelligent automation is shaping the future of technology.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
