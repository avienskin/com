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
    image: "images/1- Avien 5.5, the smoother glycolic acid body wash 10500naira.jpg"
  },
  {
    id: 2,
    name: "Avien 5.5 The Glow Getter Kojic Acid Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/2- Avien 5.5, the glow getter korjic acid body wash 10500naira.jpg"
  },
  {
    id: 3,
    name: "Avien 5.5 The Purifier Alpha Arbutin + Niacinamide Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/3- Avien 5.5, the purifier alpha arbutin niacinamide body wash 10500naira.jpg"
  },
  {
    id: 4,
    name: "Avien 5.5 The Wonder Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/4- Avien 5.5, the wonder body wash 10500naira.jpg"
  },
  {
    id: 5,
    name: "Avien 5.5 The Perfector Salicylic Acid Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/5- Avien 5.5, the perfector salicylic acid body wash 10500naira.jpg"
  },
  {
    id: 6,
    name: "Avien 5.5 The Restorer Retinol + Collagen Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/6- Avien 5.5, the restorer retinol collagen body wash 10500naira.jpg"
  },
  {
    id: 7,
    name: "Avien 5.5 The Purifier Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/7- Avien 5.5, the purifier body lotion 11000.jpg"
  },
  {
    id: 8,
    name: "Avien 5.5 The Glow Getter Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/8- Avien 5.5, the glo getter body lotion 11000naira.jpg"
  },
  {
    id: 9,
    name: "Avien 5.5 The Wonder Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/9- Avien 5.5, wonder body lotion 11000naira.jpg"
  },
  {
    id: 10,
    name: "Avien 5.5 The Restorer Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/10- Avien 5.5, the restorer body lotion 11000naira.jpg"
  },
  {
    id: 11,
    name: "Avien 5.5 The Brightener Vitamin C Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/11- Avien 5.5, the brightener vitamin c body lotion 11000naira.jpg"
  },
  {
    id: 12,
    name: "Avien 5.5 The Smoother Body Lotion",
    brand: "Avien 5.5",
    price: 11000,
    image: "images/12- Avien 5.5, the smoother body lotion 11000naira.jpg"
  },
  {
    id: 13,
    name: "Avien 5.5 The Brightener Vitamin C Body Wash",
    brand: "Avien 5.5",
    price: 10500,
    image: "images/13- Avien 5.5, the brightner vitamin c body wash 10500naira.jpg"
  }
];

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
  cartToast: document.getElementById("cart-toast")
};
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
      "<button class=\"add-btn\" data-id=\"" + p.id + "\">Add to Cart</button>" +
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
  const btn = e.target.closest("button[data-id]");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  addToCart(id);
});
el.cartItems.addEventListener("click", function (e) {
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


