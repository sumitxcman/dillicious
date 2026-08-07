FROM node:22-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm install

# Copy all files
COPY . .

# Expose the port
EXPOSE 3000

# Start the dev server
CMD ["npm", "run", "dev"]
