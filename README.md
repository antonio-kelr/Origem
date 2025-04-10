# Origem - Aço e Metais Sob Medida

![Logo Origem](src/img/nova-logo-pl1qfrzfpgkc01s46bfhppm1q9s0a76si0qv6stngg.png)

## Sobre o Projeto

Este é o site institucional da Origem, uma empresa especializada em aços e metais sob medida. O site foi desenvolvido para apresentar os produtos e serviços da empresa, além de fornecer informações de contato e sobre a história da empresa.

## Tecnologias Utilizadas

- **React**: Framework JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Vite**: Ferramenta de build e desenvolvimento
- **React Router**: Para navegação entre páginas
- **Font Awesome**: Para ícones
- **AOS (Animate On Scroll)**: Para animações de scroll
- **PrimeReact**: Biblioteca de componentes UI

## Estrutura do Projeto

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
├── index.html           # HTML base
└── package.json         # Dependências e scripts
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

## Funcionalidades

- **Página Inicial**: Apresenta a empresa, produtos em destaque e informações de contato
- **Quem Somos**: Conta a história da empresa e seus valores
- **Produtos**: Catálogo completo de produtos com detalhes e especificações
- **Contato**: Formulário e informações para contato

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/origem.git
   ```

2. Instale as dependências:
   ```
   cd origem
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```
   npm run dev
   ```

4. Para build de produção:
   ```
   npm run build
   ```

## Contato

- **Serra**: (27) 3228-0015
- **Cariacica**: (27) 3336-5826
- **WhatsApp**: (27) 99716-0214

## Licença

Este projeto é privado e de uso exclusivo da Origem.
