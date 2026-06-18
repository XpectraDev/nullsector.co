---
title: "Explotar Vulnerabilidad EternalBlue con Metasploit"
description: "Detectar vulnerabilidad MS17-010 EternalBlue y explotarla. En el mes de mayo del año 2017 se detecto un Rasomware llamado WannaCry, este malware se aprovechaba de la vulnerabili…"
pubDate: 2018-01-01
updatedDate: 2018-01-04
author: "Miguel Zabala"
tags: ["Pentesting"]
legacyUrl: "https://nullsectorblog.co/explotar-vulnerabilidad-eternalblue-con-metasploit/"
---
## Detectar vulnerabilidad MS17-010 EternalBlue y explotarla.

![](/investigacion/explotar-vulnerabilidad-eternalblue-con-metasploit/windows_logo.png)

En el mes de mayo del año 2017 se detecto un Rasomware llamado WannaCry, este malware se aprovechaba de la vulnerabilidad EternalBlue para propagarse por las redes conectadas a los equipos relacionados a nivel interno, la causa de su gran impacto se debe principalmente a la existencia de esa brecha en todos los dispositivos windows y el parche no fue liberado horas después de identificar la vulnerabilidad, hoy vamos a detectar si un equipo es vulnerable y demostrar lo sencillo que es aprovecharse de esta vulnerabilidad.

1 – Procedemos a dirigirnos a la ruta donde Nmap almacena los scripts para posteriormente descargar el .nse liberado para detectar la existencia de esta vulnerabilidad.

**Url Fuente:** [https://svn.nmap.org/nmap/scripts/smb-vuln-ms17-010.nse](https://svn.nmap.org/nmap/scripts/smb-vuln-ms17-010.nse)

cd /usr/share/nmap/scripts && wget https://svn.nmap.org/nmap/scripts/smb-vuln-ms17-010.nse

![Explotar Vulnerabilidad EternalBlue con Metasploit](/investigacion/explotar-vulnerabilidad-eternalblue-con-metasploit/Captura-300x99.png)

2 – Ejecutamos el Nmap invocando a el script para detectar si el objetivo en cuestión es vulnerable o no.

nmap -p445 --script smb-vuln-ms17-010 <IP>

![](/investigacion/explotar-vulnerabilidad-eternalblue-con-metasploit/Captura2-300x156.png)

3 – Ahora que sabemos que nuestro objetivo es vulnerable procedemos a ejecutar nuestro Metasploit para ejecutar el ataque.

msfconsole

![Explotar Vulnerabilidad EternalBlue con Metasploit](/investigacion/explotar-vulnerabilidad-eternalblue-con-metasploit/Captura4-300x243.png)

4 – Buscamos el exploit de la librería de Metaspploit.

search ms17\_010

![Explotar Vulnerabilidad EternalBlue con Metasploit](/investigacion/explotar-vulnerabilidad-eternalblue-con-metasploit/Captura5-300x45.png)

5 – Seleccionamos el exploit a utilizar y adicional revisamos su opciones de configuración.

use auxiliary/scanner/smb/smb\_ms17\_010 
options

![Explotar Vulnerabilidad EternalBlue con Metasploit](/investigacion/explotar-vulnerabilidad-eternalblue-con-metasploit/Captura6-300x149.png)

6 – En este caso especifico solo vamos a modificar la opción RHOST y procederemos con la explotación.

set RHOST <IP>

![Explotar Vulnerabilidad EternalBlue con Metasploit](/investigacion/explotar-vulnerabilidad-eternalblue-con-metasploit/Captura8-300x151.png)

7 – Después de tener nuestras opciones definidas y todo en orden procedemos con la explotación!.

exploit

![Explotar Vulnerabilidad EternalBlue con Metasploit](/investigacion/explotar-vulnerabilidad-eternalblue-con-metasploit/Captura9-300x82.png)

![Explotar Vulnerabilidad EternalBlue con Metasploit](/investigacion/explotar-vulnerabilidad-eternalblue-con-metasploit/Captura10-300x141.png)

8 – Podemos ver que la explotación se realizo de manera correcta y pudimos obtener una shell en el equipo remoto pudiendo comprometer la totalidad del equipo

![Explotar Vulnerabilidad EternalBlue con Metasploit](/investigacion/explotar-vulnerabilidad-eternalblue-con-metasploit/Captura11-300x180.png)

De esta manera podemos identificar el alcance que puede tener este ataque y parte de las consecuencias, la solución es tan sencilla como aplicar el parche liberado por Microsoft para cerrar esta vulnerabilidad, recuerda utilizar esta información de manera responsable, Happy Hacking.

Saludos

**0x00Sector!**
