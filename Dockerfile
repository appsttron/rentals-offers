FROM node:18-alpine AS deps
ARG NODE_AUTH_TOKEN
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock  ./
RUN  yarn install --production --network-timeout 100000

FROM node:18-alpine AS builder
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_API_KEY
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_API_URL $NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL $NEXT_PUBLIC_API_KEY

RUN yarn run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]