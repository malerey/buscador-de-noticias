### Comentarios

Guada, lo primero es felicitarte por un excelente trabajo. Seguiste muy bien las indicaciones de diseño y funcionalidad, y tu web funciona muy bien!

Excelente el nivel de tu codigo: usas correctamente la semántica de HTML (article, section, etc) y tus estilados son muy precisos y prolijos. En general tu codigo refleja que tenes las bases de HTML, CSS y JavaScript muy claras, y que podes aplicar tus conocimientos para llegar a soluciones muy elegantes. La solucion de hacer un objeto para los colores de cada diario y luego pasarlos con una funcion en styled components es fantastica: es exactamente como lo hubiera resuelto un desarrollador con bastante mas experiencia que vos, y no es habitual que un jr aplique a la primera una solucion de ese tipo. 

También sos muy consistente en buenas prácticas como desestructurar props y componentizar bien tu código, nunca olvidas el punto y coma después de las sentencias, etc. Detalles así van a sumarte mucho a la hora de impresionar en una entrevista técnica. Felicitaciones!

El trabajo está por supuesto aprobado, y todas las observaciones que vienen a continuación son simplemente para mejorar lo que ya hiciste. 

- Tu sitio funciona relativamente bien en celulares, pero hay algunas cosas que rompen. Principalmente, las tarjetas "pisan" la barra de navegación, y la barra no entra en mobile forzando un scroll horizontal. El buscador desaparece debajo de las tarjetas. La mayoría de las personas que vean tu web lo harán desde sus celulares, y queremos que se lleven la mejor impresión posible, por lo que estaría bueno corregir esto. En principio, yo haria una media query para que el tamaño de la barra sea mas pequeño en celulares, pondria la busqueda debajo de los links, y acomodaría las tarjetas de noticias para que queden centradas. 

- Borraria los archivos que Create React App te da y que no estas usando: logo.svg, setupTests.js y App.test.js

- Para subir la web a un hosting como now y que funcione, vas a tener que poner la API key en un archivo de configuración que se llama now.json. Si es algo que te interesa (yo creo que es importante difundir este tipo de trabajos en nuestras redes), no dejes de escribirme y te doy una mano con eso. 

- Te recomendaría que edites el README que te da Create React App por defecto y lo cambies con una descripción de tu proyecto: contar qué hace, con qué API se comunica y qué tecnologías usaste. Eso suma mucho cuando un potencial reclutador está mirando tu github. 

- Un arreglo mínimo y que mejoraría bastante la experiencia del usuario sería que cada Card sea tambien un link que lleve a la noticia en el portal. Ese link te lo da la API. Quizá también agregarle algún efecto en el hover, por ejemplo oscurecer la imagen. 

- Dejo comentarios específicos sobre el código a lo largo de los archivos. 
