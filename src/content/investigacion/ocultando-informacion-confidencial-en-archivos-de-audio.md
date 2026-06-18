---
title: "Esteganografía: Ocultando información en archivos de audio"
description: "Como si de una serie de ciencia ficción se tratase, es posible ocultar información en pistas de audio para pasar desapercibido dicho contenido en lo personal encuentro muy útil…"
pubDate: 2018-01-19
updatedDate: 2018-01-19
author: "Miguel Zabala"
tags: ["Pentesting"]
legacyUrl: "https://nullsectorblog.co/ocultando-informacion-confidencial-en-archivos-de-audio/"
---
Como si de una serie de ciencia ficción se tratase, es posible ocultar información en pistas de audio para pasar desapercibido dicho contenido en lo personal encuentro muy útil esta técnica de esteganografia porque ademas de añadir una capa de seguridad adicional a la información que buscamos proteger también nos conecta con algo tan característico y personal que resulta bastante sencillo de recordar.

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/mrrobots_cdaudio.jpg)

sin mas preámbulos vamos a la parte interesante de todo esto, recuerda que nuestro objetivo siempre sera preservar la integridad de la información.

## **Fase 1: Preparando nuestro entorno**

**1 –** Vamos a descargar **«DeepSound» de la pagina oficial del siguiente [LINK](http://jpinsoft.net/deepsound/download.aspx)**

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/1.png)

**2 –** Buscamos en las descargas nuestro archivo **DeepSoundSetup.msi** 

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/2.png)

**3 –** Abrimos en la carpeta de descargas y ejecutamos el **DeepSoundSetup.msi**![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/3.png)

**4 –**  Ahora tenemos que proceder con la instalación del software , damos click en next

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/4.png)

**5 –** Aceptamos los términos de la licencia de uso y le damos click en Next.

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/5.png)

**6 –**  La ruta de instalación por defecto sera en la carpeta de Program Files y damos click en Next

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/6.png)

**7 –** Procedemos con la instalación de la herramienta , damos click en Install el cual se ejecutara con privilegios de administrador.

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/7.png)

**8 –** Una vez finalizada la instalación damos por cerrado la adecuación de la herramienta.

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/8.png)

## **Fase 2: Encriptar los documentos**

**1 –** Identificamos el archivo que queremos proteger, en este caso yo voy a encriptar el documento **«confidencial.txt»**

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/11.png)

**2 –**  Abrimos nuestro DeepSound instalado en la fase 1 del tutorial

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/9.png)

4 – Damos click en la opción de **«Open carrier files»** y buscamos nuestra canción favorita.

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/10.png)

**5 –**  Para este ejemplo voy a utilizar **Kalimba** como contenedor de nuestra información.

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/12.png)

**6 –** Ahora damos click en **«Add secret files»** y buscamos nuestro documento, en este caso **«Confidencial.txt»**

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/13.png)

**7 –**  Después de tener un contenedor y un documento que ocultar procedemos a dar click en **«Encode secret files»**![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/14.png)

**8 –** Le ponemos una contraseña para obtener nuestra información posteriormente, nuestra ruta por defecto sera en el escritorio.

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/15.png)

**9 –**  Listo!! tenemos nuestra información encriptada en nuestra canción Kalimba, nadie sospecharía de esto.

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/16.png)

## **Fase 3: Desencriptar los documentos**

**1 –** Abrimos nuevamente nuestro DeepSound, damos click en la opción **«Open carrier files»** y seleccionamos el audio con la información, podemos ver que su tamaño aumento.![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/17.png)

**2 –** Ingresamos la contraseña para poder acceder a los documentos

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/18.png)

**3 –**  Si la contraseña se ingresa correctamente podemos acceder a nuestro documento contenido, posterior a esto damos click en **«Extract secret files»**

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/19.png)

**4 –** Perfecto! ahora podemos acceder a nuestro documento en el escritorio!

![ocultar-archivos-en-audio](/investigacion/ocultando-informacion-confidencial-en-archivos-de-audio/20.png)

Interesante herramienta, ahora solo te queda pensar en los múltiples usos que le puedes dar a la esteganografia y empezar a proteger tu información!

Saludos!

**0x00Sector!!**
