# syntax=docker/dockerfile:1

# Step 1: Build React app
FROM node:18-alpine as build
WORKDIR /app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve using Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Optional: overwrite default Nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
