# Administración de la Configuración del Software

Página web académica que resume el proceso de Administración de la Configuración del Software (ACS) y documenta el trabajo colaborativo del equipo mediante Git y GitHub.

## Objetivo

Explicar con palabras propias los conceptos de la sección 22.3 de *Ingeniería del software: Un enfoque práctico*, de Roger S. Pressman, y aplicar el control de versiones mediante ramas, commits y Pull Requests. La consigna menciona la sección 2.3; en la edición utilizada corresponde a la sección 22.3, páginas impresas 508–515.

## Integrantes y participación

| Integrante | Responsabilidad | Estado en la página |
|---|---|---|
| Luis Alejandro Bravo Bello | Introducción, cuatro objetivos, cinco tareas, identificación de ítems y objetos, características, relaciones, línea de referencia y ejemplo con requisitos, código y pruebas. Estructura HTML, navegación y funcionalidades JavaScript. | Contenido y funcionalidades incorporados. |
| Andrea Valecillos | Repositorio, versiones, construcción, rastreo de errores, conjuntos de cambios, modelo del sistema y SVC/CVS. Control de cambio, ACC, OCI, acceso, sincronización, niveles de control, ejemplo y estilos CSS. | Contenido, ejemplo, diagrama del proceso y estilos incorporados. |
| Dubenny Areche | Revisión técnica y auditoría, seis preguntas de auditoría, reporte de estado y ejemplo. Conclusión, revisión final del README y publicación en GitHub Pages. | Contenido, conclusión y README incorporados. |

Lecturas asignadas: Luis, desde 22.3 hasta antes de 22.3.2 (pp. 508–510); Andrea, 22.3.2 y 22.3.3 (pp. 510–513); Dubenny, 22.3.4 y 22.3.5 (pp. 514–515).

## Contenido y navegación

- **Introducción e identificación:** `#introduccion`.
- **Control de versión y cambio:** `#versiones`.
- **Auditoría y reporte de estado:** `#auditoria`.
- **Conclusión:** `#conclusion`.
- Referencia bibliográfica con la portada del libro.
- Footer con enlaces a las secciones, integrantes y repositorio.

El ejemplo de biblioteca relaciona un requisito, su implementación y las pruebas que verifican el límite de préstamos. Los ejemplos de la página son ilustrativos.

## Funcionalidades JavaScript

El archivo `Js/script.js`, cargado desde `index.html`, implementa:

- Menú de hamburguesa en pantallas de hasta 900 px.
- Cierre del menú al seleccionar una sección, pulsar Escape o interactuar fuera de la navegación.
- Ajuste del menú al cambiar entre pantalla móvil y escritorio.
- Indicador de la sección activa mientras se recorre la página.

La navegación permanece visible al desplazarse. Los estilos incluyen adaptación a computadora y celular, iconos por color y respeto a la preferencia de movimiento reducido.

## Tecnologías

HTML, CSS y JavaScript para la página; Git y GitHub para el historial y la colaboración; GitHub Pages para la publicación de la página. No requiere instalar dependencias ni compilar.

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

Las rutas deben conservar su escritura exacta, incluida la carpeta `Js`, para funcionar al publicar.

## Cómo visualizar la página

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en un navegador, o abrir la carpeta en Visual Studio Code y utilizar Live Server.
3. Recorrer las secciones desde la navegación superior o el footer.

Para comprobar el menú móvil, reducir el ancho del navegador o utilizar la vista de dispositivos de sus herramientas de desarrollo.

## Trabajo colaborativo

Cada integrante trabaja en su rama, registra sus aportes con commits descriptivos y los sube al repositorio. Los cambios se revisan e integran mediante Pull Requests hacia `main`, resolviendo los conflictos y conservando los aportes del equipo.

- Luis: `introduccion-identificacion`.
- Andrea: `versiones-cambios`.
- Dubenny: `auditoria-reporte`.

El historial conserva las ramas y merges como evidencia del trabajo no lineal. Antes de integrar una nueva entrega se revisan el contenido, las rutas y el funcionamiento de la página.

## Repositorio y publicación

- [Repositorio en GitHub](https://github.com/luisbravobello/proyecto-acs).
- **Página en GitHub Pages:** [https://luisbravobello.github.io/proyecto-acs/](https://luisbravobello.github.io/proyecto-acs/)

## Estado de la revisión

- [x] Integrar introducción, identificación y ejemplo de Luis.
- [x] Integrar control de versión, control de cambio, ejemplo y diagrama de Andrea.
- [x] Integrar auditoría, reporte de estado y conclusión de Dubenny.
- [x] Comprobar la navegación y el menú móvil en computadora y celular.
- [x] Verificar los commits de los tres integrantes y los merges de sus ramas.
- [x] Confirmar la publicación en GitHub Pages y añadir el enlace.

La página reúne las tres asignaciones. La revisión confirmó que los enlaces internos funcionan, que la portada del libro carga y que el menú móvil se cierra al seleccionar una sección. El historial conserva aportes individuales y Pull Requests integrados en `main`.

### Revisión final del contenido

- [x] Explicar la OCI mediante el cambio autorizado, sus restricciones y los criterios de revisión y auditoría.
- [x] Precisar la combinación de cambios compatibles y la resolución de conflictos en SVC/CVS; diferenciar Makefile del proceso de control de cambio.
- [x] Incorporar las páginas 510–513 de Andrea en la referencia bibliográfica de la página.
- [x] Identificar la tabla REC y sus fechas como un ejemplo ilustrativo, y distinguir los resultados simulados de las evidencias reales del proyecto.

El contenido y la documentación están completos para integrar esta revisión final mediante un Pull Request. Los ajustes locales aparecerán en GitHub Pages después de incorporarlos a `main` y completarse el despliegue.

## Referencia bibliográfica

Pressman, R. S. (2010). *Ingeniería del software: Un enfoque práctico* (7.ª ed.). McGraw-Hill Interamericana Editores. Sección 22.3, pp. 508–515. Introducción e identificación: pp. 508–510; control de versión y cambio: pp. 510–513; auditoría y reporte de estado: pp. 514–515; línea de referencia: p. 504.

Material de la actividad: *Tarea ASC Control de Version.docx* y el extracto *Resumen par manana scm.pdf*.
