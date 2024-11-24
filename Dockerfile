FROM node:20-bullseye as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn config set registry https://registry.npmmirror.com/ && yarn install 
COPY . .
RUN yarn build

# production stage
FROM nginx:1.27.1-alpine3.20
COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN cat <<EOF > /etc/nginx/conf.d/default.conf
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;
    #access_log  /var/log/nginx/host.access.log  main;
    #client_max_body_size 10024m;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files \$uri \$uri/ @router;
    }
    location @router {
        rewrite ^.*\$ /index.html last;
    }
}
EOF

EXPOSE 80