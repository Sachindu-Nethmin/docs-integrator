import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type SectionCard = {
  title: string;
  question: string;
  description: string;
  link: string;
  icon: string;
};

const sections: SectionCard[] = [
  {
    title: 'Get Started',
    question: "I'm new \u2014 what is this and how do I begin?",
    description: 'Install, set up, and build your first integration in under 10 minutes.',
    link: '/docs/get-started',
    icon: '\u{1F680}',
  },
  {
    title: 'Develop',
    question: 'How do I build, transform, and test X?',
    description: 'Build services, transform data, and test integrations on your machine.',
    link: '/docs/develop',
    icon: '\u{1F527}',
  },
  {
    title: 'Connectors',
    question: 'Can I connect to Y?',
    description: 'Browse 200+ pre-built connectors for SaaS, databases, messaging, AI, and more.',
    link: '/docs/connectors',
    icon: '\u{1F50C}',
  },
  {
    title: 'Tutorials',
    question: 'Show me a complete, real example',
    description: 'End-to-end walkthroughs, integration patterns, and sample projects.',
    link: '/docs/tutorials',
    icon: '\u{1F4D6}',
  },
  {
    title: 'Deploy & Operate',
    question: 'How do I ship, run, and secure this?',
    description: 'Docker, Kubernetes, CI/CD, observability, and production security.',
    link: '/docs/deploy-operate',
    icon: '\u{2601}\u{FE0F}',
  },
  {
    title: 'Reference',
    question: "What's the exact syntax / config / API for Z?",
    description: 'Language reference, configuration keys, CLI commands, error codes.',
    link: '/docs/reference',
    icon: '\u{1F4DA}',
  },
];

function HomepageHeader(): ReactNode {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1">WSO2 Integrator</Heading>
        <p className={styles.heroSubtitle}>
          Build integrations with low-code simplicity and pro-code power.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/get-started/quick-start-api">
            Build your first integration &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
}

function SectionCards(): ReactNode {
  return (
    <section className={styles.sectionCards}>
      <div className="container">
        <div className={styles.sectionGrid}>
          {sections.map((card, idx) => (
            <Link key={idx} to={card.link} className={styles.sectionCard}>
              <span className={styles.sectionIcon}>{card.icon}</span>
              <Heading as="h3" className={styles.sectionCardTitle}>
                {card.title}
              </Heading>
              <p className={styles.sectionCardQuestion}>{card.question}</p>
              <p className={styles.sectionCardDesc}>{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsNew(): ReactNode {
  return (
    <section className={styles.whatsNew}>
      <div className="container">
        <Link to="/docs/reference/release-notes" className={styles.whatsNewLink}>
          <span className={styles.whatsNewBadge}>New</span>
          Check out the latest release notes &rarr;
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <SectionCards />
        <WhatsNew />
      </main>
    </Layout>
  );
}
