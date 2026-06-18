---
title: "Análisis de Vulnerabilidades Web"
description: "Sin duda la mejor auditoria web que se puede realizar es de manera manual, analizando los comportamientos básicos de la aplicación y entendiendo su flujo de trabajo para encontr…"
pubDate: 2018-02-10
updatedDate: 2018-02-10
author: "Miguel Zabala"
tags: ["Pentesting"]
legacyUrl: "https://nullsectorblog.co/analisis-vulnerabilidades-web/"
---
![Auditando aplicaciones web con SkipFish](/investigacion/analisis-vulnerabilidades-web/ghost_1-150x150.png)

Sin duda la mejor auditoria web que se puede realizar es de manera manual, analizando los comportamientos básicos de la aplicación y entendiendo su flujo de trabajo para encontrar brechas de seguridad, sin embargo el esfuerzo y las experiencia para conseguir éxito en este tipo de auditorias es bastante relativo por eso nos podemos apoyar con el uso de herramientas que evalúan los parámetros mas básicos de las aplicaciones web y obteniendo un vector de ataque.

## Auditando con Skipfish

**1 –** Kali Linux tiene por defecto en su arsenal de herramientas Skipfish :

skipfish -h

![Auditando aplicaciones web con SkipFish](/investigacion/analisis-vulnerabilidades-web/Captura.png)

**2 –** Ejecutamos el skipfish primero con el parámetro donde se exportara el informe y el segundo con la url que queremos auditar que en este caso es la aplicación dispuesta por acunetix para realizar pruebas.

skipfish -o /root/Desktop/VulnWeb http://testphp.vulnweb.com/

![Auditando aplicaciones web con SkipFish](/investigacion/analisis-vulnerabilidades-web/Captura2-e1518242269590.png)

**3 –** Nos aparece un mensaje con algunos consejos útiles para el uso de la aplicación, esperamos 60 segundos o presionamos alguna tecla para continuar.

![Auditando aplicaciones web con SkipFish](/investigacion/analisis-vulnerabilidades-web/Captura3.png)

**4 –** Inicia la magia!, recuerda que el tiempo de duración varia según lo robusto del aplicativo .

![Auditando aplicaciones web con SkipFish](/investigacion/analisis-vulnerabilidades-web/Captura4.png)

**5 –**  Cuando se complete la auditoria nos indicara la ruta donde se almaceno el informe correspondiente.

![Auditando aplicaciones web con SkipFish](/investigacion/analisis-vulnerabilidades-web/Captura5-1.png)

**6 –** Abrimos el la ruta donde generamos el informe y abrimos el archivo **«index.html».**

![Auditando aplicaciones web con SkipFish](/investigacion/analisis-vulnerabilidades-web/Captura7.png)

**7 –** Ahora que tenemos el informe solamente hace falta comprobar las vulnerabilidades detectadas para descartar falsos positivos.

![Auditando aplicaciones web con SkipFish](/investigacion/analisis-vulnerabilidades-web/Captura6.png)

![Auditando aplicaciones web con SkipFish](/investigacion/analisis-vulnerabilidades-web/Captura8.png)

**8 –** Encontramos una vulnerabilidad de RFI(Remote File Inclusion) vamos a explotarla!.

![Auditando aplicaciones web con SkipFish](/investigacion/analisis-vulnerabilidades-web/Captura9.png)

**9 –** Podemos incluir archivos mediante la url, en este caso buscamos una imagen en Internet y le cambiamos el parámetro.

![Auditando aplicaciones web con SkipFish](/investigacion/analisis-vulnerabilidades-web/Captura10.png)

Recuerda que no debes analizar aplicación si en correspondiente consentimiento del propietario de lo contrario es considerado un delito, este tutorial es meramente con propositos educativos y busca ayudar a fortalecer la seguridad de las aplicaciones web.

Saludos!

**0x00Sector!!**
