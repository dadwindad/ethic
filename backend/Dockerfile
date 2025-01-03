FROM oven/bun:1

WORKDIR /app

# Copy package.json only
COPY package.json .

# Install dependencies (removed lockfile reference)
RUN bun install

# Copy application code
COPY . .

# Create drizzle directory
RUN mkdir -p drizzle

EXPOSE 8000

CMD ["bun", "run", "dev"]