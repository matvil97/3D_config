// pos: [x, z] on the kitchen counter (y is auto by object type)
export const RECIPES = [
  {
    id: 'carbonara',
    name: 'Pasta Carbonara',
    emoji: '🍝',
    duration: '25 min',
    difficulty: 'Moyen',
    color: '#e8c07d',
    steps: [
      {
        title: 'Préparer les ingrédients',
        desc: `Coupez la pancetta en lardons. Râpez le pecorino. Séparez les jaunes d'œufs.`,
        objects: [
          { type: 'utensil', id: 'cutting_board', pos: [0, 0] },
          { type: 'utensil', id: 'knife', pos: [0.85, -0.1] },
          { type: 'ingredient', id: 'pancetta', pos: [-0.35, 0.1] },
          { type: 'ingredient', id: 'egg', pos: [0.2, 0.15] },
          { type: 'ingredient', id: 'cheese', pos: [0.5, -0.15] },
        ],
      },
      {
        title: 'Cuire les pâtes',
        desc: `Portez une grande casserole d'eau salée à ébullition. Ajoutez les spaghettis et cuisez al dente.`,
        objects: [
          { type: 'utensil', id: 'pot', pos: [-0.5, -0.5] },
          { type: 'ingredient', id: 'pasta_dry', pos: [0.8, 0] },
          { type: 'ingredient', id: 'salt', pos: [1.4, -0.2] },
        ],
      },
      {
        title: 'Préparer la sauce',
        desc: `Battez les jaunes avec le pecorino et du poivre noir. La crème doit être épaisse.`,
        objects: [
          { type: 'utensil', id: 'bowl', pos: [-0.2, 0] },
          { type: 'utensil', id: 'whisk', pos: [0.6, 0.1] },
          { type: 'ingredient', id: 'egg', pos: [0.1, -0.2] },
          { type: 'ingredient', id: 'cheese', pos: [-0.7, 0.1] },
          { type: 'ingredient', id: 'pepper', pos: [1.0, 0] },
        ],
      },
      {
        title: 'Assembler et servir',
        desc: `Mélangez hors du feu les pâtes égouttées avec la pancetta et la crème d'œufs.`,
        objects: [
          { type: 'utensil', id: 'pan', pos: [0, -0.3] },
          { type: 'utensil', id: 'tongs', pos: [0.9, 0] },
          { type: 'ingredient', id: 'pasta_cooked', pos: [-0.1, 0.1] },
          { type: 'ingredient', id: 'pancetta', pos: [0.5, -0.2] },
        ],
      },
    ],
  },

  {
    id: 'omelette',
    name: 'Omelette Fromage',
    emoji: '🍳',
    duration: '10 min',
    difficulty: 'Facile',
    color: '#f5c842',
    steps: [
      {
        title: 'Casser les œufs',
        desc: `Cassez 3 œufs dans un bol. Ajoutez sel, poivre et une cuillère d'eau.`,
        objects: [
          { type: 'utensil', id: 'bowl', pos: [0, 0] },
          { type: 'ingredient', id: 'egg', pos: [-0.6, 0.1] },
          { type: 'ingredient', id: 'egg', pos: [-0.3, -0.1] },
          { type: 'ingredient', id: 'egg', pos: [0.0, 0.2] },
          { type: 'ingredient', id: 'salt', pos: [0.9, 0] },
        ],
      },
      {
        title: 'Battre les œufs',
        desc: `Fouettez vigoureusement jusqu'à obtenir un mélange homogène et légèrement mousseux.`,
        objects: [
          { type: 'utensil', id: 'bowl', pos: [0, 0] },
          { type: 'utensil', id: 'whisk', pos: [0.7, 0.1] },
          { type: 'ingredient', id: 'cheese', pos: [1.3, -0.1] },
        ],
      },
      {
        title: 'Cuire',
        desc: `Faites fondre le beurre dans la poêle à feu moyen. Versez les œufs battus.`,
        objects: [
          { type: 'utensil', id: 'pan', pos: [0, -0.2] },
          { type: 'utensil', id: 'spatula', pos: [0.9, 0] },
          { type: 'ingredient', id: 'butter', pos: [-0.8, 0] },
        ],
      },
      {
        title: 'Plier et servir',
        desc: `Ajoutez le fromage râpé, pliez l'omelette en deux et glissez-la dans l'assiette.`,
        objects: [
          { type: 'utensil', id: 'pan', pos: [0, -0.2] },
          { type: 'utensil', id: 'spatula', pos: [0.9, 0.1] },
          { type: 'ingredient', id: 'cheese', pos: [-0.7, 0.2] },
          { type: 'ingredient', id: 'herbs', pos: [0.7, -0.3] },
        ],
      },
    ],
  },

  {
    id: 'salade_cesar',
    name: 'Salade César',
    emoji: '🥗',
    duration: '20 min',
    difficulty: 'Facile',
    color: '#7bc67a',
    steps: [
      {
        title: 'Préparer la laitue',
        desc: `Lavez et séchez les feuilles de romaine. Déchirez-les en grands morceaux.`,
        objects: [
          { type: 'utensil', id: 'cutting_board', pos: [0.2, 0] },
          { type: 'utensil', id: 'knife', pos: [1.1, 0] },
          { type: 'ingredient', id: 'lettuce', pos: [-0.5, 0] },
        ],
      },
      {
        title: 'Faire les croûtons',
        desc: `Coupez le pain en cubes, arrosez d'huile d'olive, assaisonnez et enfournez 10 min.`,
        objects: [
          { type: 'utensil', id: 'cutting_board', pos: [0, 0] },
          { type: 'utensil', id: 'knife', pos: [0.9, 0.1] },
          { type: 'ingredient', id: 'bread', pos: [-0.4, 0] },
          { type: 'ingredient', id: 'oil_bottle', pos: [-1.2, -0.2] },
        ],
      },
      {
        title: 'Préparer la sauce',
        desc: `Mélangez mayonnaise, parmesan râpé, jus de citron, anchois et ail. Fouettez.`,
        objects: [
          { type: 'utensil', id: 'bowl', pos: [0, 0] },
          { type: 'utensil', id: 'whisk', pos: [0.7, 0.1] },
          { type: 'ingredient', id: 'lemon', pos: [-0.7, 0.1] },
          { type: 'ingredient', id: 'cheese', pos: [1.0, -0.1] },
        ],
      },
      {
        title: 'Assembler la salade',
        desc: `Mélangez la laitue avec la sauce, ajoutez les croûtons et copeaux de parmesan.`,
        objects: [
          { type: 'utensil', id: 'salad_bowl', pos: [0, 0] },
          { type: 'ingredient', id: 'lettuce', pos: [-0.1, 0.1] },
          { type: 'ingredient', id: 'croutons', pos: [0.5, -0.2] },
          { type: 'ingredient', id: 'cheese', pos: [1.1, 0] },
        ],
      },
    ],
  },

  {
    id: 'smoothie',
    name: 'Smoothie Banane',
    emoji: '🥤',
    duration: '5 min',
    difficulty: 'Facile',
    color: '#ffe066',
    steps: [
      {
        title: 'Préparer les fruits',
        desc: `Épluchez et coupez les bananes en morceaux. Congelez-les si vous voulez un smoothie froid.`,
        objects: [
          { type: 'utensil', id: 'cutting_board', pos: [0, 0] },
          { type: 'utensil', id: 'knife', pos: [0.85, 0] },
          { type: 'ingredient', id: 'banana', pos: [-0.4, 0] },
          { type: 'ingredient', id: 'banana', pos: [-0.1, 0.2] },
        ],
      },
      {
        title: 'Ajouter les ingrédients',
        desc: `Mettez les morceaux de banane, le lait et le miel dans le blender.`,
        objects: [
          { type: 'utensil', id: 'blender', pos: [0, -0.3] },
          { type: 'ingredient', id: 'banana', pos: [0.9, 0] },
          { type: 'ingredient', id: 'milk', pos: [-0.8, 0] },
          { type: 'ingredient', id: 'honey', pos: [1.4, 0] },
        ],
      },
      {
        title: 'Mixer',
        desc: `Mixez 1 minute à pleine puissance. Ajustez la consistance avec du lait si nécessaire.`,
        objects: [
          { type: 'utensil', id: 'blender', pos: [0, -0.2] },
        ],
      },
      {
        title: 'Servir',
        desc: `Versez dans un grand verre. Décorez avec une rondelle de banane et dégustez aussitôt.`,
        objects: [
          { type: 'utensil', id: 'glass', pos: [0.5, 0] },
          { type: 'ingredient', id: 'banana', pos: [1.2, 0.1] },
          { type: 'ingredient', id: 'honey', pos: [-0.5, 0] },
        ],
      },
    ],
  },

  {
    id: 'pizza',
    name: 'Pizza Margherita',
    emoji: '🍕',
    duration: '45 min',
    difficulty: 'Moyen',
    color: '#ff6b35',
    steps: [
      {
        title: 'Préparer la pâte',
        desc: `Mélangez farine, levure, sel et eau tiède. Pétrissez 10 min et laissez lever 1h.`,
        objects: [
          { type: 'utensil', id: 'bowl', pos: [0, 0] },
          { type: 'ingredient', id: 'flour', pos: [-0.8, 0.1] },
          { type: 'ingredient', id: 'salt', pos: [0.9, -0.1] },
          { type: 'ingredient', id: 'yeast', pos: [1.3, 0.2] },
        ],
      },
      {
        title: 'Étaler la pâte',
        desc: `Étalez la pâte sur un plan fariné avec un rouleau jusqu'à 3-4 mm d'épaisseur.`,
        objects: [
          { type: 'utensil', id: 'rolling_pin', pos: [0.5, 0] },
          { type: 'ingredient', id: 'pizza_dough', pos: [-0.2, 0] },
          { type: 'ingredient', id: 'flour', pos: [1.3, -0.2] },
        ],
      },
      {
        title: 'Garnir la pizza',
        desc: `Étalez la sauce tomate, disposez la mozzarella et quelques feuilles de basilic.`,
        objects: [
          { type: 'ingredient', id: 'pizza_dough', pos: [0, 0] },
          { type: 'utensil', id: 'ladle', pos: [0.9, 0.2] },
          { type: 'ingredient', id: 'tomato_sauce', pos: [-0.8, 0] },
          { type: 'ingredient', id: 'mozzarella', pos: [0.3, -0.3] },
          { type: 'ingredient', id: 'basil', pos: [1.1, 0] },
        ],
      },
      {
        title: 'Enfourner',
        desc: `Enfournez à 250°C pendant 12-15 minutes. La pâte doit être dorée et le fromage fondu.`,
        objects: [
          { type: 'utensil', id: 'baking_dish', pos: [0, -0.2] },
          { type: 'ingredient', id: 'basil', pos: [1.2, 0] },
        ],
      },
    ],
  },

  {
    id: 'crepes',
    name: 'Crêpes',
    emoji: '🥞',
    duration: '30 min',
    difficulty: 'Facile',
    color: '#d4a853',
    steps: [
      {
        title: 'Préparer la pâte',
        desc: `Mélangez la farine et le sel. Ajoutez les œufs puis le lait en fouettant sans grumeaux.`,
        objects: [
          { type: 'utensil', id: 'bowl', pos: [0, 0] },
          { type: 'utensil', id: 'whisk', pos: [0.7, 0.1] },
          { type: 'ingredient', id: 'flour', pos: [-0.8, 0] },
          { type: 'ingredient', id: 'egg', pos: [1.0, -0.1] },
          { type: 'ingredient', id: 'milk', pos: [1.5, 0.1] },
        ],
      },
      {
        title: 'Laisser reposer',
        desc: `Ajoutez le beurre fondu et l'extrait de vanille. Laissez reposer 30 min au frais.`,
        objects: [
          { type: 'utensil', id: 'bowl', pos: [0, 0] },
          { type: 'ingredient', id: 'butter', pos: [-0.7, 0.2] },
        ],
      },
      {
        title: 'Cuire les crêpes',
        desc: `Huilez légèrement la poêle. Versez une louche de pâte et faites cuire 1 min de chaque côté.`,
        objects: [
          { type: 'utensil', id: 'pan', pos: [0, -0.2] },
          { type: 'utensil', id: 'ladle', pos: [0.9, 0.1] },
          { type: 'ingredient', id: 'butter', pos: [-0.8, 0] },
          { type: 'utensil', id: 'spatula', pos: [1.4, -0.2] },
        ],
      },
      {
        title: 'Garnir et servir',
        desc: `Garnissez avec sucre, confiture, Nutella ou fruits. Pliez en quatre et servez chaud.`,
        objects: [
          { type: 'utensil', id: 'pan', pos: [0.3, -0.1] },
          { type: 'ingredient', id: 'banana', pos: [-0.8, 0] },
          { type: 'ingredient', id: 'honey', pos: [1.2, 0.1] },
        ],
      },
    ],
  },

  {
    id: 'soupe_oignon',
    name: 'Soupe à l\'Oignon',
    emoji: '🧅',
    duration: '50 min',
    difficulty: 'Moyen',
    color: '#c0824a',
    steps: [
      {
        title: 'Préparer les oignons',
        desc: `Émincez finement 4 gros oignons. Cette étape demande un peu de patience !`,
        objects: [
          { type: 'utensil', id: 'cutting_board', pos: [0, 0] },
          { type: 'utensil', id: 'knife', pos: [0.9, 0] },
          { type: 'ingredient', id: 'onion', pos: [-0.5, 0.1] },
          { type: 'ingredient', id: 'onion', pos: [-0.1, -0.1] },
          { type: 'ingredient', id: 'onion', pos: [0.3, 0.2] },
          { type: 'ingredient', id: 'onion', pos: [0.6, -0.15] },
        ],
      },
      {
        title: 'Caraméliser les oignons',
        desc: `Dans une cocotte avec le beurre, faites fondre les oignons 30 min à feu doux en remuant.`,
        objects: [
          { type: 'utensil', id: 'pot', pos: [0, -0.3] },
          { type: 'ingredient', id: 'butter', pos: [-0.9, 0.1] },
          { type: 'ingredient', id: 'onion', pos: [1.0, 0] },
          { type: 'utensil', id: 'spatula', pos: [0.9, -0.1] },
        ],
      },
      {
        title: 'Ajouter le bouillon',
        desc: `Déglacez au vin blanc, puis ajoutez le bouillon de bœuf. Laissez mijoter 15 min.`,
        objects: [
          { type: 'utensil', id: 'pot', pos: [0, -0.3] },
          { type: 'utensil', id: 'ladle', pos: [0.9, 0.1] },
          { type: 'ingredient', id: 'bread', pos: [-1.0, 0] },
          { type: 'ingredient', id: 'cheese', pos: [1.3, -0.1] },
        ],
      },
      {
        title: 'Gratinée',
        desc: `Versez dans des bols, déposez des tranches de pain et du gruyère. Passez sous le gril.`,
        objects: [
          { type: 'utensil', id: 'bowl', pos: [-0.5, 0] },
          { type: 'utensil', id: 'bowl', pos: [0.5, 0] },
          { type: 'ingredient', id: 'bread', pos: [0, 0.2] },
          { type: 'ingredient', id: 'cheese', pos: [1.2, 0] },
        ],
      },
    ],
  },

  {
    id: 'pancakes',
    name: 'Pancakes',
    emoji: '🥞',
    duration: '20 min',
    difficulty: 'Facile',
    color: '#e8a458',
    steps: [
      {
        title: 'Mélanger les ingrédients secs',
        desc: `Dans un grand bol, combinez farine, sucre, levure chimique et une pincée de sel.`,
        objects: [
          { type: 'utensil', id: 'bowl', pos: [0, 0] },
          { type: 'ingredient', id: 'flour', pos: [-0.9, 0] },
          { type: 'ingredient', id: 'sugar', pos: [1.0, 0.1] },
          { type: 'ingredient', id: 'salt', pos: [1.5, -0.1] },
        ],
      },
      {
        title: 'Ajouter les ingrédients humides',
        desc: `Creusez un puits. Ajoutez l'œuf, le lait et le beurre fondu. Mélangez sans trop travailler.`,
        objects: [
          { type: 'utensil', id: 'bowl', pos: [0, 0] },
          { type: 'utensil', id: 'whisk', pos: [0.7, 0.1] },
          { type: 'ingredient', id: 'egg', pos: [-0.8, 0.1] },
          { type: 'ingredient', id: 'milk', pos: [-1.3, -0.1] },
          { type: 'ingredient', id: 'butter', pos: [1.2, 0] },
        ],
      },
      {
        title: 'Cuire les pancakes',
        desc: `Dans une poêle beurrée, versez 2 louches de pâte. Retournez quand des bulles se forment.`,
        objects: [
          { type: 'utensil', id: 'pan', pos: [0, -0.2] },
          { type: 'utensil', id: 'spatula', pos: [0.9, 0.1] },
          { type: 'ingredient', id: 'butter', pos: [-0.8, 0] },
          { type: 'utensil', id: 'ladle', pos: [1.4, -0.1] },
        ],
      },
      {
        title: 'Servir',
        desc: `Empilez les pancakes. Nappez de sirop d'érable, ajoutez des fruits frais et du beurre.`,
        objects: [
          { type: 'ingredient', id: 'pancake_stack', pos: [0, 0] },
          { type: 'ingredient', id: 'honey', pos: [0.9, 0.1] },
          { type: 'ingredient', id: 'banana', pos: [-0.7, 0] },
          { type: 'ingredient', id: 'butter', pos: [1.4, -0.1] },
        ],
      },
    ],
  },

  {
    id: 'tarte_pommes',
    name: 'Tarte aux Pommes',
    emoji: '🍎',
    duration: '55 min',
    difficulty: 'Moyen',
    color: '#e8513a',
    steps: [
      {
        title: 'Faire la pâte',
        desc: `Sablez la farine avec le beurre froid coupé en dés. Ajoutez l'eau froide, formez une boule.`,
        objects: [
          { type: 'utensil', id: 'bowl', pos: [0, 0] },
          { type: 'ingredient', id: 'flour', pos: [-0.9, 0] },
          { type: 'ingredient', id: 'butter', pos: [0.8, 0.1] },
          { type: 'ingredient', id: 'salt', pos: [1.4, -0.1] },
        ],
      },
      {
        title: 'Étaler et foncer',
        desc: `Sur un plan fariné, étalez la pâte au rouleau. Foncez le moule à tarte. Piquez le fond.`,
        objects: [
          { type: 'utensil', id: 'rolling_pin', pos: [0.5, 0] },
          { type: 'utensil', id: 'baking_dish', pos: [-0.5, -0.2] },
          { type: 'ingredient', id: 'flour', pos: [1.3, 0] },
        ],
      },
      {
        title: 'Préparer les pommes',
        desc: `Épluchez et tranchez les pommes finement. Disposez-les en rosace sur la pâte.`,
        objects: [
          { type: 'utensil', id: 'cutting_board', pos: [0.2, 0] },
          { type: 'utensil', id: 'knife', pos: [1.1, 0] },
          { type: 'ingredient', id: 'apple', pos: [-0.6, 0.1] },
          { type: 'ingredient', id: 'apple', pos: [-0.2, -0.1] },
          { type: 'ingredient', id: 'apple', pos: [0.2, 0.15] },
        ],
      },
      {
        title: 'Cuire',
        desc: `Saupoudrez de sucre et cannelle. Enfournez 35-40 min à 180°C jusqu'à dorure parfaite.`,
        objects: [
          { type: 'utensil', id: 'baking_dish', pos: [0, -0.1] },
          { type: 'ingredient', id: 'sugar', pos: [-0.9, 0.1] },
          { type: 'ingredient', id: 'apple', pos: [1.0, 0] },
        ],
      },
    ],
  },

  {
    id: 'ratatouille',
    name: 'Ratatouille',
    emoji: '🫕',
    duration: '60 min',
    difficulty: 'Difficile',
    color: '#9b59b6',
    steps: [
      {
        title: 'Préparer les légumes',
        desc: `Coupez en rondelles fines l'aubergine, la courgette, la tomate et le poivron.`,
        objects: [
          { type: 'utensil', id: 'cutting_board', pos: [0, 0] },
          { type: 'utensil', id: 'knife', pos: [1.0, 0] },
          { type: 'ingredient', id: 'eggplant', pos: [-0.8, 0] },
          { type: 'ingredient', id: 'zucchini', pos: [-0.3, 0.2] },
          { type: 'ingredient', id: 'tomato', pos: [0.3, -0.1] },
          { type: 'ingredient', id: 'pepper', pos: [0.7, 0.15] },
        ],
      },
      {
        title: 'Préparer la sauce',
        desc: `Faites revenir l'oignon et l'ail, ajoutez les tomates pelées. Cuisez 15 min.`,
        objects: [
          { type: 'utensil', id: 'pot', pos: [0, -0.3] },
          { type: 'ingredient', id: 'onion', pos: [-0.8, 0.1] },
          { type: 'ingredient', id: 'tomato', pos: [0.8, 0] },
          { type: 'utensil', id: 'spatula', pos: [1.1, -0.1] },
        ],
      },
      {
        title: 'Disposer en tian',
        desc: `Versez la sauce dans le plat. Disposez les légumes en alternant courgette, tomate, aubergine.`,
        objects: [
          { type: 'utensil', id: 'baking_dish', pos: [0, -0.2] },
          { type: 'ingredient', id: 'zucchini', pos: [-0.5, 0.1] },
          { type: 'ingredient', id: 'tomato', pos: [0.5, -0.1] },
          { type: 'ingredient', id: 'eggplant', pos: [1.1, 0] },
        ],
      },
      {
        title: 'Cuire au four',
        desc: `Arrosez d'huile d'olive, couvrez de thym. Cuisez 45 min à 180°C. Découvrez les 15 dernières min.`,
        objects: [
          { type: 'utensil', id: 'baking_dish', pos: [0, -0.2] },
          { type: 'ingredient', id: 'herbs', pos: [-0.9, 0.1] },
          { type: 'ingredient', id: 'oil_bottle', pos: [0.9, 0] },
        ],
      },
    ],
  },
]
