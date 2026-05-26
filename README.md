# 🌙 Eclipse Confeitaria - E-Commerce

Uma aplicação web moderna e responsiva para a confeitaria **Eclipse Confeitaria**. Desenvolvida com **React** e **Vite**, oferece uma experiência de compra intuitiva em mobile e desktop com integração direta ao WhatsApp.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen)
![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5%2B-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3%2B-06B6D4?logo=tailwindcss)

---

## 📋 Sumário

- [Features](#-features)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Componentes](#-componentes)
- [Catálogo de Produtos](#-catálogo-de-produtos)
- [Paleta de Cores](#-paleta-de-cores)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)

---

## ✨ Features

### 🛍️ Catálogo de Produtos

- **26 produtos** organizados em **6 categorias**: Bolos, Doces, Salgados, Encomendas e Bebidas
- **Filtro por categoria** com navegação suave
- **Imagens otimizadas** com lazy loading
- **Descrições detalhadas** para cada produto

### 🎨 Variações de Produtos

- **Sabores/Flavors personalizados** para produtos selecionados
- **Preços com modificador** (ex: +R$ 5 para sabor premium)
- **Observações customizáveis** durante a seleção
- **Seletor visual** em tela cheia para melhor experiência

### 🛒 Carrinho de Compras

- **Carrinho persistente** durante a sessão
- **Modos adaptáveis**:
  - 📱 **Mobile**: Bottom sheet deslizável com gesture suave
  - 🖥️ **Desktop**: Sidebar persistente na lateral
- **Controle de quantidade** com botões +/-
- **Cálculo automático** de subtotal e total
- **Remoção de itens** com um clique

### 📞 Integração WhatsApp

- **Checkout direto pelo WhatsApp**
- **Formulário simples**: Nome, telefone e endereço
- **Validação de campos** obrigatórios
- **Mensagem formatada** com emojis e detalhes do pedido
- **Limpeza automática** do carrinho após envio

### 📱 Responsivo & Mobile-First

- **Design mobile-first** otimizado para smartphones
- **Breakpoint desktop** (lg: 1024px) com layout de duas colunas
- **Tipografia responsiva** que adapta ao tamanho da tela
- **Imagens escaláveis** com object-fit
- **Touch-friendly** com botões adequados para toque

### 🎯 UX Melhorada

- **Scroll suave** com animações fluidas
- **Feedback visual** em todas as interações
- **Estados de carregamento** indicados visualmente
- **Badge de status** (Aberto agora)
- **Animações de entrada** com keyframes customizados

---

## 🛠 Tecnologias

| Tecnologia            | Versão | Propósito               |
| --------------------- | ------ | ----------------------- |
| **React**             | 18+    | Framework UI            |
| **Vite**              | 5+     | Build tool & dev server |
| **Tailwind CSS**      | 3+     | Styling utilitário      |
| **React Context API** | Nativa | Gerenciamento de estado |
| **JavaScript (ES6+)** | -      | Linguagem principal     |

### Dependências Principais

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

### Dev Dependencies

```json
{
  "@vitejs/plugin-react": "^4.3.4",
  "vite": "^5.4.10",
  "tailwindcss": "^3.4.0",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.32"
}
```

---

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** versão 18+ ([Download](https://nodejs.org/))
- **npm** versão 9+ (vem com Node.js)
- **Git** para controle de versão ([Download](https://git-scm.com/))

Verificar instalação:

```bash
node --version  # v18.0.0 ou superior
npm --version   # 9.0.0 ou superior
git --version   # 2.40.0 ou superior
```

---

## 🚀 Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/DavidSouzaxz/eclipse-commerce.git
cd eclipse-commerce
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# WhatsApp
VITE_STORE_PHONE=5585999999999
```

> **Nota**: Atualize o número de telefone com o DDD e número real da loja.

### 4. Iniciar servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em: **http://localhost:5173**

---

## 💻 Como Usar

### Navegação Básica

1. **Visualizar Produtos**
   - A página inicial exibe todos os produtos
   - Use o menu de categorias para filtrar

2. **Selecionar Produto**
   - Clique no card do produto para abrir detalhes
   - Selecione a variação desejada (se disponível)
   - Adicione observações customizadas
   - Clique em "Adicionar" para colocar no carrinho

3. **Gerenciar Carrinho**
   - **Mobile**: Toque no botão flutuante (canto inferior direito)
   - **Desktop**: Veja o carrinho na sidebar direita
   - Use +/- para ajustar quantidades
   - Remova itens deslizando ou clicando em X

4. **Finalizar Compra**
   - Clique em "Ir para Checkout"
   - Preencha seus dados (nome, telefone, endereço)
   - Clique em "Confirmar Pedido"
   - Será redirecionado ao WhatsApp com a mensagem pronta

### Atalhos & Dicas

| Ação                        | Como Fazer                                |
| --------------------------- | ----------------------------------------- |
| Abrir carrinho (mobile)     | Toque no botão flutuante com preço        |
| Fechar carrinho (mobile)    | Arraste para baixo ou toque fora          |
| Voltar da tela de variações | Clique no botão ← ou fora da tela         |
| Aumentar quantidade         | Use o botão + no carrinho                 |
| Remover item                | Clique no X ou reduza a quantidade para 0 |

---

## 📂 Estrutura do Projeto

```
eclipse-commerce/
├── src/
│   ├── components/              # Componentes React reutilizáveis
│   │   ├── Header.jsx          # Cabeçalho com branding
│   │   ├── CategoryMenu.jsx    # Menu de categorias com filtro
│   │   ├── ProductCard.jsx     # Card individual de produto
│   │   ├── ProductList.jsx     # Grid de produtos
│   │   ├── ProductVariantsScreen.jsx  # Modal de variações
│   │   ├── CartBottomSheet.jsx # Carrinho (mobile + desktop)
│   │   ├── CheckoutBottomSheet.jsx    # Formulário de checkout
│   │   ├── FloatCart.jsx       # Botão flutuante (mobile)
│   │   └── BackgroundLogo.jsx  # Logo watermark de fundo
│   │
│   ├── context/
│   │   └── CartContext.jsx     # Context API para estado global
│   │
│   ├── data/
│   │   └── products.js         # Catálogo de produtos
│   │
│   ├── assets/                 # Imagens dos produtos
│   │   ├── logo.jpg
│   │   ├── Bolos Diversos Sabores.jpg
│   │   └── ... (mais imagens)
│   │
│   ├── App.jsx                 # Componente raiz
│   ├── App.css                 # Estilos do app
│   ├── index.css               # Estilos globais + tema
│   ├── main.jsx                # Ponto de entrada
│   └── vite.svg                # Logo Vite
│
├── public/                      # Arquivos estáticos
├── index.html                   # HTML principal
├── vite.config.js              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
├── postcss.config.js           # Configuração PostCSS
├── eslint.config.js            # Configuração ESLint
├── package.json                # Dependências & scripts
└── README.md                   # Este arquivo
```

---

## 🧩 Componentes

### Header

**Arquivo**: `src/components/Header.jsx`

Cabeçalho da aplicação com branding da Eclipse Confeitaria.

**Props**: Nenhuma

**Features**:

- Logo e tagline customizados
- Badge de status "Aberto agora"
- Responsivo com `text-2xl lg:text-3xl`
- Sticky ao topo com z-index apropriado

### CategoryMenu

**Arquivo**: `src/components/CategoryMenu.jsx`

Menu para filtrar produtos por categoria.

**Props**:

- `selectedCategory: string` - Categoria selecionada
- `onSelectCategory: (category: string) => void` - Callback ao selecionar

**Features**:

- Botões com estado ativo/inativo
- Scroll horizontal em mobile
- Flex wrap em desktop
- Transições suaves

### ProductCard

**Arquivo**: `src/components/ProductCard.jsx`

Card individual de produto com imagem, nome, preço e controles.

**Props**:

- `product: object` - Dados do produto
- `onOpenDetail: (product: object) => void` - Callback ao clicar

**Features**:

- Layout: imagem esquerda + texto direita
- Botões +/- para quantidade ou "Adicionar"
- Hover com efeito de borda e sombra
- `event.stopPropagation()` para não abrir modal

### ProductVariantsScreen

**Arquivo**: `src/components/ProductVariantsScreen.jsx`

Modal full-screen para selecionar variações e adicionar observações.

**Props**:

- `product: object` - Produto com variações
- `isOpen: boolean` - Controla visibilidade
- `onClose: () => void` - Callback ao fechar

**Features**:

- Imagem grande do produto
- Radio buttons para variações
- Preço com modificador calculado
- Textarea para observações (4 linhas)
- Botões Voltar e Adicionar no footer fixo

### CartBottomSheet

**Arquivo**: `src/components/CartBottomSheet.jsx`

Carrinho com dois modos: modal mobile e sidebar desktop.

**Props**:

- `isOpen: boolean` - Controla visibilidade (mobile)
- `onClose: () => void` - Callback ao fechar
- `onGoToCheckout: () => void` - Callback para checkout
- `isSidebarView: boolean` - true para desktop, false para mobile

**Features**:

- Modo sidebar: persistente, com imagens, sem overlay
- Modo modal: fixed com backdrop blur, swipe handle
- Lista de itens com quantidades e preços
- Subtotal e botão checkout
- Scroll interno com `max-h-[85vh]`

### CheckoutBottomSheet

**Arquivo**: `src/components/CheckoutBottomSheet.jsx`

Formulário de coleta de dados para envio por WhatsApp.

**Props**:

- `isOpen: boolean` - Controla visibilidade
- `onClose: () => void` - Callback ao fechar

**Features**:

- Campos: nome, telefone (com máscara), endereço
- Validação de campos obrigatórios
- Integração WhatsApp com `wa.me/`
- Mensagem formatada com emojis
- Limpeza automática do carrinho

### FloatCart

**Arquivo**: `src/components/FloatCart.jsx`

Botão flutuante para abrir carrinho (mobile only).

**Props**:

- `onOpenCart: () => void` - Callback ao clicar

**Features**:

- Fixo no canto inferior direito
- Badge com contagem de itens
- Mostra preço total
- Hidden em `lg:hidden` (desktop)
- Gradient background com padding

### BackgroundLogo

**Arquivo**: `src/components/BackgroundLogo.jsx`

Logo watermark no background da aplicação.

**Props**: Nenhuma

**Features**:

- Fixed no fundo com `pointer-events-none`
- Opacidade 6% para não interferir
- Centralizado na tela
- Tamanho 400x400px

---

## 🛍️ Catálogo de Produtos

### Categorias

#### 🍰 Bolos (5 produtos)

1. **Bolos Diversos Sabores Premium** - Com 5 variações de sabor
2. **Torta Cookie** - Preço aguardando
3. **Cheesecake de Frutas Vermelhas**
4. **Fatia Suprema de Chocolate com Morango**
5. **Fatia Supreme de Ninho**

#### 🍪 Doces (8 produtos)

1. **Brownie Gourmet no Pote** - Com 4 variações
2. **Caixa de Brigadeiros Gourmet** - Com 3 tamanhos
3. **Cookie Lotus**
4. **Chocolate Quente**
5. **Mini Cheesecake de Limão**
6. **Explosão de Morango**
7. **Petit Gâteau** - Preço aguardando
8. **Cento de Doces Variados**

#### 🥐 Salgados (4 produtos)

1. **Croissant Gourmet Recheado** - Com 4 variações
2. **Pão de Queijo**
3. **Empada de Frango**
4. **Empadão de Camarão**

#### 📦 Encomendas (3 produtos)

1. **Hot Dog Especial** - Preço aguardando
2. **Croissant Recheado de Nutella**
3. **Salgados Variados**

#### 🥤 Bebidas (6 produtos)

1. **Água Mineral**
2. **Coca Cola**
3. **Guaraná**
4. **Fanta Laranja**
5. **Fanta Uva**
6. **Cappuccino**

### Variações Disponíveis

Alguns produtos possuem sabores/tamanhos customizáveis:

```javascript
// Exemplo: Bolos Diversos Sabores Premium
variants: [
  { name: "Chocolate Belga", priceModifier: 0 },
  { name: "Morango", priceModifier: 0 },
  { name: "Red Velvet", priceModifier: 5 },
  { name: "Pistache", priceModifier: 8 },
  { name: "Limão", priceModifier: 0 },
];
```

---

## 🎨 Paleta de Cores

A aplicação usa um sistema de cores customizado via Tailwind CSS. Todas as cores são definidas em `src/index.css`:

| Variável                   | Hex     | Uso                    |
| -------------------------- | ------- | ---------------------- |
| `--color-eclipse-bg`       | #faf8f4 | Fundo principal (Bege) |
| `--color-eclipse-card`     | #fff9f6 | Cards (Rosa claro)     |
| `--color-eclipse-text`     | #2a2520 | Texto principal        |
| `--color-eclipse-muted`    | #8b7d77 | Texto secundário       |
| `--color-eclipse-purple`   | #9d4edd | Destaques (Roxo)       |
| `--color-eclipse-gold`     | #d4a574 | Preços (Dourado)       |
| `--color-eclipse-bronze`   | #8f5d46 | Acentos (Bronze)       |
| `--color-eclipse-cream`    | #fce6e2 | Backgrounds leves      |
| `--color-eclipse-rose`     | #f5ede5 | Backgrounds alternos   |
| `--color-eclipse-rosegold` | #c9a57b | Acentos luxo           |

### Uso em Componentes

```jsx
// Classes Tailwind customizadas
className = "bg-eclipse-bg text-eclipse-text border-eclipse-purple";
className = "bg-gradient-to-t from-eclipse-bg via-eclipse-bg/95";
```

---

##  Troubleshooting

### Problema: Porta 5173 já em uso

```bash
# Solução: Use porta diferente
npm run dev -- --port 3000
```

### Problema: Carrinho não persiste após reload

**Esperado**: A aplicação armazena carrinho apenas na sessão. Para persistência:

1. Implemente localStorage:

```javascript
// Adicionar em CartContext.jsx
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
```

2. Restaurar ao carregar:

```javascript
const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
});
```

### Problema: Imagens não aparecem

**Verificar**:

1. Se o arquivo existe em `src/assets/`
2. Se o caminho está correto em `src/data/products.js`
3. Se o servidor Vite está rodando

**Solução**:

```bash
# Reinicie o servidor
npm run dev
```

### Problema: WhatsApp não abre

**Verificar**:

1. Se o número está configurado em `.env.local`
2. Se o formato é válido: `55` (país) + `85` (DDD) + `9` (celular) + `99999999`
3. Se há espaços ou caracteres especiais

**Solução**:

```javascript
// Em CheckoutBottomSheet.jsx
console.log("WhatsApp URL:", waURL); // Debug
```

### Problema: Tailwind não aplica estilos

**Solução**:

```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📝 Convenções de Código

### Naming

- Componentes: PascalCase (`ProductCard.jsx`)
- Arquivos: kebab-case para utilitários, PascalCase para componentes
- Variáveis: camelCase (`selectedCategory`, `isCartOpen`)
- Classes CSS: Tailwind built-in + custom prefixed (`eclipse-*`)

### Estrutura de Componente

```jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // imports

export const ComponentName = ({ prop1, prop2, onAction }) => {
  // Hooks
  const { data } = useCart();
  const [state, setState] = useState(false);

  // Handlers
  const handleClick = () => {
    /* ... */
  };

  // Render
  return <div className="flex items-center">{/* JSX */}</div>;
};
```

### Git Workflow

```bash
# Crie branch para feature
git checkout -b feature/nova-funcionalidade

# Commit com mensagem clara
git commit -m "feat: adicionar filtro de preço"

# Push e abra PR
git push origin feature/nova-funcionalidade
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga esses passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Suporte

Para suporte ou dúvidas:

- 📧 Email: contato@eclipseconfeitaria.com
- 💬 WhatsApp: (85) 9 9999-9999
- 🐛 Issues: GitHub Issues

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo `LICENSE` para detalhes.

---

## 🎉 Créditos

Desenvolvido com ❤️ para **Eclipse Confeitaria**

**Tecnologias utilizadas**:

- React 18+
- Vite 5+
- Tailwind CSS 3+
- JavaScript ES6+

---

**Última atualização**: 25 de maio de 2026
**Versão**: 1.0.0
