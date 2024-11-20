#base image
FROM php:8.2-apache

#working dir
WORKDIR /var/www/html

#copy all file
COPY . .

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

#S digunakan untuk menjalankan server dengan spesifik port
CMD [ "php", "-S", "0.0.0.0:3001", "-t", "public" ]