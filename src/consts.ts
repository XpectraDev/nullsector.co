// Constantes globales del sitio e identidad de Miguel Zabala.
// Fuente de verdad para SEO, schema.org y contenido tipo CV.

export const SITE = {
  url: 'https://nullsector.co',
  name: 'Nullsector',
  title: 'Miguel Zabala | OSCE³, investigador de seguridad ofensiva e IA',
  description:
    'Miguel Zabala, investigador de seguridad ofensiva OSCE³ con 9 años de experiencia (pentesting, exploit development, reversing) y fundador de Xpectra, IA generativa aplicada a ciberseguridad.',
  locale: 'es',
  themeColor: '#0a0c10',
} as const;

export const PERSON = {
  name: 'Miguel Zabala',
  alternateName: 'Nullsector',
  headline: 'Investigador de seguridad ofensiva OSCE³ e IA generativa',
  jobTitle: 'Penetration Tester · Investigador de seguridad ofensiva · Fundador de Xpectra',
  positioning:
    'Investigador de seguridad ofensiva OSCE³ con 9 años de experiencia en pentesting, exploit development y reversing. Fundador de Xpectra, donde aplico IA generativa a la ciberseguridad.',
  valueProp:
    'Convierto experiencia ofensiva avanzada en agentes de IA capaces de analizar, validar y documentar riesgos sin comprometer la privacidad de los datos.',
  email: 'nullsector00@gmail.com',
  location: 'Bogotá, Colombia',
  worksFor: 'Xpectra',
  credentialUrl: 'https://www.credential.net/profile/miguelzabala303830/wallet',
  knowsAbout: [
    'Seguridad ofensiva',
    'Pentesting',
    'Red Team',
    'Exploit development',
    'Reversing',
    'Revisión de código',
    'IA generativa aplicada a ciberseguridad',
  ],
  sameAs: [
    'https://www.linkedin.com/in/miguelzabalap',
    'https://github.com/MangelZabalaDevelop',
    'https://xpectra.ai',
    'https://www.credential.net/profile/miguelzabala303830/wallet',
  ],
} as const;

// Cifras de impacto para el hero
export const STATS = [
  { n: '9+', l: 'años en seguridad ofensiva' },
  { n: 'OSCE³', l: 'nivel experto de OffSec' },
  { n: '3', l: 'países: Colombia, España, Dinamarca' },
  { n: '6+', l: 'sectores críticos auditados' },
] as const;

// Certificaciones con badge real y verificación pública
export const CREDENTIALS = [
  { code: 'OSCE³', name: 'Offensive Security Certified Expert 3', file: '/brand/certs/OSCE3.png' },
  { code: 'OSED', name: 'Exploit Developer', file: '/brand/certs/OSED.png' },
  { code: 'OSEP', name: 'Experienced Penetration Tester', file: '/brand/certs/OSEP.png' },
  { code: 'OSWE', name: 'Web Expert', file: '/brand/certs/OSWE.png' },
  { code: 'OSCP', name: 'Certified Professional', file: '/brand/certs/OSCP.png' },
  { code: 'OSWP', name: 'Wireless Professional', file: '/brand/certs/OSWP.png' },
  { code: 'CEHv9', name: 'Certified Ethical Hacker v9', file: '' },
] as const;

// Trayectoria profesional (de GitHub / CV)
export const EXPERIENCE = [
  { role: 'Penetration Tester', org: 'Aiuken Cybersecurity', place: 'Remoto, Colombia', period: 'Ene 2023 · Presente' },
  { role: 'Security Consultant', org: 'CSIS Security Group A/S', place: 'Copenhague, Dinamarca', period: 'Ene 2022 · Dic 2022' },
  { role: 'Penetration Tester', org: 'Mnemo', place: 'Madrid, España', period: 'Jun 2019 · Oct 2021' },
  { role: 'Ethical Hacker', org: 'Entelgy', place: 'Bogotá, Colombia', period: 'Oct 2018 · Jun 2019' },
  { role: 'Ethical Hacker', org: 'NewNet S.A', place: 'Bogotá, Colombia', period: 'Oct 2017 · Oct 2018' },
  { role: 'Chief Information Security Officer', org: 'Colombian Outsourcing Solutions', place: 'Bogotá, Colombia', period: 'Feb 2015 · Sep 2017' },
] as const;

export const SKILLS = [
  'Pentesting',
  'Red Team',
  'Exploit development',
  'Reversing',
  'Revisión de código',
  'IA generativa',
  'Python',
  'C#',
  'Java',
  'PHP',
] as const;

export const INDUSTRIES = ['Aeronáutica', 'OT', 'Ferroviario', 'Banca', 'Gobierno', 'Sector privado'] as const;

export const LANGUAGES = [
  { lang: 'Español', level: 'Nativo' },
  { lang: 'Inglés', level: 'B2' },
  { lang: 'Japonés', level: 'A1' },
] as const;

export const ORG = {
  name: 'Xpectra',
  url: 'https://xpectra.ai',
  description:
    'Xpectra combina metodología ofensiva certificada con agentes de IA para analizar, validar y documentar riesgos con procesamiento local y privacidad.',
} as const;

// Navegación principal
export const NAV = [
  { label: 'Inicio', href: '/' },
  { label: 'OSCE³', href: '/osce3/' },
  { label: 'IA & Seguridad', href: '/ia-generativa-ciberseguridad/' },
  { label: 'Investigación', href: '/investigacion/' },
  { label: 'Xpectra', href: '/xpectra/' },
  { label: 'Perfil', href: '/miguel-zabala/' },
] as const;
