const STORE = {
  name: "Avien Skin",
  address: "Suite 2, Polaris Bank Plaza, Opposite Carpark, BBA, Trade Fair Complex, Lagos",
  phone: "08142526229",
  whatsapp: "2348142526229",
  email: "acaviennigltd@gmail.com"
};

// Web-optimized catalog using ~120KB fast-loading thumbnails for grid/scrolling,
// and reserving high-res original images for Quick View modal and Lightbox zoom.
const products = [
  {
    id: 1,
    name: "Avien 5.5 The Smoother Glycolic Acid Body Wash",
    brand: "Avien 5.5",
    price: 12500,
    category: "Body Wash",
    actives: ["Glycolic Acid (AHA)", "Vitamin C"],
    rating: 4.9,
    reviews: 58,
    pairId: 12,
    image: "images/smoother wash.jpg",
    fullImage: "images/smoother wash.jpg"
  },
  {
    id: 2,
    name: "Avien 5.5 The Glow Getter Kojic Acid Body Wash",
    brand: "Avien 5.5",
    price: 12500,
    category: "Body Wash",
    actives: ["Kojic Acid", "Tranexamic Acid"],
    rating: 5.0,
    reviews: 74,
    pairId: 8,
    image: "images/glowgetter wash.png",
    fullImage: "images/glowgetter wash.png"
  },
  {
    id: 3,
    name: "Avien 5.5 The Purifier Alpha Arbutin + Niacinamide Body Wash",
    brand: "Avien 5.5",
    price: 12500,
    category: "Body Wash",
    actives: ["Alpha Arbutin", "Niacinamide"],
    rating: 4.8,
    reviews: 49,
    pairId: 7,
    image: "images/purifier wash.jpg",
    fullImage: "images/purifier wash.jpg"
  },
  {
    id: 4,
    name: "Avien 5.5 The Wonder Body Wash",
    brand: "Avien 5.5",
    price: 12500,
    category: "Body Wash",
    actives: ["Caffeine", "Hyaluronic Acid", "Shea Butter"],
    rating: 4.9,
    reviews: 36,
    pairId: 9,
    image: "images/wonder wash.jpg",
    fullImage: "images/wonder wash.jpg"
  },
  {
    id: 5,
    name: "Avien 5.5 The Perfector Salicylic Acid Body Wash",
    brand: "Avien 5.5",
    price: 12500,
    category: "Body Wash",
    actives: ["2% Salicylic Acid (BHA)"],
    rating: 5.0,
    reviews: 82,
    pairId: 7,
    image: "images/perfector wash.png",
    fullImage: "images/perfector wash.png"
  },
  {
    id: 6,
    name: "Avien 5.5 The Restorer Retinol + Collagen Body Wash",
    brand: "Avien 5.5",
    price: 12500,
    category: "Body Wash",
    actives: ["Retinol", "Collagen"],
    rating: 4.9,
    reviews: 63,
    pairId: 10,
    image: "images/restorer wash.jpg",
    fullImage: "images/restorer wash.jpg"
  },
  {
    id: 7,
    name: "Avien 5.5 The Purifier Body Lotion",
    brand: "Avien 5.5",
    price: 13000,
    category: "Body Lotion",
    actives: ["Alpha Arbutin", "Niacinamide"],
    rating: 4.9,
    reviews: 51,
    pairId: 3,
    image: "images/purifier lotion.png",
    fullImage: "images/purifier lotion.png"
  },
  {
    id: 8,
    name: "Avien 5.5 The Glow Getter Body Lotion",
    brand: "Avien 5.5",
    price: 13000,
    category: "Body Lotion",
    actives: ["Kojic Acid", "Tranexamic Acid"],
    rating: 5.0,
    reviews: 67,
    pairId: 2,
    image: "images/glowgetter lotion.jpg",
    fullImage: "images/glowgetter lotion.jpg"
  },
  {
    id: 9,
    name: "Avien 5.5 The Wonder Body Lotion",
    brand: "Avien 5.5",
    price: 13000,
    category: "Body Lotion",
    actives: ["Niacinamide Complex", "Shea Butter"],
    rating: 4.8,
    reviews: 40,
    pairId: 4,
    image: "images/wonder lotion.webp",
    fullImage: "images/wonder lotion.webp"
  },
  {
    id: 10,
    name: "Avien 5.5 The Restorer Body Lotion",
    brand: "Avien 5.5",
    price: 13000,
    category: "Body Lotion",
    actives: ["Retinol", "Collagen"],
    rating: 4.9,
    reviews: 59,
    pairId: 6,
    image: "images/restorer lotion.jpg",
    fullImage: "images/restorer lotion.jpg"
  },
  {
    id: 11,
    name: "Avien 5.5 The Brightener Vitamin C Body Lotion",
    brand: "Avien 5.5",
    price: 13000,
    category: "Body Lotion",
    actives: ["Ascorbyl Glucoside", "Vitamin C"],
    rating: 5.0,
    reviews: 91,
    pairId: 13,
    image: "images/brightner lotion.jpg",
    fullImage: "images/brightner lotion.jpg"
  },
  {
    id: 12,
    name: "Avien 5.5 The Smoother Body Lotion",
    brand: "Avien 5.5",
    price: 13000,
    category: "Body Lotion",
    actives: ["Glycolic Acid (AHA)", "Vitamin C"],
    rating: 4.9,
    reviews: 64,
    pairId: 1,
    image: "images/smoother lotion.jpg",
    fullImage: "images/smoother lotion.jpg"
  },
  {
    id: 13,
    name: "Avien 5.5 The Brightener Vitamin C Body Wash",
    brand: "Avien 5.5",
    price: 12500,
    category: "Body Wash",
    actives: ["Ascorbyl Glucoside", "Niacinamide"],
    rating: 5.0,
    reviews: 88,
    pairId: 11,
    image: "images/brightner wash.jpg",
    fullImage: "images/The Brightener Wash.jpg"
  }
];

