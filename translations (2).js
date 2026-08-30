/**
 * LANGUAGE SWITCHER — Eve's Wardrobe Rescue
 * --------------------------------------------
 * Scans the page once on load, remembers the original English wording of
 * each piece of text, then swaps it for a translation when a language is
 * chosen — either from the first-visit popup, or later from the Settings
 * button in the nav.
 *
 * FIX from last version: two dictionary keys had stray leading/trailing
 * spaces that didn't match the trimmed lookup, so parts of the hero
 * sentence silently stayed in English. Fixed below.
 *
 * Also expanded to cover the full quality checklist, the About section,
 * the unsold-item section, and the footer — not just headings and nav.
 */

const translations = {
  es: {
    "How it works": "Cómo funciona",
    "What to send": "Qué enviar",
    "Charities": "Organizaciones benéficas",
    "Get in touch": "Contacto",
    "Check status": "Ver estado",
    "Second-hand items, sold for you": "Artículos de segunda mano, vendidos por ti",
    "Your old items are": "Tus cosas antiguas son",
    "somebody's": "el objeto favorito",
    "favourite thing.": "de alguien más.",
    "Send me the items you've stopped using or wearing. I photograph them, list them on Vinted, answer the messages and post the parcels. You keep half the money, a charity you pick gets a fifth, and you never touch a packing tape roll.": "Envíame los artículos que ya no usas. Los fotografío, los publico en Vinted, respondo los mensajes y envío los paquetes. Te quedas con la mitad del dinero, una organización benéfica que elijas recibe una quinta parte, y tú no tocas ni un rollo de cinta.",
    "See how it works": "Ver cómo funciona",
    "Send me your items": "Envíame tus artículos",
    "Where the money goes": "A dónde va el dinero",
    "Every sale splits three ways.": "Cada venta se divide en tres partes.",
    "No hidden fees, no small print. Type a price into the tag below and watch it divide itself up.": "Sin comisiones ocultas, sin letra pequeña. Escribe un precio abajo y mira cómo se divide.",
    "If an item sells for…": "Si un artículo se vende por…",
    "You keep": "Tú te quedas con",
    "I keep": "Yo me quedo con",
    "Your charity gets": "Tu organización benéfica recibe",
    "To you": "Para ti",
    "To me, for the work": "Para mí, por el trabajo",
    "To your charity": "Para tu organización benéfica",
    "Step by step": "Paso a paso",
    "Five steps. You do two of them.": "Cinco pasos. Tú haces dos de ellos.",
    "Message me": "Escríbeme",
    "Tell me roughly what you've got and send a few photos. I'll tell you honestly what's likely to sell and what isn't, before you post anything.": "Cuéntame más o menos qué tienes y envía algunas fotos. Te diré con honestidad qué es probable que se venda y qué no, antes de que envíes nada.",
    "Check it against the label": "Compruébalo con la etiqueta",
    "Have a proper look at each item in daylight, using the checklist below. This is the step that decides whether your items sell for a good price or sit there.": "Revisa bien cada artículo con luz natural, usando la lista de abajo. Este paso decide si tus artículos se venden a buen precio o se quedan sin vender.",
    "Post it to me": "Envíamelo por correo",
    "I'll send you the address privately once we've agreed. Pop in a note saying which charity you'd like your 20% to go to.": "Te enviaré la dirección en privado una vez que estemos de acuerdo. Incluye una nota diciendo a qué organización quieres que vaya tu 20%.",
    "I do the boring bit": "Yo hago la parte aburrida",
    "Photographing, measuring, writing descriptions, pricing, answering questions, haggling politely, packing and posting. I set prices based on my successful previous sales. This is the part that takes hours, and it's the part you're paying me 30% for.": "Fotografiar, medir, escribir descripciones, poner precios, responder preguntas, negociar con educación, empaquetar y enviar. Fijo los precios según mis ventas anteriores exitosas. Esta es la parte que lleva horas, y por la que me pagas el 30%.",
    "You get paid": "Recibes tu pago",
    "Within five days of the money clearing on Vinted, I send you your 50% and send your charity its 20%. I'll show you the sale so you can see the price for yourself.": "En un plazo de cinco días desde que el dinero se confirma en Vinted, te envío tu 50% y a tu organización su 20%. Te mostraré la venta para que veas el precio tú mismo.",
    "Read this before you post": "Lee esto antes de enviar",
    "What I can and can't sell.": "Lo que puedo y no puedo vender.",
    "Vinted buyers leave honest reviews. One item with a stain on it can damage the rating that every other seller on this page depends on — so please check carefully. If you're not sure, send a photo and ask.": "Los compradores de Vinted dejan reseñas honestas. Un artículo con una mancha puede dañar la valoración de la que dependen todos los demás vendedores de esta página, así que revisa con cuidado. Si no estás seguro, envía una foto y pregunta.",
    "What I take: Clothes, shoes, bags, belts, scarves, jewellery, toys, and home items. I don't currently take beauty products or furniture, since they need extra care to sell safely and I want to do a great job with what I do take.": "Lo que acepto: ropa, calzado, bolsos, cinturones, bufandas, joyería, juguetes y artículos para el hogar. Por ahora no acepto productos de belleza ni muebles, ya que necesitan cuidados extra para venderse con seguridad y quiero hacer un buen trabajo con lo que sí acepto.",
    "EVE'S WARDROBE RESCUE — QUALITY CHECK — PLEASE READ BEFORE POSTING": "EVE'S WARDROBE RESCUE — CONTROL DE CALIDAD — LEE ESTO ANTES DE ENVIAR",
    "PLEASE SEND": "POR FAVOR, ENVÍA",
    "PLEASE DON'T SEND": "POR FAVOR, NO ENVÍES",
    "Clean and freshly washed": "Limpio y recién lavado",
    "All buttons, zips and clasps working": "Todos los botones, cremalleras y cierres funcionando",
    "Shape still good, no sagging": "Forma en buen estado, sin deformaciones",
    "Colour still strong": "Color todavía intenso",
    "Brand label still readable": "Etiqueta de marca todavía legible",
    "Shoes with no major sole wear": "Zapatos sin desgaste importante en la suela",
    "Bags with clean linings, no rips": "Bolsos con forro limpio, sin roturas",
    "Jewellery in working condition (clasps, chains intact)": "Joyería en buen estado (cierres y cadenas intactos)",
    "Toys with all original pieces and parts": "Juguetes con todas sus piezas originales",
    "Battery toys tested and working": "Juguetes con pilas probados y funcionando",
    "Home items clean, with no cracks or damage": "Artículos para el hogar limpios, sin grietas ni daños",
    "Anything you'd happily buy yourself": "Cualquier cosa que tú mismo comprarías encantado",
    "Stains, marks or discolouring": "Manchas o decoloración",
    "Holes, rips or unravelling seams": "Agujeros, roturas o costuras deshechas",
    "Broken zips or missing buttons": "Cremalleras rotas o botones que faltan",
    "Bobbling or pilling": "Bolitas o pelusa en la tela",
    "Stretched cuffs or necklines": "Puños o cuellos estirados",
    "Smoke, damp or perfume smells": "Olor a humo, humedad o perfume",
    "Faded or heavily washed-out colour": "Color desteñido o muy lavado",
    "Counterfeit or fake designer items": "Artículos de diseñador falsificados",
    "Shoes with worn-down soles or heels": "Zapatos con suelas o tacones muy desgastados",
    "Bags with broken zips or stained linings": "Bolsos con cremalleras rotas o forro manchado",
    "Costume jewellery that's tarnished or missing stones": "Bisutería deslucida o con piedras que faltan",
    "Toys missing pieces or parts": "Juguetes a los que les faltan piezas",
    "Recalled toys, or anything with a safety warning": "Juguetes retirados del mercado o con aviso de seguridad",
    "Cracked, chipped, or broken home items": "Artículos para el hogar agrietados, rotos o dañados",
    "ANYTHING THAT ARRIVES IN UNSELLABLE CONDITION WILL BE PASSED TO A TEXTILE RECYCLING BANK RATHER THAN LISTED. I'LL ALWAYS TELL YOU IF THIS HAPPENS.": "TODO LO QUE LLEGUE EN CONDICIONES NO APTAS PARA LA VENTA SE ENTREGARÁ A UN PUNTO DE RECICLAJE TEXTIL EN LUGAR DE PUBLICARSE. SIEMPRE TE AVISARÉ SI ESTO OCURRE.",
    "You choose": "Tú eliges",
    "Pick where your 20% goes.": "Elige a dónde va tu 20%.",
    "Every seller chooses their cause when they send their parcel. Three options, because more than three makes it hard to decide.": "Cada vendedor elige su causa al enviar su paquete. Tres opciones, porque más de tres hace que decidir sea difícil.",
    "Option one": "Opción uno",
    "Option two": "Opción dos",
    "Option three": "Opción tres",
    "After 60 days": "Después de 60 días",
    "What if something doesn't sell?": "¿Y si algo no se vende?",
    "Some things just don't find a buyer, however good they are. If an item is still listed after 60 days, I'll message you and you choose what happens next. Nothing gets thrown away, and I never decide for you.": "Algunas cosas simplemente no encuentran comprador, por buenas que sean. Si un artículo sigue publicado después de 60 días, te escribiré y tú decides qué pasa después. Nada se tira, y yo nunca decido por ti.",
    "Send it back to me": "Devuélvemelo",
    "I'll pack it up and post it home. You cover the return postage, and I'll tell you exactly what it costs before I send it.": "Lo empaquetaré y lo enviaré a tu casa. Tú cubres el envío de vuelta, y te diré exactamente cuánto cuesta antes de enviarlo.",
    "Donate it to charity": "Donarlo a la organización benéfica",
    "I'll take it to a charity shop and send you a photo of the donation. Free, and the items still do some good.": "Lo llevaré a una tienda benéfica y te enviaré una foto de la donación. Es gratis, y los artículos igual hacen el bien.",
    "If I don't hear back within 14 days of asking, I'll go with option B and let you know.": "Si no recibo respuesta en 14 días desde que pregunte, elegiré la opción B y te avisaré.",
    "Who's behind this": "Quién está detrás de esto",
    "Hi, I'm Eve.": "Hola, soy Eve.",
    "I'm nine. I love technology and coding, and I built this entire website myself — the layout, the colours, the rainbow, the little calculator further up the page.": "Tengo nueve años. Me encanta la tecnología y programar, y construí toda esta página web yo misma: el diseño, los colores, el arcoíris, la pequeña calculadora más arriba en la página.",
    "I started selling items for one person, a friend's mum, and it turned out I was quite good at it. So I'm doing it properly now: for other people, with a proper split, and with a chunk going to causes that get technology to kids who don't have it.": "Empecé vendiendo artículos para una sola persona, la mamá de una amiga, y resultó que se me daba bastante bien. Así que ahora lo hago en serio: para más personas, con un reparto justo, y con una parte destinada a causas que llevan tecnología a niños que no la tienen.",
    "My account is set up and supervised by a parent, because Vinted is for over-18s. They handle the money and the address. I do the selling.": "Mi cuenta está configurada y supervisada por un adulto, porque Vinted es solo para mayores de 18 años. Ellos gestionan el dinero y la dirección. Yo me encargo de vender.",
    "You're not just clearing out a wardrobe. You're buying a laptop for a school that doesn't have one.": "No solo estás vaciando un armario. Estás comprando un portátil para una escuela que no tiene uno.",
    "Get started": "Empezar",
    "Send me your items.": "Envíame tus artículos.",
    "Fill this in and it'll open your email app with everything already written. I'll reply with the address and answer any questions first.": "Rellena esto y se abrirá tu aplicación de correo con todo ya escrito. Te responderé con la dirección y contestaré cualquier pregunta primero.",
    "Your name": "Tu nombre",
    "What have you got?": "¿Qué tienes?",
    "Which charity would you like?": "¿Qué organización benéfica prefieres?",
    "Write my email": "Escribir mi correo",
    "Or email me directly at": "O escríbeme directamente a",
    "replace this with your real address.": "sustituye esto con tu dirección real.",
    "Eve's Wardrobe Rescue — pre-loved, re-loved.": "Eve's Wardrobe Rescue — querido antes, querido de nuevo.",
    "Items are listed on Vinted through an adult-supervised account, as Vinted requires all account holders to be 18 or over. Sale prices are set by me and shown to you. Charity payments are made monthly and totals are published on this page.": "Los artículos se publican en Vinted a través de una cuenta supervisada por un adulto, ya que Vinted exige que todos los titulares de cuenta sean mayores de 18 años. Los precios de venta los fijo yo y te los muestro. Los pagos a organizaciones benéficas se hacen mensualmente y los totales se publican en esta página.",
    "pre-loved, re-loved": "querido antes, querido de nuevo"
  },

  fr: {
    "How it works": "Comment ça marche",
    "What to send": "Quoi envoyer",
    "Charities": "Associations caritatives",
    "Get in touch": "Nous contacter",
    "Check status": "Vérifier le statut",
    "Second-hand items, sold for you": "Articles d'occasion, vendus pour vous",
    "Your old items are": "Vos anciens objets sont",
    "somebody's": "la chose préférée",
    "favourite thing.": "de quelqu'un d'autre.",
    "Send me the items you've stopped using or wearing. I photograph them, list them on Vinted, answer the messages and post the parcels. You keep half the money, a charity you pick gets a fifth, and you never touch a packing tape roll.": "Envoyez-moi les objets que vous n'utilisez plus. Je les photographie, les mets en ligne sur Vinted, réponds aux messages et poste les colis. Vous gardez la moitié de l'argent, une association que vous choisissez reçoit un cinquième, et vous ne touchez jamais un rouleau de scotch.",
    "See how it works": "Voir comment ça marche",
    "Send me your items": "Envoyez-moi vos articles",
    "Where the money goes": "Où va l'argent",
    "Every sale splits three ways.": "Chaque vente se divise en trois parts.",
    "No hidden fees, no small print. Type a price into the tag below and watch it divide itself up.": "Pas de frais cachés, pas de petits caractères. Tapez un prix ci-dessous et regardez-le se diviser.",
    "If an item sells for…": "Si un article se vend…",
    "You keep": "Vous gardez",
    "I keep": "Je garde",
    "Your charity gets": "Votre association reçoit",
    "To you": "Pour vous",
    "To me, for the work": "Pour moi, pour le travail",
    "To your charity": "Pour votre association",
    "Step by step": "Étape par étape",
    "Five steps. You do two of them.": "Cinq étapes. Vous en faites deux.",
    "Message me": "Écrivez-moi",
    "Tell me roughly what you've got and send a few photos. I'll tell you honestly what's likely to sell and what isn't, before you post anything.": "Dites-moi en gros ce que vous avez et envoyez quelques photos. Je vous dirai honnêtement ce qui a des chances de se vendre ou non, avant que vous n'envoyiez quoi que ce soit.",
    "Check it against the label": "Vérifiez selon l'étiquette",
    "Have a proper look at each item in daylight, using the checklist below. This is the step that decides whether your items sell for a good price or sit there.": "Examinez bien chaque article à la lumière du jour, à l'aide de la liste ci-dessous. C'est cette étape qui détermine si vos articles se vendent bien ou restent sans acheteur.",
    "Post it to me": "Postez-le-moi",
    "I'll send you the address privately once we've agreed. Pop in a note saying which charity you'd like your 20% to go to.": "Je vous enverrai l'adresse en privé une fois que nous serons d'accord. Ajoutez un mot indiquant à quelle association vous souhaitez que vos 20% aillent.",
    "I do the boring bit": "Je fais la partie ennuyeuse",
    "Photographing, measuring, writing descriptions, pricing, answering questions, haggling politely, packing and posting. I set prices based on my successful previous sales. This is the part that takes hours, and it's the part you're paying me 30% for.": "Photographier, mesurer, rédiger les descriptions, fixer les prix, répondre aux questions, négocier poliment, emballer et poster. Je fixe les prix selon mes ventes précédentes réussies. C'est la partie qui prend des heures, et c'est pour cela que vous me payez 30%.",
    "You get paid": "Vous êtes payé(e)",
    "Within five days of the money clearing on Vinted, I send you your 50% and send your charity its 20%. I'll show you the sale so you can see the price for yourself.": "Dans les cinq jours suivant la réception de l'argent sur Vinted, je vous envoie vos 50% et 20% à votre association. Je vous montrerai la vente pour que vous voyiez le prix vous-même.",
    "Read this before you post": "Lisez ceci avant d'envoyer",
    "What I can and can't sell.": "Ce que je peux et ne peux pas vendre.",
    "Vinted buyers leave honest reviews. One item with a stain on it can damage the rating that every other seller on this page depends on — so please check carefully. If you're not sure, send a photo and ask.": "Les acheteurs sur Vinted laissent des avis honnêtes. Un article taché peut nuire à la note dont dépendent tous les autres vendeurs de cette page — merci donc de vérifier soigneusement. En cas de doute, envoyez une photo et demandez.",
    "What I take: Clothes, shoes, bags, belts, scarves, jewellery, toys, and home items. I don't currently take beauty products or furniture, since they need extra care to sell safely and I want to do a great job with what I do take.": "Ce que j'accepte : vêtements, chaussures, sacs, ceintures, écharpes, bijoux, jouets et objets pour la maison. Je n'accepte pas actuellement les produits de beauté ni les meubles, car ils demandent un soin particulier pour être vendus en toute sécurité, et je veux faire du bon travail avec ce que j'accepte.",
    "EVE'S WARDROBE RESCUE — QUALITY CHECK — PLEASE READ BEFORE POSTING": "EVE'S WARDROBE RESCUE — CONTRÔLE QUALITÉ — À LIRE AVANT D'ENVOYER",
    "PLEASE SEND": "À ENVOYER",
    "PLEASE DON'T SEND": "À NE PAS ENVOYER",
    "Clean and freshly washed": "Propre et fraîchement lavé",
    "All buttons, zips and clasps working": "Boutons, fermetures éclair et fermoirs fonctionnels",
    "Shape still good, no sagging": "Forme encore bonne, ne se déforme pas",
    "Colour still strong": "Couleur encore vive",
    "Brand label still readable": "Étiquette de marque encore lisible",
    "Shoes with no major sole wear": "Chaussures sans usure importante de la semelle",
    "Bags with clean linings, no rips": "Sacs à doublure propre, sans déchirure",
    "Jewellery in working condition (clasps, chains intact)": "Bijoux en bon état (fermoirs, chaînes intacts)",
    "Toys with all original pieces and parts": "Jouets avec toutes leurs pièces d'origine",
    "Battery toys tested and working": "Jouets à piles testés et fonctionnels",
    "Home items clean, with no cracks or damage": "Objets pour la maison propres, sans fissure ni dommage",
    "Anything you'd happily buy yourself": "Tout ce que vous achèteriez vous-même avec plaisir",
    "Stains, marks or discolouring": "Taches, marques ou décoloration",
    "Holes, rips or unravelling seams": "Trous, déchirures ou coutures défaites",
    "Broken zips or missing buttons": "Fermetures éclair cassées ou boutons manquants",
    "Bobbling or pilling": "Bouloches",
    "Stretched cuffs or necklines": "Poignets ou encolures détendus",
    "Smoke, damp or perfume smells": "Odeurs de fumée, d'humidité ou de parfum",
    "Faded or heavily washed-out colour": "Couleur délavée ou très défraîchie",
    "Counterfeit or fake designer items": "Articles de contrefaçon",
    "Shoes with worn-down soles or heels": "Chaussures aux semelles ou talons très usés",
    "Bags with broken zips or stained linings": "Sacs à fermeture cassée ou doublure tachée",
    "Costume jewellery that's tarnished or missing stones": "Bijoux fantaisie ternis ou avec des pierres manquantes",
    "Toys missing pieces or parts": "Jouets auxquels il manque des pièces",
    "Recalled toys, or anything with a safety warning": "Jouets rappelés ou avec un avertissement de sécurité",
    "Cracked, chipped, or broken home items": "Objets pour la maison fissurés, ébréchés ou cassés",
    "ANYTHING THAT ARRIVES IN UNSELLABLE CONDITION WILL BE PASSED TO A TEXTILE RECYCLING BANK RATHER THAN LISTED. I'LL ALWAYS TELL YOU IF THIS HAPPENS.": "TOUT CE QUI ARRIVE DANS UN ÉTAT INVENDABLE SERA DONNÉ À UN POINT DE RECYCLAGE TEXTILE PLUTÔT QUE MIS EN VENTE. JE VOUS PRÉVIENDRAI TOUJOURS SI CELA ARRIVE.",
    "You choose": "Vous choisissez",
    "Pick where your 20% goes.": "Choisissez où va votre 20%.",
    "Every seller chooses their cause when they send their parcel. Three options, because more than three makes it hard to decide.": "Chaque vendeur choisit sa cause en envoyant son colis. Trois options, car au-delà, c'est difficile de choisir.",
    "Option one": "Option un",
    "Option two": "Option deux",
    "Option three": "Option trois",
    "After 60 days": "Après 60 jours",
    "What if something doesn't sell?": "Et si quelque chose ne se vend pas ?",
    "Some things just don't find a buyer, however good they are. If an item is still listed after 60 days, I'll message you and you choose what happens next. Nothing gets thrown away, and I never decide for you.": "Certaines choses ne trouvent tout simplement pas preneur, aussi bonnes soient-elles. Si un article est encore en vente après 60 jours, je vous écrirai et vous déciderez de la suite. Rien n'est jeté, et je ne décide jamais à votre place.",
    "Send it back to me": "Renvoyez-le-moi",
    "I'll pack it up and post it home. You cover the return postage, and I'll tell you exactly what it costs before I send it.": "Je l'emballerai et vous le renverrai chez vous. Vous prenez en charge les frais de retour, et je vous dirai exactement combien cela coûte avant de l'envoyer.",
    "Donate it to charity": "Faites-en don à une association",
    "I'll take it to a charity shop and send you a photo of the donation. Free, and the items still do some good.": "Je l'apporterai dans une boutique caritative et vous enverrai une photo du don. C'est gratuit, et l'article fait quand même du bien.",
    "If I don't hear back within 14 days of asking, I'll go with option B and let you know.": "Si je n'ai pas de réponse dans les 14 jours suivant ma demande, je choisirai l'option B et vous le ferai savoir.",
    "Who's behind this": "Qui se cache derrière tout ça",
    "Hi, I'm Eve.": "Salut, je suis Eve.",
    "I'm nine. I love technology and coding, and I built this entire website myself — the layout, the colours, the rainbow, the little calculator further up the page.": "J'ai neuf ans. J'adore la technologie et la programmation, et j'ai construit ce site entièrement moi-même : la mise en page, les couleurs, l'arc-en-ciel, la petite calculatrice plus haut sur la page.",
    "I started selling items for one person, a friend's mum, and it turned out I was quite good at it. So I'm doing it properly now: for other people, with a proper split, and with a chunk going to causes that get technology to kids who don't have it.": "J'ai commencé en vendant des objets pour une seule personne, la maman d'une amie, et il s'est avéré que j'étais plutôt douée pour ça. Alors je le fais sérieusement maintenant : pour d'autres personnes, avec un partage équitable, et avec une part qui va à des causes qui apportent la technologie à des enfants qui n'y ont pas accès.",
    "My account is set up and supervised by a parent, because Vinted is for over-18s. They handle the money and the address. I do the selling.": "Mon compte est créé et supervisé par un parent, car Vinted est réservé aux plus de 18 ans. Ils gèrent l'argent et l'adresse. Je m'occupe de la vente.",
    "You're not just clearing out a wardrobe. You're buying a laptop for a school that doesn't have one.": "Vous ne faites pas que vider une armoire. Vous achetez un ordinateur portable pour une école qui n'en a pas.",
    "Get started": "Commencer",
    "Send me your items.": "Envoyez-moi vos articles.",
    "Fill this in and it'll open your email app with everything already written. I'll reply with the address and answer any questions first.": "Remplissez ceci et votre application e-mail s'ouvrira avec tout déjà rédigé. Je répondrai d'abord avec l'adresse et je répondrai à vos questions.",
    "Your name": "Votre nom",
    "What have you got?": "Qu'avez-vous ?",
    "Which charity would you like?": "Quelle association préférez-vous ?",
    "Write my email": "Rédiger mon e-mail",
    "Or email me directly at": "Ou écrivez-moi directement à",
    "replace this with your real address.": "remplacez ceci par votre vraie adresse.",
    "Eve's Wardrobe Rescue — pre-loved, re-loved.": "Eve's Wardrobe Rescue — aimé une fois, aimé à nouveau.",
    "Items are listed on Vinted through an adult-supervised account, as Vinted requires all account holders to be 18 or over. Sale prices are set by me and shown to you. Charity payments are made monthly and totals are published on this page.": "Les articles sont mis en ligne sur Vinted via un compte supervisé par un adulte, car Vinted exige que tous les titulaires de compte aient 18 ans ou plus. Les prix de vente sont fixés par moi et vous sont montrés. Les dons aux associations sont versés chaque mois et les totaux sont publiés sur cette page.",
    "pre-loved, re-loved": "aimé une fois, aimé à nouveau"
  },

  tr: {
    "How it works": "Nasıl çalışır",
    "What to send": "Ne göndermeli",
    "Charities": "Hayır kurumları",
    "Get in touch": "İletişime geç",
    "Check status": "Durumu kontrol et",
    "Second-hand items, sold for you": "İkinci el eşyalar, sizin için satılıyor",
    "Your old items are": "Eski eşyalarınız",
    "somebody's": "birinin",
    "favourite thing.": "en sevdiği şey olabilir.",
    "Send me the items you've stopped using or wearing. I photograph them, list them on Vinted, answer the messages and post the parcels. You keep half the money, a charity you pick gets a fifth, and you never touch a packing tape roll.": "Artık kullanmadığınız eşyaları bana gönderin. Fotoğraflarını çekerim, Vinted'de listelerim, mesajlara cevap veririm ve paketleri postalarım. Paranın yarısı size kalır, seçtiğiniz bir hayır kurumu beşte birini alır, siz koli bandına bile dokunmazsınız.",
    "See how it works": "Nasıl çalıştığını gör",
    "Send me your items": "Eşyalarınızı gönderin",
    "Where the money goes": "Para nereye gidiyor",
    "Every sale splits three ways.": "Her satış üç parçaya ayrılır.",
    "No hidden fees, no small print. Type a price into the tag below and watch it divide itself up.": "Gizli ücret yok, küçük yazı yok. Aşağıya bir fiyat yazın ve nasıl bölündüğünü görün.",
    "If an item sells for…": "Bir eşya şu fiyata satılırsa…",
    "You keep": "Siz alırsınız",
    "I keep": "Ben alırım",
    "Your charity gets": "Hayır kurumunuz alır",
    "To you": "Size",
    "To me, for the work": "Bana, emeğim için",
    "To your charity": "Hayır kurumunuza",
    "Step by step": "Adım adım",
    "Five steps. You do two of them.": "Beş adım. İkisini siz yaparsınız.",
    "Message me": "Bana mesaj at",
    "Tell me roughly what you've got and send a few photos. I'll tell you honestly what's likely to sell and what isn't, before you post anything.": "Neye sahip olduğunuzu kabaca anlatın ve birkaç fotoğraf gönderin. Siz göndermeden önce size dürüstçe neyin satılabileceğini söylerim.",
    "Check it against the label": "Etikete göre kontrol et",
    "Have a proper look at each item in daylight, using the checklist below. This is the step that decides whether your items sell for a good price or sit there.": "Gün ışığında her eşyaya aşağıdaki listeyle iyice bakın. Bu adım eşyalarınızın iyi bir fiyata satılıp satılmayacağını belirler.",
    "Post it to me": "Bana postala",
    "I'll send you the address privately once we've agreed. Pop in a note saying which charity you'd like your 20% to go to.": "Anlaştıktan sonra size adresi özel olarak göndereceğim. 20%'nizin hangi hayır kurumuna gitmesini istediğinizi belirten bir not ekleyin.",
    "I do the boring bit": "Sıkıcı kısmı ben yaparım",
    "Photographing, measuring, writing descriptions, pricing, answering questions, haggling politely, packing and posting. I set prices based on my successful previous sales. This is the part that takes hours, and it's the part you're paying me 30% for.": "Fotoğraf çekmek, ölçmek, açıklama yazmak, fiyat belirlemek, soruları yanıtlamak, kibarca pazarlık yapmak, paketlemek ve postalamak. Fiyatları önceki başarılı satışlarıma göre belirlerim. Saatler süren kısım burasıdır, ve bana 30% ödediğiniz kısım da budur.",
    "You get paid": "Ödemenizi alırsınız",
    "Within five days of the money clearing on Vinted, I send you your 50% and send your charity its 20%. I'll show you the sale so you can see the price for yourself.": "Para Vinted'de onaylandıktan sonraki beş gün içinde, size 50%'nizi ve hayır kurumunuza 20%'sini gönderirim. Fiyatı kendiniz görebilmeniz için satışı size gösteririm.",
    "Read this before you post": "Göndermeden önce bunu oku",
    "What I can and can't sell.": "Neyi satabilirim, neyi satamam.",
    "Vinted buyers leave honest reviews. One item with a stain on it can damage the rating that every other seller on this page depends on — so please check carefully. If you're not sure, send a photo and ask.": "Vinted alıcıları dürüst yorumlar bırakır. Lekeli bir eşya, bu sayfadaki tüm satıcıların bağlı olduğu puanı zedeleyebilir — bu yüzden lütfen dikkatlice kontrol edin. Emin değilseniz, bir fotoğraf gönderip sorun.",
    "What I take: Clothes, shoes, bags, belts, scarves, jewellery, toys, and home items. I don't currently take beauty products or furniture, since they need extra care to sell safely and I want to do a great job with what I do take.": "Neleri kabul ederim: kıyafet, ayakkabı, çanta, kemer, atkı, takı, oyuncak ve ev eşyaları. Şu anda güzellik ürünleri veya mobilya kabul etmiyorum, çünkü bunların güvenle satılması için ekstra özen gerekiyor ve kabul ettiğim şeylerle iyi bir iş çıkarmak istiyorum.",
    "EVE'S WARDROBE RESCUE — QUALITY CHECK — PLEASE READ BEFORE POSTING": "EVE'S WARDROBE RESCUE — KALİTE KONTROLÜ — GÖNDERMEDEN ÖNCE OKUYUN",
    "PLEASE SEND": "LÜTFEN GÖNDERİN",
    "PLEASE DON'T SEND": "LÜTFEN GÖNDERMEYİN",
    "Clean and freshly washed": "Temiz ve yeni yıkanmış",
    "All buttons, zips and clasps working": "Tüm düğmeler, fermuarlar ve tokalar çalışır durumda",
    "Shape still good, no sagging": "Formu hâlâ iyi, sarkma yok",
    "Colour still strong": "Rengi hâlâ canlı",
    "Brand label still readable": "Marka etiketi hâlâ okunabilir",
    "Shoes with no major sole wear": "Tabanında büyük aşınma olmayan ayakkabılar",
    "Bags with clean linings, no rips": "Astarı temiz, yırtık olmayan çantalar",
    "Jewellery in working condition (clasps, chains intact)": "Çalışır durumda takılar (tokalar, zincirler sağlam)",
    "Toys with all original pieces and parts": "Tüm orijinal parçaları olan oyuncaklar",
    "Battery toys tested and working": "Test edilmiş ve çalışan pilli oyuncaklar",
    "Home items clean, with no cracks or damage": "Çatlak veya hasar olmayan temiz ev eşyaları",
    "Anything you'd happily buy yourself": "Kendinizin de memnuniyetle satın alacağı her şey",
    "Stains, marks or discolouring": "Lekeler veya renk solması",
    "Holes, rips or unravelling seams": "Delikler, yırtıklar veya sökülen dikişler",
    "Broken zips or missing buttons": "Kırık fermuarlar veya eksik düğmeler",
    "Bobbling or pilling": "Yünlerde toplanma",
    "Stretched cuffs or necklines": "Uzamış manşet veya yaka",
    "Smoke, damp or perfume smells": "Duman, nem veya parfüm kokusu",
    "Faded or heavily washed-out colour": "Solmuş veya çok yıkanmış renk",
    "Counterfeit or fake designer items": "Sahte tasarımcı ürünleri",
    "Shoes with worn-down soles or heels": "Tabanı veya topuğu çok aşınmış ayakkabılar",
    "Bags with broken zips or stained linings": "Fermuarı kırık veya astarı lekeli çantalar",
    "Costume jewellery that's tarnished or missing stones": "Rengi solmuş veya taşı eksik bijuteri",
    "Toys missing pieces or parts": "Parçaları eksik oyuncaklar",
    "Recalled toys, or anything with a safety warning": "Geri çağrılmış oyuncaklar veya güvenlik uyarısı olanlar",
    "Cracked, chipped, or broken home items": "Çatlamış, kırılmış veya hasarlı ev eşyaları",
    "ANYTHING THAT ARRIVES IN UNSELLABLE CONDITION WILL BE PASSED TO A TEXTILE RECYCLING BANK RATHER THAN LISTED. I'LL ALWAYS TELL YOU IF THIS HAPPENS.": "SATILAMAYACAK DURUMDA GELEN HER ŞEY LİSTELENMEK YERİNE BİR TEKSTİL GERİ DÖNÜŞÜM NOKTASINA VERİLECEKTİR. BU DURUMDA SİZE HER ZAMAN HABER VERECEĞİM.",
    "You choose": "Siz seçin",
    "Pick where your 20% goes.": "20%'nizin nereye gideceğini seçin.",
    "Every seller chooses their cause when they send their parcel. Three options, because more than three makes it hard to decide.": "Her satıcı paketini gönderirken kendi amacını seçer. Üç seçenek var, çünkü daha fazlası kararı zorlaştırır.",
    "Option one": "Birinci seçenek",
    "Option two": "İkinci seçenek",
    "Option three": "Üçüncü seçenek",
    "After 60 days": "60 günden sonra",
    "What if something doesn't sell?": "Ya bir şey satılmazsa?",
    "Some things just don't find a buyer, however good they are. If an item is still listed after 60 days, I'll message you and you choose what happens next. Nothing gets thrown away, and I never decide for you.": "Bazı şeyler ne kadar iyi olursa olsun alıcı bulamaz. Bir eşya 60 gün sonra hâlâ listedeyse, size mesaj atarım ve sonrasına siz karar verirsiniz. Hiçbir şey çöpe atılmaz, ve sizin yerinize asla ben karar vermem.",
    "Send it back to me": "Bana geri gönderin",
    "I'll pack it up and post it home. You cover the return postage, and I'll tell you exactly what it costs before I send it.": "Onu paketleyip evinize postalarım. İade kargo ücretini siz karşılarsınız, göndermeden önce size tam olarak ne kadar tutacağını söylerim.",
    "Donate it to charity": "Hayır kurumuna bağışlayın",
    "I'll take it to a charity shop and send you a photo of the donation. Free, and the items still do some good.": "Onu bir hayır dükkanına götürüp size bağışın fotoğrafını gönderirim. Ücretsizdir, ve eşya yine de bir işe yarar.",
    "If I don't hear back within 14 days of asking, I'll go with option B and let you know.": "Sorduktan sonra 14 gün içinde cevap alamazsam, B seçeneğini uygularım ve size haber veririm.",
    "Who's behind this": "Bunun arkasında kim var",
    "Hi, I'm Eve.": "Merhaba, ben Eve.",
    "I'm nine. I love technology and coding, and I built this entire website myself — the layout, the colours, the rainbow, the little calculator further up the page.": "Dokuz yaşındayım. Teknolojiyi ve kod yazmayı çok seviyorum, ve bu siteyi tamamen kendim yaptım — tasarımı, renkleri, gökkuşağını, sayfanın yukarısındaki küçük hesap makinesini.",
    "I started selling items for one person, a friend's mum, and it turned out I was quite good at it. So I'm doing it properly now: for other people, with a proper split, and with a chunk going to causes that get technology to kids who don't have it.": "Bir arkadaşımın annesi için eşya satmaya başladım, ve bunda oldukça iyi olduğum ortaya çıktı. Şimdi bunu düzgünce yapıyorum: başka insanlar için, adil bir paylaşımla, ve bir kısmı teknolojisi olmayan çocuklara teknoloji ulaştıran amaçlara gidiyor.",
    "My account is set up and supervised by a parent, because Vinted is for over-18s. They handle the money and the address. I do the selling.": "Hesabım bir ebeveyn tarafından kurulmuş ve denetleniyor, çünkü Vinted 18 yaş üstü için. Parayı ve adresi onlar yönetiyor. Satışı ben yapıyorum.",
    "You're not just clearing out a wardrobe. You're buying a laptop for a school that doesn't have one.": "Sadece bir gardırobu boşaltmıyorsunuz. Bilgisayarı olmayan bir okula bir dizüstü bilgisayar alıyorsunuz.",
    "Get started": "Başlayalım",
    "Send me your items.": "Eşyalarınızı gönderin.",
    "Fill this in and it'll open your email app with everything already written. I'll reply with the address and answer any questions first.": "Bunu doldurun, e-posta uygulamanız her şey yazılmış olarak açılacak. Önce adresle cevap verip sorularınızı yanıtlayacağım.",
    "Your name": "Adınız",
    "What have you got?": "Neleriniz var?",
    "Which charity would you like?": "Hangi hayır kurumunu istersiniz?",
    "Write my email": "E-postamı yaz",
    "Or email me directly at": "Ya da doğrudan bana e-posta atın",
    "replace this with your real address.": "bunu gerçek adresinizle değiştirin.",
    "Eve's Wardrobe Rescue — pre-loved, re-loved.": "Eve's Wardrobe Rescue — önce sevildi, yeniden sevildi.",
    "Items are listed on Vinted through an adult-supervised account, as Vinted requires all account holders to be 18 or over. Sale prices are set by me and shown to you. Charity payments are made monthly and totals are published on this page.": "Eşyalar, Vinted'in tüm hesap sahiplerinin 18 yaş üstü olmasını gerektirmesi nedeniyle, bir yetişkin tarafından denetlenen bir hesap üzerinden listelenir. Satış fiyatlarını ben belirlerim ve size gösteririm. Hayır kurumu ödemeleri aylık yapılır ve toplamlar bu sayfada yayınlanır.",
    "pre-loved, re-loved": "önce sevildi, yeniden sevildi"
  },

  pt: {
    "How it works": "Como funciona",
    "What to send": "O que enviar",
    "Charities": "Instituições de caridade",
    "Get in touch": "Fale connosco",
    "Check status": "Ver estado",
    "Second-hand items, sold for you": "Artigos em segunda mão, vendidos por si",
    "Your old items are": "As suas coisas antigas são",
    "somebody's": "a coisa favorita",
    "favourite thing.": "de outra pessoa.",
    "Send me the items you've stopped using or wearing. I photograph them, list them on Vinted, answer the messages and post the parcels. You keep half the money, a charity you pick gets a fifth, and you never touch a packing tape roll.": "Envie-me os artigos que já não usa. Eu fotografo-os, publico-os no Vinted, respondo às mensagens e envio as encomendas. Fica com metade do dinheiro, uma instituição de caridade à sua escolha recebe um quinto, e nunca toca num rolo de fita adesiva.",
    "See how it works": "Ver como funciona",
    "Send me your items": "Envie-me os seus artigos",
    "Where the money goes": "Para onde vai o dinheiro",
    "Every sale splits three ways.": "Cada venda divide-se em três partes.",
    "No hidden fees, no small print. Type a price into the tag below and watch it divide itself up.": "Sem taxas escondidas, sem letras pequenas. Escreva um preço abaixo e veja como se divide.",
    "If an item sells for…": "Se um artigo vender por…",
    "You keep": "Fica com",
    "I keep": "Fico com",
    "Your charity gets": "A sua instituição recebe",
    "To you": "Para si",
    "To me, for the work": "Para mim, pelo trabalho",
    "To your charity": "Para a sua instituição",
    "Step by step": "Passo a passo",
    "Five steps. You do two of them.": "Cinco passos. Faz dois deles.",
    "Message me": "Envie-me uma mensagem",
    "Tell me roughly what you've got and send a few photos. I'll tell you honestly what's likely to sell and what isn't, before you post anything.": "Diga-me mais ou menos o que tem e envie algumas fotos. Direi honestamente o que é provável vender ou não, antes de enviar seja o que for.",
    "Check it against the label": "Verifique com a etiqueta",
    "Have a proper look at each item in daylight, using the checklist below. This is the step that decides whether your items sell for a good price or sit there.": "Observe bem cada artigo à luz do dia, usando a lista abaixo. Este passo decide se os seus artigos vendem por um bom preço ou ficam parados.",
    "Post it to me": "Envie-me pelo correio",
    "I'll send you the address privately once we've agreed. Pop in a note saying which charity you'd like your 20% to go to.": "Enviar-lhe-ei a morada em privado assim que estivermos de acordo. Inclua uma nota a dizer para que instituição quer que vá o seu 20%.",
    "I do the boring bit": "Eu faço a parte aborrecida",
    "Photographing, measuring, writing descriptions, pricing, answering questions, haggling politely, packing and posting. I set prices based on my successful previous sales. This is the part that takes hours, and it's the part you're paying me 30% for.": "Fotografar, medir, escrever descrições, definir preços, responder a perguntas, negociar com educação, embalar e enviar. Defino os preços com base nas minhas vendas anteriores bem-sucedidas. É esta a parte que demora horas, e é por isto que me paga 30%.",
    "You get paid": "Recebe o seu pagamento",
    "Within five days of the money clearing on Vinted, I send you your 50% and send your charity its 20%. I'll show you the sale so you can see the price for yourself.": "No prazo de cinco dias após o dinheiro ser confirmado no Vinted, envio-lhe o seu 50% e à sua instituição o seu 20%. Mostro-lhe a venda para que veja o preço você mesmo.",
    "Read this before you post": "Leia isto antes de enviar",
    "What I can and can't sell.": "O que posso e não posso vender.",
    "Vinted buyers leave honest reviews. One item with a stain on it can damage the rating that every other seller on this page depends on — so please check carefully. If you're not sure, send a photo and ask.": "Os compradores no Vinted deixam avaliações honestas. Um artigo com uma nódoa pode prejudicar a classificação de que todos os outros vendedores nesta página dependem — por isso, verifique com cuidado. Se não tiver certeza, envie uma foto e pergunte.",
    "What I take: Clothes, shoes, bags, belts, scarves, jewellery, toys, and home items. I don't currently take beauty products or furniture, since they need extra care to sell safely and I want to do a great job with what I do take.": "O que aceito: roupa, calçado, malas, cintos, cachecóis, joias, brinquedos e artigos para casa. Não aceito atualmente produtos de beleza nem mobília, pois precisam de cuidados extra para venderem com segurança, e quero fazer um bom trabalho com o que aceito.",
    "EVE'S WARDROBE RESCUE — QUALITY CHECK — PLEASE READ BEFORE POSTING": "EVE'S WARDROBE RESCUE — CONTROLO DE QUALIDADE — LEIA ANTES DE ENVIAR",
    "PLEASE SEND": "POR FAVOR ENVIE",
    "PLEASE DON'T SEND": "POR FAVOR NÃO ENVIE",
    "Clean and freshly washed": "Limpo e recém-lavado",
    "All buttons, zips and clasps working": "Todos os botões, fechos e fivelas a funcionar",
    "Shape still good, no sagging": "Forma ainda boa, sem deformações",
    "Colour still strong": "Cor ainda viva",
    "Brand label still readable": "Etiqueta da marca ainda legível",
    "Shoes with no major sole wear": "Sapatos sem desgaste significativo na sola",
    "Bags with clean linings, no rips": "Malas com forro limpo, sem rasgos",
    "Jewellery in working condition (clasps, chains intact)": "Joias em bom estado (fechos e correntes intactos)",
    "Toys with all original pieces and parts": "Brinquedos com todas as peças originais",
    "Battery toys tested and working": "Brinquedos a pilhas testados e a funcionar",
    "Home items clean, with no cracks or damage": "Artigos para casa limpos, sem fissuras ou danos",
    "Anything you'd happily buy yourself": "Qualquer coisa que você mesmo compraria com prazer",
    "Stains, marks or discolouring": "Nódoas, marcas ou descoloração",
    "Holes, rips or unravelling seams": "Buracos, rasgos ou costuras a desfazer-se",
    "Broken zips or missing buttons": "Fechos partidos ou botões em falta",
    "Bobbling or pilling": "Formação de borbotos",
    "Stretched cuffs or necklines": "Punhos ou decotes esticados",
    "Smoke, damp or perfume smells": "Cheiro a fumo, humidade ou perfume",
    "Faded or heavily washed-out colour": "Cor desbotada ou muito lavada",
    "Counterfeit or fake designer items": "Artigos de marca falsificados",
    "Shoes with worn-down soles or heels": "Sapatos com solas ou saltos muito gastos",
    "Bags with broken zips or stained linings": "Malas com fechos partidos ou forro manchado",
    "Costume jewellery that's tarnished or missing stones": "Bijuteria embaciada ou com pedras em falta",
    "Toys missing pieces or parts": "Brinquedos com peças em falta",
    "Recalled toys, or anything with a safety warning": "Brinquedos recolhidos ou com aviso de segurança",
    "Cracked, chipped, or broken home items": "Artigos para casa rachados, lascados ou partidos",
    "ANYTHING THAT ARRIVES IN UNSELLABLE CONDITION WILL BE PASSED TO A TEXTILE RECYCLING BANK RATHER THAN LISTED. I'LL ALWAYS TELL YOU IF THIS HAPPENS.": "TUDO O QUE CHEGAR EM CONDIÇÕES NÃO VENDÁVEIS SERÁ ENTREGUE A UM PONTO DE RECICLAGEM TÊXTIL EM VEZ DE SER PUBLICADO. AVISAREI SEMPRE SE ISTO ACONTECER.",
    "You choose": "Você escolhe",
    "Pick where your 20% goes.": "Escolha para onde vai o seu 20%.",
    "Every seller chooses their cause when they send their parcel. Three options, because more than three makes it hard to decide.": "Cada vendedor escolhe a sua causa ao enviar a encomenda. Três opções, porque mais do que isso torna a escolha difícil.",
    "Option one": "Opção um",
    "Option two": "Opção dois",
    "Option three": "Opção três",
    "After 60 days": "Após 60 dias",
    "What if something doesn't sell?": "E se algo não vender?",
    "Some things just don't find a buyer, however good they are. If an item is still listed after 60 days, I'll message you and you choose what happens next. Nothing gets thrown away, and I never decide for you.": "Algumas coisas simplesmente não encontram comprador, por muito boas que sejam. Se um artigo continuar publicado após 60 dias, envio-lhe uma mensagem e você decide o que acontece a seguir. Nada é deitado fora, e eu nunca decido por si.",
    "Send it back to me": "Devolva-mo",
    "I'll pack it up and post it home. You cover the return postage, and I'll tell you exactly what it costs before I send it.": "Embalo-o e envio-o para sua casa. Você cobre o envio de devolução, e digo-lhe exatamente quanto custa antes de o enviar.",
    "Donate it to charity": "Doe à instituição de caridade",
    "I'll take it to a charity shop and send you a photo of the donation. Free, and the items still do some good.": "Levo-o a uma loja de caridade e envio-lhe uma foto da doação. É grátis, e o artigo continua a fazer bem.",
    "If I don't hear back within 14 days of asking, I'll go with option B and let you know.": "Se não tiver resposta em 14 dias após perguntar, sigo com a opção B e aviso-o.",
    "Who's behind this": "Quem está por trás disto",
    "Hi, I'm Eve.": "Olá, sou a Eve.",
    "I'm nine. I love technology and coding, and I built this entire website myself — the layout, the colours, the rainbow, the little calculator further up the page.": "Tenho nove anos. Adoro tecnologia e programação, e construí este site inteiro sozinha — o layout, as cores, o arco-íris, a pequena calculadora mais acima na página.",
    "I started selling items for one person, a friend's mum, and it turned out I was quite good at it. So I'm doing it properly now: for other people, with a proper split, and with a chunk going to causes that get technology to kids who don't have it.": "Comecei a vender artigos para uma só pessoa, a mãe de uma amiga, e descobri que era bastante boa nisso. Por isso agora faço-o a sério: para outras pessoas, com uma divisão justa, e com uma parte a ir para causas que levam tecnologia a crianças que não a têm.",
    "My account is set up and supervised by a parent, because Vinted is for over-18s. They handle the money and the address. I do the selling.": "A minha conta é criada e supervisionada por um adulto, porque o Vinted é só para maiores de 18 anos. Eles tratam do dinheiro e da morada. Eu trato das vendas.",
    "You're not just clearing out a wardrobe. You're buying a laptop for a school that doesn't have one.": "Não está só a esvaziar um armário. Está a comprar um portátil para uma escola que não tem um.",
    "Get started": "Começar",
    "Send me your items.": "Envie-me os seus artigos.",
    "Fill this in and it'll open your email app with everything already written. I'll reply with the address and answer any questions first.": "Preencha isto e vai abrir a sua aplicação de e-mail com tudo já escrito. Responderei primeiro com a morada e responderei a quaisquer perguntas.",
    "Your name": "O seu nome",
    "What have you got?": "O que tem?",
    "Which charity would you like?": "Que instituição prefere?",
    "Write my email": "Escrever o meu e-mail",
    "Or email me directly at": "Ou escreva-me diretamente para",
    "replace this with your real address.": "substitua isto pelo seu endereço real.",
    "Eve's Wardrobe Rescue — pre-loved, re-loved.": "Eve's Wardrobe Rescue — já amado, amado outra vez.",
    "Items are listed on Vinted through an adult-supervised account, as Vinted requires all account holders to be 18 or over. Sale prices are set by me and shown to you. Charity payments are made monthly and totals are published on this page.": "Os artigos são publicados no Vinted através de uma conta supervisionada por um adulto, uma vez que o Vinted exige que todos os titulares de conta tenham 18 anos ou mais. Os preços de venda são definidos por mim e mostrados a si. Os pagamentos às instituições são feitos mensalmente e os totais são publicados nesta página.",
    "pre-loved, re-loved": "já amado, amado outra vez"
  },

  de: {
    "How it works": "So funktioniert's",
    "What to send": "Was du schicken kannst",
    "Charities": "Wohltätigkeitsorganisationen",
    "Get in touch": "Kontakt",
    "Check status": "Status prüfen",
    "Second-hand items, sold for you": "Second-Hand-Artikel, für dich verkauft",
    "Your old items are": "Deine alten Sachen sind",
    "somebody's": "jemandes",
    "favourite thing.": "neues Lieblingsstück.",
    "Send me the items you've stopped using or wearing. I photograph them, list them on Vinted, answer the messages and post the parcels. You keep half the money, a charity you pick gets a fifth, and you never touch a packing tape roll.": "Schick mir die Sachen, die du nicht mehr benutzt. Ich fotografiere sie, stelle sie auf Vinted ein, beantworte die Nachrichten und verschicke die Pakete. Du behältst die Hälfte des Geldes, eine von dir gewählte Organisation bekommt ein Fünftel, und du fasst nie eine Rolle Packband an.",
    "See how it works": "So funktioniert's ansehen",
    "Send me your items": "Schick mir deine Sachen",
    "Where the money goes": "Wohin das Geld geht",
    "Every sale splits three ways.": "Jeder Verkauf wird dreigeteilt.",
    "No hidden fees, no small print. Type a price into the tag below and watch it divide itself up.": "Keine versteckten Gebühren, kein Kleingedrucktes. Gib unten einen Preis ein und schau, wie er sich aufteilt.",
    "If an item sells for…": "Wenn ein Artikel verkauft wird für…",
    "You keep": "Du behältst",
    "I keep": "Ich behalte",
    "Your charity gets": "Deine Organisation bekommt",
    "To you": "Für dich",
    "To me, for the work": "Für mich, für die Arbeit",
    "To your charity": "Für deine Organisation",
    "Step by step": "Schritt für Schritt",
    "Five steps. You do two of them.": "Fünf Schritte. Zwei davon machst du.",
    "Message me": "Schreib mir",
    "Tell me roughly what you've got and send a few photos. I'll tell you honestly what's likely to sell and what isn't, before you post anything.": "Erzähl mir grob, was du hast, und schick ein paar Fotos. Ich sage dir ehrlich, was sich wahrscheinlich verkaufen lässt und was nicht, bevor du irgendetwas verschickst.",
    "Check it against the label": "Mit dem Etikett abgleichen",
    "Have a proper look at each item in daylight, using the checklist below. This is the step that decides whether your items sell for a good price or sit there.": "Schau dir jedes Teil bei Tageslicht genau an, anhand der Checkliste unten. Dieser Schritt entscheidet, ob deine Sachen zu einem guten Preis verkauft werden oder liegen bleiben.",
    "Post it to me": "Schick es mir per Post",
    "I'll send you the address privately once we've agreed. Pop in a note saying which charity you'd like your 20% to go to.": "Ich schicke dir die Adresse privat, sobald wir uns einig sind. Leg einen Zettel bei, welche Organisation deine 20% bekommen soll.",
    "I do the boring bit": "Ich mache den langweiligen Teil",
    "Photographing, measuring, writing descriptions, pricing, answering questions, haggling politely, packing and posting. I set prices based on my successful previous sales. This is the part that takes hours, and it's the part you're paying me 30% for.": "Fotografieren, Maße nehmen, Beschreibungen schreiben, Preise festlegen, Fragen beantworten, höflich verhandeln, verpacken und verschicken. Ich setze Preise anhand meiner erfolgreichen früheren Verkäufe fest. Das ist der Teil, der Stunden dauert, und dafür bekomme ich meine 30%.",
    "You get paid": "Du wirst bezahlt",
    "Within five days of the money clearing on Vinted, I send you your 50% and send your charity its 20%. I'll show you the sale so you can see the price for yourself.": "Innerhalb von fünf Tagen, nachdem das Geld bei Vinted eingegangen ist, schicke ich dir deine 50% und deiner Organisation ihre 20%. Ich zeige dir den Verkauf, damit du den Preis selbst sehen kannst.",
    "Read this before you post": "Lies dies, bevor du es abschickst",
    "What I can and can't sell.": "Was ich verkaufen kann und was nicht.",
    "Vinted buyers leave honest reviews. One item with a stain on it can damage the rating that every other seller on this page depends on — so please check carefully. If you're not sure, send a photo and ask.": "Vinted-Käufer hinterlassen ehrliche Bewertungen. Ein fleckiges Teil kann die Bewertung schädigen, auf die sich alle anderen Verkäufer auf dieser Seite verlassen — bitte also sorgfältig prüfen. Wenn du dir unsicher bist, schick ein Foto und frag nach.",
    "What I take: Clothes, shoes, bags, belts, scarves, jewellery, toys, and home items. I don't currently take beauty products or furniture, since they need extra care to sell safely and I want to do a great job with what I do take.": "Was ich annehme: Kleidung, Schuhe, Taschen, Gürtel, Schals, Schmuck, Spielzeug und Haushaltsgegenstände. Schönheitsprodukte oder Möbel nehme ich derzeit nicht an, da sie besondere Sorgfalt beim sicheren Verkauf brauchen, und ich bei dem, was ich annehme, gute Arbeit leisten möchte.",
    "EVE'S WARDROBE RESCUE — QUALITY CHECK — PLEASE READ BEFORE POSTING": "EVE'S WARDROBE RESCUE — QUALITÄTSKONTROLLE — BITTE VOR DEM VERSAND LESEN",
    "PLEASE SEND": "BITTE SCHICKEN",
    "PLEASE DON'T SEND": "BITTE NICHT SCHICKEN",
    "Clean and freshly washed": "Sauber und frisch gewaschen",
    "All buttons, zips and clasps working": "Alle Knöpfe, Reißverschlüsse und Verschlüsse funktionieren",
    "Shape still good, no sagging": "Form noch gut, kein Ausleiern",
    "Colour still strong": "Farbe noch kräftig",
    "Brand label still readable": "Markenetikett noch lesbar",
    "Shoes with no major sole wear": "Schuhe ohne starke Sohlenabnutzung",
    "Bags with clean linings, no rips": "Taschen mit sauberem Futter, ohne Risse",
    "Jewellery in working condition (clasps, chains intact)": "Funktionierender Schmuck (Verschlüsse, Ketten intakt)",
    "Toys with all original pieces and parts": "Spielzeug mit allen Originalteilen",
    "Battery toys tested and working": "Batteriebetriebenes Spielzeug getestet und funktionsfähig",
    "Home items clean, with no cracks or damage": "Haushaltsgegenstände sauber, ohne Risse oder Schäden",
    "Anything you'd happily buy yourself": "Alles, was du selbst gerne kaufen würdest",
    "Stains, marks or discolouring": "Flecken oder Verfärbungen",
    "Holes, rips or unravelling seams": "Löcher, Risse oder aufgehende Nähte",
    "Broken zips or missing buttons": "Kaputte Reißverschlüsse oder fehlende Knöpfe",
    "Bobbling or pilling": "Fusselbildung",
    "Stretched cuffs or necklines": "Ausgeleierte Bündchen oder Ausschnitte",
    "Smoke, damp or perfume smells": "Rauch-, Feuchtigkeits- oder Parfümgeruch",
    "Faded or heavily washed-out colour": "Verblasste oder stark ausgewaschene Farbe",
    "Counterfeit or fake designer items": "Gefälschte Markenartikel",
    "Shoes with worn-down soles or heels": "Schuhe mit stark abgenutzten Sohlen oder Absätzen",
    "Bags with broken zips or stained linings": "Taschen mit kaputtem Reißverschluss oder flecklgem Futter",
    "Costume jewellery that's tarnished or missing stones": "Angelaufener Modeschmuck oder mit fehlenden Steinen",
    "Toys missing pieces or parts": "Spielzeug mit fehlenden Teilen",
    "Recalled toys, or anything with a safety warning": "Zurückgerufenes Spielzeug oder mit Sicherheitswarnung",
    "Cracked, chipped, or broken home items": "Rissige, angeschlagene oder kaputte Haushaltsgegenstände",
    "ANYTHING THAT ARRIVES IN UNSELLABLE CONDITION WILL BE PASSED TO A TEXTILE RECYCLING BANK RATHER THAN LISTED. I'LL ALWAYS TELL YOU IF THIS HAPPENS.": "ALLES, WAS IN NICHT VERKAUFSFÄHIGEM ZUSTAND ANKOMMT, WIRD AN EINE TEXTILRECYCLING-STELLE WEITERGEGEBEN, STATT EINGESTELLT ZU WERDEN. ICH SAGE DIR IMMER BESCHEID, WENN DAS PASSIERT.",
    "You choose": "Du entscheidest",
    "Pick where your 20% goes.": "Wähle, wohin deine 20% gehen.",
    "Every seller chooses their cause when they send their parcel. Three options, because more than three makes it hard to decide.": "Jeder Verkäufer wählt beim Verschicken seines Pakets seinen eigenen Zweck. Drei Optionen, denn mehr würde die Entscheidung erschweren.",
    "Option one": "Option eins",
    "Option two": "Option zwei",
    "Option three": "Option drei",
    "After 60 days": "Nach 60 Tagen",
    "What if something doesn't sell?": "Was, wenn etwas nicht verkauft wird?",
    "Some things just don't find a buyer, however good they are. If an item is still listed after 60 days, I'll message you and you choose what happens next. Nothing gets thrown away, and I never decide for you.": "Manche Dinge finden einfach keinen Käufer, egal wie gut sie sind. Wenn ein Artikel nach 60 Tagen noch eingestellt ist, schreibe ich dir, und du entscheidest, was als Nächstes passiert. Nichts wird weggeworfen, und ich entscheide nie für dich.",
    "Send it back to me": "Schick es mir zurück",
    "I'll pack it up and post it home. You cover the return postage, and I'll tell you exactly what it costs before I send it.": "Ich packe es ein und schicke es dir nach Hause. Du übernimmst das Rückporto, und ich sage dir genau, was es kostet, bevor ich es verschicke.",
    "Donate it to charity": "An eine Organisation spenden",
    "I'll take it to a charity shop and send you a photo of the donation. Free, and the items still do some good.": "Ich bringe es zu einem Wohltätigkeitsladen und schicke dir ein Foto der Spende. Kostenlos, und die Sachen tun trotzdem etwas Gutes.",
    "If I don't hear back within 14 days of asking, I'll go with option B and let you know.": "Wenn ich innerhalb von 14 Tagen nach meiner Frage keine Antwort bekomme, wähle ich Option B und sage dir Bescheid.",
    "Who's behind this": "Wer dahintersteckt",
    "Hi, I'm Eve.": "Hallo, ich bin Eve.",
    "I'm nine. I love technology and coding, and I built this entire website myself — the layout, the colours, the rainbow, the little calculator further up the page.": "Ich bin neun. Ich liebe Technik und Programmieren, und ich habe diese ganze Website selbst gebaut — das Layout, die Farben, den Regenbogen, den kleinen Rechner weiter oben auf der Seite.",
    "I started selling items for one person, a friend's mum, and it turned out I was quite good at it. So I'm doing it properly now: for other people, with a proper split, and with a chunk going to causes that get technology to kids who don't have it.": "Ich habe damit angefangen, für eine Person Sachen zu verkaufen, die Mutter einer Freundin, und es stellte sich heraus, dass ich darin ziemlich gut bin. Jetzt mache ich es richtig: für andere Leute, mit einer fairen Aufteilung, und ein Teil geht an Zwecke, die Kindern ohne Technik zu Technik verhelfen.",
    "My account is set up and supervised by a parent, because Vinted is for over-18s. They handle the money and the address. I do the selling.": "Mein Konto wurde von einem Elternteil eingerichtet und wird von ihnen beaufsichtigt, da Vinted nur für Über-18-Jährige ist. Sie kümmern sich um das Geld und die Adresse. Ich kümmere mich um den Verkauf.",
    "You're not just clearing out a wardrobe. You're buying a laptop for a school that doesn't have one.": "Du räumst nicht einfach nur einen Kleiderschrank aus. Du kaufst einen Laptop für eine Schule, die keinen hat.",
    "Get started": "Loslegen",
    "Send me your items.": "Schick mir deine Sachen.",
    "Fill this in and it'll open your email app with everything already written. I'll reply with the address and answer any questions first.": "Füll dies aus, und deine E-Mail-App öffnet sich mit allem bereits geschrieben. Ich antworte zuerst mit der Adresse und beantworte alle Fragen.",
    "Your name": "Dein Name",
    "What have you got?": "Was hast du?",
    "Which charity would you like?": "Welche Organisation möchtest du?",
    "Write my email": "Meine E-Mail schreiben",
    "Or email me directly at": "Oder schreib mir direkt an",
    "replace this with your real address.": "ersetze dies mit deiner echten Adresse.",
    "Eve's Wardrobe Rescue — pre-loved, re-loved.": "Eve's Wardrobe Rescue — einmal geliebt, wieder geliebt.",
    "Items are listed on Vinted through an adult-supervised account, as Vinted requires all account holders to be 18 or over. Sale prices are set by me and shown to you. Charity payments are made monthly and totals are published on this page.": "Artikel werden über ein von einem Elternteil beaufsichtigtes Konto auf Vinted eingestellt, da Vinted verlangt, dass alle Kontoinhaber 18 Jahre oder älter sind. Verkaufspreise werden von mir festgelegt und dir gezeigt. Spenden an Organisationen werden monatlich geleistet, und die Summen werden auf dieser Seite veröffentlicht.",
    "pre-loved, re-loved": "einmal geliebt, wieder geliebt"
  },

  it: {
    "How it works": "Come funziona",
    "What to send": "Cosa inviare",
    "Charities": "Enti di beneficenza",
    "Get in touch": "Contattami",
    "Check status": "Controlla lo stato",
    "Second-hand items, sold for you": "Articoli di seconda mano, venduti per te",
    "Your old items are": "I tuoi vecchi oggetti sono",
    "somebody's": "la cosa preferita",
    "favourite thing.": "di qualcun altro.",
    "Send me the items you've stopped using or wearing. I photograph them, list them on Vinted, answer the messages and post the parcels. You keep half the money, a charity you pick gets a fifth, and you never touch a packing tape roll.": "Mandami gli oggetti che non usi più. Li fotografo, li metto su Vinted, rispondo ai messaggi e spedisco i pacchi. Tu tieni metà dei soldi, un ente di beneficenza a tua scelta riceve un quinto, e tu non tocchi mai un rotolo di nastro adesivo.",
    "See how it works": "Guarda come funziona",
    "Send me your items": "Mandami i tuoi oggetti",
    "Where the money goes": "Dove vanno i soldi",
    "Every sale splits three ways.": "Ogni vendita si divide in tre parti.",
    "No hidden fees, no small print. Type a price into the tag below and watch it divide itself up.": "Nessuna commissione nascosta, nessuna clausola in piccolo. Scrivi un prezzo qui sotto e guarda come si divide.",
    "If an item sells for…": "Se un articolo si vende per…",
    "You keep": "Tu tieni",
    "I keep": "Io tengo",
    "Your charity gets": "Il tuo ente riceve",
    "To you": "A te",
    "To me, for the work": "A me, per il lavoro",
    "To your charity": "Al tuo ente",
    "Step by step": "Passo dopo passo",
    "Five steps. You do two of them.": "Cinque passaggi. Tu ne fai due.",
    "Message me": "Scrivimi",
    "Tell me roughly what you've got and send a few photos. I'll tell you honestly what's likely to sell and what isn't, before you post anything.": "Dimmi più o meno cosa hai e manda qualche foto. Ti dirò onestamente cosa è probabile che si venda e cosa no, prima che tu spedisca qualsiasi cosa.",
    "Check it against the label": "Controlla con l'etichetta",
    "Have a proper look at each item in daylight, using the checklist below. This is the step that decides whether your items sell for a good price or sit there.": "Osserva bene ogni articolo alla luce del giorno, usando la lista qui sotto. Questo passaggio decide se i tuoi articoli si venderanno a un buon prezzo o resteranno invenduti.",
    "Post it to me": "Speditemelo",
    "I'll send you the address privately once we've agreed. Pop in a note saying which charity you'd like your 20% to go to.": "Ti manderò l'indirizzo in privato una volta d'accordo. Includi un biglietto che dica a quale ente vuoi che vada il tuo 20%.",
    "I do the boring bit": "Faccio io la parte noiosa",
    "Photographing, measuring, writing descriptions, pricing, answering questions, haggling politely, packing and posting. I set prices based on my successful previous sales. This is the part that takes hours, and it's the part you're paying me 30% for.": "Fotografare, misurare, scrivere descrizioni, fissare i prezzi, rispondere alle domande, contrattare gentilmente, imballare e spedire. Fisso i prezzi in base alle mie vendite precedenti di successo. Questa è la parte che richiede ore, ed è per questo che mi paghi il 30%.",
    "You get paid": "Vieni pagato",
    "Within five days of the money clearing on Vinted, I send you your 50% and send your charity its 20%. I'll show you the sale so you can see the price for yourself.": "Entro cinque giorni da quando il denaro viene confermato su Vinted, ti invio il tuo 50% e al tuo ente il suo 20%. Ti mostrerò la vendita così potrai vedere il prezzo tu stesso.",
    "Read this before you post": "Leggi questo prima di spedire",
    "What I can and can't sell.": "Cosa posso e non posso vendere.",
    "Vinted buyers leave honest reviews. One item with a stain on it can damage the rating that every other seller on this page depends on — so please check carefully. If you're not sure, send a photo and ask.": "Gli acquirenti su Vinted lasciano recensioni oneste. Un articolo macchiato può danneggiare la valutazione da cui dipendono tutti gli altri venditori di questa pagina — quindi controlla con attenzione. Se non sei sicuro, manda una foto e chiedi.",
    "What I take: Clothes, shoes, bags, belts, scarves, jewellery, toys, and home items. I don't currently take beauty products or furniture, since they need extra care to sell safely and I want to do a great job with what I do take.": "Cosa accetto: vestiti, scarpe, borse, cinture, sciarpe, gioielli, giocattoli e oggetti per la casa. Al momento non accetto prodotti di bellezza o mobili, poiché richiedono cure extra per essere venduti in sicurezza, e voglio fare un buon lavoro con ciò che accetto.",
    "EVE'S WARDROBE RESCUE — QUALITY CHECK — PLEASE READ BEFORE POSTING": "EVE'S WARDROBE RESCUE — CONTROLLO QUALITÀ — LEGGI PRIMA DI SPEDIRE",
    "PLEASE SEND": "PER FAVORE INVIA",
    "PLEASE DON'T SEND": "PER FAVORE NON INVIARE",
    "Clean and freshly washed": "Pulito e appena lavato",
    "All buttons, zips and clasps working": "Bottoni, cerniere e fibbie tutti funzionanti",
    "Shape still good, no sagging": "Forma ancora buona, non deformato",
    "Colour still strong": "Colore ancora vivo",
    "Brand label still readable": "Etichetta del marchio ancora leggibile",
    "Shoes with no major sole wear": "Scarpe senza grande usura della suola",
    "Bags with clean linings, no rips": "Borse con fodera pulita, senza strappi",
    "Jewellery in working condition (clasps, chains intact)": "Gioielli funzionanti (chiusure e catene intatte)",
    "Toys with all original pieces and parts": "Giocattoli con tutti i pezzi originali",
    "Battery toys tested and working": "Giocattoli a batteria testati e funzionanti",
    "Home items clean, with no cracks or damage": "Oggetti per la casa puliti, senza crepe o danni",
    "Anything you'd happily buy yourself": "Qualsiasi cosa che compreresti volentieri tu stesso",
    "Stains, marks or discolouring": "Macchie o scoloriture",
    "Holes, rips or unravelling seams": "Buchi, strappi o cuciture che si disfano",
    "Broken zips or missing buttons": "Cerniere rotte o bottoni mancanti",
    "Bobbling or pilling": "Formazione di pallini nel tessuto",
    "Stretched cuffs or necklines": "Polsini o scolli allargati",
    "Smoke, damp or perfume smells": "Odore di fumo, umidità o profumo",
    "Faded or heavily washed-out colour": "Colore sbiadito o molto stinto",
    "Counterfeit or fake designer items": "Articoli di marca contraffatti",
    "Shoes with worn-down soles or heels": "Scarpe con suole o tacchi molto usurati",
    "Bags with broken zips or stained linings": "Borse con cerniere rotte o fodera macchiata",
    "Costume jewellery that's tarnished or missing stones": "Bigiotteria opaca o con pietre mancanti",
    "Toys missing pieces or parts": "Giocattoli con pezzi mancanti",
    "Recalled toys, or anything with a safety warning": "Giocattoli ritirati dal mercato o con avviso di sicurezza",
    "Cracked, chipped, or broken home items": "Oggetti per la casa incrinati, scheggiati o rotti",
    "ANYTHING THAT ARRIVES IN UNSELLABLE CONDITION WILL BE PASSED TO A TEXTILE RECYCLING BANK RATHER THAN LISTED. I'LL ALWAYS TELL YOU IF THIS HAPPENS.": "TUTTO CIÒ CHE ARRIVA IN CONDIZIONI NON VENDIBILI VERRÀ CONSEGNATO A UN PUNTO DI RICICLO TESSILE ANZICHÉ ESSERE MESSO IN VENDITA. TE LO COMUNICHERÒ SEMPRE SE ACCADE.",
    "You choose": "Scegli tu",
    "Pick where your 20% goes.": "Scegli dove va il tuo 20%.",
    "Every seller chooses their cause when they send their parcel. Three options, because more than three makes it hard to decide.": "Ogni venditore sceglie la propria causa quando spedisce il pacco. Tre opzioni, perché di più renderebbe difficile decidere.",
    "Option one": "Opzione uno",
    "Option two": "Opzione due",
    "Option three": "Opzione tre",
    "After 60 days": "Dopo 60 giorni",
    "What if something doesn't sell?": "E se qualcosa non si vende?",
    "Some things just don't find a buyer, however good they are. If an item is still listed after 60 days, I'll message you and you choose what happens next. Nothing gets thrown away, and I never decide for you.": "Alcune cose semplicemente non trovano un acquirente, per quanto siano belle. Se un articolo è ancora in vendita dopo 60 giorni, ti scriverò e sarai tu a decidere cosa succede dopo. Niente viene buttato via, e non decido mai al posto tuo.",
    "Send it back to me": "Rispediscimelo",
    "I'll pack it up and post it home. You cover the return postage, and I'll tell you exactly what it costs before I send it.": "Lo imballerò e te lo rispedirò a casa. Le spese di reso sono a tuo carico, e ti dirò esattamente quanto costa prima di spedirlo.",
    "Donate it to charity": "Donalo in beneficenza",
    "I'll take it to a charity shop and send you a photo of the donation. Free, and the items still do some good.": "Lo porterò in un negozio di beneficenza e ti manderò una foto della donazione. È gratis, e l'articolo fa comunque del bene.",
    "If I don't hear back within 14 days of asking, I'll go with option B and let you know.": "Se non ricevo risposta entro 14 giorni dalla domanda, sceglierò l'opzione B e te lo farò sapere.",
    "Who's behind this": "Chi c'è dietro",
    "Hi, I'm Eve.": "Ciao, sono Eve.",
    "I'm nine. I love technology and coding, and I built this entire website myself — the layout, the colours, the rainbow, the little calculator further up the page.": "Ho nove anni. Adoro la tecnologia e la programmazione, e ho costruito questo intero sito da sola — il layout, i colori, l'arcobaleno, la piccola calcolatrice più in alto nella pagina.",
    "I started selling items for one person, a friend's mum, and it turned out I was quite good at it. So I'm doing it properly now: for other people, with a proper split, and with a chunk going to causes that get technology to kids who don't have it.": "Ho iniziato vendendo oggetti per una sola persona, la mamma di un'amica, e si è scoperto che ero piuttosto brava. Quindi ora lo faccio sul serio: per altre persone, con una divisione giusta, e con una parte destinata a cause che portano la tecnologia ai bambini che non ce l'hanno.",
    "My account is set up and supervised by a parent, because Vinted is for over-18s. They handle the money and the address. I do the selling.": "Il mio account è stato creato ed è supervisionato da un genitore, poiché Vinted è riservato ai maggiori di 18 anni. Loro gestiscono i soldi e l'indirizzo. Io mi occupo delle vendite.",
    "You're not just clearing out a wardrobe. You're buying a laptop for a school that doesn't have one.": "Non stai solo svuotando un armadio. Stai comprando un computer portatile per una scuola che non ne ha uno.",
    "Get started": "Iniziamo",
    "Send me your items.": "Mandami i tuoi oggetti.",
    "Fill this in and it'll open your email app with everything already written. I'll reply with the address and answer any questions first.": "Compila questo modulo e si aprirà la tua app di posta con tutto già scritto. Risponderò prima con l'indirizzo e poi a qualsiasi domanda.",
    "Your name": "Il tuo nome",
    "What have you got?": "Cosa hai?",
    "Which charity would you like?": "Quale ente preferisci?",
    "Write my email": "Scrivi la mia email",
    "Or email me directly at": "Oppure scrivimi direttamente a",
    "replace this with your real address.": "sostituisci questo con il tuo vero indirizzo.",
    "Eve's Wardrobe Rescue — pre-loved, re-loved.": "Eve's Wardrobe Rescue — amato una volta, amato di nuovo.",
    "Items are listed on Vinted through an adult-supervised account, as Vinted requires all account holders to be 18 or over. Sale prices are set by me and shown to you. Charity payments are made monthly and totals are published on this page.": "Gli articoli vengono pubblicati su Vinted tramite un account supervisionato da un adulto, poiché Vinted richiede che tutti i titolari di account abbiano almeno 18 anni. I prezzi di vendita sono fissati da me e ti vengono mostrati. I pagamenti agli enti di beneficenza vengono effettuati mensilmente e i totali sono pubblicati su questa pagina.",
    "pre-loved, re-loved": "amato una volta, amato di nuovo"
  }
};

