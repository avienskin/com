const STORE = {
  name: "AvienSkin",
  address: "Suite 2, Polaris Bank Plaza, Opposite Carpark, BBA, Trade Fair Complex",
  phone: "08142526229",
  whatsapp: "2348142526229",
  email: "acaviennigltd@gmail.com"
};

const products = [
  {
    id: 1,
    name: "Avien 5.5 The Smoother Glycolic Acid Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/The Smoother Wash.webp"
  },
  {
    id: 2,
    name: "Avien 5.5 The Glow Getter Kojic Acid Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/The Glow Getter Wash.jpg"
  },
  {
    id: 3,
    name: "Avien 5.5 The Purifier Alpha Arbutin + Niacinamide Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/The Purifier Wash.jpeg"
  },
  {
    id: 4,
    name: "Avien 5.5 The Wonder Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/The Wonder Wash.jpg"
  },
  {
    id: 5,
    name: "Avien 5.5 The Perfector Salicylic Acid Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/The Perfector Wash.webp"
  },
  {
    id: 6,
    name: "Avien 5.5 The Restorer Retinol + Collagen Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/The Restorer Wash.webp"
  },
  {
    id: 7,
    name: "Avien 5.5 The Purifier Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/The Purifier Lotion.webp"
  },
  {
    id: 8,
    name: "Avien 5.5 The Glow Getter Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/The Glow Getter Lotion.webp"
  },
  {
    id: 9,
    name: "Avien 5.5 The Wonder Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/The Wonder Lotion.webp"
  },
  {
    id: 10,
    name: "Avien 5.5 The Restorer Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/The Restorer Lotion.webp"
  },
  {
    id: 11,
    name: "Avien 5.5 The Brightener Vitamin C Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/The Brightener Lotion.webp"
  },
  {
    id: 12,
    name: "Avien 5.5 The Smoother Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/The Smoother Lotion.webp"
  },
  {
    id: 13,
    name: "Avien 5.5 The Brightener Vitamin C Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/A0041.jpg"
  }
];

const PRODUCT_ORIGIN_NOTE = "It was formulated in Maryland, USA, but manufactured in China.";