const PRODUCT_ORIGIN_NOTE = "Formulated in Maryland, USA • Manufactured in China under strict ISO standards.";

const routineMatches = {
  smooth: {
    title: "The Exfoliating & Smoothing Set",
    desc: "Exfoliates dead skin cells and reveals soft, radiant, polished texture.",
    washId: 1,
    lotionId: 12
  },
  brighten: {
    title: "The Ultimate Glow & Vitamin C Set",
    desc: "Reduces dark spots, unifies skin tone, and enhances natural radiance.",
    washId: 13,
    lotionId: 11
  },
  clarify: {
    title: "The Blemish & Pore Clarifying Set",
    desc: "Unclogs body pores, clears bumps, and prevents chest/back breakouts.",
    washId: 5,
    lotionId: 7
  },
  restore: {
    title: "The Youth Renewal & Retinol Set",
    desc: "Restores skin elasticity, boosts firm feel, and deeply hydrates overnight.",
    washId: 6,
    lotionId: 10
  }
};

const productAbout = {
  1: {
    focus: "Avien 5.5 Glycolic Acid & Vitamin C Smoothing Body Wash gently exfoliates dead skin cells and stimulates cell renewal, revealing a radiant and smoother skin texture.",
    highlighted: ["Glycolic Acid (AHA)", "Vitamin C Derivative"],
    bestFor: ["Rough & bumpy skin", "Dull texture", "Smoothing uneven areas"],
    composition: ["Exfoliating Glycolic Acid within a pH-balanced cleansing base", "Hydrating humectants & skin conditioning agents", "Antioxidant Vitamin C"],
    howToUse: ["Massage onto wet skin during shower", "Use 3–4 times weekly and adjust to daily based on tolerance", "Rinse thoroughly and follow with The Smoother Lotion"],
    caution: ["Patch test before initial use", "Use SPF during daytime on exposed areas"]
  },
  2: {
    focus: "Targets hyperpigmentation and dark spots for a luminous complexion. Kojic Acid and Tranexamic Acid work together to fade discoloration.",
    highlighted: ["Kojic Acid", "Tranexamic Acid"],
    bestFor: ["Hyperpigmentation", "Uneven skin tone", "Boosting glow"],
    composition: ["Kojic Acid & Tranexamic Acid active blend", "Gentle non-stripping cleanser base", "Moisturizers for soft post-wash feel"],
    howToUse: ["Apply to wet skin and lather gently", "Leave on skin for 60 seconds before rinsing", "Follow with The Glow Getter Lotion"],
    caution: ["Patch test recommended", "Store away from direct high heat"]
  },
  3: {
    focus: "Formulated with Alpha Arbutin and Niacinamide to clarify skin, fade dark spots, and strengthen the natural moisture barrier.",
    highlighted: ["Alpha Arbutin", "Niacinamide"],
    bestFor: ["Dark marks & spots", "Barrier restoration", "Uneven tone"],
    composition: ["Alpha Arbutin tone balancer", "Niacinamide barrier support", "Soothing botanical humectants"],
    howToUse: ["Use daily in the morning or evening shower", "Rinse cleanly", "Pair with The Purifier Body Lotion"],
    caution: ["For external body use only"]
  },
  4: {
    focus: "Everyday luxury body wash enriched with Caffeine, Hyaluronic Acid, Niacinamide Complex, and Shea Butter for refreshed, hydrated skin.",
    highlighted: ["Caffeine", "Hyaluronic Acid", "Shea Butter", "Niacinamide"],
    bestFor: ["Daily hydration", "All skin types", "Refreshing shower routine"],
    composition: ["Caffeine energizer", "Hyaluronic Acid moisture magnet", "Pure Shea Butter conditioning"],
    howToUse: ["Lather over body daily", "Rinse thoroughly with warm water"],
    caution: ["Avoid contact with eyes"]
  },
  5: {
    focus: "Fortified with 2% Salicylic Acid (BHA) to deep cleanse pores, dissolve blackheads, and prevent breakouts on back, chest, and shoulders.",
    highlighted: ["2% Salicylic Acid (BHA)"],
    bestFor: ["Body acne & backne", "Rough & bumpy pores", "Oily body skin"],
    composition: ["2% Salicylic Acid BHA pore refiner", "Soothing anti-irritants", "Balanced cleansing surfactant"],
    howToUse: ["Apply to target breakout areas", "Allow foam to sit for 30 seconds before rinsing", "Use 3-5 times weekly"],
    caution: ["If dryness occurs, reduce frequency"]
  },
  6: {
    focus: "Supercharged with Retinol & Collagen to enhance skin firmness, promote cell turnover, and restore youthful elasticity.",
    highlighted: ["Retinol", "Collagen"],
    bestFor: ["Loss of elasticity", "Nighttime renewal", "Firming care"],
    composition: ["Encapsulated Retinol for gentle release", "Hydrolyzed Collagen firming complex", "Nourishing oil base"],
    howToUse: ["Ideal for evening showers", "Start 2-3 times weekly and build up", "Follow with Retinol lotion"],
    caution: ["Always apply sunscreen in daytime when using retinol products"]
  },
  7: {
    focus: "Lightweight, fast-absorbing moisturizer with Alpha Arbutin and Niacinamide that locks in hydration while brightening skin tone.",
    highlighted: ["Alpha Arbutin", "Niacinamide"],
    bestFor: ["Post-shower hydration", "Targeting dark spots", "Daily glow"],
    composition: ["Moisturizing emollient matrix", "Alpha Arbutin & Niacinamide"],
    howToUse: ["Smooth over clean, slightly damp skin after bathing"],
    caution: ["Patch test first"]
  },
  8: {
    focus: "High-performance brightening lotion formulated with Kojic Acid and Tranexamic Acid to maintain a healthy skin-neutral pH 5.5 balance.",
    highlighted: ["Kojic Acid", "Tranexamic Acid"],
    bestFor: ["Uneven skin tone", "Stubborn dark areas", "Radiance booster"],
    composition: ["Kojic Acid tone support", "pH 5.5 balanced lotion matrix"],
    howToUse: ["Apply daily after shower with focus on dry/dark areas"],
    caution: ["Use daytime sun protection"]
  },
  9: {
    focus: "Glow-restoring, smoothing body moisturizer with Caffeine, Niacinamide, and Hyaluronic Acid for round-the-clock softness.",
    highlighted: ["Caffeine", "Niacinamide Complex", "Hyaluronic Acid"],
    bestFor: ["All skin types", "Daily nourishment", "Silky feel"],
    composition: ["Caffeine, Hyaluronic Acid, Shea Butter, Niacinamide"],
    howToUse: ["Massage generously over entire body daily"],
    caution: ["For external use only"]
  },
  10: {
    focus: "Fast-absorbing restorative lotion crafted with Retinol & Collagen to boost elasticity, smooth texture, and firm the skin.",
    highlighted: ["Retinol", "Collagen"],
    bestFor: ["Overnight renewal", "Firming skin", "Smooth touch"],
    composition: ["Retinol renewal complex", "Soluble Collagen matrix"],
    howToUse: ["Apply nightly after showering with The Restorer Wash"],
    caution: ["Wear sunscreen during daytime"]
  },
  11: {
    focus: "Glow-boosting moisturizer with Vitamin C complex to defend against free radicals, brighten tone, and keep skin supple.",
    highlighted: ["Vitamin C Complex", "Ascorbyl Glucoside"],
    bestFor: ["Radiance boost", "Sun damage care", "Daily defense"],
    composition: ["Stabilized Vitamin C derivative", "Nourishing shea esters"],
    howToUse: ["Apply daily morning or night for glowing skin"],
    caution: ["Store in a cool place"]
  },
  12: {
    focus: "Resurfacing lotion with Glycolic Acid & Vitamin C that gently exfoliates rough patches while delivering intense hydration.",
    highlighted: ["Glycolic Acid (AHA)", "Vitamin C"],
    bestFor: ["Rough elbows/knees", "Strawberry legs", "Exfoliating moisture"],
    composition: ["Micro-dosed Glycolic Acid", "Antioxidant Vitamin C"],
    howToUse: ["Apply daily after bathing"],
    caution: ["Use daytime sun protection"]
  },
  13: {
    focus: "Infused with Ascorbyl Glucoside (stable Vitamin C derivative) and Niacinamide to stimulate skin renewal from the first shower.",
    highlighted: ["Ascorbyl Glucoside", "Niacinamide"],
    bestFor: ["Brightening care", "Daily luminous shower", "All skin types"],
    composition: ["Ascorbyl Glucoside active", "Niacinamide complex"],
    howToUse: ["Use daily for bathing, rinse thoroughly"],
    caution: ["Patch test first"]
  }
};

