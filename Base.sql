create database Farmacia;
use Farmacia;

create table usuarios(
    id_usuario int AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario varchar(255) not null,
    usuario varchar(50) UNIQUE not null,
    psdw_usuario varchar(255) not null,
);

create table admin(
    id_admin int AUTO_INCREMENT PRIMARY KEY,
    nombre_admin varchar(255) not null,
    usuario_admin varchar(50) UNIQUE not null,
    psdw_admin varchar(255) not null,
    token varchar(50) not null
)

create table categoria(
    id_categoria int AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria varchat(150) not null
);

create table producto(
    id_producto int AUTO_INCREMENT PRIMARY KEY,
    codigo_producto VARCHAR(25) UNIQUE not null,
    nombre_producto VARCHAR(255) not null,
    precio DECIMAL(10,3) not null,
    tipo ENUM("Patente", "Generico") not null,
    requiere_receta BOOLEAN,
    existencia int DEFAULT 0 not null,
    id_categoria int,
    FOREIGN KEY (id_categoria) REFERENCES categoria (id_categoria)
);

create table pedidos(
    id_pedido int AUTO_INCREMENT PRIMARY KEY,
    id_producto int not null,
    nombre VARCHAR(225) not null,
    precio_pedido DECIMAL (10,2) not null,
    tipo ENUM ("Patente", "Generico") not null,
    cantidad_pedido int,
    calle VARCHAR(100) not null,
    colonia VARCHAR(100) not null,
    numero_domicilio varchar(20) not null,
    entre_calles VARCHAR(255) not null,
    indicaciones varchar(255),
    numero_contacto int(10),
    fecha timestamp DEFAULT,
    id_usuario int
    FOREIGN KEY(id_producto) REFERENCES producto (id_producto),
    FOREIGN KEY(id_usuario) REFERENCES usuarios (id_usuario)
);

/*Reporte de ventas por usuario*/
select 
    nombre_usuario as nombre,
    usuario as usuario,
    nombre_producto as producto,
    p.precio_pedido,
    p.cantidad_pedido,
    p.fecha
    from 
    pedidos pedidos
    join
    usuarios u on p.id_usuario = u.id_usuario
    join
    producto ped on p.id_producto = ped.id_producto
    order by
    p.fecha desc;
    
/*Guardar actualizaciones*/
CREATE TABLE actualizaciones (
    id_actualizacion INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME NOT NULL,
    archivo VARCHAR(255) NOT NULL
);

CREATE TABLE log_actualizaciones (
    id_log INT AUTO_INCREMENT PRIMARY KEY,
    id_actualizacion INT,
    id_medicamento INT,
    nueva_existencia INT NOT NULL,
    FOREIGN KEY (id_actualizacion) REFERENCES actualizaciones(id_actualizacion),
    FOREIGN KEY (id_medicamento) REFERENCES medicamentos(id_medicamento)
);