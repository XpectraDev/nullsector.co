---
title: "Explotando vulnerabilidades Meltdown y Spectre"
description: "El mundo tiembla ante Meltdown y Spectre Meltdown y Spectre son dos vulnerabilidades criticas que fueron encontradas recientemente, permitiendo a los hackers robar información s…"
pubDate: 2018-01-07
updatedDate: 2018-01-07
author: "Miguel Zabala"
tags: ["Pentesting"]
legacyUrl: "https://nullsectorblog.co/vulnerabilidades-meltdown-spectre-explotar/"
---
# El mundo tiembla ante Meltdown y Spectre

Meltdown y Spectre son dos vulnerabilidades criticas que fueron encontradas recientemente, permitiendo a los hackers robar información sensible, una de estas vulnerabilidades afecta a procesadores fabricados desde hace mas de 23 años.

![Vulnerabilidades Meltdown y Spectre: Que es y como explotar](/investigacion/vulnerabilidades-meltdown-spectre-explotar/Meltdown-Spectre-1088x725.png)

### **Sistemas afectados:**

Hardware de CPU

### **Que son Meltdown y Spectre:**

**Meltdown** es una falla de seguridad que permite a los hackers eludir la barrera de hardware entre las aplicaciones ejecutadas por los usuarios y la memoria del núcleo de la computadora.

**Spectre** es ligeramente diferente. Potencialmente, permite a los piratas informáticos engañar a las aplicaciones que de otro modo estarían libres de errores para obtener información secreta.

**Explotación**

Esta prueba de explotación se realiza con un fin educativo y se realiza bajo el siguiente procesador.

![Vulnerabilidades Meltdown y Spectre: Que es y como explotar](/investigacion/vulnerabilidades-meltdown-spectre-explotar/Captura-2.png)

## **Spectre ([CVE-2017–5753](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5753) ,[CVE-2017–5715](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-571515))**

1 – Descargamos el repositorio desde [https://github.com/MangelZabala/Spectre](https://github.com/MangelZabala/Spectre)

git clone https://github.com/MangelZabala/Spectre
cd Spectre/
ls

![Vulnerabilidades Meltdown y Spectre: Que es y como explotar](/investigacion/vulnerabilidades-meltdown-spectre-explotar/Captura6-2.png)

2 – Compilas el programa C con el siguiente comando:

**gcc -std=c99 spectre.c**

![Vulnerabilidades Meltdown y Spectre: Que es y como explotar](/investigacion/vulnerabilidades-meltdown-spectre-explotar/Captura5-2.png)

3 – Ahora ejecutamos la salida «a.out»

**./a.out**

![Vulnerabilidades Meltdown y Spectre: Que es y como explotar](/investigacion/vulnerabilidades-meltdown-spectre-explotar/Captura1.png)

**PoC Fuente**: [https://spectreattack.com/spectre.pdf](https://spectreattack.com/spectre.pdf)

## **Meltdown (**[CVE-2017-5754](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5754)**)**

1 – Descargamos el repositorio en github

git clone https://github.com/paboldin/meltdown-exploit
cd meltdown-exploit
ls

![Vulnerabilidades Meltdown y Spectre: Que es y como explotar](/investigacion/vulnerabilidades-meltdown-spectre-explotar/Captura7-1.png)

2 – Compilamos el exploit con el comando «make»

make

![Vulnerabilidades Meltdown y Spectre: Que es y como explotar](/investigacion/vulnerabilidades-meltdown-spectre-explotar/Captura3-2.png)

3 – ahora ejecutamos el .sh

sh run.sh

![Vulnerabilidades Meltdown y Spectre: Que es y como explotar](/investigacion/vulnerabilidades-meltdown-spectre-explotar/Captura4-2.png)

Espero les sirva la información y la utilicen sabiamente, estas vulnerabilidades aun están en desarrollo y sus variantes pueden cambiar por lo tanto no existe una solución definitiva a los procesadores que tienen este fallo de seguridad, su recomendación es cambiar de CPU..( ͡° ͜ʖ ͡°) .

Saludos

**0x00Sector!**