const state = {
  search: "",
  category: "all",
  sort: "featured",
  currentPage: 1,
  pageSize: 12,
  cart: new Map(),
  activeRoutine: "brighten",
  heroIndex: 0,
  heroTimer: null,
  cartToastTimer: null
};

const el = {};

function initElements() {
  el.grid = document.getElementById("product-grid");
  el.resultCount = document.getElementById("result-count");
  el.search = document.getElementById("search");
  el.searchClear = document.getElementById("search-clear");
  el.category = document.getElementById("category-filter");
  el.sort = document.getElementById("sort-filter");
  
  el.cartToggle = document.getElementById("cart-toggle");
  el.cartClose = document.getElementById("cart-close");
  el.cartPanel = document.getElementById("cart-panel");
  el.cartBackdrop = document.getElementById("cart-backdrop");
  el.cartItems = document.getElementById("cart-items");
  el.cartTotal = document.getElementById("cart-total");
  el.cartCount = document.getElementById("cart-count");
  el.checkout = document.getElementById("checkout-btn");
  el.clearCart = document.getElementById("clear-cart");
  el.shippingProgress = document.getElementById("shipping-progress-text");
  el.shippingProgressBar = document.getElementById("shipping-progress-bar");
  
  el.heroImage = document.getElementById("hero-image");
  el.heroTitle = document.getElementById("hero-title");
  el.heroCaption = document.getElementById("hero-caption");
  el.heroDots = document.getElementById("hero-dots");
  
  el.pagination = document.getElementById("pagination");
  el.prevPage = document.getElementById("prev-page");
  el.nextPage = document.getElementById("next-page");
  el.pageLabel = document.getElementById("page-label");
  el.cartToast = document.getElementById("cart-toast");
  
  el.productAboutModal = document.getElementById("product-about-modal");
  el.productAboutTitle = document.getElementById("product-about-title");
  el.productAboutBody = document.getElementById("product-about-body");
  el.productAboutClose = document.getElementById("product-about-close");
  el.productAboutLearn = document.getElementById("product-about-learn");
  
  el.lightbox = document.getElementById("lightbox");
  el.lightboxImage = document.getElementById("lightbox-image");
  el.lightboxCaption = document.getElementById("lightbox-caption");
  el.lightboxClose = document.getElementById("lightbox-close");
  
  el.routineTabs = document.getElementById("routine-tabs");
  el.routineResult = document.getElementById("routine-result");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatNaira(value) {
  return "₦" + Number(value || 0).toLocaleString("en-NG");
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
  el.cartToast.innerHTML = `<span>✓</span> <span>${escapeHtml(message)}</span>`;
  el.cartToast.classList.add("show");
  if (state.cartToastTimer) clearTimeout(state.cartToastTimer);
  state.cartToastTimer = setTimeout(function () {
    el.cartToast.classList.remove("show");
  }, 2400);
}

// Hero Slider Setup
const heroSlides = [
  {
    image: "images/hero1.jpg",
    tag: "BALANCED pH 5.5 FORMULATION",
    title: "Luxe Skincare, Engineered for Luminous Body Glow",
    caption: "Explore the complete 13-piece Avien 5.5 body wash and lotion collection with fast WhatsApp delivery across Nigeria."
  },
  {
    image: "images/hero2.jpg",
    tag: "TARGETED ACTIVE BOTANICALS",
    title: "From Vitamin C Radiance to Retinol Renewal",
    caption: "Formulated in Maryland, USA to elevate your daily bath ritual with dermatological active ingredients."
  },
  {
    image: "images/hero3.jpg",
    tag: "EXPRESS LAGOS & NIGERIA DELIVERY",
    title: "100% Authentic Avien Stockist",
    caption: "Select your custom body care routine and check out seamlessly via WhatsApp in seconds."
  }
];

function setupHeroSlider() {
  if (!el.heroImage || !el.heroDots || !el.heroTitle || !el.heroCaption) return;
  
  el.heroDots.innerHTML = heroSlides.map(function (_, i) {
    return `<button class="hero-dot ${i === state.heroIndex ? 'active' : ''}" type="button" data-hero-index="${i}" aria-label="Slide ${i+1}"></button>`;
  }).join("");

  function renderHero() {
    const slide = heroSlides[state.heroIndex];
    el.heroImage.src = encodeURI(slide.image);
    el.heroTitle.textContent = slide.title;
    el.heroCaption.textContent = slide.caption;
    
    const tagEl = document.querySelector(".hero-tag");
    if (tagEl) tagEl.textContent = slide.tag;

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
  }, 4500);
}

