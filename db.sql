-- Crear la base de datos
CREATE DATABASE farmacia;

-- Usar la base de datos
USE farmacia;

-- Tabla de categorias
CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla de medicamentos
CREATE TABLE medicamentos (
    id_medicamento INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    tipo VARCHAR(100),
    requiere_receta BOOLEAN DEFAULT FALSE,
    existencia INT DEFAULT 0,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

-- Tabla de actualizaciones
CREATE TABLE actualizaciones (
    id_actualizacion INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME NOT NULL,
    archivo VARCHAR(255) NOT NULL
);

-- Tabla de log de actualizaciones
CREATE TABLE log_actualizaciones (
    id_log INT AUTO_INCREMENT PRIMARY KEY,
    id_actualizacion INT,
    id_medicamento INT,
    nueva_existencia INT NOT NULL,
    FOREIGN KEY (id_actualizacion) REFERENCES actualizaciones(id_actualizacion),
    FOREIGN KEY (id_medicamento) REFERENCES medicamentos(id_medicamento)
);
