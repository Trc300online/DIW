# Dockerfile
FROM httpd:2.4

# Elimina la pàgina per defecte d’Apache
RUN rm -rf /usr/local/apache2/htdocs/*

# Copia el nostre fitxer de configuració personalitzat d’Apache (veurem avall com crear-lo)
COPY apache/httpd.conf /usr/local/apache2/conf/httpd.conf