const LANG_NAMES = {
  en: "English",
  es: "Español",
  fr: "Français",
  tr: "Türkçe",
  pt: "Português",
  de: "Deutsch",
  it: "Italiano"
};

let originalTextNodes = [];

function captureOriginalText() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function (node) {
      const parentTag = node.parentElement ? node.parentElement.tagName : '';
      if (parentTag === 'SCRIPT' || parentTag === 'STYLE') return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let node;
  while ((node = walker.nextNode())) {
    originalTextNodes.push({ node: node, original: node.nodeValue });
  }
}

function applyLanguage(lang) {
  originalTextNodes.forEach(function (entry) {
    const trimmed = entry.original.trim();
    if (lang === 'en') {
      entry.node.nodeValue = entry.original;
      return;
    }
    const dict = translations[lang];
    if (dict && dict[trimmed]) {
      const leading = entry.original.match(/^\s*/)[0];
      const trailing = entry.original.match(/\s*$/)[0];
      entry.node.nodeValue = leading + dict[trimmed] + trailing;
    } else {
      entry.node.nodeValue = entry.original;
    }
  });
  localStorage.setItem('ewr-lang', lang);
  document.documentElement.lang = lang;
  const label = document.getElementById('lang-current-label');
  if (label) label.textContent = LANG_NAMES[lang] || 'English';
}

