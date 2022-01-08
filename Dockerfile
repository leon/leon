FROM node:16-slim

# Where is the app stored in the container
WORKDIR /app

# Set production environment
ENV NODE_ENV production

# Install deps
COPY package.json ./

RUN npm install --production

# Copy the local code to the container
COPY . .

# Start remix
CMD ["npm", "run", "start"]
