// Constantes globales del sitio e identidad de Miguel Zabala.
// Única fuente de verdad para SEO, schema.org y datos de autor.
// Los campos marcados con TODO necesitan confirmación tuya.

export const SITE = {
  url: 'https://nullsector.co',
  name: 'Nullsector',
  title: 'Miguel Zabala | CEO de Xpectra, OSCE³ y GenAI',
  description:
    'Perfil de Miguel Zabala, fundador y CEO de Xpectra, OSCE³ e investigador en seguridad ofensiva e IA generativa aplicada a ciberseguridad.',
  locale: 'es',
  themeColor: '#0a0e14',
} as const;

export const PERSON = {
  name: 'Miguel Zabala',
  alternateName: 'MangelZabala', // TODO: confirmar usuario/alias público
  headline:
    'Miguel Zabala: OSCE³, fundador de Xpectra e investigador en IA para ciberseguridad',
  jobTitle: 'Fundador y CEO de Xpectra · Investigador en seguridad ofensiva',
  positioning:
    'Miguel Zabala es fundador y CEO de Xpectra, investigador de seguridad ofensiva OSCE³ y especialista en IA generativa aplicada a ciberseguridad.',
  valueProp:
    'Convierto experiencia ofensiva avanzada en agentes de IA capaces de analizar, validar y documentar riesgos sin comprometer la privacidad de los datos.',
  email: '', // TODO: email público de contacto
  worksFor: 'Xpectra',
  // Trayectoria internacional desde 2015 (Colombia, España, Dinamarca)
  knowsAbout: [
    'Seguridad ofensiva',
    'Pentesting',
    'Red Team',
    'Exploit development',
    'Revisión de código',
    'Reversing',
    'IA generativa aplicada a ciberseguridad',
  ],
  // Perfiles oficiales — usados en schema "sameAs" (E-E-A-T)
  sameAs: [
    'https://www.linkedin.com/in/miguelzabalap',
    'https://github.com/MangelZabalaDevelop',
    'https://xpectra.ai',
    // TODO: 'https://www.credential.net/<id>'  (verificación OSCE³)
  ],
} as const;

// Credenciales con explicación (no solo el logo: hay que explicarlas — E-E-A-T)
export const CREDENTIALS = [
  { code: 'OSCE³', name: 'Offensive Security Certified Expert 3', issuer: 'OffSec' },
  { code: 'OSED', name: 'Exploit Development (debugging, memoria, shellcode)', issuer: 'OffSec' },
  { code: 'OSEP', name: 'Evasión, movimiento lateral y entornos endurecidos', issuer: 'OffSec' },
  { code: 'OSWE', name: 'Seguridad web avanzada y revisión de código', issuer: 'OffSec' },
  { code: 'OSCP', name: 'Penetration Testing con Kali Linux', issuer: 'OffSec' },
  { code: 'OSWP', name: 'Wireless Attacks', issuer: 'OffSec' },
  { code: 'CEHv9', name: 'Certified Ethical Hacker', issuer: 'EC-Council' },
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
  { label: 'Miguel Zabala', href: '/miguel-zabala/' },
] as const;
