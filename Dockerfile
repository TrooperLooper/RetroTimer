FROM node:20

WORKDIR /app/backend

COPY backend/package*.json ./
COPY backend/tsconfig.json ./
COPY backend/src ./src
COPY backend/eslint.config.js ./
COPY backend/logs ./logs
COPY backend/config ./config
COPY backend/controllers ./controllers
COPY backend/middleware ./middleware
COPY backend/models ./models
COPY backend/routes ./routes
COPY backend/utils ./utils

RUN npm install
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]