const productAbout = {
  1: {
    focus: "Avien 5.5 Glycolic Acid & Vitamin C Smoothing Body Lotion exfoliates dead skin and stimulates the cells to grow new skin cells, revealing a radiant and smoother texture. The co-active, Vitamin C, minimizes the appearance of dark spots and also improves the skins tone for that brighter complexion and glow. Suitable for all skin types and tones.",
    highlighted: ["Glycolic Acid (AHA)", "Vitamin C"],
    bestFor: ["Avien 5.5 Glycolic Acid & Vitamin C Smoothing Body Lotion exfoliates dead skin and stimulates the cells to grow new skin cells, revealing a radiant and smoother texture. The co-active, Vitamin C, minimizes the appearance of dark spots and also improves the skins tone for that brighter complexion and glow. Suitable for all skin types and tones."],
    composition: [
      "Highlighted AHA (glycolic acid) within a cleansing base",
      "Humectants + conditioning agents to reduce dryness",
      "Fragrance and preservative system ",
      "Vitamin C for antioxidant support and enhanced renewal benefits "
    ],
    howToUse: [
      "Use on wet skin, massage for 30–60 seconds, rinse well",
      "Start 3–4 times weekly, then adjust based on comfort",
      "Moisturize after shower; use SPF on exposed skin in daytime"
    ],
    caution: ["Patch test first", "Reduce frequency if stinging or peeling occurs"]
  },
  2: {
    focus: "Targets hyperpigmentation and dark spots for a brighter, more radiant complexion. Kojic acid inhibits melanin production, while tranexamic acid helps reduce the appearance of discoloration and supports an even skin tone. Suitable for all skin types and tones.",
    highlighted: ["Kojic Acid", "Tranexamic Acid"],
    bestFor: ["Dull-looking skin", "Uneven-looking tone", "Enhansing skin luminosity"],
    composition: [
      "Highlighted kojic acid within a cleansing base",
      "Humectants to help skin feel comfortable after cleansing",
      "Fragrance and preservative system",
      "Tranexamic acid for enhanced brightening and tone support"
    ],
    howToUse: [
      "Use on wet skin, massage, rinse well",
      "Follow with a lotion to lock in moisture",
      "Introduce one brightening product focus at a time",
      "Be consistent for several weeks before switching routines"
    ],
    caution: ["Patch test first", "Do not over-exfoliate when using multiple actives"]
  },
  3: {
    focus: "AVIEN 5.5 The Purifier Alpha Arbutin + Niacinamide Body Wash – 750ml (26.4oz) helps to even out skin tone and minimize the appearance of hyperpigmentation, dark spots and other skin blemishes. Infused with Alpha Arbutin & Niacinamide, this gentle formula deeply cleanses the skin for a brighter, radiant and younger looking skin.",
    highlighted: ["Alpha Arbutin", "Niacinamide"],
    bestFor: ["Uneven-looking tone", "Look of dark spots/marks and wrinkles", "Oil-balance support", "Cleanse and hydrates for an even toneed and brighter skin"],
    composition: [
      "Highlighted alpha arbutin + niacinamide within a cleansing base",
      "Humectants + conditioning agents for post-wash comfort",
      "Fragrance and preservative system (see label for the full INCI list)"
    ],
    howToUse: [
      "Use on wet skin, massage, rinse well",
      "Pair with The Purifier lotion for a simple matched routine",
      "Be consistent for several weeks before switching routines"
    ],
    caution: ["Patch test first", "Avoid using multiple brightening products on the same day to reduce irritation risk"]
  },
  4: {
    focus: "This Wonder Body Wash is packed with great performing ingredients – Caffeine, Hyaluronic Shea ButterAcid,and special Niacinamide Complex. Formulated by renowned skincare experts to enhance your skin tone and texture.",
    highlighted: ["Caffeine", "Hyaluronic Acid", "Shea Butter", "Niacinamide Complex"],
    bestFor: ["Daily showers", "Simple routines", "Pairing with any lotion in the range"],
    composition: [
      "Caffeine to help refresh the look of skin",
      "Hyaluronic acid for hydration support",
      "Shea butter for moisture and skin conditioning",
      "Niacinamide Complex for enhanced skin benefits"

    ],
    howToUse: [
      "Use daily as your main body wash",
      "Moisturize after shower with your preferred Avien 5.5 lotion"
    ],
    caution: ["If you have very sensitive skin, patch test new products first"]
  },
  5: {
    focus: "The Perfector Body Wash, fortified with 2% Salicylic Acid, encourages healthy exfoliation of skin and unclogging of pores, dissolves blackheads that contribute to acne. By cleansing your pores, it prevents breakouts on your back, chest and shoulders for an even smoother skin. Designed for dry, rough and bumpy, combination and oily skin.",
    highlighted: ["Salicylic Acid (BHA)"],
    bestFor: ["Body acne-prone areas (back/chest)", "Ingrown-hair prone areas", "Oily skin feel"],
    composition: [
      "Highlighted BHA (salicylic acid) within a cleansing base",
      "Humectants + soothing agents for balance",
      "Fragrance and preservative system (see label for the full INCI list)"
    ],
    howToUse: [
      "Use 3–5 times weekly on areas that need clarifying",
      "Let the foam sit briefly (15–30 seconds), then rinse",
      "Follow with a non-greasy lotion if you feel dry"
    ],
    caution: ["Patch test first", "Avoid combining with multiple exfoliating products on the same day"]
  },
  6: {
    focus: "Avien 5.5 The Restorer Body Wash supercharged with Retinol & Collagen, cleanses and helps restore the skin for a firm, nourished and younger looking skin",
    highlighted: ["Retinol", "Collagen"],
    bestFor: ["Dull-looking skin", "Rough texture", "Night shower routines"],
    composition: [
      "Cleansing base with a renewal-focused positioning",
      "Conditioning agents to reduce tightness after washing",
      "Fragrance and preservative system"
    ],
    howToUse: [
      "Use mainly in the evening if your skin is sensitive to retinoids",
      "Start 2–3 times weekly and increase gradually",
      "Moisturize after shower; use SPF in daytime"
    ],
    caution: [
      "Patch test first",
      
    ]
  },
  7: {
    focus: "Avien 5.5 The Purifier Body Lotion is formulated with Alpha Arbutin, Niacinamide and other superb ingredients that work in synergy to improve skin brightness, repair skin barrier, enhance overall skin tone and reduce skin sallowness caused by glycation. Suitable for all skin type and tones.",
    highlighted: ["Alpha Arbutin", "Niacinamide"],
    bestFor: ["Uneven-looking tone", "Dryness + dullness", "Post-shower moisture seal"],
    composition: [
      "Moisturizing base (emollients + humectants)",
      "Highlighted alpha arbutin + niacinamide (see label for exact INCI)",
      "Fragrance and preservative system"
    ],
    howToUse: ["Apply on clean, dry or slightly damp skin", "Use daily; focus on areas of concern"],
    caution: ["Patch test first"]
  },
  8: {
    focus: "Avien 5.5 The Glow Getter Body Lotion (500ml) is a high-performance brightening moisturizer formulated with a potent duo of Kojic Acid and Tranexamic Acid. It is specifically designed to address stubborn skin concerns while maintaining a healthy skin-neutral pH.",
    highlighted: ["Kojic Acid (brightening support), Tranexamic Acid (tone support)"],
    bestFor: ["Dull-looking skin", "Uneven-looking tone", "Daily moisturizing routine"],
    composition: [
      "Moisturizing base (emollients + humectants)",
      "Highlighted kojic-acid routine positioning (see label for exact INCI)",
      "Fragrance and preservative system",
      "Tranexamic acid for enhanced brightening and tone support"
    ],
    howToUse: ["Apply after shower", "Use daily; be consistent for best results"],
    caution: ["Patch test first", "Use SPF on exposed skin in daytime"]
  },
  9: {
    focus: "Avien 5.5 Wonder Body Lotion. It’s a glow restoring, smoothing, repairing and balancing moisturize for all skin types and tones. Formulated, by renowned skincare experts, with powerful ingredients that improves the skin radiance and texture. With the brightening, repairing, and energizing effects of Caffeine to the skin balancing effects of our Niacinamide Complex, this formula helps give your skin a daily wonder.",
    highlighted: ["Caffeine", "Niacinamide Complex", "Hyaluronic Acid", "Shea Butter"],
    bestFor: ["Dry, normal, and combination skin", "Daily body moisturising", "Layering with any wash"],
    composition: [
      "Caffeine for a refreshed look, Niacinamide Complex for enhanced skin benefits, Hyaluronic Acid for hydration support, Shea Butter for moisture and skin conditioning",
      "Niacinamide Complex for enhanced skin benefits, Hyaluronic Acid for hydration support, Shea Butter for moisture and skin conditioning",
      "Formulated to be compatible with all the washes in the Avien 5.5 range for a balanced routine"

    ],
    howToUse: ["Apply generously after shower", "Reapply on dry areas as needed"],
    caution: ["Patch test first"]
  },
  10: {
    focus: "Avien 5.5 The Restorer Retinol & Collagen Body Lotion is a fast absorbing formula crafted to restore skin elasticity, boost cell turnover and enhance skin texture for a more youthful glow with vitamin C complex. It also hydrates by locking up skin moisture, thereby leaving the skin softer with a smoother feel. Appropriate for all skin types and tones.",
    highlighted: ["Retinol (renewal support)", "Collagen (firming support)"],
    bestFor: ["Dull-looking skin", "Rough texture", "Nighttime moisture support"],
    composition: [
      "Restorative moisturizing base (emollients + humectants)",
      "Highlighted retinol + collagen routine positioning",
      "Fragrance and preservative system"
    ],
    howToUse: ["Apply after shower, especially at night", "Pair with The Restorer wash for a simple routine"],
    caution: ["Patch test first", "Use SPF on exposed skin in daytime"]
  },
  11: {
    focus: "Avien 5.5 The Brightener Vitamin C Body Lotion is a fast-absorbing, glow-boosting moisturizer formulated with a potent Vitamin C complex to help brighten the skin and enhance radiance. It also provides hydration and antioxidant support for a healthier-looking complexion. Suitable for all skin types and tones.",
    highlighted: ["Vitamin C (antioxidant support)"],
    bestFor: ["Dull-looking skin", "Daily glow routine", "Moisture + radiance support"],
    composition: [
      "Moisturizing base (emollients + humectants)",
      "Highlighted vitamin C routine positioning (see label for exact INCI)",
      "Fragrance and preservative system"
    ],
    howToUse: ["Apply after shower", "Use daily; pair with Vitamin C wash if desired"],
    caution: ["Patch test first", "Use SPF on exposed skin in daytime"]
  },
  12: {
    focus: "Avien 5.5 The Smoother Glycolic Acid + Vitamin C Body Lotion (500ml) is a resurfacing and brightening moisturizer designed to exfoliate dead skin cells and promote the growth of new, healthier skin. It is specifically formulated to address rough texture and dullness across all skin types and tones",
    highlighted: ["Glycolic Acid (AHA)", "Vitamin C (antioxidant support)"],
    bestFor: ["Rough, bumpy skin", "Dull-looking skin", "Daily moisture + renewal support"],
    composition: [
      "Resurfacing moisturizing base with glycolic acid and vitamin C routine positioning",
      "Humectants + conditioning agents to support skin comfort and hydration",
      "Fragrance and preservative system"
    ],
    howToUse: ["Apply after shower", "Use daily, especially on rough areas"],
    caution: ["Patch test first", "Use SPF on exposed skin in daytime"]
  },
  13: {
    focus: "AVIEN 5.5 The Brightener Vitamin C Body Wash 750ml is infused with Ascorbyl Glycoside – an Ascorbic Acid derivative with higher stability and penetration ability, Niacinamide and other powerful ingredients. From the first shower it penetrates the skin to stimulate the cells for a more even and brighter skin tone. Suitable for all skin types.",
    highlighted: ["Vitamin C (antioxidant support)"],
    bestFor: ["Dull-looking skin", "Daily glow routines", "Pairing with Vitamin C lotion"],
    composition: [
      "Cleansing base with vitamin C routine positioning (see label for exact INCI)",
      "Humectants + conditioning agents for comfort",
      "Fragrance and preservative system"
    ],
    howToUse: ["Use on wet skin, massage, rinse", "Follow with The Brightener lotion"],
    caution: ["Patch test first"]
  }
};

