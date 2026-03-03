FROM nginx:latest

# copy our custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# expose standard ports
EXPOSE 80 443

# default command is fine
CMD ["nginx", "-g", "daemon off;"]
