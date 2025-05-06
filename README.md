#  Desafio : Desarrollo de una API REST con NestJS y PostgreSQL con Docker como contenedor

Este proyecto es una API muy simple. Sirve para consultar una **categoría** (como "Motor", "Chasis", etc.) según su número (ID), solo siguiendo estos pasos.

---

##  ¿Qué versiones se usaron?

- Node.js: **18** (lenguaje base del servidor)
- NestJS: **10.0.0** (el framework (marco de del sistema desarrollado) que usamos para crear la API)
- PostgreSQL: **13** (base de datos)
- Docker: **24.0.2** (ayuda a evitar que instales cosas raras)
- Docker Compose: **1.29.2** (te ayuda a levantar todo con un solo comando)

---

##  ¿Cómo usar esto en tu computador?

Sigue estos pasos en orden. Solo necesitas tener **Docker y Docker Compose instalados**.

Posterio a ello se abre el enlace el cual esta el repositorio subido y se busca el enlace para realizar la clonacion de la aplicacion 

---

### 1. Clona (descarga) este proyecto

Abre la terminal de tu computador (símbolo del sistema, Terminal o PowerShell) y escribe esto:

```
git clone https://github.com/Mbaltazar23/desafio-nestjs-postgres.git
cd esafio-nestjs-postgres
````

---

## 2. Crea el archivo de configuración

Ahora, crea un archivo llamado `.env` y copia dentro este contenido:

```
POSTGRES_HOST=db
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=categoriasdb

```

Este archivo le dice a Docker cómo llamar a la base de datos, con qué clave y en qué lugar.

---

### 3. Levanta (enciende) todo el sistema

Este comando crea todo automáticamente:

- docker-compose up --build

Esto puede tardar unos minutos la primera vez. Verás muchos mensajes. Cuando veas algo como esto:

- [Nest] App running on http://localhost:3000


¡Listo! Ya está funcionando.

---

### 4. Rellena la base de datos (con las categorías)

Ahora tienes que decirle al sistema qué categorías existen. Para eso:

1. Abre una nueva terminal
2. Escribe esto:

- docker exec -it nestjs-categorias-api-app-1 bash


3. Luego escribe:

- npm run migration:run
- npm run seed


Con esto, la base de datos queda con los datos que necesita.

---

##  ¿Cómo consultar una categoría?

Puedes hacerlo de dos formas:

---

### Opción 1: Usando Postman (una app para hacer pruebas)

1. Abre Postman
2. Método: **GET**
3. Escribe la URL: `http://localhost:3000/categoria/1`
4. Presiona el botón **Send**
5. Verás algo así:


{
  "id": 1,
  "nombre": "Neumáticos"
}


Si el número que pusiste no existe, verás:


{
  "error": "Categoría no encontrada"
}


Y aparecerá en rojo con un código 404 (eso significa que no se encontró).

---

### Opción 2: Usando tu propia terminal

Escribe esto:

```
curl http://localhost:3000/categoria/1
```

También verás un resultado similar al anterior.

---

##  Archivos importantes (por si quieres apreciar como se definen las consultas)

| Archivo o carpeta                       | ¿Para qué sirve?                                                     |
| --------------------------------------- | ---------------------------------------------------------------------|
| `src/app.module.ts`                     | El archivo principal que realiza la conexion con el modulo categoria |                            
| `src/categoria/categoria.controller.ts` | Es donde se define el endpoint `/categoria/:id`                      |
| `src/categoria/categoria.service.ts`    | Contiene la lógica para buscar la categoría en la base de datos      |
| `src/categoria/categoria.entity.ts`     | Define cómo es una categoría en la base de datos                     |
| `seed.ts`                               | Archivo que rellena la base de datos con los primeros datos          |
| `docker-compose.yml`                    | El que organiza Docker para que levante todo automáticamente         |
| `.env`                                  | Contiene las configuraciones privadas como usuarios y contraseñas    |

---

##  ¿Cómo detener o reiniciar todo?

### Para apagar todo

``` docker-compose down ```

### Para volver a encender

``` docker-compose up --build ```


---

