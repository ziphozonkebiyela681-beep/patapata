export interface MenuItem {
  id: string;
  name: string;
  category: 'traditional' | 'starters' | 'grills' | 'platters' | 'burgers' | 'desserts' | 'drinks';
  price: number;
  description: string;
  heritageNote?: string;
  tags: string[];
  spicyLevel?: 0 | 1 | 2 | 3;
  pairing?: string;
  isChefSpecial?: boolean;
  imageUrl?: string;
}

export interface CategoryInfo {
  id: MenuItem['category'];
  label: string;
  tagline: string;
}

export const MENU_CATEGORIES: CategoryInfo[] = [
  { id: 'traditional', label: 'Soul & Heritage', tagline: 'Slow-simmered South African staples cooked with time-honored pride' },
  { id: 'starters', label: 'Starters & Tapas', tagline: 'Crispy samosas, fiery wings, and street-style bites to begin the rhythm' },
  { id: 'grills', label: 'Flame Grills & Cuts', tagline: 'Charcoal-fired prime cuts and ocean fresh fish with regional basting' },
  { id: 'platters', label: 'Feast Platters', tagline: 'Generous sharing boards served with hot steamed bread and chakalaka' },
  { id: 'burgers', label: 'Burgers & Sandwiches', tagline: 'Hearty Fox Street specials on toasted brioche with hand-cut chips' },
  { id: 'desserts', label: 'Sweet Finishes', tagline: 'Traditional Malva pudding, warm custards, and heritage confections' },
  { id: 'drinks', label: 'Cocktails & Cellar', tagline: 'Sophiatown-inspired craft cocktails, South African wines, and cold brews' },
];

