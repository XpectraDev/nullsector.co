---
title: "Explotando una pagina vulnerable a SQL Injection"
description: "Explotando de manera practica una pagina vulnerable a SQL Injection manualmente La famosa vulnerabilidad de SQL Injection nos permite inyectar consultas para acceder a informaci…"
pubDate: 2018-01-04
updatedDate: 2018-01-04
author: "Miguel Zabala"
tags: ["Pentesting"]
legacyUrl: "https://nullsectorblog.co/explotando-una-pagina-vulnerable-sql-injection/"
---
## Explotando de manera practica una pagina vulnerable a SQL Injection manualmente

![Inyección SQL ](/investigacion/explotando-una-pagina-vulnerable-sql-injection/sqlinjection2-300x158.png)

La famosa vulnerabilidad de SQL Injection nos permite inyectar consultas para acceder a información restringida y se produce cuando no se validan correctamente las entradas en el desarrollo de las aplicaciones como consecuencia podemos obtener información muy interesante. vamos a ver como identificarlo y como explotar esta vulnerabilidad, para ello vamos a utilizar el laboratorio web de [acunetix](http://testphp.vulnweb.com) que nos permite ver de una manera mas clara este tipo de Vulnerabilidades, manos a la obra!

## Paso a Paso

**1 –** En este escenario vamos a practicar con la pagina testphp.vulnweb.com que es especificamente diseñada para entender este tipo de vulnerabilidades, en la imagen podemos observar su panel principal.

![ficando y explotando de manera practica una pagina vulnerable a SQL Injection  manualmente](/investigacion/explotando-una-pagina-vulnerable-sql-injection/Captura-1.png)

**2 –** Ingresamos a el apartado de **«Browse Categories»** donde podemos observar el siguiente menu de Posters,Paintings,Stickers y Graffity.

![ficando y explotando de manera practica una pagina vulnerable a SQL Injection  manualmente](/investigacion/explotando-una-pagina-vulnerable-sql-injection/Captura2-1.png)

**3 –**  Ingresamos a la categoría de **«Posters»** , aparentemente  una interesante galería de imágenes con su correspondiente artista…podemos ver un identificador en el URL lo que puede estar haciendo una consulta a «algo».

![ficando y explotando de manera practica una pagina vulnerable a SQL Injection  manualmente](/investigacion/explotando-una-pagina-vulnerable-sql-injection/Captura3-1.png)

**4 –** Nuestros instintos de Hacker se despiertan y comprobamos poniendo un simple **» ‘ »** a el final de la sentencia para poder detectar rápidamente que el sitio es vulnerable a SQL Injection!, en este caso podemos ver que nos indica la pagina tiene un error en la sintaxis.![ficando y explotando de manera practica una pagina vulnerable a SQL Injection  manualmente](/investigacion/explotando-una-pagina-vulnerable-sql-injection/Captura4-1.png)

**5 –**  Empezamos con un simple **Union** para poder inyectarle nuestra propia sentencia, nuestro objetivo es lograr encontrar la cantidad de columnas que tiene la sentencia ya dispuesta en la pagina para poder ejecutar la nuestra.![ficando y explotando de manera practica una pagina vulnerable a SQL Injection  manualmente](/investigacion/explotando-una-pagina-vulnerable-sql-injection/Captura5-1.png)

**6 –**  Lo logramos, encontramos que las columnas contenidas en la sentencia equivalen a 11.

![ficando y explotando de manera practica una pagina vulnerable a SQL Injection  manualmente](/investigacion/explotando-una-pagina-vulnerable-sql-injection/Captura6-1.png)

**7 –**  Utilizamos **«@@version»** con este comando podemos ver la versión del motor de base de datos alojado en esta web.

![ficando y explotando de manera practica una pagina vulnerable a SQL Injection  manualmente](/investigacion/explotando-una-pagina-vulnerable-sql-injection/Captura7.png)

**8** – Ahora utilizamos **«user()»** para identificar el usuario con el cual se ejecutara la consulta, en este caso podemos ver que nos retorna acurat@localhost.

![ficando y explotando de manera practica una pagina vulnerable a SQL Injection  manualmente](/investigacion/explotando-una-pagina-vulnerable-sql-injection/Captura8-1.png)

**9** – Ahora nos ponemos serios y recopilamos información interesante, buscamos el nombre de las tablas , encontramos algo interesante.

![ficando y explotando de manera practica una pagina vulnerable a SQL Injection  manualmente](/investigacion/explotando-una-pagina-vulnerable-sql-injection/Captura10-1.png)

**10** – Encontramos Oro! columna **uname** y **pass** esto quiere decir que podremos tener un posible acceso a el portal.

![ficando y explotando de manera practica una pagina vulnerable a SQL Injection  manualmente](/investigacion/explotando-una-pagina-vulnerable-sql-injection/Captura12.png)

**11** – Utilizamos un **concat** para poder ver claramente los valores de las columnas encontradas anteriormente desde la tabla users.

![ficando y explotando de manera practica una pagina vulnerable a SQL Injection  manualmente](/investigacion/explotando-una-pagina-vulnerable-sql-injection/Captura13.png)

Espero les sirva la información y en caso de tener inconvenientes con algunos de estos pasos no dudes en preguntarlo.

Saludos!

**0x00Sector!**
