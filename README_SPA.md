QA Responsive UI Testing - OrangeHRM 💻📱
Este proyecto automatiza pruebas de interfaz gráfica (UI) en la plataforma OrangeHRM con un enfoque en:

✅ Experiencia de usuario responsiva (desktop, tablet, móvil)

✅ Validación de flujos negativos de login

✅ Capturas visuales para validar el diseño en diferentes dispositivos

✅ Reporte profesional generado con Mochawesome

📁 Estructura del Proyecto
responsive-ui-testing-orangehrm/
│
├── cypress/
│   ├── e2e/
│   │   ├── login-responsive.cy.js       # Pruebas responsivas
│   │   └── login-negative.cy.js         # Pruebas negativas de login
│   ├── support/
│   │   └── commands.js
│   ├── screenshots/                     # Capturas generadas por Cypress
│   └── reports/                         # Reporte HTML de resultados
│
├── cypress.config.js                   # Configuración base de Cypress
├── package.json                        # Dependencias del proyecto
├── README.md                           # Este archivo
🚀 ¿Qué pruebas contiene?
🧪 Pruebas Responsivas (login-responsive.cy.js)
Emulación de macbook-15, ipad-2 y iphone-6

Validación visual del login exitoso en cada dispositivo

Captura automática al finalizar cada prueba

⚠️ Pruebas Negativas (login-negative.cy.js)
Usuario/contraseña inválidos

Login con campos vacíos

Validación de mensajes de error

📊 Reporte de Pruebas
Los resultados se generan con Mochawesome en formato HTML.
Ubicación:

cypress/reports/index.html


Para visualizarlo, ábrelo en tu navegador después de ejecutar los tests.

▶️ Ejecutar las pruebas
Instala dependencias:

-npm install

Ejecuta todas las pruebas en modo headless:

- npx cypress run

Abre Cypress en modo interactivo:

- npx cypress open

⚠️ Notas sobre errores en dispositivos móviles (iPad y iPhone)
Durante las pruebas, los casos correspondientes a ipad-2 y iphone-6 fallaron debido a una condición específica de la aplicación OrangeHRM:

El elemento de navegación <a.oxd-main-menu-item.active> no es visible porque su contenedor tiene overflow: hidden y dimensiones 0 x N, lo que impide que Cypress lo detecte.

Este fallo:

No es un error de código en las pruebas.

Es una limitación de diseño responsivo en la plataforma real.

Demuestra cómo un sistema puede comportarse de manera inesperada en ciertos dispositivos.

🧪 Este tipo de validación es valiosa en QA, ya que permite detectar errores que afectarían directamente al usuario en entornos móviles.




👨‍💻 Autor
Cristian Camilo Delgado
Técnico en Programación de Software - SENA
🚀 En búsqueda activa de su primer rol como QA Automation
📫 GitHub: Crisweisk