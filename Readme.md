# Flights Reservation - Documentation

Paso a paso para ejecutar el proyecto (Backend & Frontend)

## Pasos para iniciar el servicio - Backend
Pasos para ejecutar el backend localmente:

### Postgesql
Debe crear e iniciar una base de datos en postgresql con la siguiente configuración
- Nombre de la base de datos: postgres
- Nombre de usuario: postgres
- Contraseña: 12345

### Comandos para ejecutar API REST (api-vuelos) 
#### Intalar dependencias
- npm || npm installer
#### Ejecutar el servicio
- node src/app.js

El servicio se encargá de crear las tablas de manera automática y rellenar los datos una única vez.

----------------------------------------------------------------------

## Pasos para ejecutar proyecto Angular - Frontend

Pasos para desplegar la aplicación de Angular (flights-reservations)

### Comandos:
#### Instalar dependecias
- npm i || npm installer

#### Ejecutar aplicación
- ng serve --open || ng serve


### Listado de ciudades que se agregan automaticamente para pruebas:
- Cartagena
- Barranquilla
- Medellín
- Bogotá
Con dichas ciudades puede rellenar el formulario de la página principal de la aplicación para encontrar vuelos o usar la opción para ver todos los vuelos

### Reservas
Al hacer la reserva en el vuelo el número de asientos disminuye con base a la cantidad de asientos reservador por el usuario