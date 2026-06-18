---
title: "SPECTRA: el origen de Xpectra"
description: "SPECTRA fue la fase inicial de I+D (2024) que evolucionó hasta convertirse en Xpectra.ai: IA generativa y LLMs aplicados a la seguridad ofensiva."
pubDate: 2024-07-18
updatedDate: 2026-06-18
author: "Miguel Zabala"
tags: ["IA generativa", "Ciberseguridad", "LLMs", "Xpectra"]
legacyUrl: "https://nullsectorblog.co/spectra-project-innovacion-seguridad-informatica-ia-generativa/"
---

**SPECTRA fue la fase inicial de investigación (2024) que hoy se ha convertido en [Xpectra.ai](https://xpectra.ai).** Lo dejo documentado aquí como el origen: la prueba de que unir IA generativa y seguridad ofensiva nació de una hipótesis técnica concreta, no de una moda.

## La hipótesis

En 2024 me hacía una pregunta: ¿puede la IA generativa aportar de verdad a la seguridad, más allá del marketing? SPECTRA fue el experimento para responderla, en dos frentes:

- **Defensivo:** usar IA generativa para detectar patrones anómalos en tráfico y comportamiento, y proponer contramedidas.
- **Ofensivo:** usar modelos de lenguaje grandes (LLMs) para **simular el comportamiento autónomo de un atacante** —emulación de adversarios— y así medir y endurecer las defensas.

## El núcleo técnico

El corazón de SPECTRA era la emulación ofensiva con LLMs:

- **Modelo:** Llama 3.1, para interpretar el contexto y generar comandos de ataque precisos.
- **IA generativa:** para crear comportamientos de ataque realistas y adaptativos en tiempo real.

### Resultados de la fase experimental (2024)

En aquellas pruebas iniciales obtuve:

- **~89 %** de precisión en la generación de comandos.
- **~137 ms** de latencia media por comando (apto para tiempo real).
- **~91 %** de tasa de éxito en la ejecución.

> **Contexto honesto:** son cifras de la fase experimental inicial, sobre un conjunto de pruebas acotado. La metodología completa está en el paper original. No las presento como un benchmark cerrado, sino como lo que eran: la señal de que la hipótesis funcionaba.

📄 [Paper original de SPECTRA (PDF)](/spectra/paper-spectra.pdf)

## De SPECTRA a Xpectra

SPECTRA demostró la viabilidad. El paso siguiente fue convertir esa investigación en algo que resolviera un problema real de las empresas, y así nació **[Xpectra.ai](https://xpectra.ai)**:

> *La profundidad de un pentest, a la velocidad de un escáner.* Análisis de vulnerabilidades validados por expertos, personalizados y en horas (LATAM y España).

Es la misma idea, madura: la profundidad del criterio ofensivo humano, escalada con IA. La historia y la tesis completas, [desde el fundador](/xpectra/).