// Routine Matcher Setup
function renderRoutineFinder() {
  if (!el.routineResult || !el.routineTabs) return;
  
  const currentGoal = routineMatches[state.activeRoutine] || routineMatches.brighten;
  const wash = products.find(p => p.id === currentGoal.washId);
  const lotion = products.find(p => p.id === currentGoal.lotionId);
  if (!wash || !lotion) return;

  const setTotalPrice = wash.price + lotion.price;

  el.routineResult.innerHTML = `
    <div class="routine-pair-card">
      <img src="${encodeURI(wash.image)}" alt="${escapeHtml(wash.name)}" loading="lazy" decoding="async" />
      <div class="routine-pair-info">
        <span class="active-chip">Step 1 • Wash</span>
        <h5>${escapeHtml(wash.name)}</h5>
        <p>${escapeHtml(wash.actives.join(", "))}</p>
      </div>
    </div>
    <div class="routine-pair-card">
      <img src="${encodeURI(lotion.image)}" alt="${escapeHtml(lotion.name)}" loading="lazy" decoding="async" />
      <div class="routine-pair-info">
        <span class="active-chip">Step 2 • Lotion</span>
        <h5>${escapeHtml(lotion.name)}</h5>
        <p>${escapeHtml(lotion.actives.join(", "))}</p>
      </div>
    </div>
    <div class="routine-action-box">
      <div class="routine-price-tag">${formatNaira(setTotalPrice)} <span style="font-size:0.8rem; color:#A0A5AD;">(Full Routine Duo)</span></div>
      <button class="btn btn-gold" data-action="add-routine" data-wash="${wash.id}" data-lotion="${lotion.id}">
        Add 2-Piece Set to Cart
      </button>
    </div>
  `;
}

