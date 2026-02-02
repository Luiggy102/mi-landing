# Portfolio Front-end 

Este proyecto es mi landing page profesional desarrollada con **Angular**, diseñada para ser una plataforma de alto rendimiento, escalable y multi-idioma. La arquitectura se centra en la eficiencia del renderizado y una experiencia de usuario fluida mediante el uso de tecnologías modernas del ecosistema Angular.

## 🚀 Características Principales

* **Detección de Cambios OnPush**: Optimización del ciclo de vida de los componentes para minimizar las verificaciones de cambios y maximizar el rendimiento.
* **Arquitectura Orientada a Datos**: Separación total entre la lógica de presentación y el almacenamiento de datos mediante un `DataService` y proveedores de datos inyectables (`DataMap` pattern).
* **UI Dinámica**:
* Integración de **Angular Icons (ng-icons)** para un manejo eficiente de recursos SVG.
* Componentes interactivos de terceros como `ngx-particles` y `ngx-marquee`.
* Optimización de recursos visuales mediante formatos de próxima generación (**WebP**).

## 🛠️ Stack Tecnológico

* **Framework**: Angular 21
* **Lenguaje**: TypeScript
* **Estilos**: CSS3 con metodologías modernas (Flexbox, Grid, Custom Properties)
* **Librerías Clave**:
* `@ng-icons/core` (Bootstrap, Simple Icons, Flag Icons)
* `ngx-particles`
* `rxjs` para flujos de datos asíncronos



## 📂 Estructura del Proyecto

```text
src/
├── app/
│   ├── components/       # Componentes modulares (About, Projects, etc.)
│   ├── data/             # Proveedores de datos e interfaces (DataMap pattern)
│   └── services/         # Lógica de negocio (LanguageService, DataService)
```

## ⚙️ Instalación y Desarrollo

1. **Clonar el repositorio**:
```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git

```


2. **Instalar dependencias**:
```bash
npm install

```


3. **Ejecutar servidor local**:
```bash
ng serve

```


Accede a `http://localhost:4200/` en tu navegador.

## 📦 Build para Producción

Para generar una versión optimizada para hosting estático:

```bash
ng build --configuration production

```

Los archivos resultantes se encontrarán en la carpeta `dist/`.

---