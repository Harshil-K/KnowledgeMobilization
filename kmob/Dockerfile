# Step 1: Build the React app using Node
FROM node:18-alpine as build

# Set working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the full app source
COPY . .

# Build the app (output goes to /app/build)
RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built React files from previous step
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (standard HTTP)
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
