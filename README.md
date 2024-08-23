# Currency Converter

## Descripción

Este proyecto es una aplicación de convertidor de divisas construida con React. Utiliza la API pública ExchangeRate-API para permitir a los usuarios ingresar un monto en una divisa y convertirlo a otra divisa. La aplicación soporta varias divisas populares y proporciona un diseño moderno y elegante.

## Características

- **Entrada de Monto**: Permite ingresar el monto a convertir.
- **Selección de Divisas**: Ofrece un menú desplegable para elegir la divisa de origen y la divisa de destino.
- **Conversión en Tiempo Real**: Calcula y muestra el resultado de la conversión automáticamente cuando se cambian las divisas o el monto.
- **Diseño Elegante**: Interfaz centrada y profesional con un tema oscuro.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir la interfaz de usuario.
- **Axios**: Para hacer solicitudes HTTP a la API.
- **CSS**: Para estilizar la aplicación.
- **ExchangeRate-API**: API para obtener tasas de conversión de divisas.

## Instalación

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/tuusuario/tu-repositorio.git
    ```

2. **Navega al directorio del proyecto**:

    ```bash
    cd tu-repositorio
    ```

3. **Instala las dependencias**:

    ```bash
    npm install
    ```

4. **Configura las variables de entorno**:

    - Crea un archivo `.env` en la raíz del proyecto.
    - Agrega tu clave de API en el archivo `.env`:

      ```bash
      REACT_APP_API_KEY=tu_clave_de_api
      ```

5. **Inicia el servidor de desarrollo**:

    ```bash
    npm start
    ```

6. **Abre tu navegador** y ve a `http://localhost:3000`.

## Uso

1. **Ingresa un monto** en el campo de entrada.
2. **Selecciona la divisa de origen** desde el menú desplegable.
3. **Selecciona la divisa de destino** desde el menú desplegable.
4. **Haz clic en "Convert"** para ver el resultado de la conversión.

## Ejemplos

### Pantalla Principal

![Pantalla Principal](ruta/a/tu/imagen.png)

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, sigue estos pasos:

1. **Haz un fork** del repositorio.
2. **Crea una nueva rama** (`git checkout -b feature/nueva-caracteristica`).
3. **Haz tus cambios** y realiza un commit (`git commit -am 'Añadir nueva característica'`).
4. **Sube tu rama** (`git push origin feature/nueva-caracteristica`).
5. **Crea un Pull Request** en GitHub.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
