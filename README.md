# Administración de la Configuración del Software

Proyecto académico en equipo para explicar la Administración de la Configuración del Software (ACS) y aplicar sus principios mediante Git y GitHub.

## Objetivo

Elaborar un resumen completo, redactado con nuestras propias palabras, de la sección 22.3 de *Ingeniería de software* de Roger S. Pressman. El resumen se presentará en una página web publicada en GitHub Pages. La consigna identifica esta sección como 2.3; en el material proporcionado aparece como 22.3, páginas 508 a 515.

## Integrantes y asignaciones

### Luis Alejandro Bravo Bello

- Redactar la introducción y explicar los cuatro objetivos y las cinco tareas de ACS.
- Desarrollar la identificación de los ítems de configuración, los objetos básicos y agregados, sus características, relaciones y la línea de referencia.
- Incluir un ejemplo con requisitos, código y pruebas.
- Preparar la estructura de `index.html` y la navegación.
- Lectura: desde 22.3 en la página 508 hasta antes de 22.3.2 en la página 510.

### Andrea Valecillos

- Explicar el repositorio, la administración y construcción de versiones y el rastreo de errores.
- Desarrollar los conjuntos de cambios, el modelo del sistema y el ejemplo de SVC/CVS del libro.
- Explicar el proceso de control de cambio, la ACC, la OCI, el control de acceso, la sincronización y los niveles de control.
- Incluir un diagrama y un ejemplo del proceso.
- Incorporar su contenido en la página y desarrollar los estilos en `assets/style.css`.
- Lectura: apartados 22.3.2 y 22.3.3, páginas 510 a 513.

### Dubenny Areche

- Diferenciar revisión técnica y auditoría de configuración, y resumir las seis preguntas de auditoría.
- Explicar el reporte de estado e incluir un ejemplo con los cambios del equipo.
- Incorporar sus apartados, la conclusión y la referencia bibliográfica.
- Completar este README y configurar GitHub Pages después de integrar las partes.
- Lectura: apartados 22.3.4 y 22.3.5, páginas 514 y 515.

## Contenido que tendrá la página

1. Título e introducción.
2. Objetivos y tareas del proceso ACS.
3. Identificación de objetos de configuración.
4. Control de versión.
5. Control de cambio.
6. Auditoría de configuración.
7. Reporte de estado.
8. Ejemplos y recursos visuales o interactivos.
9. Conclusión y referencia bibliográfica.

El resumen tendrá al menos una página de contenido y estará redactado con palabras propias.

## Tecnologías

- HTML para la estructura y el contenido.
- CSS para el diseño.
- JavaScript para el menú móvil y la sección activa.
- Git y GitHub para el control de versiones y el trabajo colaborativo.
- GitHub Pages para publicar la página.

## Estructura del proyecto

```text
proyecto-acs/
├── index.html
├── README.md
├── assets/
│   └── style.css
├── Js/
│   └── script.js
└── img/
    └── pressman-portada.png
```

`index.html` contiene la introducción e identificación de Luis, el contenido de Andrea y el espacio reservado para Dubenny. `assets/style.css` contiene el diseño compartido y la adaptación a computadora y celular. `Js/script.js` implementa el menú móvil y el indicador de sección activa.

## Cómo trabajaremos

1. Acordar la estructura y los lugares donde cada integrante incorporará su contenido.
2. Crear una rama propia por integrante y trabajar en paralelo.
3. Realizar commits descriptivos y subir los cambios al repositorio.
4. Abrir Pull Requests, revisar los aportes y resolver los conflictos antes de integrar.
5. Conservar en el historial la evidencia del trabajo con ramas no lineales.
6. Revisar la página completa, publicar en GitHub Pages y actualizar el enlace de entrega.

Ramas sugeridas: `introduccion-identificacion`, `versiones-cambios` y `auditoria-reporte`.

## Cómo visualizar el proyecto

Descargar o clonar el repositorio y abrir `index.html` en un navegador. La navegación enlaza las secciones `#introduccion`, `#versiones` y `#auditoria`. El ejemplo de biblioteca es ilustrativo. La sección de Andrea está integrada; la sección de Dubenny está pendiente. El menú móvil y el seguimiento de la sección activa se ejecutan desde `Js/script.js`.

## Publicación

**GitHub Pages:** pendiente de configurar al finalizar la página.

## Revisión antes de entregar

- [ ] Cubrir las cinco tareas de ACS con ejemplos y palabras propias.
- [ ] Incluir introducción, conclusión y referencia bibliográfica completa.
- [ ] Comprobar que la página se lea bien en computadora y celular.
- [ ] Verificar las ramas, commits y contribuciones de los tres integrantes.
- [ ] Completar el README con la participación realizada.
- [ ] Publicar en GitHub Pages y añadir el enlace.

## Entrega

Repositorio de GitHub, página publicada en GitHub Pages y README completo.

## Material de referencia

- Consigna: *Tarea ASC Control de Version.docx*.
- Extracto de Pressman: *Resumen par manana scm.pdf*, sección 22.3, páginas 508 a 515.
- Pressman, R. S. (2010). *Ingeniería del software: Un enfoque práctico* (7.ª ed.). McGraw-Hill Interamericana Editores. Sección 22.3, pp. 508–515; línea de referencia, p. 504.

