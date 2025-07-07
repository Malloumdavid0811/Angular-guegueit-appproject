ARG version="latest" 
FROM nginx:${version}

LABEL maintainer="Ulrich NOUMSI"

RUN apt-get update && \ 
    apt-get install -y git \
    && apt-get clean \ 
    && rm-rf /var/lib/apt/lists/*

RUN rm -rf /usr/share/nginx/html/* \
    && git clone https://github.com/diranetafen/static-website-example.git /usr/share/nginx/html/ 

EXPOSE 80

ENTRYPOINT [ "/usr/sbin/nginx", "-g", "daemon off;" ]