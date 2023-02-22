FROM nginx:1.21.5

COPY ./default.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY ./ .

EXPOSE 80
