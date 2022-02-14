#
# Build Stage
#
FROM node:16-slim AS build

# Where is the app stored in the container
WORKDIR /app

# Install deps
COPY package.json pnpm-lock.yaml ./

# Enable corepack
RUN corepack enable

# Install deps
RUN pnpm install --frozen-lockfile --unsafe-perm

# Copy the local code to the container
COPY . .

# Build the app
RUN pnpm build


#
# Run Stage
#
FROM node:16-slim

# Where is the app stored in the container
WORKDIR /app

# Set production environment
ENV NODE_ENV production

# Install deps
COPY package.json pnpm-lock.yaml ./

# Enable corepack
RUN corepack enable

# Install deps
RUN pnpm install --frozen-lockfile --unsafe-perm

COPY --from=build /app/build ./build

COPY --from=build /app/public ./public

COPY --from=build /app/articles ./articles

COPY --from=build /app/projects ./projects

COPY --from=build /app/photos ./photos

# Start remix
CMD ["pnpm", "remix-serve", "build"]
