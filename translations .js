/**
 * LANGUAGE SWITCHER — Eve's Wardrobe Rescue
 * --------------------------------------------
 * How this works: it scans the page once when it loads, remembers the
 * original English wording of each piece of text, then swaps that text
 * for a translation when you pick a language from the Settings button.
 *
 * Covers: navigation, hero section, the money-split section, "how it
 * works" steps, section headings, charity option labels, the unsold
 * section, contact form labels, and the footer tagline.
 *
 * Anything not in the dictionary below (like the full quality checklist
 * and the About story) stays in English for now. Add more lines to the
 * dictionaries any time to expand coverage.
 */

const translations = {
  es: {
    "How it works": "Cómo funciona",
    "What to send": "Qué enviar",
    "Charities": "Organizaciones benéficas",
    "Get in touch": "Contacto",
    "Check status": "Ver estado",
    "Second-hand items, sold for you": "Artículos de segunda mano, vendidos por ti",
    "Your old items are ": "Tus cosas antiguas son ",
    "somebody's": "el objeto favorito",
    " favourite thing.": " de alguien más.",
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
    "Check it against the label": "Compruébalo con la etiqueta",
    "Post it to me": "Envíamelo por correo",
    "I do the boring bit": "Yo hago la parte aburrida",
    "You get paid": "Recibes tu pago",
    "Read this before you post": "Lee esto antes de enviar",
    "What I can and can't sell.": "Lo que puedo y no puedo vender.",
    "You choose": "Tú eliges",
    "Pick where your 20% goes.": "Elige a dónde va tu 20%.",
    "Option one": "Opción uno",
    "Option two": "Opción dos",
    "Option three": "Opción tres",
    "After 60 days": "Después de 60 días",
    "What if something doesn't sell?": "¿Y si algo no se vende?",
    "Send it back to me": "Devuélvemelo",
    "Donate it to charity": "Donarlo a la organización benéfica",
    "Who's behind this": "Quién está detrás de esto",
    "Hi, I'm Eve.": "Hola, soy Eve.",
    "Get started": "Empezar",
    "Send me your items.": "Envíame tus artículos.",
    "Your name": "Tu nombre",
    "What have you got?": "¿Qué tienes?",
    "Which charity would you like?": "¿Qué organización benéfica prefieres?",
    "Write my email": "Escribir mi correo",
    "pre-loved, re-loved": "querido antes, querido de nuevo"
  },

  fr: {
    "How it works": "Comment ça marche",
    "What to send": "Quoi envoyer",
    "Charities": "Associations caritatives",
    "Get in touch": "Nous contacter",
    "Check status": "Vérifier le statut",
    "Second-hand items, sold for you": "Articles d'occasion, vendus pour vous",
    "Your old items are ": "Vos anciens objets sont ",
    "somebody's": "la chose préférée",
    " favourite thing.": " de quelqu'un d'autre.",
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
    "Check it against the label": "Vérifiez selon l'étiquette",
    "Post it to me": "Postez-le-moi",
    "I do the boring bit": "Je fais la partie ennuyeuse",
    "You get paid": "Vous êtes payé(e)",
    "Read this before you post": "Lisez ceci avant d'envoyer",
    "What I can and can't sell.": "Ce que je peux et ne peux pas vendre.",
    "You choose": "Vous choisissez",
    "Pick where your 20% goes.": "Choisissez où va votre 20%.",
    "Option one": "Option un",
    "Option two": "Option deux",
    "Option three": "Option trois",
    "After 60 days": "Après 60 jours",
    "What if something doesn't sell?": "Et si quelque chose ne se vend pas ?",
    "Send it back to me": "Renvoyez-le-moi",
    "Donate it to charity": "Faites-en don à une association",
    "Who's behind this": "Qui se cache derrière tout ça",
    "Hi, I'm Eve.": "Salut, je suis Eve.",
    "Get started": "Commencer",
    "Send me your items.": "Envoyez-moi vos articles.",
    "Your name": "Votre nom",
    "What have you got?": "Qu'avez-vous ?",
    "Which charity would you like?": "Quelle association préférez-vous ?",
    "Write my email": "Rédiger mon e-mail",
    "pre-loved, re-loved": "aimé une fois, aimé à nouveau"
  },

  tr: {
    "How it works": "Nasıl çalışır",
    "What to send": "Ne göndermeli",
    "Charities": "Hayır kurumları",
    "Get in touch": "İletişime geç",
    "Check status": "Durumu kontrol et",
    "Second-hand items, sold for you": "İkinci el eşyalar, sizin için satılıyor",
    "Your old items are ": "Eski eşyalarınız ",
    "somebody's": "birinin",
    " favourite thing.": " en sevdiği şey olabilir.",
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
    "Check it against the label": "Etikete göre kontrol et",
    "Post it to me": "Bana postala",
    "I do the boring bit": "Sıkıcı kısmı ben yaparım",
    "You get paid": "Ödemenizi alırsınız",
    "Read this before you post": "Göndermeden önce bunu oku",
    "What I can and can't sell.": "Neyi satabilirim, neyi satamam.",
    "You choose": "Siz seçin",
    "Pick where your 20% goes.": "20%'nizin nereye gideceğini seçin.",
    "Option one": "Birinci seçenek",
    "Option two": "İkinci seçenek",
    "Option three": "Üçüncü seçenek",
    "After 60 days": "60 günden sonra",
    "What if something doesn't sell?": "Ya bir şey satılmazsa?",
    "Send it back to me": "Bana geri gönderin",
    "Donate it to charity": "Hayır kurumuna bağışlayın",
    "Who's behind this": "Bunun arkasında kim var",
    "Hi, I'm Eve.": "Merhaba, ben Eve.",
    "Get started": "Başlayalım",
    "Send me your items.": "Eşyalarınızı gönderin.",
    "Your name": "Adınız",
    "What have you got?": "Neleriniz var?",
    "Which charity would you like?": "Hangi hayır kurumunu istersiniz?",
    "Write my email": "E-postamı yaz",
    "pre-loved, re-loved": "önce sevildi, yeniden sevildi"
  },

  pt: {
    "How it works": "Como funciona",
    "What to send": "O que enviar",
    "Charities": "Instituições de caridade",
    "Get in touch": "Fale connosco",
    "Check status": "Ver estado",
    "Second-hand items, sold for you": "Artigos em segunda mão, vendidos por si",
    "Your old items are ": "As suas coisas antigas são ",
    "somebody's": "a coisa favorita",
    " favourite thing.": " de outra pessoa.",
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
    "Check it against the label": "Verifique com a etiqueta",
    "Post it to me": "Envie-me pelo correio",
    "I do the boring bit": "Eu faço a parte aborrecida",
    "You get paid": "Recebe o seu pagamento",
    "Read this before you post": "Leia isto antes de enviar",
    "What I can and can't sell.": "O que posso e não posso vender.",
    "You choose": "Você escolhe",
    "Pick where your 20% goes.": "Escolha para onde vai o seu 20%.",
    "Option one": "Opção um",
    "Option two": "Opção dois",
    "Option three": "Opção três",
    "After 60 days": "Após 60 dias",
    "What if something doesn't sell?": "E se algo não vender?",
    "Send it back to me": "Devolva-mo",
    "Donate it to charity": "Doe à instituição de caridade",
    "Who's behind this": "Quem está por trás disto",
    "Hi, I'm Eve.": "Olá, sou a Eve.",
    "Get started": "Começar",
    "Send me your items.": "Envie-me os seus artigos.",
    "Your name": "O seu nome",
    "What have you got?": "O que tem?",
    "Which charity would you like?": "Que instituição prefere?",
    "Write my email": "Escrever o meu e-mail",
    "pre-loved, re-loved": "já amado, amado outra vez"
  },

  de: {
    "How it works": "So funktioniert's",
    "What to send": "Was du schicken kannst",
    "Charities": "Wohltätigkeitsorganisationen",
    "Get in touch": "Kontakt",
    "Check status": "Status prüfen",
    "Second-hand items, sold for you": "Second-Hand-Artikel, für dich verkauft",
    "Your old items are ": "Deine alten Sachen sind ",
    "somebody's": "jemandes",
    " favourite thing.": " neues Lieblingsstück.",
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
    "Check it against the label": "Mit dem Etikett abgleichen",
    "Post it to me": "Schick es mir per Post",
    "I do the boring bit": "Ich mache den langweiligen Teil",
    "You get paid": "Du wirst bezahlt",
    "Read this before you post": "Lies dies, bevor du es abschickst",
    "What I can and can't sell.": "Was ich verkaufen kann und was nicht.",
    "You choose": "Du entscheidest",
    "Pick where your 20% goes.": "Wähle, wohin deine 20% gehen.",
    "Option one": "Option eins",
    "Option two": "Option zwei",
    "Option three": "Option drei",
    "After 60 days": "Nach 60 Tagen",
    "What if something doesn't sell?": "Was, wenn etwas nicht verkauft wird?",
    "Send it back to me": "Schick es mir zurück",
    "Donate it to charity": "An eine Organisation spenden",
    "Who's behind this": "Wer dahintersteckt",
    "Hi, I'm Eve.": "Hallo, ich bin Eve.",
    "Get started": "Loslegen",
    "Send me your items.": "Schick mir deine Sachen.",
    "Your name": "Dein Name",
    "What have you got?": "Was hast du?",
    "Which charity would you like?": "Welche Organisation möchtest du?",
    "Write my email": "Meine E-Mail schreiben",
    "pre-loved, re-loved": "einmal geliebt, wieder geliebt"
  },

  it: {
    "How it works": "Come funziona",
    "What to send": "Cosa inviare",
    "Charities": "Enti di beneficenza",
    "Get in touch": "Contattami",
    "Check status": "Controlla lo stato",
    "Second-hand items, sold for you": "Articoli di seconda mano, venduti per te",
    "Your old items are ": "I tuoi vecchi oggetti sono ",
    "somebody's": "la cosa preferita",
    " favourite thing.": " di qualcun altro.",
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
    "Check it against the label": "Controlla con l'etichetta",
    "Post it to me": "Speditemelo",
    "I do the boring bit": "Faccio io la parte noiosa",
    "You get paid": "Vieni pagato",
    "Read this before you post": "Leggi questo prima di spedire",
    "What I can and can't sell.": "Cosa posso e non posso vendere.",
    "You choose": "Scegli tu",
    "Pick where your 20% goes.": "Scegli dove va il tuo 20%.",
    "Option one": "Opzione uno",
    "Option two": "Opzione due",
    "Option three": "Opzione tre",
    "After 60 days": "Dopo 60 giorni",
    "What if something doesn't sell?": "E se qualcosa non si vende?",
    "Send it back to me": "Rispediscimelo",
    "Donate it to charity": "Donalo in beneficenza",
    "Who's behind this": "Chi c'è dietro",
    "Hi, I'm Eve.": "Ciao, sono Eve.",
    "Get started": "Iniziamo",
    "Send me your items.": "Mandami i tuoi oggetti.",
    "Your name": "Il tuo nome",
    "What have you got?": "Cosa hai?",
    "Which charity would you like?": "Quale ente preferisci?",
    "Write my email": "Scrivi la mia email",
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
      // preserve original leading/trailing whitespace where present
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
  if (saved && saved !== 'en') applyLanguage(saved);
});