export const MENU_ITEMS: MenuItem[] = [
  // TRADITIONAL & SOUL
  {
    id: 'heritage-stew-dombolo',
    name: 'Signature Beef & Lamb Stew with Golden Dombolo',
    category: 'traditional',
    price: 185,
    description: 'Slow-simmered beef chuck and lamb in fragrant red-gold savory gravy, served in a vintage enamel bowl with warm golden-crusted steamed bread (dombolo / jeqe), spicy chakalaka, and sea salt with thyme.',
    heritageNote: 'The heart and soul of South African hospitality—dipping fluffy, golden-toasted dombolo dumplings into rich bone-marrow gravy.',
    tags: ['Kitchen Signature', 'House Favorite', 'Featured Dish'],
    spicyLevel: 1,
    pairing: 'Meerlust Red Blend or chilled Castle Milk Stout',
    isChefSpecial: true,
  },
  {
    id: 'harvest-garden-vegetables',
    name: 'Pan-Sautéed Farm Country Greens & Vegetables',
    category: 'traditional',
    price: 85,
    description: 'Fresh market garden harvest of baby carrots, crisp courgettes, tender broccoli florets, and whole sweet pearl onions gently braised in garlic herb butter on our kitchen chafing pass.',
    heritageNote: 'Prepared fresh daily to accompany all our traditional meat stews, braai cuts, and sharing platters.',
    tags: ['Vegetarian', 'Daily Harvest', 'Featured Dish'],
    pairing: 'Simonsig Chenin Blanc or Fresh Ginger Beer',
    isChefSpecial: true,
  },
  {
    id: 'mogodu',
    name: 'Mogodu & Creamy Samp',
    category: 'traditional',
    price: 155,
    description: 'Slow-braised beef tripe simmered for 5 hours until meltingly tender in aromatic broth, served with your choice of buttery samp or traditional stiff maize pap.',
    heritageNote: 'A celebrated South African township staple, revered for its deep savory depth and comforting nostalgia.',
    tags: ['Heritage Classic', 'Best Seller'],
    spicyLevel: 1,
    pairing: 'Chilled Soweto Gold craft lager or Black Label',
    isChefSpecial: true,
  },
  {
    id: 'oxtail-potjie',
    name: 'Slow-Braised Oxtail Potjie',
    category: 'traditional',
    price: 215,
    description: 'Rich, unctuous oxtail pieces gently braised in a spiced red wine reduction with baby carrots, shallots, and fresh bay leaves, falling off the bone.',
    heritageNote: 'Our most sought-after house specialty, slow-cooked in cast iron pots inspired by Sophiatown Sunday family feasts.',
    tags: ['House Signature', 'Staff Favorite'],
    pairing: 'Kanonkop Kadette Pinotage or hearty Cabernet Sauvignon',
    isChefSpecial: true,
  },
  {
    id: 'lamb-shank',
    name: 'Karoo Braised Lamb Shank',
    category: 'traditional',
    price: 235,
    description: 'Tender Karoo lamb shank slow-roasted with fresh rosemary, garlic, and tomato ragout, resting on garlic-infused mashed potatoes or warm dumpling (jeqe).',
    heritageNote: 'Karoo lamb carries the aromatic herbal profile of indigenous wild scrublands.',
    tags: ['Premium Cut'],
    pairing: 'Rust en Vrede Syrah',
  },
  {
    id: 'quarter-peri-chicken',
    name: 'Flame-Kissed Peri-Peri Chicken',
    category: 'traditional',
    price: 140,
    description: 'Half farm chicken marinated in home-made birds-eye chili, garlic, bay leaf, and lemon juice, char-grilled over open coals, served with chakalaka and hot chips.',
    tags: ['Spicy', 'Coal-Grilled'],
    spicyLevel: 2,
    pairing: 'Dry cider or crisp Chenin Blanc',
  },
  {
    id: 'bobotie',
    name: 'Cape Malay Bobotie',
    category: 'traditional',
    price: 145,
    description: 'Fragrant spiced minced beef baked with sultanas, bay leaves, and golden egg custard topping, served with turmeric yellow rice and homemade Mrs. Ball’s-style peach chutney.',
    heritageNote: 'A centuries-old Cape Malay icon blending sweet, savory, and aromatic warm spices.',
    tags: ['Cape Heritage'],
    pairing: 'Simonsig Chenin Blanc',
  },
  {
    id: 'boerewors-pap',
    name: 'Artisan Boerewors & Chakalaka',
    category: 'traditional',
    price: 135,
    description: 'Thick spiral of pure beef and coriander boerewors charred over coals, accompanied by spicy braised bean chakalaka and fluffy white pap.',
    tags: ['Braai Classic'],
    spicyLevel: 1,
    pairing: 'Cold Castle Milk Stout',
  },

  // STARTERS & SMALL PLATES
  {
    id: 'beef-samosas',
    name: 'Crispy Spiced Samosas (4 pcs)',
    category: 'starters',
    price: 75,
    description: 'Handmade flaky pastry triangles stuffed with spiced ground beef, cumin, and fresh cilantro, served with sweet chili peach atchar dip.',
    tags: ['Sharing', 'Crisp'],
    spicyLevel: 1,
  },
  {
    id: 'peri-peri-wings',
    name: 'Sticky Peri-Peri Drumettes',
    category: 'starters',
    price: 88,
    description: 'Deep-fried chicken wings tossed in our signature smoky peri-peri glaze with sesame seeds and fresh scallions.',
    tags: ['Fiery', 'Popular'],
    spicyLevel: 2,
  },
  {
    id: 'calamari-tubes',
    name: 'Pan-Seared Fox Street Calamari',
    category: 'starters',
    price: 98,
    description: 'Tender baby calamari tubes flash-fried with chili garlic butter, fresh parsley, and smoked paprika, served with lemon herb aioli.',
    tags: ['Seafood'],
    pairing: 'Crisp Sauvignon Blanc',
  },
  {
    id: 'halloumi-skewers',
    name: 'Grilled Halloumi & Sweet Peppadews',
    category: 'starters',
    price: 85,
    description: 'Thick slabs of golden Cypriot halloumi pan-seared with indigenous sweet piquant peppadew peppers and wild rocket.',
    tags: ['Vegetarian'],
  },
  {
    id: 'vetkoek-sliders',
    name: 'Mini Maboneng Vetkoek Sliders (3 pcs)',
    category: 'starters',
    price: 82,
    description: 'Freshly fried golden dough balls filled with savory curried beef mince, pickled red onions, and coriander chutney.',
    tags: ['Street Food'],
    isChefSpecial: true,
  },

  // GRILLS & CUTS
  {
    id: 't-bone-steak',
    name: 'Prime T-Bone Steak 400g',
    category: 'grills',
    price: 220,
    description: 'Dry-aged 400g grass-fed beef T-bone seared on high-heat flame grill, brushed with herb butter, served with rustic skin-on chips and creamy mushroom biltong sauce.',
    tags: ['Flame Grilled', 'Butcher Cut'],
    pairing: 'The Chocolate Block Red Blend',
    isChefSpecial: true,
  },
  {
    id: 'char-grilled-ribs',
    name: 'Smoky Honey-Glazed Pork Ribs 600g',
    category: 'grills',
    price: 210,
    description: 'Fall-apart pork ribs slow-smoked and basted with sticky rooibos-honey barbecue reduction, served with crunchy purple cabbage slaw.',
    tags: ['Finger Licking'],
  },
  {
    id: 'grilled-kingklip',
    name: 'Pan-Grilled Cape Kingklip',
    category: 'grills',
    price: 195,
    description: 'Sustainably caught South African Kingklip fillet pan-seared in lemon caper butter, served with crushed baby potatoes and braised green beans.',
    tags: ['Ocean Catch', 'Gluten Friendly'],
    pairing: 'Bouchard Finlayson Chardonnay',
  },
  {
    id: 'sirloin-biltong',
    name: 'Aged Sirloin with Biltong Crust 300g',
    category: 'grills',
    price: 185,
    description: 'Tender sirloin steak topped with finely shaved artisanal coriander biltong dust and Madagascar green peppercorn cream sauce.',
    tags: ['South African Original'],
  },

  // PLATTERS TO SHARE
  {
    id: 'fox-street-feast',
    name: 'The Fox Street Grand Feast (Serves 3-4)',
    category: 'platters',
    price: 460,
    description: 'The ultimate Pata Pata experience: spiral boerewors, spicy peri-peri wings, BBQ brisket strips, braised pork ribs, steamed bread (jeqe), chakalaka, and hand-cut chips.',
    heritageNote: 'Named for the vibrant, bustling street right outside our front terrace doors.',
    tags: ['Grand Platter', 'Ideal for Live Jazz Groups'],
    isChefSpecial: true,
  },
  {
    id: 'butcher-tasting-board',
    name: 'Pata Pata Meat Lover’s Board (Serves 2)',
    category: 'platters',
    price: 320,
    description: 'Grilled lamb chops, flame-basted boerewors, peri-peri chicken quarters, served with hot pap balls and spicy tomato gravy.',
    tags: ['Meat Board', 'Braai Vibe'],
  },
  {
    id: 'veggie-mezze-platter',
    name: 'Maboneng Garden Mezze Board (Serves 2)',
    category: 'platters',
    price: 220,
    description: 'Grilled halloumi, roasted butternut wedges, spicy chakalaka, chickpea hummus, toasted pita strips, and sweet peppadew relish.',
    tags: ['Vegetarian', 'Sharing'],
  },

  // BURGERS & SANDWICHES
  {
    id: 'maboneng-burger',
    name: 'The Maboneng Signature Burger',
    category: 'burgers',
    price: 135,
    description: '200g hand-pressed pure beef patty on toasted brioche with mature white cheddar, caramelized onions, crispy bacon, and smoky barbecue aioli.',
    tags: ['House Classic'],
  },
  {
    id: 'oxtail-gourmet-roll',
    name: 'Pulled Oxtail Brioche Roll',
    category: 'burgers',
    price: 148,
    description: 'Shredded 6-hour braised oxtail meat tossed in rich gravy, topped with tangy house pickles and crisp rocket on a toasted roll.',
    tags: ['Gourmet', 'Unique'],
    isChefSpecial: true,
  },
  {
    id: 'peri-chicken-burger',
    name: 'Crispy Peri-Peri Chicken Burger',
    category: 'burgers',
    price: 125,
    description: 'Crunchy battered buttermilk chicken breast bathed in spicy peri-peri glaze with creamy apple-jalapeno slaw.',
    tags: ['Spicy Crunch'],
    spicyLevel: 2,
  },

  // DESSERTS
  {
    id: 'malva-pudding',
    name: 'Warm Cape Malva Pudding',
    category: 'desserts',
    price: 68,
    description: 'Caramelized spongy apricot pudding drenched in hot butterscotch cream syrup, served with velvety warm vanilla custard and bean ice cream.',
    heritageNote: 'A national treasure baked in South African kitchens since the 17th century.',
    tags: ['Heritage Legend', 'Must Try'],
    isChefSpecial: true,
  },
  {
    id: 'amarula-creme-brulee',
    name: 'Amarula Liqueur Crème Brûlée',
    category: 'desserts',
    price: 75,
    description: 'Velvety baked custard infused with indigenous Marula wild fruit cream liqueur, topped with a crackling caramelized sugar crust.',
    tags: ['Decadent'],
  },
  {
    id: 'koeksister-bites',
    name: 'Mini Spiced Koeksister Bites',
    category: 'desserts',
    price: 60,
    description: 'Traditional braided fried pastries plunged ice-cold into cinnamon ginger syrup, served with a shot of double espresso or rooibos tea.',
    tags: ['Traditional Sweet'],
  },

  // COCKTAILS & CELLAR
  {
    id: 'miriam-makeba-cocktail',
    name: 'The Miriam Makeba Cocktail',
    category: 'drinks',
    price: 95,
    description: 'Tanqueray gin, fresh passion fruit puree, elderflower cordial, pressed lime, topped with sparkling South African MCC and a dehydrated orange wheel.',
    heritageNote: 'Our tribute to Mama Africa, whose voice and iconic 1967 song gives our restaurant its beating heart.',
    tags: ['Signature Cocktail'],
    isChefSpecial: true,
  },
  {
    id: 'sophiatown-sunset',
    name: 'Sophiatown Sunset Spritz',
    category: 'drinks',
    price: 90,
    description: 'Aperol, rooibos tea infusion, blood orange liqueur, topped with dry sparkling wine and club soda over crushed ice.',
    tags: ['Sparkly Orange Accent', 'Refreshing'],
  },
  {
    id: 'maboneng-mule',
    name: 'Maboneng Craft Mule',
    category: 'drinks',
    price: 85,
    description: 'Smirnoff vodka, spicy artisanal ginger beer, fresh lime juice, Angostura bitters, served in our iconic 1960s vintage tin mug.',
    tags: ['House Favorite'],
  },
  {
    id: 'kanonkop-kadette',
    name: 'Kanonkop Kadette Pinotage (Bottle / Glass)',
    category: 'drinks',
    price: 75,
    description: 'Bottle R280 / Glass R75. Iconic Stellenbosch Pinotage showcasing blackberry, mocha, and subtle smoky cedar spice.',
    tags: ['Wine by Glass'],
  },
  {
    id: 'soweto-gold-draft',
    name: 'Soweto Gold Superior Lager (Pint 500ml)',
    category: 'drinks',
    price: 48,
    description: 'Crisp, golden local craft lager brewed with noble hops for an easy-drinking, malt-forward township finish.',
    tags: ['Craft On Tap'],
  },
];
