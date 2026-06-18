---
title: "Hackeando redes WPA2"
description: "Existen múltiples métodos de lograr comprometer una red Wireless, en este caso de estudio vamos a ejecutar un ataque de Evil Twin para comprometer dispositivos. Hackeando redes…"
pubDate: 2018-04-22
updatedDate: 2018-04-22
author: "Miguel Zabala"
tags: ["Pentesting"]
legacyUrl: "https://nullsectorblog.co/hackeando-redes-wpa2/"
---
Existen múltiples métodos de lograr comprometer una red Wireless, en este caso de estudio vamos a ejecutar un ataque de Evil Twin para comprometer dispositivos.[  
![](https://nullsector.co/wp-content/uploads/2018/04/EvilTwin.png)](https://nullsector.co/wp-content/uploads/2018/04/EvilTwin.png)

## Hackeando redes WPA2 utilizando ataque de Evil Twin

**1 –** Primero, vamos descargar e repositorio de Fluxión que está disponible en open Source, seguido de esto nos dirigimos la carpeta que contiene los documentos descargados.

git clone https://github.com/wi-fi-analyzer/fluxion.git

[![](https://nullsector.co/wp-content/uploads/2018/04/1.png)](https://nullsector.co/wp-content/uploads/2018/04/1.png)

**2 –** Nos aparecen los términos de uso de la herramienta fluxión los cuales indican que la herramienta debe ser utilizada únicamente para propósitos educativos y no debe ser utilizada para propósitos ilegales.

[![](https://nullsector.co/wp-content/uploads/2018/04/2.png)](https://nullsector.co/wp-content/uploads/2018/04/2.png)

**3 –** Ahora podremos elegir el idioma de la plataforma, esto nos permite seleccionar el lenguaje de nuestra lengua nativa.

[![](https://nullsector.co/wp-content/uploads/2018/04/3.png)](https://nullsector.co/wp-content/uploads/2018/04/3.png)

**4 –** Elegimos el canal correspondiente, en caso de que se desconozca el canal se recomienda seleccionar la opción de todos los canales para identificar las redes dentro del alcance

[![](https://nullsector.co/wp-content/uploads/2018/04/4.png)](https://nullsector.co/wp-content/uploads/2018/04/4.png)

**5 –** Se iniciara un Wi-Fi monitor el cual nos permite escanear las redes en la frecuencia disponible, en este caso podemos ver información básica de las señales a las cuales tenemos acceso.

[![](https://nullsector.co/wp-content/uploads/2018/04/5.png)](https://nullsector.co/wp-content/uploads/2018/04/5.png)

**6 –** Después de realizar el escaneo podemos identificar datos tales como los canales en los que están configurados en el dispositivo, también la intensidad de la señal y la dirección MAC.

[![](https://nullsector.co/wp-content/uploads/2018/04/6.png)](https://nullsector.co/wp-content/uploads/2018/04/6.png)

**7 –** Ahora tenemos las diferentes opciones de ejecutar el ataque, en este caso vamos a ejecutar la opción 2 que consta del despliegue de un FakeAP.

[![](https://nullsector.co/wp-content/uploads/2018/04/7.png)](https://nullsector.co/wp-content/uploads/2018/04/7.png)

**8 –** Nos solicitara el handshake en caso de tener posteriormente la captura del hash generado por el AP, esto se utiliza cuando se debe realizar un ataque persistente.

[![](https://nullsector.co/wp-content/uploads/2018/04/8.png)](https://nullsector.co/wp-content/uploads/2018/04/8.png)

**9 –**  Ahora nos solicitara el método con el cual queremos realizar el chequeo del handshake, en este caso vamos a seleccionar el método 2.

[![](https://nullsector.co/wp-content/uploads/2018/04/9.png)](https://nullsector.co/wp-content/uploads/2018/04/9.png)

**10 –** Para poder capturar el Handshake de la red se debe realizar una denegación de servicio de todos los usuarios conectados a esa red objetivo.

[![](https://nullsector.co/wp-content/uploads/2018/04/10.png)](https://nullsector.co/wp-content/uploads/2018/04/10.png)

**11 –** Podemos ver el comportamiento en el celular, en el cual actualmente estamos conectados a la red de la familia campos sin problema alguno.

[![](https://nullsector.co/wp-content/uploads/2018/04/11.png)](https://nullsector.co/wp-content/uploads/2018/04/11.png)

**12 –** En este punto iniciara nuestro ataque lo cual desconectara a cualquier persona conectada a este dispositivo y por más que intente reiniciar inclusive el dispositivo no se podrá conectar.

[![](https://nullsector.co/wp-content/uploads/2018/04/12.png)](https://nullsector.co/wp-content/uploads/2018/04/12.png)

**13 –** Nos solicitara la opción de utilizar un certificado SSL, sin embargo para este ejercicio vamos a seleccionar crear uno nuevo

[![](https://nullsector.co/wp-content/uploads/2018/04/13.png)](https://nullsector.co/wp-content/uploads/2018/04/13.png)

**14 –** Seleccionamos la opción de ataque que queremos desplegar en este caso vamos a utilizar la interfaz web para poder obtener el handshake.

[![](https://nullsector.co/wp-content/uploads/2018/04/14.png)](https://nullsector.co/wp-content/uploads/2018/04/14.png)

**15 –** Seleccionamos la página que se utilizara como login en el dispositivo, en este caso será la opción 5 que corresponde a un índex diseñado en español.

[![](https://nullsector.co/wp-content/uploads/2018/04/15.png)](https://nullsector.co/wp-content/uploads/2018/04/15.png)

**16 –** Se genera el AP falso, con el cual combinado a la desconexión del Router original no podremos acceder a este dispositivo y nos solicitara el acceso nuevamente.

[![](https://nullsector.co/wp-content/uploads/2018/04/16.png)](https://nullsector.co/wp-content/uploads/2018/04/16.png)

**17 –** Nos solicita el acceso a Wifi desde el dispositivo, el cual es nuestro objetivo principal.

[![](https://nullsector.co/wp-content/uploads/2018/04/17.png)](https://nullsector.co/wp-content/uploads/2018/04/17.png)

**18 –** Estando conectados a nuestra red maligna nos solicitara el dispositivo acceso del dispositivo, únicamente indicando que por razones de seguridad se debe introducir la contraseña del dispositivo.

[![](https://nullsector.co/wp-content/uploads/2018/04/18.png)](https://nullsector.co/wp-content/uploads/2018/04/18.png)

**19 –** Después de efectuado este proceso el fake ap se deshabilitara automáticamente y permitirá al usuario navegar con total normalidad.

[![](https://nullsector.co/wp-content/uploads/2018/04/19.png)](https://nullsector.co/wp-content/uploads/2018/04/19.png)

**NOTA:** La reproducción de este ataque se realizó en un ambiente controlado y no se pretende incentivar la replicación de este tipo de ataques, ningún dato expuesto en este documento pretende ser del tipo personal y la preparación del laboratorio se realizó con la adecuada preparación.
