# Pull base image
FROM node:13.12.0-alpine

# Set up working directory
WORKDIR /app

# Add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Add app
COPY . ./

# Start app
CMD ["npm", "start"]