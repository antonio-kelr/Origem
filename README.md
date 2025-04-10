# Origem - Aço e Metais Sob Medida

![Logo Origem](src/img/nova-logo-pl1qfrzfpgkc01s46bfhppm1q9s0a76si0qv6stngg.png)

## Sobre o Projeto

Este é o site institucional da Origem, uma empresa especializada em aços e metais sob medida. O site foi desenvolvido para apresentar os produtos e serviços da empresa, além de fornecer informações de contato e sobre a história da empresa.

## 🚀 Tecnologias Utilizadas

- **React**: Framework JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Vite**: Ferramenta de build e desenvolvimento
- **CSS**: Estilos CSS
- **Docker**: Para contêineres

## 📁 Estrutura do Projeto

```
origem/
├── public/                # Arquivos estáticos
├── src/                  # Código fonte
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes de interface reutilizáveis
│   │   │   └── produto/ # Componente de produto
│   │   └── layout/      # Componentes de layout (Header, Footer, etc)
│   ├── pages/           # Páginas da aplicação
│   │   ├── Home/        # Página inicial
│   │   ├── Produtos/    # Página de produtos
│   │   ├── QuemSomos/   # Página institucional
│   │   └── Contato/     # Página de contato
│   ├── styles/          # Arquivos de estilo CSS
│   ├── utils/           # Funções utilitárias
│   ├── hooks/           # Hooks personalizados
│   ├── types/           # Definições de tipos TypeScript
│   ├── img/             # Imagens do site
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Ponto de entrada
├── Dockerfile           # Configuração do Docker
└── docker-compose.yml  # Configuração do Docker Compose
```

## Organização do Código

### Componentes UI (`src/components/ui/`)
- Componentes reutilizáveis da interface
- Cada componente tem seu próprio diretório com arquivos relacionados

### Componentes de Layout (`src/components/layout/`)
- Componentes estruturais como Header, Footer, etc.
- Layout padrão das páginas

### Páginas (`src/pages/`)
- Cada página é um componente React
- Organização por funcionalidade

### Estilos (`src/styles/`)
- Arquivos CSS globais e específicos
- Variáveis e temas

### Utilitários (`src/utils/`)
- Funções auxiliares
- Helpers e constantes

### Hooks (`src/hooks/`)
- Hooks personalizados do React
- Lógica reutilizável

### Tipos (`src/types/`)
- Interfaces e tipos TypeScript
- Definições de tipos compartilhados

## 🛠️ Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Docker e Docker Compose instalados

### Usando Docker (Recomendado)

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/origem.git
cd origem
```

2. Construa e inicie os containers:
```bash
docker-compose up --build
```

3. Acesse a aplicação em `http://localhost:5173`

### Execução Local

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

3. Acesse a aplicação em `http://localhost:5173`

## �� Funcionalidades

- **Página Inicial**: Apresenta a empresa, produtos em destaque e informações de contato
- **Quem Somos**: Conta a história da empresa e seus valores
- **Produtos**: Catálogo completo de produtos com detalhes e especificações
- **Contato**: Formulário e informações para contato

## 📞 Contato

- **Serra**: (27) 3228-0015
- **Cariacica**: (27) 3336-5826
- **WhatsApp**: (27) 99716-0214

## 📄 Licença

Este projeto é privado e de uso exclusivo da Origem.
