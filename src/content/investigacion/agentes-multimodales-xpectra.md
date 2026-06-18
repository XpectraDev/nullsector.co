---
title: "Agentes multimodales para reducir falsos positivos en seguridad"
description: "Cómo los agentes multimodales de Xpectra combinan código, logs y evidencia visual para validar hallazgos y reducir falsos positivos, con procesamiento local."
pubDate: 2025-11-20
author: "Miguel Zabala"
tags: ["IA generativa", "Ciberseguridad", "Xpectra", "Agentes"]
draft: true
---

> Borrador desde el tema (tu post de LinkedIn con ~4.746 impresiones). Revísalo,
> añade tus cifras/demo reales donde veas `TODO` y cambia `draft: true` a `false`.

El problema más caro de una operación de seguridad no es encontrar fallos: es decidir
cuáles son reales. La fatiga por alertas y los falsos positivos consumen el tiempo del
experto, justo el recurso más escaso.

## Por qué multimodal

Un hallazgo rara vez vive en una sola fuente. Está repartido entre el código, los logs,
una captura de pantalla, el tráfico de red y la configuración. Un agente **multimodal**
puede leer todas esas señales a la vez y correlacionarlas como lo haría un analista.

## Cómo lo planteo en Xpectra

- **Recolección** de evidencia heterogénea (texto, código, imágenes).
- **Correlación** para proponer si un hallazgo es plausible y por qué.
- **Validación** con criterio humano antes de afirmar impacto.
- **Documentación** automática del razonamiento, no solo del resultado.

El objetivo no es que la IA decida: es que llegue al experto un caso ya contextualizado,
con la evidencia visual y el porqué.

## Privacidad

Todo esto corre en local: la evidencia del cliente no sale a una API de terceros.

## Resultados

<!-- TODO: añade aquí tus métricas reales (reducción de falsos positivos, tiempos, etc.) y el vídeo/demo. No invento cifras. -->