function setupRoutineFinder() {
  if (!el.routineTabs) return;
  el.routineTabs.addEventListener("click", function (e) {
    const tab = e.target.closest("button[data-routine]");
    if (!tab) return;
    state.activeRoutine = tab.dataset.routine;
    
    const tabs = el.routineTabs.querySelectorAll(".routine-tab");
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    
    renderRoutineFinder();
  });
  renderRoutineFinder();
}

// Product Filtering & Rendering
function getFilteredProducts() {
  const q = state.search.trim().toLowerCase();
  let list = products.filter(function (p) {
    const matchesCategory = state.category === "all" || p.category === state.category;
    const hay = (p.name + " " + p.brand + " " + p.category + " " + p.actives.join(" ")).toLowerCase();
    const matchesSearch = !q || hay.includes(q);
    return matchesCategory && matchesSearch;
  });

  switch (state.sort) {
    case "price-asc":
      list = list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list = list.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      list = list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      list = list.sort((a, b) => a.id - b.id);
  }
  return list;
}

function renderProducts() {
  if (!el.grid) return;
  
  const filtered = getFilteredProducts();
  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / state.pageSize));
  
  if (state.currentPage > totalPages) state.currentPage = totalPages;
  if (state.currentPage < 1) state.currentPage = 1;

  const start = (state.currentPage - 1) * state.pageSize;
  const pageItems = filtered.slice(start, start + state.pageSize);

  if (el.resultCount) {
    el.resultCount.textContent = `Showing ${totalItems ? start + 1 : 0}-${Math.min(start + state.pageSize, totalItems)} of ${totalItems} products`;
  }

  if (!pageItems.length) {
    el.grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
        <p style="font-size: 1.2rem; color: var(--text-muted);">No products match your search criteria.</p>
        <button class="btn btn-outline" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    if (el.pagination) el.pagination.style.display = "none";
    return;
  }

  el.grid.innerHTML = pageItems.map(function (p) {
    const activesHtml = p.actives.map(a => `<span class="active-chip">${escapeHtml(a)}</span>`).join("");
    return `
      <article class="card">
        <div class="card-image-wrap">
          <span class="card-badge">pH 5.5</span>
          <img src="${encodeURI(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" fetchpriority="low" data-action="lightbox" data-src="${encodeURI(p.fullImage || p.image)}" />
        </div>
        <div class="card-body">
          <p class="card-brand">${escapeHtml(p.brand)} • ${escapeHtml(p.category)}</p>
          <h3 class="card-title">${escapeHtml(p.name)}</h3>
          <div class="card-rating">
            ★★★★★ <span>${p.rating} (${p.reviews})</span>
          </div>
          <div class="card-actives">
            ${activesHtml}
          </div>
          <div class="card-foot">
            <span class="card-price">${formatNaira(p.price)}</span>
            <div class="card-actions">
              <button class="btn btn-outline btn-sm" data-action="about" data-id="${p.id}">Quick View</button>
              <button class="btn btn-primary btn-sm" data-action="add" data-id="${p.id}">+ Add</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  if (el.pagination) {
    el.pagination.style.display = totalPages > 1 ? "flex" : "none";
    if (el.pageLabel) el.pageLabel.textContent = `Page ${state.currentPage} of ${totalPages}`;
    if (el.prevPage) el.prevPage.disabled = state.currentPage <= 1;
    if (el.nextPage) el.nextPage.disabled = state.currentPage >= totalPages;
  }
}

function resetFilters() {
  state.search = "";
  state.category = "all";
  state.sort = "featured";
  state.currentPage = 1;
  if (el.search) el.search.value = "";
  if (el.category) el.category.value = "all";
  if (el.sort) el.sort.value = "featured";
  if (el.searchClear) el.searchClear.classList.remove("visible");
  renderProducts();
}

// Shopping Cart Mechanics
function cartArray() {
  return Array.from(state.cart.values());
}

function updateCartCounters() {
  const items = cartArray();
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const total = items.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (el.cartCount) el.cartCount.textContent = String(count);
  if (el.cartTotal) el.cartTotal.textContent = formatNaira(total);

  // Free Shipping Threshold (₦50,000)
  const threshold = 50000;
  if (el.shippingProgress && el.shippingProgressBar) {
    if (total === 0) {
      el.shippingProgress.textContent = "Add products to calculate free delivery status";
      el.shippingProgressBar.style.width = "0%";
    } else if (total >= threshold) {
      el.shippingProgress.innerHTML = "<strong>Congratulations!</strong> You unlocked <strong>FREE Express Lagos Delivery</strong>!";
      el.shippingProgressBar.style.width = "100%";
    } else {
      const remaining = threshold - total;
      const pct = Math.min(100, Math.round((total / threshold) * 100));
      el.shippingProgress.innerHTML = `Add <strong>${formatNaira(remaining)}</strong> more for <strong>FREE Lagos Delivery</strong>`;
      el.shippingProgressBar.style.width = `${pct}%`;
    }
  }
}

function saveCartState() {
  try {
    const items = cartArray().map(i => ({ id: i.id, qty: i.qty }));
    localStorage.setItem("avienCart", JSON.stringify(items));
  } catch (e) {}
}

function loadCartState() {
  try {
    const saved = localStorage.getItem("avienCart");
    if (!saved) return;
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) {
      parsed.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        if (prod && item.qty > 0) {
          state.cart.set(item.id, Object.assign({}, prod, { qty: item.qty }));
        }
      });
    }
  } catch (e) {}
}

function renderCart() {
  if (!el.cartItems) return;
  const items = cartArray();

  if (!items.length) {
    el.cartItems.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
        <p style="font-size:1.1rem; font-family:var(--font-serif);">Your luxury bag is currently empty.</p>
        <p style="font-size:0.85rem;">Discover our 13-piece Avien 5.5 body wash and lotion collection.</p>
      </div>
    `;
    updateCartCounters();
    return;
  }

  el.cartItems.innerHTML = items.map(item => `
    <div class="cart-item">
      <img src="${encodeURI(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async" />
      <div class="cart-item-details">
        <h4 class="cart-item-title">${escapeHtml(item.name)}</h4>
        <p class="cart-item-price">${formatNaira(item.price)} each</p>
        <div class="qty-controls">
          <button class="qty-btn" data-action="dec" data-id="${item.id}">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
        </div>
      </div>
      <div style="text-align:right;">
        <div style="font-weight:700; font-family:var(--font-serif); font-size:1.1rem;">${formatNaira(item.price * item.qty)}</div>
        <button class="remove-btn" data-action="remove" data-id="${item.id}">Remove</button>
      </div>
    </div>
  `).join("");

  updateCartCounters();
}

