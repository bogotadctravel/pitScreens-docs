import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Íconos simples en línea (sin dependencias nuevas) en vez de las
// ilustraciones genéricas de Docusaurus — mismo tratamiento de "insignia
// circular" que usa el panel admin (ver .dash-icon-badge / .avatar-initial).
function IconKiosco(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="3" width="16" height="12" rx="1.5" />
      <path strokeLinecap="round" d="M9 21h6M12 15v6" />
    </svg>
  );
}

function IconAdmin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="4" width="7" height="7" rx="1" />
      <rect x="14" y="4" width="7" height="7" rx="1" />
      <rect x="3" y="15" width="7" height="5" rx="1" />
      <rect x="14" y="15" width="7" height="5" rx="1" />
    </svg>
  );
}

function IconStack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="2.5" />
      <path strokeLinecap="round" d="M4 5v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5M4 11v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-6" />
    </svg>
  );
}

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Módulo Kiosco (app/)',
    Icon: IconKiosco,
    description: (
      <>
        La pantalla táctil que se ejecuta en cada pedestal: slideshow de
        contenido, registro de visitantes y navegación al sitio del IDT.
      </>
    ),
  },
  {
    title: 'Panel Administrativo (admin/)',
    Icon: IconAdmin,
    description: (
      <>
        Gestión de contenido, programaciones, módulos, usuarios y reportes
        de uso desde un navegador web.
      </>
    ),
  },
  {
    title: 'PHP + MySQL, sin framework',
    Icon: IconStack,
    description: (
      <>
        Stack simple pensado para instalarse en un servidor local (XAMPP) y
        operar en pedestales con Windows, sin dependencias de internet.
      </>
    ),
  },
];

function Feature({title, Icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureBadge}>
          <Icon className={styles.featureIcon} />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
