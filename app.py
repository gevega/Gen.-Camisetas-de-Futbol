#--------------------------------------------------------------------
# Importamos el framework Flask
from flask import Flask

# Importamos la función que nos permit el render de los templates
from flask import render_template

# Importamos el módulo que permite conectarnos a la BS
from flaskext.mysql import MySQL
#--------------------------------------------------------------------

# Creamos la aplicación
app = Flask(__name__)

#--------------------------------------------------------------------
# Instancia de MySQL()
mysql = MySQL()
# Creamos la referencia al host (localhost)
app.config['MYSQL_DATABASE_HOST']='localhost'
# Usuario (por defecto es user)
app.config['MYSQL_DATABASE_USER']='root'
# Sin contraseña (se puede omitir)
app.config['MYSQL_DATABASE_PASSWORD']='Jamesmalory27'
# Nombre de la base de datos
app.config['MYSQL_DATABASE_BD']='gen_camisetas'
# Conexión con la base de datos:
mysql.init_app(app)
#--------------------------------------------------------------------


# Proporcionamos la ruta a la raiz del sitio
@app.route('/')
def index():
    # Creamos una variable que va a contener la consulta sql:
    sql = "INSERT INTO `sistema`.`empleados` (`id`, `nombre`, `correo`, `foto`)\
    VALUES (NULL, 'Ana Maria', 'ana.maria@gmail.com', 'anamaria.jpg');"

    # Conectamos a la conexión mysql.init_app(app)
    conn = mysql.connect()

    # Almacenaremos lo que devuelva la consulta
    cursor = conn.cursor()

    # Ejecutamos la sentencia SQL
    #cursor.execute(sql)

    # "Commiteamos" (Cerramos la conexión)
    conn.commit()

    # Devolvemos código HTML para ser renderizado
    return render_template('gen_camisetas/index.html')

#--------------------------------------------------------------------
# Estas líneas de código las requiere python para que 
# se pueda empezar a trabajar con la aplicación
if __name__=='__main__':
    #Corremos la aplicación en modo debug
    app.run(debug=True)
#--------------------------------------------------------------------