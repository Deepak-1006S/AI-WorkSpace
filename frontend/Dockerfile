FROM node:20-slim
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npx","serve","dist","-l","4173"]
