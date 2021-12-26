ARG nodeVersion=16
ARG nodeImage=node:${nodeVersion}-bullseye

# Stage 1
FROM ${nodeImage} as builder

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app/

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --no-progress

COPY next.config.js ./
COPY components ./components
COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY utils ./utils

RUN yarn build

# Stage 2

FROM $nodeImage as production

WORKDIR /app/
COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --frozen-lockfile --no-progress --production=true

# Stage 3

FROM $nodeImage as runner

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV production

WORKDIR /app/

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system nextjs --uid 1001 --gid 1001

COPY --from=production /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000
ENV NEXT_TELEMETRY_DISABLED 1
RUN ["yarn", "dev"]