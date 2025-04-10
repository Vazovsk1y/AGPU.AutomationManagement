FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY . .
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

CMD ["/entrypoint.sh"]