const state = {
  search: "",
  category: "all",
  sort: "featured",
  currentPage: 1,
  pageSize: 30,
  cart: new Map(),
  cartToastTimer: null,
  heroIndex: 0,
  heroTimer: null
};
const el = {
  grid: document.getElementById("product-grid"),
  resultCount: document.getElementById("result-count"),
  search: document.getElementById("search"),
  category: document.getElementById("category-filter"),
  sort: document.getElementById("sort-filter"),
  cartToggle: document.getElementById("cart-toggle"),
  cartClose: document.getElementById("cart-close"),
  cartPanel: document.getElementById("cart-panel"),
  cartItems: document.getElementById("cart-items"),
  cartTotal: document.getElementById("cart-total"),
  cartCount: document.getElementById("cart-count"),
  checkout: document.getElementById("checkout-btn"),
  clearCart: document.getElementById("clear-cart"),
  heroImage: document.getElementById("hero-image"),
  heroTitle: document.getElementById("hero-title"),
  heroCaption: document.getElementById("hero-caption"),
  heroDots: document.getElementById("hero-dots"),
  pagination: document.getElementById("pagination"),
  prevPage: document.getElementById("prev-page"),
  nextPage: document.getElementById("next-page"),
  pageLabel: document.getElementById("page-label"),
  cartToast: document.getElementById("cart-toast"),
  productAboutModal: document.getElementById("product-about-modal"),
  productAboutTitle: document.getElementById("product-about-title"),
  productAboutBody: document.getElementById("product-about-body"),
  productAboutClose: document.getElementById("product-about-close"),
  productAboutLearn: document.getElementById("product-about-learn"),
  lightbox: document.getElementById("lightbox"),
  lightboxImage: document.getElementById("lightbox-image"),
  lightboxCaption: document.getElementById("lightbox-caption"),
  lightboxClose: document.getElementById("lightbox-close")
};

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function productType(name) {
  const n = String(name || "").toLowerCase();
  if (n.includes("body wash")) return "Body Wash";
  if (n.includes("body lotion")) return "Body Lotion";
  return "Body Care";
}

