// Show a custom popup when the website loads
window.onload = function() {
    alert("Disclaimer: Use of this product is at your own risk. The creator of this product is not responsible for any damage, loss, or issues arising from its use. Please ensure that you use it in accordance with best practices and applicable laws.");
  };
  
  document.getElementById('copyButton').addEventListener('click', function() {
    const sqlProblem = document.getElementById('sqlProblem').value;
  
    // Predefined SQL script content
    const predefinedSQL = `
    Tambien utiliza USE covid; para seleccionar la base de datos covid al comiendo
  
  -- MySQL Workbench Forward Engineering
  
  SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
  SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
  SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
  
  -- -----------------------------------------------------
  -- Schema mydb
  -- -----------------------------------------------------
  -- -----------------------------------------------------
  -- Schema covid
  -- -----------------------------------------------------
  
  -- -----------------------------------------------------
  -- Schema covid
  -- -----------------------------------------------------
  CREATE SCHEMA IF NOT EXISTS \`covid\` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
  USE \`covid\` ;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`Actualizaciones\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`Actualizaciones\` (
    \`idActualizaciones\` INT NOT NULL,
    \`fecha\` DATE NULL DEFAULT NULL,
    \`archivo\` VARCHAR(45) NULL DEFAULT NULL,
    PRIMARY KEY (\`idActualizaciones\`))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`Casos\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`Casos\` (
    \`id_caso\` TEXT NULL DEFAULT NULL,
    \`idActualizaciones\` INT NULL DEFAULT NULL,
    \`ORIGEN\` INT NULL DEFAULT NULL,
    \`SECTOR\` INT NULL DEFAULT NULL,
    \`ENTIDAD_UM\` INT NULL DEFAULT NULL,
    \`SEXO\` INT NULL DEFAULT NULL,
    \`ENTIDAD_NAC\` INT NULL DEFAULT NULL,
    \`ENTIDAD_RES\` INT NULL DEFAULT NULL,
    \`MUNICIPIO_RES\` INT NULL DEFAULT NULL,
    \`TIPO_PACIENTE\` INT NULL DEFAULT NULL,
    \`FECHA_INGRESO\` DATE NULL DEFAULT NULL,
    \`FECHA_SINTOMAS\` DATE NULL DEFAULT NULL,
    \`FECHA_DEF\` DATE NULL DEFAULT NULL,
    \`INTUBADO\` INT NULL DEFAULT NULL,
    \`EDAD\` INT NULL DEFAULT NULL,
    \`NACIONALIDAD\` INT NULL DEFAULT NULL,
    \`EMBARAZO\` INT NULL DEFAULT NULL,
    \`HABLA_LENGUA_INDIG\` INT NULL DEFAULT NULL,
    \`DIABETES\` INT NULL DEFAULT NULL,
    \`EPOC\` INT NULL DEFAULT NULL,
    \`ASMA\` INT NULL DEFAULT NULL,
    \`INMUSUPR\` INT NULL DEFAULT NULL,
    \`HIPERTENSION\` INT NULL DEFAULT NULL,
    \`OTRA_COM\` INT NULL DEFAULT NULL,
    \`CARDIOVASCULAR\` INT NULL DEFAULT NULL,
    \`OBESIDAD\` INT NULL DEFAULT NULL,
    \`RENAL_CRONICA\` INT NULL DEFAULT NULL,
    \`TABAQUISMO\` INT NULL DEFAULT NULL,
    \`OTRO_CASO\` INT NULL DEFAULT NULL,
    \`RESULTADO\` INT NULL DEFAULT NULL,
    \`MIGRANTE\` INT NULL DEFAULT NULL,
    \`PAIS_NACIONALIDAD\` TEXT NULL DEFAULT NULL,
    \`PAIS_ORIGEN\` INT NULL DEFAULT NULL,
    \`UCI\` INT NULL DEFAULT NULL)
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`CasosComorbilidades\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`CasosComorbilidades\` (
    \`id_caso\` TEXT NOT NULL,
    \`idComorbilidad\` INT NULL DEFAULT NULL,
    \`idRespuesta\` INT NULL DEFAULT NULL)
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`Entidad\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`Entidad\` (
    \`id_entidad\` INT NOT NULL AUTO_INCREMENT,
    \`descripcion_entidad\` TEXT NOT NULL,
    PRIMARY KEY (\`id_entidad\`))
  ENGINE = InnoDB
  AUTO_INCREMENT = 100
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`Municipios\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`Municipios\` (
    \`id_municipio\` INT NOT NULL,
    \`municipio\` TEXT NULL DEFAULT NULL,
    \`id_entidad\` INT NOT NULL,
    PRIMARY KEY (\`id_municipio\`, \`id_entidad\`))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`Nacionalidad\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`Nacionalidad\` (
    \`idNacionalidad\` INT NOT NULL,
    \`descripcion_nacionalidad\` VARCHAR(45) NOT NULL,
    PRIMARY KEY (\`idNacionalidad\`))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`Origen\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`Origen\` (
    \`id_origen\` INT NOT NULL AUTO_INCREMENT,
    \`descripcion_origen\` TEXT NOT NULL,
    PRIMARY KEY (\`id_origen\`))
  ENGINE = InnoDB
  AUTO_INCREMENT = 100
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`Respuestas\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`Respuestas\` (
    \`idRespuestas\` INT NOT NULL,
    \`descripcion_respuestas\` VARCHAR(45) NOT NULL,
    PRIMARY KEY (\`idRespuestas\`))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`Resultado\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`Resultado\` (
    \`id_resultado\` INT NOT NULL AUTO_INCREMENT,
    \`descripcion_resultado\` VARCHAR(50) NOT NULL,
    PRIMARY KEY (\`id_resultado\`))
  ENGINE = InnoDB
  AUTO_INCREMENT = 98
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`Sector\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`Sector\` (
    \`id_sector\` INT NOT NULL AUTO_INCREMENT,
    \`descripcion_sector\` TEXT NOT NULL,
    PRIMARY KEY (\`id_sector\`))
  ENGINE = InnoDB
  AUTO_INCREMENT = 100
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`Sexo\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`Sexo\` (
    \`id_sexo\` INT NOT NULL AUTO_INCREMENT,
    \`descripcion_sexo\` VARCHAR(20) NOT NULL,
    PRIMARY KEY (\`id_sexo\`))
  ENGINE = InnoDB
  AUTO_INCREMENT = 100
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`TipoPaciente\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`TipoPaciente\` (
    \`id_tipo_paciente\` INT NOT NULL AUTO_INCREMENT,
    \`descripcion_tipo_paciente\` VARCHAR(20) NOT NULL,
    PRIMARY KEY (\`id_tipo_paciente\`))
  ENGINE = InnoDB
  AUTO_INCREMENT = 100
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  -- -----------------------------------------------------
  -- Table \`covid\`.\`comorbilidades\`
  -- -----------------------------------------------------
  CREATE TABLE IF NOT EXISTS \`covid\`.\`comorbilidades\` (
    \`idComorbilidad\` INT NOT NULL,
    \`comorbilidad\` VARCHAR(45) NULL DEFAULT NULL,
    PRIMARY KEY (\`idComorbilidad\`))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
  
  
  SET SQL_MODE=@OLD_SQL_MODE;
  SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
  SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
  `;
  
    // Create the text to copy including the user's question
    const textToCopy = `User's SQL Problem:\n\n${sqlProblem}\n\nSQL Script:\n${predefinedSQL}`;
  
    // Copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy).then(function() {
      document.getElementById('status').textContent = "SQL problem and script copied to clipboard!";
    }).catch(function(err) {
      console.error('Error copying text: ', err);
      document.getElementById('status').textContent = "Failed to copy to clipboard.";
    });
  });
  
  document.getElementById('clearButton').addEventListener('click', function() {
    // Clear the textarea input
    document.getElementById('sqlProblem').value = '';
    document.getElementById('status').textContent = '';
  });
  