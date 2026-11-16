const STORE = {
  name: "Avien Skin",
  address: "Suite 2, Polaris Bank Plaza, Opposite Carpark, BBA, Trade Fair Complex, Lagos",
  phone: "08142526229",
  whatsapp: "2348142526229",
  email: "acaviennigltd@gmail.com"
};

// Manual bank transfer details used by the Lagos checkout modal.
const PAYMENT = {
  bank: "Fidelity Bank",
  accountNumber: "5600042666",
  accountName: "Acavien Nig Ltd",
  whatsapp: "2348142526229"
};

// All 36 Nigerian states plus the Federal Capital Territory, alphabetically ordered.
const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Federal Capital Territory (FCT)",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara"
];

// Single source of truth for delivery areas and their fees (alphabetical A–Z).
const DELIVERY_LOCATIONS = [
  { area: "Abule Egba", fee: 5000 },
  { area: "Ago Palace", fee: 4000 },
  { area: "Ajah", fee: 6500 },
  { area: "Awoyaya", fee: 10000 },
  { area: "Bariga", fee: 4500 },
  { area: "Command", fee: 4500 },
  { area: "Egbeda", fee: 4000 },
  { area: "Ejigbo", fee: 4000 },
  { area: "Festac", fee: 4000 },
  { area: "Ibeju-Lekki", fee: 14000 },
  { area: "Ijegun", fee: 4000 },
  { area: "Igando", fee: 3500 },
  { area: "Ikeja", fee: 4500 },
  { area: "Ikorodu", fee: 8000 },
  { area: "Ikotun", fee: 4000 },
  { area: "Ilasamaja", fee: 4000 },
  { area: "Ipaja", fee: 4500 },
  { area: "Isolo", fee: 4500 },
  { area: "Iyana Ipaja", fee: 4500 },
  { area: "Ketu", fee: 4500 },
  { area: "Lagos Island", fee: 5500 },
  { area: "Lakowe", fee: 11000 },
  { area: "Lekki Phase 1", fee: 5500 },
  { area: "Lekki Phase 2", fee: 6500 },
  { area: "Maryland", fee: 4500 },
  { area: "Ogba", fee: 4500 },
  { area: "Ojo", fee: 3500 },
  { area: "Oshodi", fee: 4500 },
  { area: "Sangotedo", fee: 7000 },
  { area: "Shomolu", fee: 4500 },
  { area: "Surulere", fee: 4500 },
  { area: "Yaba", fee: 4500 }
].sort((a, b) => a.area.localeCompare(b.area, "en", { sensitivity: "base" }));

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
    inStock: false,
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
  pageSize: products.length,
  cart: new Map(),
  selectedState: "",
  customerName: "",
  deliveryArea: "",
  deliveryAddress: "",
  deliveryPhone: "",
  nonLagosCity: "",
  nonLagosAddress: "",
  nonLagosLandmark: "",
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

  el.cartBody = document.querySelector(".cart-body");
  el.checkoutSection = document.getElementById("checkout-section");

  // State selection
  el.stateSelect = document.getElementById("state-select");
  el.stateError = document.getElementById("state-error");

  // Shared customer details
  el.customerBlock = document.getElementById("customer-block");
  el.customerName = document.getElementById("customer-name");
  el.nameError = document.getElementById("name-error");
  el.phoneInput = document.getElementById("delivery-phone");
  el.phoneError = document.getElementById("phone-error");

  // Lagos route
  el.lagosRoute = document.getElementById("lagos-route");
  el.deliveryLocation = document.getElementById("delivery-location");
  el.locationError = document.getElementById("location-error");
  el.addressBlock = document.getElementById("address-block");
  el.addressInput = document.getElementById("delivery-address");
  el.addressError = document.getElementById("address-error");

  // Non-Lagos route
  el.nonLagosRoute = document.getElementById("non-lagos-route");
  el.nonLagosStateLabel = document.getElementById("non-lagos-state-label");
  el.nonLagosCity = document.getElementById("non-lagos-city");
  el.cityError = document.getElementById("city-error");
  el.nonLagosAddress = document.getElementById("non-lagos-address");
  el.nonAddressError = document.getElementById("non-address-error");
  el.nonLagosLandmark = document.getElementById("non-lagos-landmark");
  el.nonLagosWhatsapp = document.getElementById("non-lagos-whatsapp-btn");

  // Summaries
  el.summaryPlaceholder = document.getElementById("summary-placeholder");
  el.lagosSummary = document.getElementById("lagos-summary");
  el.lagosSubtotal = document.getElementById("lagos-subtotal");
  el.nonLagosSummary = document.getElementById("non-lagos-summary");
  el.nonLagosSubtotal = document.getElementById("non-lagos-subtotal");
  el.nonLagosSummaryState = document.getElementById("non-lagos-summary-state");
  el.summarySubtotal = document.getElementById("summary-subtotal");
  el.summaryLocation = document.getElementById("summary-location");
  el.summaryDelivery = document.getElementById("summary-delivery");

  el.paymentModal = document.getElementById("payment-modal");
  el.paymentClose = document.getElementById("payment-close");
  el.paymentAmount = document.getElementById("payment-amount");
  el.paidBtn = document.getElementById("paid-btn");
  el.whatsappStep = document.getElementById("whatsapp-step");
  el.whatsappReceiptBtn = document.getElementById("whatsapp-receipt-btn");
  
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
      <button class="btn btn-gold" data-action="add-routine" data-wash="${wash.id}" data-lotion="${lotion.id}"${wash.inStock === false || lotion.inStock === false ? " disabled" : ""}>
        ${wash.inStock === false || lotion.inStock === false ? "Routine Includes Out-of-Stock Item" : "Add 2-Piece Set to Cart"}
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
    const inStock = p.inStock !== false;
    return `
      <article class="card">
        <div class="card-image-wrap">
          <span class="card-badge">pH 5.5</span>
          ${inStock ? "" : '<span class="stock-badge">Out of Stock</span>'}
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
              <button class="btn btn-primary btn-sm" data-action="add" data-id="${p.id}"${inStock ? "" : " disabled"}>${inStock ? "+ Add" : "Out of Stock"}</button>
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

function getCartSubtotal() {
  return cartArray().reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function isLagosSelected() {
  return state.selectedState === "Lagos";
}

// The Lagos delivery fee only ever exists while Lagos is the selected state.
function getSelectedDelivery() {
  if (!isLagosSelected()) return null;
  return DELIVERY_LOCATIONS.find(location => location.area === state.deliveryArea) || null;
}

// Product subtotal + the single selected Lagos delivery fee. Never charges delivery twice.
function getOrderTotals() {
  const subtotal = getCartSubtotal();
  const delivery = getSelectedDelivery();
  const deliveryFee = delivery ? delivery.fee : 0;
  return { subtotal: subtotal, delivery: delivery, deliveryFee: deliveryFee, total: subtotal + deliveryFee };
}

function isCheckoutReady() {
  if (!cartArray().length || !state.selectedState) return false;
  if (!state.customerName.trim() || !state.deliveryPhone.trim()) return false;
  if (isLagosSelected()) {
    return Boolean(getSelectedDelivery()) && Boolean(state.deliveryAddress.trim());
  }
  return Boolean(state.nonLagosCity.trim()) && Boolean(state.nonLagosAddress.trim());
}

// Shows exactly one checkout route: nothing before a state is picked, the Lagos flow for
// Lagos, and the delivery-details flow for every other state (FCT included).
function syncCheckoutVisibility() {
  const hasItems = cartArray().length > 0;
  const hasState = Boolean(state.selectedState);
  const lagos = isLagosSelected();

  if (el.checkoutSection) el.checkoutSection.hidden = !hasItems;
  if (el.summaryPlaceholder) el.summaryPlaceholder.hidden = !hasItems || hasState;
  if (el.lagosSummary) el.lagosSummary.hidden = !hasItems || !hasState || !lagos;
  if (el.nonLagosSummary) el.nonLagosSummary.hidden = !hasItems || !hasState || lagos;

  if (el.customerBlock) el.customerBlock.hidden = !hasState;
  if (el.lagosRoute) el.lagosRoute.hidden = !hasState || !lagos;
  if (el.nonLagosRoute) el.nonLagosRoute.hidden = !hasState || lagos;
  if (el.addressBlock) el.addressBlock.hidden = !(hasState && lagos && Boolean(state.deliveryArea));

  if (el.checkout) el.checkout.hidden = !hasItems || !hasState || !lagos;
  if (el.nonLagosWhatsapp) el.nonLagosWhatsapp.hidden = !hasItems || !hasState || lagos;

  if (el.nonLagosStateLabel) el.nonLagosStateLabel.textContent = hasState ? state.selectedState : "—";
  if (el.nonLagosSummaryState) el.nonLagosSummaryState.textContent = hasState ? state.selectedState : "—";
}

function updateCartSummary() {
  const items = cartArray();
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const totals = getOrderTotals();

  if (el.cartCount) el.cartCount.textContent = String(count);
  if (el.summarySubtotal) el.summarySubtotal.textContent = formatNaira(totals.subtotal);
  if (el.lagosSubtotal) el.lagosSubtotal.textContent = formatNaira(totals.subtotal);
  if (el.nonLagosSubtotal) el.nonLagosSubtotal.textContent = formatNaira(totals.subtotal);
  if (el.cartTotal) el.cartTotal.textContent = formatNaira(totals.total);
  if (el.summaryDelivery) el.summaryDelivery.textContent = formatNaira(totals.deliveryFee);

  if (el.summaryLocation) {
    el.summaryLocation.textContent = totals.delivery
      ? `${totals.delivery.area} — ${formatNaira(totals.delivery.fee)}`
      : "Not selected";
    el.summaryLocation.classList.toggle("is-muted", !totals.delivery);
  }

  const ready = isCheckoutReady();
  [el.checkout, el.nonLagosWhatsapp].forEach(function (btn) {
    if (!btn) return;
    btn.classList.toggle("is-disabled", !ready);
    btn.setAttribute("aria-disabled", ready ? "false" : "true");
  });

  if (el.paymentAmount) el.paymentAmount.textContent = formatNaira(totals.total);

  syncCheckoutVisibility();
}

// State dropdown: all 36 states plus the FCT, alphabetically.
function populateStateOptions() {
  if (!el.stateSelect) return;
  const options = NIGERIAN_STATES.map(function (name) {
    return `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`;
  }).join("");
  el.stateSelect.innerHTML = `<option value="">Choose your state</option>${options}`;
  el.stateSelect.value = state.selectedState || "";
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
        if (prod && prod.inStock !== false && item.qty > 0) {
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
    updateCartSummary();
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

  updateCartSummary();
}

function addToCart(id, qty = 1) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;
  if (prod.inStock === false) {
    showCartToast(`${prod.name} is currently out of stock.`);
    return;
  }
  
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
  if (el.cartPanel) {
    el.cartPanel.classList.add("open");
    el.cartPanel.setAttribute("aria-hidden", "false");
  }
  if (el.cartBackdrop) el.cartBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
  applyCartViewport();
}

function closeCart() {
  // Release any focused field before the drawer is hidden from assistive technology.
  if (document.activeElement && el.cartPanel && el.cartPanel.contains(document.activeElement)) {
    document.activeElement.blur();
  }
  if (el.cartPanel) {
    el.cartPanel.classList.remove("open");
    el.cartPanel.setAttribute("aria-hidden", "true");
  }
  if (el.cartBackdrop) el.cartBackdrop.classList.remove("open");
  document.body.style.overflow = "";
  // Drop temporary inline viewport sizing used for the mobile keyboard.
  resetCartViewport();
}

// Lightweight visualViewport handler so the drawer (and its final buttons) stay inside
// the visible area while the mobile keyboard is open. CSS alone cannot track that.
function applyCartViewport() {
  if (!el.cartPanel || !el.cartPanel.classList.contains("open")) return;
  const vv = window.visualViewport;
  if (!vv) return;
  el.cartPanel.style.height = vv.height + "px";
  el.cartPanel.style.top = vv.offsetTop + "px";
  el.cartPanel.style.bottom = "auto";
}

function resetCartViewport() {
  if (!el.cartPanel) return;
  el.cartPanel.style.removeProperty("height");
  el.cartPanel.style.removeProperty("top");
  el.cartPanel.style.removeProperty("bottom");
}

function setupViewportHandling() {
  const handler = function () { applyCartViewport(); };
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", handler);
    window.visualViewport.addEventListener("scroll", handler);
  }
  window.addEventListener("resize", handler);
  window.addEventListener("orientationchange", handler);
}

// Delivery Location Dropdown
function populateDeliveryOptions() {
  if (!el.deliveryLocation) return;
  const options = DELIVERY_LOCATIONS.map(function (location) {
    return `<option value="${escapeHtml(location.area)}">${escapeHtml(location.area)} — ${formatNaira(location.fee)}</option>`;
  }).join("");
  el.deliveryLocation.innerHTML = `<option value="">Choose your delivery area</option>${options}`;
  el.deliveryLocation.value = state.deliveryArea || "";
}

// Checkout Validation
function clearFieldError(field, errorEl) {
  if (errorEl) errorEl.hidden = true;
  if (field) field.classList.remove("has-error");
}

function validateCheckout(route) {
  if (!cartArray().length) {
    showCartToast("Your bag is empty. Add a product before checkout.");
    return false;
  }

  const lagos = route === "lagos";
  let firstInvalid = null;

  function fail(field, errorEl) {
    if (errorEl) errorEl.hidden = false;
    if (field) field.classList.add("has-error");
    if (!firstInvalid && field) firstInvalid = field;
  }

  if (!state.selectedState) {
    if (el.stateError) el.stateError.hidden = false;
    if (el.stateSelect) el.stateSelect.classList.add("has-error");
    if (!firstInvalid) firstInvalid = el.stateSelect;
  }

  if (!state.customerName.trim()) fail(el.customerName, el.nameError);
  if (!state.deliveryPhone.trim()) fail(el.phoneInput, el.phoneError);

  if (lagos) {
    if (state.selectedState && !getSelectedDelivery()) fail(el.deliveryLocation, el.locationError);
    if (state.selectedState && !state.deliveryAddress.trim()) fail(el.addressInput, el.addressError);
  } else {
    if (state.selectedState && !state.nonLagosCity.trim()) fail(el.nonLagosCity, el.cityError);
    if (state.selectedState && !state.nonLagosAddress.trim()) fail(el.nonLagosAddress, el.nonAddressError);
  }

  if (firstInvalid) {
    syncCheckoutVisibility();
    if (firstInvalid.scrollIntoView) firstInvalid.scrollIntoView({ block: "center", behavior: "smooth" });
    return false;
  }

  return true;
}

// Manual Bank Transfer Payment Modal
function openPaymentModal() {
  // The Fidelity Bank flow belongs to Lagos only.
  if (!isLagosSelected() || !validateCheckout("lagos")) return;

  const totals = getOrderTotals();
  if (el.paymentAmount) el.paymentAmount.textContent = formatNaira(totals.total);
  if (el.whatsappStep) el.whatsappStep.hidden = true;
  if (el.paidBtn) {
    el.paidBtn.innerHTML = "I HAVE MADE PAYMENT";
    el.paidBtn.classList.remove("is-disabled");
    el.paidBtn.setAttribute("aria-disabled", "false");
  }

  if (el.paymentModal) {
    el.paymentModal.classList.add("open");
    el.paymentModal.setAttribute("aria-hidden", "false");
  }
  document.body.style.overflow = "hidden";
}

function closePaymentModal() {
  if (el.paymentModal) {
    el.paymentModal.classList.remove("open");
    el.paymentModal.setAttribute("aria-hidden", "true");
  }
  const cartOpen = el.cartPanel && el.cartPanel.classList.contains("open");
  document.body.style.overflow = cartOpen ? "hidden" : "";
}

function confirmPaymentMade() {
  if (!el.whatsappStep) return;
  el.whatsappStep.hidden = false;
  if (el.paidBtn) {
    el.paidBtn.innerHTML = "✓ PAYMENT CONFIRMED — SEND RECEIPT BELOW";
    el.paidBtn.classList.add("is-disabled");
    el.paidBtn.setAttribute("aria-disabled", "true");
  }
  el.whatsappStep.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) {}

  try {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.top = "-1000px";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    helper.setSelectionRange(0, text.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(helper);
    return ok;
  } catch (e) {
    return false;
  }
}

function copyPaymentDetail(button) {
  const value = button.dataset.copy;
  const label = button.dataset.copyLabel || "Details";
  if (!value) return;

  copyToClipboard(value).then(function (ok) {
    if (ok) {
      const original = button.textContent;
      button.textContent = "COPIED ✓";
      button.classList.add("copied");
      setTimeout(function () {
        button.textContent = original;
        button.classList.remove("copied");
      }, 1800);
      showCartToast(`${label} copied successfully.`);
    } else {
      showCartToast(`Please copy your ${label.toLowerCase()} manually: ${value}`);
    }
  });
}

// Dynamic WhatsApp order messages — built from the real bag and customer details.
function buildProductLines() {
  return cartArray().map(function (item, index) {
    return [
      `${index + 1}. ${item.name} × ${item.qty}`,
      `   Unit Price: ${formatNaira(item.price)}`,
      `   Subtotal: ${formatNaira(item.price * item.qty)}`
    ].join("\n");
  }).join("\n\n");
}

function buildCustomerBlock() {
  return [
    "CUSTOMER DETAILS:",
    "",
    `Customer Name: ${state.customerName.trim()}`,
    "",
    `Customer Phone Number: ${state.deliveryPhone.trim()}`
  ].join("\n");
}

function buildLagosOrderMessage() {
  const totals = getOrderTotals();

  return [
    "AVIEN SKIN — NEW CUSTOMER ORDER",
    "",
    buildCustomerBlock(),
    "",
    "PRODUCTS ORDERED:",
    "",
    buildProductLines(),
    "",
    `PRODUCT SUBTOTAL: ${formatNaira(totals.subtotal)}`,
    "",
    "DELIVERY INFORMATION:",
    "",
    "Selected State: Lagos",
    "",
    `Delivery Location: ${totals.delivery ? totals.delivery.area : "Not selected"}`,
    "",
    `Exact Delivery Address: ${state.deliveryAddress.trim()}`,
    "",
    `DELIVERY FEE: ${formatNaira(totals.deliveryFee)}`,
    "",
    `TOTAL AMOUNT PAYABLE: ${formatNaira(totals.total)}`,
    "",
    "PAYMENT DETAILS:",
    "",
    `Bank: ${PAYMENT.bank}`,
    "",
    `Account Number: ${PAYMENT.accountNumber}`,
    "",
    `Account Name: ${PAYMENT.accountName}`,
    "",
    "Payment Status: Customer indicates payment has been made.",
    "",
    "Please find my payment receipt attached.",
    "",
    "Thank you for shopping with Avien Skin."
  ].join("\n");
}

function buildNonLagosOrderMessage() {
  const totals = getOrderTotals();
  const landmark = state.nonLagosLandmark.trim();
  const lines = [
    "AVIEN SKIN — NEW CUSTOMER ORDER",
    "",
    buildCustomerBlock(),
    "",
    "PRODUCTS ORDERED:",
    "",
    buildProductLines(),
    "",
    `PRODUCT SUBTOTAL: ${formatNaira(totals.subtotal)}`,
    "",
    "DELIVERY INFORMATION:",
    "",
    `Selected State: ${state.selectedState}`,
    "",
    `City/LGA: ${state.nonLagosCity.trim()}`,
    "",
    `Exact Delivery Address: ${state.nonLagosAddress.trim()}`
  ];

  if (landmark) {
    lines.push("");
    lines.push(`Nearby Landmark: ${landmark}`);
  }

  lines.push("");
  lines.push("DELIVERY FEE: To be confirmed by Acavien Nig Ltd.");
  lines.push("");
  lines.push("PAYMENT: Delivery charges and payment account details will be provided by our customer service team on WhatsApp.");
  lines.push("");
  lines.push("Thank you for shopping with Avien Skin.");

  return lines.join("\n");
}

function openWhatsApp(message) {
  const url = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
}

function sendPaymentReceiptOnWhatsApp() {
  if (!isLagosSelected() || !validateCheckout("lagos")) return;
  openWhatsApp(buildLagosOrderMessage());
}

function sendNonLagosOrder() {
  if (isLagosSelected() || !validateCheckout("non-lagos")) return;
  openWhatsApp(buildNonLagosOrderMessage());
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
        <button class="btn btn-gold" onclick="addToCart(${prod.id}); closeProductAboutModal();"${prod.inStock === false ? " disabled" : ""}>${prod.inStock === false ? "Out of Stock" : `Add to Bag • ${formatNaira(prod.price)}`}</button>
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

  if (el.checkout) el.checkout.addEventListener("click", openPaymentModal);
  if (el.nonLagosWhatsapp) el.nonLagosWhatsapp.addEventListener("click", sendNonLagosOrder);

  if (el.clearCart) {
    el.clearCart.addEventListener("click", function () {
      state.cart.clear();
      state.selectedState = "";
      state.customerName = "";
      state.deliveryArea = "";
      state.deliveryAddress = "";
      state.deliveryPhone = "";
      state.nonLagosCity = "";
      state.nonLagosAddress = "";
      state.nonLagosLandmark = "";
      if (el.stateSelect) el.stateSelect.value = "";
      if (el.customerName) el.customerName.value = "";
      if (el.deliveryLocation) el.deliveryLocation.value = "";
      if (el.addressInput) el.addressInput.value = "";
      if (el.phoneInput) el.phoneInput.value = "";
      if (el.nonLagosCity) el.nonLagosCity.value = "";
      if (el.nonLagosAddress) el.nonLagosAddress.value = "";
      if (el.nonLagosLandmark) el.nonLagosLandmark.value = "";
      clearFieldError(el.stateSelect, el.stateError);
      clearFieldError(el.customerName, el.nameError);
      clearFieldError(el.deliveryLocation, el.locationError);
      clearFieldError(el.addressInput, el.addressError);
      clearFieldError(el.phoneInput, el.phoneError);
      clearFieldError(el.nonLagosCity, el.cityError);
      clearFieldError(el.nonLagosAddress, el.nonAddressError);
      renderCart();
      saveCartState();
    });
  }

  // State switching: exactly one route stays active, and no Lagos fee survives the switch.
  if (el.stateSelect) {
    el.stateSelect.addEventListener("change", function (e) {
      const nextState = e.target.value;
      const wasLagos = isLagosSelected();
      state.selectedState = nextState;

      clearFieldError(el.stateSelect, el.stateError);
      clearFieldError(el.deliveryLocation, el.locationError);
      clearFieldError(el.addressInput, el.addressError);
      clearFieldError(el.nonLagosCity, el.cityError);
      clearFieldError(el.nonLagosAddress, el.nonAddressError);

      if (wasLagos && nextState !== "Lagos") {
        // Drop the Lagos area so its fee cannot linger on a non-Lagos order.
        state.deliveryArea = "";
        if (el.deliveryLocation) el.deliveryLocation.value = "";
      }

      if (nextState !== "Lagos") closePaymentModal();

      updateCartSummary();
    });
  }

  if (el.customerName) {
    el.customerName.addEventListener("input", function (e) {
      state.customerName = e.target.value;
      if (state.customerName.trim()) clearFieldError(el.customerName, el.nameError);
      updateCartSummary();
    });
  }

  if (el.deliveryLocation) {
    el.deliveryLocation.addEventListener("change", function (e) {
      state.deliveryArea = e.target.value;
      clearFieldError(el.deliveryLocation, el.locationError);
      // The exact address is intentionally preserved when the Lagos area changes.
      updateCartSummary();
    });
  }

  if (el.nonLagosCity) {
    el.nonLagosCity.addEventListener("input", function (e) {
      state.nonLagosCity = e.target.value;
      if (state.nonLagosCity.trim()) clearFieldError(el.nonLagosCity, el.cityError);
      updateCartSummary();
    });
  }

  if (el.nonLagosAddress) {
    el.nonLagosAddress.addEventListener("input", function (e) {
      state.nonLagosAddress = e.target.value;
      if (state.nonLagosAddress.trim()) clearFieldError(el.nonLagosAddress, el.nonAddressError);
      updateCartSummary();
    });
  }

  if (el.nonLagosLandmark) {
    el.nonLagosLandmark.addEventListener("input", function (e) {
      state.nonLagosLandmark = e.target.value;
      updateCartSummary();
    });
  }

  if (el.addressInput) {
    el.addressInput.addEventListener("input", function (e) {
      state.deliveryAddress = e.target.value;
      if (state.deliveryAddress.trim()) clearFieldError(el.addressInput, el.addressError);
      updateCartSummary();
    });
  }

  if (el.phoneInput) {
    el.phoneInput.addEventListener("input", function (e) {
      state.deliveryPhone = e.target.value;
      if (state.deliveryPhone.trim()) clearFieldError(el.phoneInput, el.phoneError);
      updateCartSummary();
    });
  }

  if (el.paymentModal) {
    el.paymentModal.addEventListener("click", function (e) {
      if (e.target.classList.contains("modal-backdrop")) closePaymentModal();
    });
  }
  if (el.paymentClose) el.paymentClose.addEventListener("click", closePaymentModal);

  if (el.paymentModal) {
    el.paymentModal.querySelectorAll("[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () { copyPaymentDetail(btn); });
    });
  }

  if (el.paidBtn) {
    el.paidBtn.addEventListener("click", function () {
      if (el.paidBtn.classList.contains("is-disabled")) return;
      confirmPaymentMade();
    });
  }

  if (el.whatsappReceiptBtn) el.whatsappReceiptBtn.addEventListener("click", sendPaymentReceiptOnWhatsApp);

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
      closePaymentModal();
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
  populateStateOptions();
  populateDeliveryOptions();
  setupViewportHandling();
  renderProducts();
  renderCart();

  // Check URL hash for direct product opening e.g. #product-1
  const hashMatch = String(window.location.hash || "").match(/^#product-(\d+)$/);
  if (hashMatch) {
    const id = Number(hashMatch[1]);
    if (id) openProductAbout(id);
  }
});
