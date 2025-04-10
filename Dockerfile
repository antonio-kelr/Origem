# Imagem base Node.js
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto dos arquivos
COPY . .

# Expor a porta 5173 (porta padrão do Vite)
EXPOSE 5173

# Comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"] 