/* ============================================================
   FIRST-VISIT LANGUAGE POPUP
   Shows once per browser (until they pick a language, saved in
   localStorage). Includes "Continue in English" as a real option.
   ============================================================ */
function showLanguagePopup() {
  const overlay = document.createElement('div');
  overlay.id = 'lang-popup-overlay';
  overlay.style.cssText = 'position:fixed; inset:0; background:rgba(30,34,48,0.55); z-index:1000; display:flex; align-items:center; justify-content:center; padding:1.2rem;';

  const box = document.createElement('div');
  box.style.cssText = 'background:#fff; border-radius:16px; padding:1.8rem; max-width:360px; width:100%; text-align:center; font-family:system-ui, sans-serif;';

  const heading = document.createElement('div');
  heading.textContent = 'Choose your language / Elige tu idioma';
  heading.style.cssText = 'font-weight:700; font-size:1.05rem; margin-bottom:1rem; color:#1E2230;';
  box.appendChild(heading);

  const grid = document.createElement('div');
  grid.style.cssText = 'display:grid; grid-template-columns:1fr 1fr; gap:0.6rem;';

  Object.keys(LANG_NAMES).forEach(function (code) {
    const btn = document.createElement('button');
    btn.textContent = LANG_NAMES[code];
    btn.style.cssText = 'padding:0.7rem; border:2px solid #DDE2EC; border-radius:10px; background:#F1F4F9; font-size:0.9rem; cursor:pointer; font-family:inherit;';
    btn.addEventListener('click', function () {
      applyLanguage(code);
      document.body.removeChild(overlay);
    });
    grid.appendChild(btn);
  });

  box.appendChild(grid);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

document.addEventListener('DOMContentLoaded', function () {
  captureOriginalText();

  const menu = document.getElementById('lang-menu');
  const toggle = document.getElementById('settings-toggle');

  if (menu) {
    Object.keys(LANG_NAMES).forEach(function (code) {
      const item = document.createElement('button');
      item.textContent = LANG_NAMES[code];
      item.className = 'lang-option';
      item.addEventListener('click', function () {
        applyLanguage(code);
        menu.style.display = 'none';
      });
      menu.appendChild(item);
    });
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', function () {
      menu.style.display = 'none';
    });
  }

  const saved = localStorage.getItem('ewr-lang');
  if (saved) {
    if (saved !== 'en') applyLanguage(saved);
  } else {
    showLanguagePopup();
  }
});
