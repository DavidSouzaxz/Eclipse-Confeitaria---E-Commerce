export const CATEGORIES = [
  "Todos",
  "Bolos",
  "Doces",
  "Salgados",
  "Encomendas",
  "Bebidas",
];

export const PRODUCTS = [
  // Bolos
  {
    id: "1",
    name: "Bolos Diversos Sabores Premium",
    description:
      "Os bolos da Eclipse Confeitaria são preparados artesanalmente com massas macias, recheios cremosos e coberturas irresistíveis, disponíveis em diversos sabores para agradar todos os gostos. Perfeitos para comemorações, encontros especiais ou simplesmente para adoçar o dia, cada bolo combina beleza, sabor e qualidade em cada detalhe.",
    price: 59.99,
    category: "Bolos",
    image: "./Bolos Diversos Sabores.jpg",
    variants: [
      { id: "1-chocolate", name: "Chocolate Belga", priceModifier: 0 },
      { id: "1-morango", name: "Morango com Leite Ninho", priceModifier: 0 },
      { id: "1-red-velvet", name: "Red Velvet", priceModifier: 5 },
      { id: "1-pistache", name: "Pistache", priceModifier: 8 },
      { id: "1-limao", name: "Limão com Gengibre", priceModifier: 0 },
    ],
  },
  {
    id: "2",
    name: "Bolos Sabores",
    description:
      "Os bolos da Eclipse Confeitaria são preparados artesanalmente com massas macias, recheios cremosos e coberturas irresistíveis, disponíveis em diversos sabores para agradar todos os gostos. Perfeitos para comemorações, encontros especiais ou simplesmente para adoçar o dia, cada bolo combina beleza, sabor e qualidade em cada detalhe.",
    price: 39.99,
    category: "Bolos",
    image: "./Bolos Diversos Sabores 2.jpg",
  },
  {
    id: "3",
    name: "Cheesecake de Frutas Vermelhas",
    description:
      "A Cheesecake de Frutas Vermelhas da Eclipse Confeitaria combina uma base crocante com um recheio super cremoso e suave, finalizado com uma deliciosa calda de frutas vermelhas frescas. Uma sobremesa elegante, refrescante e perfeita para quem ama sabores equilibrados e irresistíveis.",
    price: 17.99,
    category: "Bolos",
    image: "./Cheesecake de Frutas Vermelhas.jpg",
  },
  {
    id: "4",
    name: "Mini Cheesecake de Limão",
    description:
      "A Mini Cheesecake de Limão da Eclipse Confeitaria combina uma base crocante com um recheio extremamente cremoso e refrescante. Finalizada com chantilly e uma delicada rodela de limão, essa sobremesa traz o equilíbrio perfeito entre o doce e o cítrico, proporcionando uma experiência leve e irresistível.",
    price: 10.5,
    category: "Bolos",
    image: "./Mini Cheesecake de Limão.jpg",
  },
  {
    id: "5",
    name: "Torta Cookie",
    description:
      " Massa de cookie macia por dentro e levemente crocante por fora, recheada com uma generosa camada de Nutella cremosa, criando uma sobremesa irresistível a cada pedaço. 🍪🍫",
    price: 12.99,
    category: "Bolos",
    image: "./Torta cookie.jpg",
  },
  // Doces
  {
    id: "6",
    name: "Brownie Gourmet no Pote (Unidade)",
    description:
      "Os Brownies Gourmet da Eclipse Confeitaria são feitos com massa intensa e macia de chocolate, combinados com coberturas cremosas e irresistíveis. Disponíveis em diferentes sabores, como chocolate, leite ninho, caramelo e chocolates especiais, são perfeitos para quem ama sobremesas práticas, recheadas e cheias de sabor.",
    price: 9,
    category: "Doces",
    image: "./Brownie Gourmet no Pote.jpg",
    variants: [
      { id: "6-chocolate", name: "Chocolate Amargo", priceModifier: 0 },
      { id: "6-ninho", name: "Leite Ninho", priceModifier: 0 },
      { id: "6-caramelo", name: "Caramelo", priceModifier: 1 },
      { id: "6-branco", name: "Chocolate Branco", priceModifier: 1 },
    ],
  },
  {
    id: "7",
    name: "Caixa de Brigadeiros Gourmet",
    description:
      "A Caixa de Brigadeiros Gourmet da Eclipse Confeitaria reúne sabores especiais e irresistíveis em uma apresentação delicada e sofisticada. Feitos com ingredientes de qualidade e recheios cremosos, os brigadeiros combinam textura, sabor e beleza, tornando cada momento ainda mais doce e especial.",
    price: 10,
    category: "Doces",
    image: "./Caixa de Brigadeiros Gourmet.jpg",
    variants: [
      {
        id: "7-tradicional",
        name: "Caixa Tradicional (4un)",
        priceModifier: 0,
      },
      { id: "7-gourmet", name: "Caixa Gourmet (6un)", priceModifier: 5 },
      { id: "7-premium", name: "Caixa Premium (8un)", priceModifier: 10 },
    ],
  },
  {
    id: "8",
    name: "Cento de Doces Variados",
    description:
      "O Cento de Doces Variados da Eclipse Confeitaria é preparado de acordo com a preferência do cliente, trazendo uma seleção especial de sabores e combinações irresistíveis. Com doces feitos artesanalmente, recheios cremosos e acabamentos delicados, cada encomenda é pensada para tornar festas e momentos especiais ainda mais inesquecíveis.",
    price: 59.99,
    category: "Doces",
    image: "./Cento de Doces Variados.jpg",
  },
  {
    id: "9",
    name: "Cookie Lotus",
    description:
      "Cookie macio e recheado com um delicioso creme inspirado no sabor Lotus, finalizado com pedaços crocantes do biscoito que deixam cada mordida ainda mais irresistível.",
    price: 10.0,
    category: "Doces",
    image: "./Cookie Lotus.jpg",
  },
  {
    id: "21",
    name: "Cookie Velvet ",
    description:
      "Cookie super macio com cobertura cremosa e finalização de calda e pedaços de red velvet, trazendo o equilíbrio perfeito entre sabor, leveza e sofisticação.",
    price: 10.0,
    category: "Doces",
    image: "./Cookie Lotus.jpg",
  },
  {
    id: "10",
    name: "Explosão de Morango",
    description:
      "O Copo Explosão da Eclipse Confeitaria é uma sobremesa irresistível feita com camadas cremosas de chocolate e leite ninho, combinadas com frutas frescas como morango e uva. Finalizado com cobertura especial e pedaços de chocolate, é a mistura perfeita de sabor, cremosidade e frescor em cada colherada.",
    price: 13.99,
    category: "Doces",
    image: "./explosão de morango.jpg",
  },
  {
    id: "11",
    name: "Fatia Suprema de Chocolate com Morango",
    description:
      "A Fatia Supreme de Chocolate com Morango da Eclipse Confeitaria é feita com massa de chocolate super macia, recheio cremoso e morangos frescos inteiros. Finalizada com uma cobertura intensa de chocolate e granulado, essa sobremesa entrega uma combinação perfeita de sabor, cremosidade e indulgência em cada pedaço.",
    price: 14.99,
    category: "Doces",
    image: "./Fatia suprema de chocolate com morango.jpg",
  },
  {
    id: "12",
    name: "Fatia Supreme de Ninho",
    description:
      "A Fatia Supreme de Ninho com Morango da Eclipse Confeitaria combina uma massa super macia com um recheio cremoso de leite ninho e morangos frescos inteiros. Finalizada com uma cobertura irresistível e delicada, essa sobremesa oferece o equilíbrio perfeito entre suavidade, doçura e frescor em cada mordida.",
    price: 14.99,
    category: "Doces",
    image: "./Fatia Supreme de Ninho.jpg",
  },
  {
    id: "13",
    name: "Petit Gâteau",
    description:
      "Bolinho de chocolate com casca delicada e interior cremoso, servido quentinho com uma irresistível explosão de chocolate a cada colherada.",
    price: 25.99,
    category: "Doces",
    image: "./petit-gateau.jpg",
  },
  // Encomendas
  {
    id: "14",
    name: "Croissant Gourmet Recheado",
    description:
      "Massa folhada dourada e amanteigada, recheada generosamente com creme derretendo e sabor marcante. Perfeito para transformar qualquer momento em uma experiência deliciosa!",
    price: 12,
    category: "Salgados",
    image: "./Croissant Gourmet Recheado.jpg",
    variants: [
      { id: "14-nutella", name: "Nutella", priceModifier: 0 },
      { id: "14-chocolate", name: "Chocolate", priceModifier: 0 },
      { id: "14-doce-leite", name: "Doce de Leite", priceModifier: 2 },
      { id: "14-queijo", name: "Queijo e Goiaba", priceModifier: 0 },
    ],
  },
  {
    id: "15",
    name: "Croissant Recheado de Nutella",
    description:
      "Massa folhada leve e amanteigada, assada até ficar dourada e crocante, recheada com o irresistível creme de avelã Nutella para uma experiência doce e sofisticada. 🥐🍫",
    price: 19.99,
    category: "Encomendas",
    image: "./Croissant recheado de Nutella.jpg",
  },
  {
    id: "16",
    name: "Empada de Frango",
    description:
      "Massa leve, douradinha e amanteigada, com acabamento trançado especial e recheio super cremoso. Feita artesanalmente para deixar cada mordida irresistível! ✨",
    price: 6.5,
    category: "Salgados",
    image: "./Empada de frango.jpg",
  },
  {
    id: "17",
    name: "Empadão de Camarão",
    description:
      "Massa artesanal leve e amanteigada, dourada no ponto perfeito, recheada com um cremoso e saboroso camarão temperado.",
    price: 11,
    category: "Salgados",
    image: "./Empadão de camarão.jpg",
  },
  {
    id: "18",
    name: "Hot Dog Especial",
    description:
      "Crocante por fora, macio por dentro e finalizado com coberturas incríveis que deixam tudo ainda mais saboroso.",
    price: 29.99,
    category: "Encomendas",
    image: "./Hot Dog Especial.jpg",
  },
  {
    id: "19",
    name: "Pão de Queijo 10 unidades",
    description:
      "Tradicional pão de queijo artesanal, douradinho e cheio de sabor, perfeito para acompanhar um café fresquinho a qualquer hora do dia!",
    price: 13,
    category: "Salgados",
    image: "./Pão de Queijo.jpg",
  },
  {
    id: "20",
    name: "Salgados Variados",
    description:
      "Uma seleção irresistível de salgados artesanais, preparados com massa leve, recheios saborosos e muito carinho. Perfeitos para festas, reuniões ou aquele lanche especial! ✨",
    price: 50,
    category: "Encomendas",
    image: "./Salgados Variados.jpg",
  },
  {
    id: "26",
    name: "Cappuccino",
    description: "Um sabor único com chantili e bem espumado.",
    price: 6.5,
    category: "Bebidas",
    image: "./Cappuccino.jpg",
  },
  {
    id: "27",
    name: "Chocolate quente",
    description: "Um sabor único de chocolate com chantili e bem cremoso.",
    price: 6.5,
    category: "Bebidas",
    image: "./Chocolate quente.jpg",
  },
  {
    id: "22",
    name: "Coca Cola",
    description: "Coca Cola lata normal",
    price: 5.99,
    category: "Bebidas",
    image: "./Coca cola.jpg",
  },
  {
    id: "23",
    name: "Fanta Laranja",
    description: "Fanta laranja lata",
    price: 5.99,
    category: "Bebidas",
    image: "./fanta-laranja.jpg",
  },
  {
    id: "24",
    name: "Fanta Uva",
    description: "Fanta uva lata",
    price: 5.99,
    category: "Bebidas",
    image: "./fanta-uva.jpg",
  },
  {
    id: "25",
    name: "Água Mineral",
    description: "Água Mineral 500ml",
    price: 5.99,
    category: "Bebidas",
    image: "./agua-mineral.jpg",
  },
];
