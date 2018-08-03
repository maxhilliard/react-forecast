FROM nginx:1.15.2-alpine

COPY _dist/ /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]

EXPOSE 80