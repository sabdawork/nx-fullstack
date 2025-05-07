FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate

# ---- Dependencies stage ----
FROM base AS dependencies

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY libs ./libs
COPY apps ./apps

RUN pnpm install

# ---- Build stage ----
FROM base AS build

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN pnpx nx build squaremetre-api --configuration=production

# ---- Production stage ----
FROM node:22-alpine AS deploy

WORKDIR /app
COPY --from=build /app/apps/squaremetre-api/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package.json ./

RUN rm -rf ./node_modules/@geonet-v3/squaremetre-types
COPY --from=build /app/dist/libs/squaremetre-types ./node_modules/@geonet-v3/squaremetre-types

EXPOSE 8002
CMD ["node", "dist/main"]
