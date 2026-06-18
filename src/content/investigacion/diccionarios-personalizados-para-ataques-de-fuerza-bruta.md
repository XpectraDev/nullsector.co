---
title: "Diccionarios personalizados para ataques de fuerza bruta"
description: "Preparando nuestro diccionario personalizado para ataques de fuerza bruta Si bien existe una gran variedad de obtener acceso a aplicaciones,redes y/o plataformas restringidas un…"
pubDate: 2018-01-14
updatedDate: 2018-01-14
author: "Miguel Zabala"
tags: ["Pentesting"]
legacyUrl: "https://nullsectorblog.co/diccionarios-personalizados-para-ataques-de-fuerza-bruta/"
---
![brute force attack](/investigacion/diccionarios-personalizados-para-ataques-de-fuerza-bruta/6cd45-mtyourmind-10001mb-com.png)

## **Preparando nuestro diccionario personalizado para ataques de fuerza bruta**

Si bien existe una gran variedad  de obtener acceso a aplicaciones,redes y/o plataformas restringidas una de las mas comunes es aprovecharnos de los descuidos de los administradores,responsables y programadores de dicho sistema, muy seguramente te encontraras en redes WiFi donde la contraseña se compone de cierto tipo de palabras y números relacionados con la compañía, en este caso vamos a generar nuestro propio directorio para ataques de fuerza bruta que permita que las posibilidades de éxito se incrementen de manera exponencial, Empecemos!!

**1 –** En esta ocasion vamos ver una herramienta que en lo personal me ayuda bastante cuando se realiza alguna auditoria sobre una plataforma que podamos generar un ataque de fuerza bruta, primero descargamos cupp

git clone https://github.com/Mebus/cupp

![brute force attack](/investigacion/diccionarios-personalizados-para-ataques-de-fuerza-bruta/Captura-3.png)

**2 –** Ingresamos a el directorio cupp

cd cupp
ls

![brute force attack](/investigacion/diccionarios-personalizados-para-ataques-de-fuerza-bruta/Captura2-2.png)

**3 –** Ahora ejecutamos el código de «cupp» donde podemos identificar las opciones disponibles.

python cupp.py

![brute force attack](/investigacion/diccionarios-personalizados-para-ataques-de-fuerza-bruta/Captura3-3.png)

**4 –**  Vamos a utilizar el método interactivo para generar nuestro diccionario personalizado.

python cupp.py -i

![brute force attack](/investigacion/diccionarios-personalizados-para-ataques-de-fuerza-bruta/Captura4-3.png)

En este ejercicio vamos a utilizar datos falsos generados por una [herramienta](http://es.fakenamegenerator.com/gen-male-sp-sp.php) diseñada para este tipo de situaciones.

![brute force attack](/investigacion/diccionarios-personalizados-para-ataques-de-fuerza-bruta/Captura5-4.png)

**5 –**  Diligenciamos datos básicos como nombres, fecha de nacimiento y usuario.

![brute force attack](/investigacion/diccionarios-personalizados-para-ataques-de-fuerza-bruta/Captura6-3.png)

**6 –**  Muchas personas optan por utilizar contraseñas que estén relacionadas con temas que le sean familiares.

![brute force attack](/investigacion/diccionarios-personalizados-para-ataques-de-fuerza-bruta/Captura8-2.png)

**7 –**  Incluimos el nombre de la mascota y en este caso el nombre de la compañía para la que trabaja.

![brute force attack](/investigacion/diccionarios-personalizados-para-ataques-de-fuerza-bruta/Captura9-2.png)

**8 –**  Adicional podemos configurar palabras claves sobre el comportamiento que podamos identificar en el individuo sobre temas de interés.

![brute force attack](/investigacion/diccionarios-personalizados-para-ataques-de-fuerza-bruta/Captura10-3.png)

**9 –** En unos pocos minutos podemos tener un poderoso directorio para proceder a ejecutar nuestro ataque de fuerza bruta!

![brute force attack](/investigacion/diccionarios-personalizados-para-ataques-de-fuerza-bruta/Captura11-2.png)

Recuerda que la posibilidad de éxito de este tipo de ataques no esta totalmente garantizada y dependerá directamente de las nociones que tu objetivo tenga sobre el uso de contraseñas robustas, igualmente por experiencia propia me funciono muy bien esta herramienta para objetivos con un bajo conocimiento técnico.

Saludos!

**0x00Sector!!**