function productAnchor(id) {
  return "product-" + id;
}

let lastFocusedEl = null;
let previousHash = "";

function closeProductAboutModal(opts) {
  const options = Object.assign({ restoreFocus: true, restoreHash: true }, opts || {});
  if (!el.productAboutModal) return;
  el.productAboutModal.classList.remove("open");
  el.productAboutModal.setAttribute("aria-hidden", "true");
  syncModalOpenClass();
  if (options.restoreHash && window.location.hash && window.location.hash.startsWith("#product-")) {
    if (previousHash) {
      history.replaceState(null, "", window.location.pathname + window.location.search + previousHash);
    } else {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }
  if (options.restoreFocus && lastFocusedEl && typeof lastFocusedEl.focus === "function") {
    lastFocusedEl.focus();
  }
}

function renderList(items) {
  if (!items || !items.length) return "";
  return "<ul>" + items.map(function (i) { return "<li>" + escapeHtml(i) + "</li>"; }).join("") + "</ul>";
}

function openProductAbout(id, opts) {
  const options = Object.assign({ updateHash: true }, opts || {});
  const product = products.find(function (p) { return p.id === id; });
  if (!product || !el.productAboutModal || !el.productAboutBody) return;

  const about = productAbout[id] || {};
  const type = productType(product.name);

  if (options.updateHash) {
    previousHash = window.location.hash || "";
    history.replaceState(null, "", "#"+productAnchor(id));
  }

  lastFocusedEl = document.activeElement;
  el.productAboutModal.classList.add("open");
  el.productAboutModal.setAttribute("aria-hidden", "false");
  syncModalOpenClass();

  if (el.productAboutTitle) el.productAboutTitle.textContent = product.name;
  if (el.productAboutLearn) el.productAboutLearn.href = "about.html#" + productAnchor(id);

  el.productAboutBody.innerHTML =
    "<p class=\"meta\"><strong>Type:</strong> " + escapeHtml(type) + " &nbsp; • &nbsp; <strong>Category:</strong> " + escapeHtml(product.category) + "</p>" +
    "<p><strong>Price:</strong> " + escapeHtml(formatNaira(product.price)) + "</p>" +
    (about.focus ? "<p><strong>What it does:</strong> " + escapeHtml(about.focus) + "</p>" : "") +
    (about.highlighted ? "<h3>Highlighted ingredients</h3>" + renderList(about.highlighted) : "") +
    (about.bestFor ? "<h3>Best for</h3>" + renderList(about.bestFor) : "") +
    (about.composition ? "<h3>Composition (high level)</h3>" + renderList(about.composition) : "") +
    (about.howToUse ? "<h3>How to use</h3>" + renderList(about.howToUse) : "") +
    (about.caution ? "<h3>Notes & safety</h3>" + renderList(about.caution) : "") +
    "<p class=\"fine-print\">" + escapeHtml(PRODUCT_ORIGIN_NOTE) + "</p>" +
    "<p class=\"fine-print\">Always read the label for the full ingredient list (INCI) and directions for your specific bottle.</p>";

  if (el.productAboutClose) el.productAboutClose.focus();
}

let lastFocusedLightboxEl = null;
function syncModalOpenClass() {
  const aboutOpen = el.productAboutModal && el.productAboutModal.classList.contains("open");
  const lightboxOpen = el.lightbox && el.lightbox.classList.contains("open");
  document.body.classList.toggle("modal-open", Boolean(aboutOpen || lightboxOpen));
}
function openLightboxFromImg(img) {
  if (!img || !el.lightbox || !el.lightboxImage) return;
  lastFocusedLightboxEl = document.activeElement;
  el.lightboxImage.src = img.currentSrc || img.src;
  el.lightboxImage.alt = img.alt || "Expanded product image";
  if (el.lightboxCaption) el.lightboxCaption.textContent = img.alt || "";
  el.lightbox.classList.add("open");
  el.lightbox.setAttribute("aria-hidden", "false");
  syncModalOpenClass();
  if (el.lightboxClose) el.lightboxClose.focus();
}
function closeLightbox(opts) {
  const options = Object.assign({ restoreFocus: true }, opts || {});
  if (!el.lightbox) return;
  el.lightbox.classList.remove("open");
  el.lightbox.setAttribute("aria-hidden", "true");
  if (el.lightboxImage) el.lightboxImage.src = "";
  if (el.lightboxCaption) el.lightboxCaption.textContent = "";
  syncModalOpenClass();

  const aboutStillOpen = el.productAboutModal && el.productAboutModal.classList.contains("open");
  if (options.restoreFocus && !aboutStillOpen && lastFocusedLightboxEl && typeof lastFocusedLightboxEl.focus === "function") {
    lastFocusedLightboxEl.focus();
  }
  lastFocusedLightboxEl = null;
}
function formatNaira(value) {
  return "N" + Number(value || 0).toLocaleString("en-NG");
}
function safeImageUrl(relativePath) {
  try {
    return new URL(encodeURI(relativePath), window.location.href).href;
  } catch {
    return relativePath;
  }
}
function showCartToast(message) {
  if (!el.cartToast) return;
  el.cartToast.textContent = message;
  el.cartToast.classList.add("show");
  if (state.cartToastTimer) clearTimeout(state.cartToastTimer);
  state.cartToastTimer = setTimeout(function () {
    el.cartToast.classList.remove("show");
  }, 1800);
}
function categorize(name) {
  const n = name.toLowerCase();
  if (/(tooth|teeth|mouth spray|tootbrush|toothpaste|denture)/.test(n)) return "Oral Care";
  if (/(baby|child)/.test(n)) return "Baby Care";
  if (/(perfume|air wick|axe|fragrance)/.test(n)) return "Fragrance";
  if (/(lip balm|lip oil|lip scrub|lip)/.test(n)) return "Lip Care";
  if (/(scrub|mask|patch|patches|wipes|pore strips|peel off|eye patches)/.test(n)) return "Treatments and Exfoliants";
  if (/(serum|oil|toner|mist)/.test(n)) return "Serums Oils and Toners";
  if (/(soap|cream bar|bar)/.test(n)) return "Soaps and Bars";
  if (/(wash|cleanser|cleansing|foam|shower|bath|intimate wash|gel cleanser)/.test(n)) return "Cleansers and Washes";
  if (/(lotion|cream|moisturiser|moisturizer|body milk|body butter|gel cream)/.test(n)) return "Lotions and Creams";
  return "Skincare Essentials";
}
for (let i = 0; i < products.length; i += 1) {
  products[i].category = categorize(products[i].name);
  products[i].price = Number(products[i].price) || 0;
}
const heroSlides = [
  {
    image: "images/hero1.jpg",
    title: "Avien 5.5 body care, refined",
    caption: "Shop the full Avien 5.5 line of body washes and lotions in one place."
  },
  {
    image: "images/hero2.jpg",
    title: "Targeted lotions for daily glow",
    caption: "From brightening Vitamin C to smoothing essentials, pick your match."
  },
  {
    image: "images/hero3.jpg",
    title: "WhatsApp checkout in minutes",
    caption: "Add your favorites and send your order directly from the cart."
  }
];
function setupHeroSlider() {
  if (!el.heroImage || !el.heroDots || !el.heroTitle || !el.heroCaption) return;
  el.heroDots.innerHTML = heroSlides.map(function (_, i) {
    return "<button class=\"hero-dot\" type=\"button\" data-hero-index=\"" + i + "\"></button>";
  }).join("");
  function renderHero() {
    const slide = heroSlides[state.heroIndex];
    el.heroImage.src = encodeURI(slide.image);
    el.heroTitle.textContent = slide.title;
    el.heroCaption.textContent = slide.caption;
    const dots = el.heroDots.querySelectorAll(".hero-dot");
    for (let i = 0; i < dots.length; i += 1) {
      dots[i].classList.toggle("active", i === state.heroIndex);
    }
  }
  el.heroDots.addEventListener("click", function (e) {
    const btn = e.target.closest("button[data-hero-index]");
    if (!btn) return;
    state.heroIndex = Number(btn.dataset.heroIndex);
    renderHero();
  });
  renderHero();
  if (state.heroTimer) clearInterval(state.heroTimer);
  state.heroTimer = setInterval(function () {
    state.heroIndex = (state.heroIndex + 1) % heroSlides.length;
    renderHero();
  }, 3800);
}
function getFilteredProducts() {
  const q = state.search.trim().toLowerCase();
  let list = products.filter(function (p) {
    const matchesCategory = state.category === "all" || p.category === state.category;
    const hay = (p.name + " " + p.brand + " " + p.category).toLowerCase();
    const matchesSearch = !q || hay.includes(q);
    return matchesCategory && matchesSearch;
  });
  switch (state.sort) {
    case "price-asc":
      list = list.sort(function (a, b) { return a.price - b.price; });
      break;
    case "price-desc":
      list = list.sort(function (a, b) { return b.price - a.price; });
      break;
    case "name-asc":
      list = list.sort(function (a, b) { return a.name.localeCompare(b.name); });
      break;
    default:
      list = list.sort(function (a, b) { return a.id - b.id; });
  }
  return list;
}
function getPageData(list) {
  const paginate = state.category === "all";
  if (!paginate) {
    return {
      items: list,
      totalPages: 1,
      startIndex: list.length ? 1 : 0,
      endIndex: list.length
    };
  }
  const totalPages = Math.max(1, Math.ceil(list.length / state.pageSize));
  if (state.currentPage > totalPages) state.currentPage = totalPages;
  if (state.currentPage < 1) state.currentPage = 1;
  const start = (state.currentPage - 1) * state.pageSize;
  const end = start + state.pageSize;
  return {
    items: list.slice(start, end),
    totalPages: totalPages,
    startIndex: list.length ? start + 1 : 0,
    endIndex: Math.min(end, list.length)
  };
}
function renderPagination(totalPages) {
  if (!el.pagination || !el.prevPage || !el.nextPage || !el.pageLabel) return;
  const shouldShow = state.category === "all";
  el.pagination.style.display = shouldShow ? "flex" : "none";
  if (!shouldShow) return;
  el.pageLabel.textContent = "Page " + state.currentPage + " of " + totalPages;
  el.prevPage.disabled = state.currentPage <= 1;
  el.nextPage.disabled = state.currentPage >= totalPages;
}
function renderProducts() {
  const filtered = getFilteredProducts();
  const pageData = getPageData(filtered);
  const list = pageData.items;
  el.resultCount.textContent = "Showing " + pageData.startIndex + "-" + pageData.endIndex + " of " + filtered.length + " products";
  el.grid.innerHTML = list.map(function (p) {
    return "<article class=\"card\">" +
      "<img src=\"" + encodeURI(p.image) + "\" alt=\"" + p.name + "\" loading=\"lazy\" />" +
      "<div class=\"card-body\">" +
      "<p class=\"brand\">" + p.brand + "</p>" +
      "<h3 class=\"title\">" + p.name + "</h3>" +
      "<p class=\"meta\">" + p.category + "</p>" +
      "<div class=\"price-row\">" +
      "<span class=\"price\">" + formatNaira(p.price) + "</span>" +
      "<span class=\"card-actions\">" +
      "<button class=\"about-btn\" data-action=\"about\" data-id=\"" + p.id + "\">About</button>" +
      "<button class=\"add-btn\" data-action=\"add\" data-id=\"" + p.id + "\">Add to Cart</button>" +
      "</span>" +
      "</div>" +
      "</div>" +
      "</article>";
  }).join("");
  renderPagination(pageData.totalPages);
}
function buildCategoryOptions() {
  const categories = Array.from(new Set(products.map(function (p) { return p.category; }))).sort(function (a, b) {
    return a.localeCompare(b);
  });
  categories.forEach(function (c) {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    el.category.appendChild(opt);
  });
}
function cartArray() {
  return Array.from(state.cart.values());
}
function updateCartCounters() {
  const items = cartArray();
  const count = items.reduce(function (n, i) { return n + i.qty; }, 0);
  const total = items.reduce(function (n, i) { return n + (i.price * i.qty); }, 0);
  el.cartCount.textContent = String(count);
  el.cartTotal.textContent = formatNaira(total);
}
function renderCart() {
  const items = cartArray();
  if (!items.length) {
    el.cartItems.innerHTML = "<p>Your cart is empty.</p>";
    updateCartCounters();
    return;
  }
  el.cartItems.innerHTML = items.map(function (item) {
    return "<div class=\"cart-item\">" +
      "<img src=\"" + encodeURI(item.image) + "\" alt=\"" + item.name + "\" />" +
      "<div>" +
      "<p class=\"title\">" + item.name + "</p>" +
      "<p class=\"meta\">" + formatNaira(item.price) + " each</p>" +
      "<div class=\"qty-wrap\">" +
      "<button class=\"qty-btn\" data-action=\"dec\" data-id=\"" + item.id + "\">-</button>" +
      "<span>" + item.qty + "</span>" +
      "<button class=\"qty-btn\" data-action=\"inc\" data-id=\"" + item.id + "\">+</button>" +
      "</div>" +
      "</div>" +
      "<div>" +
      "<p class=\"price\">" + formatNaira(item.price * item.qty) + "</p>" +
      "<button class=\"add-btn\" data-action=\"remove\" data-id=\"" + item.id + "\">Remove</button>" +
      "</div>" +
      "</div>";
  }).join("");
  updateCartCounters();
}
function addToCart(id) {
  const product = products.find(function (p) { return p.id === id; });
  if (!product) return;
  if (state.cart.has(id)) {
    state.cart.get(id).qty += 1;
  } else {
    state.cart.set(id, Object.assign({}, product, { qty: 1 }));
  }
  renderCart();
  showCartToast(product.name + " added to cart.");
}
function changeQty(id, action) {
  if (!state.cart.has(id)) return;
  const item = state.cart.get(id);
  if (action === "inc") item.qty += 1;
  if (action === "dec") item.qty -= 1;
  if (action === "remove" || item.qty <= 0) state.cart.delete(id);
  renderCart();
}
function openCart() {
  el.cartPanel.classList.add("open");
  el.cartPanel.setAttribute("aria-hidden", "false");
}
function closeCart() {
  el.cartPanel.classList.remove("open");
  el.cartPanel.setAttribute("aria-hidden", "true");
}
function checkoutOnWhatsApp() {
  const items = cartArray();
  if (!items.length) {
    alert("Your cart is empty.");
    return;
  }
  const total = items.reduce(function (n, i) { return n + (i.price * i.qty); }, 0);
  const lines = [
    "Hello " + STORE.name + ", I want to place an order.",
    "",
    "Selected products:"
  ];
  items.forEach(function (item, index) {
    lines.push(String(index + 1) + ". " + item.name);
    lines.push("Qty: " + item.qty);
    lines.push("Unit Price: " + formatNaira(item.price));
    lines.push("Subtotal: " + formatNaira(item.price * item.qty));
    lines.push("Picture: " + safeImageUrl(item.image));
    lines.push("");
  });
  lines.push("Total: " + formatNaira(total));
  lines.push("Store Address: " + STORE.address);
  const text = encodeURIComponent(lines.join("\n"));
  const url = "https://wa.me/" + STORE.whatsapp + "?text=" + text;
  window.open(url, "_blank");
}
el.search.addEventListener("input", function (e) {
  state.search = e.target.value;
  state.currentPage = 1;
  renderProducts();
});
el.category.addEventListener("change", function (e) {
  state.category = e.target.value;
  state.currentPage = 1;
  renderProducts();
});
el.sort.addEventListener("change", function (e) {
  state.sort = e.target.value;
  state.currentPage = 1;
  renderProducts();
});
el.grid.addEventListener("click", function (e) {
  const img = e.target.closest && e.target.closest(".card img");
  if (img) {
    openLightboxFromImg(img);
    return;
  }
  const btn = e.target.closest("button[data-action][data-id]");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  if (btn.dataset.action === "add") addToCart(id);
  if (btn.dataset.action === "about") openProductAbout(id);
});
el.cartItems.addEventListener("click", function (e) {
  const img = e.target.closest && e.target.closest(".cart-item img");
  if (img) {
    openLightboxFromImg(img);
    return;
  }
  const btn = e.target.closest("button[data-action][data-id]");
  if (!btn) return;
  changeQty(Number(btn.dataset.id), btn.dataset.action);
});
if (el.prevPage) {
  el.prevPage.addEventListener("click", function () {
    if (state.currentPage > 1) {
      state.currentPage -= 1;
      renderProducts();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}
if (el.nextPage) {
  el.nextPage.addEventListener("click", function () {
    state.currentPage += 1;
    renderProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
el.cartToggle.addEventListener("click", openCart);
el.cartClose.addEventListener("click", closeCart);
el.checkout.addEventListener("click", checkoutOnWhatsApp);
el.clearCart.addEventListener("click", function () {
  state.cart.clear();
  renderCart();
});
buildCategoryOptions();
setupHeroSlider();
renderProducts();
renderCart();

if (el.productAboutModal) {
  el.productAboutModal.addEventListener("click", function (e) {
    const shouldClose = e.target && e.target.closest && e.target.closest("[data-modal-close=\"true\"]");
    if (!shouldClose) return;
    closeProductAboutModal();
  });
}
if (el.productAboutClose) {
  el.productAboutClose.addEventListener("click", function () {
    closeProductAboutModal();
  });
}
if (el.lightbox) {
  el.lightbox.addEventListener("click", function (e) {
    if (e.target === el.lightbox || (e.target && e.target.closest && e.target.closest(".lightbox-close"))) {
      closeLightbox();
    }
  });
}
if (el.lightboxClose) {
  el.lightboxClose.addEventListener("click", function () {
    closeLightbox();
  });
}
document.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;
  if (el.lightbox && el.lightbox.classList.contains("open")) {
    closeLightbox();
    return;
  }
  if (el.productAboutModal && el.productAboutModal.classList.contains("open")) {
    closeProductAboutModal();
  }
});

function openProductAboutFromHash() {
  const match = String(window.location.hash || "").match(/^#product-(\d+)$/);
  if (!match) return;
  const id = Number(match[1]);
  if (!Number.isFinite(id)) return;
  openProductAbout(id, { updateHash: false });
}
openProductAboutFromHash();
window.addEventListener("hashchange", openProductAboutFromHash);


