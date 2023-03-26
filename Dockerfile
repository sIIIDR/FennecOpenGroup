FROM node:16-buster as build
ARG REACT_APP_ENVIRONMENT
ARG REACT_APP_DOMAIN
ARG REACT_APP_SENTRY_DSN
WORKDIR /opt/app
COPY ./ ./
RUN yarn install --production && \
    DISABLE_ESLINT_PLUGIN=true yarn build

FROM nginx:stable-alpine
COPY --from=build /opt/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