function addToCart(id, qty = 1) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;
  
  if (state.cart.has(id)) {
    state.cart.get(id).qty += qty;
  } else {
    state.cart.set(id, Object.assign({}, prod, { qty: qty }));
  }

  renderCart();
  saveCartState();
  showCartToast(`${prod.name} added to your bag.`);
}

function changeQty(id, action) {
  if (!state.cart.has(id)) return;
  const item = state.cart.get(id);
  if (action === "inc") item.qty += 1;
  if (action === "dec") item.qty -= 1;
  if (action === "remove" || item.qty <= 0) state.cart.delete(id);

  renderCart();
  saveCartState();
}

function openCart() {
  if (el.cartPanel) el.cartPanel.classList.add("open");
  if (el.cartBackdrop) el.cartBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  if (el.cartPanel) el.cartPanel.classList.remove("open");
  if (el.cartBackdrop) el.cartBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

function checkoutOnWhatsApp() {
  const items = cartArray();
  if (!items.length) {
    alert("Your cart is currently empty. Please add items before checking out.");
    return;
  }

  const total = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const lines = [
    `✨ *NEW ORDER - ${STORE.name.toUpperCase()}* ✨`,
    `----------------------------------------`,
    `Hello! I would like to place an order for the following Avien 5.5 products:`,
    ``
  ];

  items.forEach((item, index) => {
    lines.push(`${index + 1}. *${item.name}*`);
    lines.push(`   • Quantity: ${item.qty}`);
    lines.push(`   • Unit Price: ${formatNaira(item.price)}`);
    lines.push(`   • Subtotal: ${formatNaira(item.price * item.qty)}`);
    lines.push(`   • View Item: ${safeImageUrl(item.image)}`);
    lines.push(``);
  });

  lines.push(`----------------------------------------`);
  lines.push(`💰 *TOTAL ORDER AMOUNT:* ${formatNaira(total)}`);
  lines.push(`📍 *STORE LOCATION:* ${STORE.address}`);
  lines.push(``);
  lines.push(`Please confirm stock availability and send payment details for Lagos/Nigeria delivery.`);

  const text = encodeURIComponent(lines.join("\n"));
  const url = `https://wa.me/${STORE.whatsapp}?text=${text}`;
  
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
}

// Modals & Lightbox
function openProductAbout(id) {
  const prod = products.find(p => p.id === id);
  if (!prod || !el.productAboutModal || !el.productAboutBody) return;

  const about = productAbout[id] || {};
  const displayImgSrc = prod.image || prod.fullImage;
  const zoomImgSrc = prod.fullImage || prod.image;

  if (el.productAboutTitle) el.productAboutTitle.textContent = prod.name;
  
  el.productAboutBody.innerHTML = `
    <div style="display:flex; gap:1.5rem; flex-wrap:wrap; align-items:flex-start;">
      <div style="position:relative; cursor:zoom-in;" onclick="openLightbox('${escapeHtml(zoomImgSrc)}', '${escapeHtml(prod.name)}')">
        <img src="${escapeHtml(displayImgSrc)}" alt="${escapeHtml(prod.name)}" loading="eager" decoding="sync" onerror="this.onerror=null; this.src='${escapeHtml(displayImgSrc)}';" style="width:160px; height:160px; object-fit:contain; border-radius:var(--radius-md); border:1px solid var(--line-gold); padding:0.4rem; background:#FFF; display:block;" />
        <span style="position:absolute; bottom:6px; right:6px; background:rgba(18,21,24,0.75); color:#FFF; font-size:0.65rem; padding:0.2rem 0.4rem; border-radius:4px;">🔍 Zoom</span>
      </div>
      <div style="flex:1; min-width:220px;">
        <p style="margin:0; font-weight:700; color:var(--gold-dark); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em;">${escapeHtml(prod.category)} • pH 5.5 Balanced Formula</p>
        <p style="font-family:var(--font-serif); font-size:1.6rem; font-weight:700; margin:0.3rem 0;">${formatNaira(prod.price)}</p>
        <p style="font-size:0.9rem; line-height:1.5; margin-bottom:1rem;">${escapeHtml(about.focus || '')}</p>
        <button class="btn btn-gold" onclick="addToCart(${prod.id}); closeProductAboutModal();">Add to Bag • ${formatNaira(prod.price)}</button>
      </div>
    </div>
    ${about.highlighted ? `<h4>Key Active Ingredients</h4><ul>${about.highlighted.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>` : ''}
    ${about.bestFor ? `<h4>Target Skin Concerns</h4><ul>${about.bestFor.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>` : ''}
    ${about.howToUse ? `<h4>How to Apply</h4><ul>${about.howToUse.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>` : ''}
    ${about.caution ? `<h4>Notes & Caution</h4><ul>${about.caution.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>` : ''}
    <p style="font-size:0.78rem; color:var(--text-muted); border-top:1px solid var(--line); padding-top:0.8rem; margin-top:1rem;">${PRODUCT_ORIGIN_NOTE}</p>
  `;

  el.productAboutModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductAboutModal() {
  if (el.productAboutModal) el.productAboutModal.classList.remove("open");
  document.body.style.overflow = "";
}

function openLightbox(src, caption) {
  if (!el.lightbox || !el.lightboxImage) return;
  el.lightboxImage.src = src;
  el.lightboxImage.onerror = function() {
    this.onerror = null;
    this.src = src;
  };
  if (el.lightboxCaption) el.lightboxCaption.textContent = caption || "";
  el.lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (el.lightbox) el.lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

// Setup Event Listeners
function setupEventListeners() {
  if (el.search) {
    el.search.addEventListener("input", function (e) {
      state.search = e.target.value;
      state.currentPage = 1;
      if (el.searchClear) el.searchClear.classList.toggle("visible", Boolean(state.search));
      renderProducts();
    });
  }

  if (el.searchClear) {
    el.searchClear.addEventListener("click", function () {
      state.search = "";
      el.search.value = "";
      el.searchClear.classList.remove("visible");
      renderProducts();
    });
  }

  if (el.category) {
    el.category.addEventListener("change", function (e) {
      state.category = e.target.value;
      state.currentPage = 1;
      renderProducts();
    });
  }

  if (el.sort) {
    el.sort.addEventListener("change", function (e) {
      state.sort = e.target.value;
      state.currentPage = 1;
      renderProducts();
    });
  }

  if (el.grid) {
    el.grid.addEventListener("click", function (e) {
      const img = e.target.closest("img[data-action='lightbox']");
      if (img) {
        openLightbox(img.dataset.src, img.alt);
        return;
      }
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;
      const id = Number(btn.dataset.id);
      if (btn.dataset.action === "add") addToCart(id);
      if (btn.dataset.action === "about") openProductAbout(id);
    });
  }

  if (el.routineResult) {
    el.routineResult.addEventListener("click", function (e) {
      const btn = e.target.closest("button[data-action='add-routine']");
      if (!btn) return;
      const washId = Number(btn.dataset.wash);
      const lotionId = Number(btn.dataset.lotion);
      addToCart(washId);
      addToCart(lotionId);
      openCart();
    });
  }

  if (el.cartToggle) el.cartToggle.addEventListener("click", openCart);
  if (el.cartClose) el.cartClose.addEventListener("click", closeCart);
  if (el.cartBackdrop) el.cartBackdrop.addEventListener("click", closeCart);
  
  if (el.cartItems) {
    el.cartItems.addEventListener("click", function (e) {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;
      changeQty(Number(btn.dataset.id), btn.dataset.action);
    });
  }

  if (el.checkout) el.checkout.addEventListener("click", checkoutOnWhatsApp);
  if (el.clearCart) {
    el.clearCart.addEventListener("click", function () {
      state.cart.clear();
      renderCart();
      saveCartState();
    });
  }

  if (el.prevPage) {
    el.prevPage.addEventListener("click", function () {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
        renderProducts();
        window.scrollTo({ top: el.grid.offsetTop - 120, behavior: "smooth" });
      }
    });
  }

  if (el.nextPage) {
    el.nextPage.addEventListener("click", function () {
      state.currentPage += 1;
      renderProducts();
      window.scrollTo({ top: el.grid.offsetTop - 120, behavior: "smooth" });
    });
  }

  if (el.productAboutClose) el.productAboutClose.addEventListener("click", closeProductAboutModal);
  if (el.productAboutModal) {
    el.productAboutModal.addEventListener("click", function (e) {
      if (e.target.classList.contains("modal-backdrop")) closeProductAboutModal();
    });
  }

  if (el.lightboxClose) el.lightboxClose.addEventListener("click", closeLightbox);
  if (el.lightbox) {
    el.lightbox.addEventListener("click", function (e) {
      if (e.target === el.lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeCart();
      closeProductAboutModal();
      closeLightbox();
    }
  });
}

// Initializer
document.addEventListener("DOMContentLoaded", function () {
  initElements();
  loadCartState();
  setupHeroSlider();
  setupRoutineFinder();
  setupEventListeners();
  renderProducts();
  renderCart();

  // Check URL hash for direct product opening e.g. #product-1
  const hashMatch = String(window.location.hash || "").match(/^#product-(\d+)$/);
  if (hashMatch) {
    const id = Number(hashMatch[1]);
    if (id) openProductAbout(id);
  }
});
