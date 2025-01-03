FROM oven/bun:1

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 3000

# Start the development server
CMD ["bun", "run", "dev"]