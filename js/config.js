/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Cafe & Cream",
    suffix: "",
    tagline: "Heritage Boutique Cafe & Gelato Parlor",
    description: "Cafe & Cream - A charming heritage boutique cafe nestled inside Sugan Niwas Palace, Jaipur. Offering hand-crafted coffees, artisanal desserts, and delightful continental bites.",
    keywords: "cafe, heritage cafe, jaipur cafes, sugan niwas palace, coffee shop, gelato, desserts, sindhi camp cafe",
    themeColor: "#3e2723",
    domain: "https://cafeandcream.com/",
    ogImage: "https://lh3.googleusercontent.com/grass-cs/AABkmLcfNAIPrEnSMjbzGXSV-D4JgJ4x273yxmA2ftmWhTLYNrlFhzhEWKq_T1HNxizI_RO_ouERJX3CN8nZVggzVuCicZsSn92BZtC0pzmORnEyr-10tLUhEVeI5hGwSfYtKi1IETorJtFOm3IJ=w289-h312-n-k-no",
    faviconEmoji: "☕",
    whatsappNumber: "919602780077"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#1c120c",          // Rich dark espresso background
      bgCard: "#281b14",      // Deep roasted coffee card background
      bgLight: "#35241b",     // Warm terracotta accent panel
      primary: "#d4a373",     // Warm cream / golden brew primary
      primaryHover: "#faedcd",// Soft froth cream
      text: "#f3e9dc",        // Warm ivory body text
      textMuted: "#bcaaa4",   // Soft muted earthy taupe
      accent: "#4e342e"       // Deep warm mahogany
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Heritage Boutique Experience",
    title: "Artisanal Coffee & Indulgent Delights",
    description: "Step into the royal serene ambiance of Sugan Niwas Palace. Enjoy handcrafted coffee, rich creamy shakes, and gourmet bites right in the heart of Jaipur.",
    bgImage: "https://lh3.googleusercontent.com/grass-cs/AABkmLcfNAIPrEnSMjbzGXSV-D4JgJ4x273yxmA2ftmWhTLYNrlFhzhEWKq_T1HNxizI_RO_ouERJX3CN8nZVggzVuCicZsSn92BZtC0pzmORnEyr-10tLUhEVeI5hGwSfYtKi1IETorJtFOm3IJ=w289-h312-n-k-no",
    stats: [
      { value: "4.8 ★", label: "Guest Satisfaction" },
      { value: "100%", label: "Fresh Ingredients" },
      { value: "Heritage", label: "Palace Ambiance" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "Our Story",
    title: "A Royal Retreat for Coffee Lovers",
    paragraphs: [
      "Nestled inside the historic Sugan Niwas Palace in Jaipur, Cafe & Cream blends classical heritage architecture with modern artisanal cafe culture.",
      "Whether you are looking to start your morning with a fresh aromatic brew, relax over rich ice cream desserts, or spend a quiet evening surrounded by palace gardens, Cafe & Cream provides an unforgettable sanctuary."
    ],
    image: "https://lh3.googleusercontent.com/grass-cs/AABkmLdqOBU-bNan2YkRCfS_jISZHefxnmqCjBJOCO2MG-YqjbOZ5145LUhKWfaH_wz8ncRW11vJ854hKBx6iSzF9O-7Sro5qffbrmGsEHn8qMCJ38Li6OA46gY_QYbNWCNu7C2RfPsTq3fBK24=w145-h156-n-k-no",
    imageAlt: "Courtyard view of Cafe & Cream at Sugan Niwas Palace",
    experienceValue: "Heritage",
    experienceLabel: "Palace Setting"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "House Favorites",
    title: "Signature Delights",
    badge: "Must Try",
    description: "Specially crafted beverages and treats loved by our guests.",
    items: [
      {
        badge: "Bestseller",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
        alt: "Thick Chocolate Cold Coffee",
        diet: "veg",
        title: "Signature Cream Cold Coffee",
        price: "₹180",
        desc: "Rich espresso blended with silky ice cream, topped with cocoa dusting and dark chocolate drizzle."
      },
      {
        badge: "Chef Special",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600",
        alt: "Classic Grilled Cheese Sandwich",
        diet: "veg",
        title: "Heritage Club Grilled Sandwich",
        price: "₹220",
        desc: "Layered artisanal bread stuffed with garden veggies, melted mozzarella, and signature green chutney."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600",
        alt: "Belgian Waffle with Ice Cream",
        diet: "veg",
        title: "Nutella Belgian Waffle",
        price: "₹240",
        desc: "Golden crispy waffle smothered in warm Nutella, served with a scoop of premium vanilla bean gelato."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Special Offers",
    title: "Current Promotions",
    items: [
      {
        tag: "DINE-IN SPECIAL",
        title: "Flat 15% OFF",
        desc: "Enjoy 15% off on all beverage orders when you book your table through Swiggy Dineout.",
        code: "CREAM15",
        highlight: false
      },
      {
        tag: "MORNING BREW",
        title: "Coffee & Bake Combo",
        desc: "Get a complimentary freshly baked cookie with any large Hot Cappuccino or Latte till 11 AM.",
        code: "MORNINGCRAVE",
        highlight: true
      },
      {
        tag: "SWEET TREAT",
        title: "Dessert Delight @ ₹299",
        desc: "Pair any specialty cold shake with a freshly baked waffle or brownie overload.",
        code: "SWEETDREAM",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Menu",
    title: "Handcrafted Beverages & Bites",
    pdfUrl: "assets/cafe-and-cream-menu.pdf",
    pdfFilename: "Cafe_and_Cream_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "beverages", label: "Coffee & Shakes", active: false },
      { id: "bites", label: "Sandwiches & Snacks", active: false },
      { id: "desserts", label: "Gelato & Desserts", active: false }
    ],
    items: [
      {
        category: "beverages",
        img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600",
        title: "Classic Cappuccino",
        price: "₹140",
        diet: "veg",
        desc: "Rich espresso topped with a smooth layer of steamed milk foam.",
        swiggyUrl: "https://www.swiggy.com/restaurants/cafe-and-cream-gopalbari-jaipur-640141/dineout",
        zomatoUrl: "https://www.zomato.com/jaipur/cafe-cream-mi-road?amp=1"
      },
      {
        category: "beverages",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
        title: "Thick Chocolate Frappe",
        price: "₹190",
        diet: "veg",
        desc: "Blended ice coffee topped with whipped cream and chocolate fudge syrup.",
        swiggyUrl: "https://www.swiggy.com/restaurants/cafe-and-cream-gopalbari-jaipur-640141/dineout",
        zomatoUrl: "https://www.zomato.com/jaipur/cafe-cream-mi-road?amp=1"
      },
      {
        category: "bites",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600",
        title: "Paneer Tikka Sandwich",
        price: "₹210",
        diet: "veg",
        desc: "Marinated paneer cubes grilled to perfection with bell peppers and house sauces.",
        swiggyUrl: "https://www.swiggy.com/restaurants/cafe-and-cream-gopalbari-jaipur-640141/dineout",
        zomatoUrl: "https://www.zomato.com/jaipur/cafe-cream-mi-road?amp=1"
      },
      {
        category: "desserts",
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600",
        title: "Belgian Chocolate Waffle",
        price: "₹230",
        diet: "veg",
        desc: "Freshly baked warm waffle smothered in Belgian dark chocolate with a vanilla scoop.",
        swiggyUrl: "https://www.swiggy.com/restaurants/cafe-and-cream-gopalbari-jaipur-640141/dineout",
        zomatoUrl: "https://www.zomato.com/jaipur/cafe-cream-mi-road?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Guest Experiences",
    title: "Loved by Locals & Travelers",
    items: [
      {
        stars: 5,
        text: "\"An absolute hidden gem in Jaipur! Situated inside Sugan Niwas Palace, the ambiance is so peaceful and royal. Their cold coffee and sandwiches were superb.\"",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "Ananya Sharma",
        role: "Jaipur Foodie"
      },
      {
        stars: 5,
        text: "\"The palace garden seating combined with great coffee makes Cafe & Cream my favorite chill spot in Sindhi Camp. Highly recommended for a quiet evening.\"",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "Rohan Verma",
        role: "Traveler"
      },
      {
        stars: 5,
        text: "\"Loved the waffle and shakes here. Great hospitality, clean ambiance, and super cozy environment right inside the heritage palace grounds.\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Pooja Mehta",
        role: "Local Resident"
      }
    ],
    googleCta: {
      title: "Enjoyed your time at Cafe & Cream?",
      desc: "Share your experience with us and leave a review on Google!",
      url: "https://www.zomato.com/jaipur/cafe-cream-mi-road?amp=1"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Moments at Cafe & Cream",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkpan9EgA46bx8dIO1gyu5pNtCsn_h1tjG-u6ZkYPH6jj2ZAOMIMyWi3IphkXnCaGyIE8RgsyphAqB215gW-ZE9EDHauh6ihsLbjjX-LOOnjZzNYUrmAvm8dkTwnnpgbAEXH93lZy5q2K4=w243-h174-n-k-no-nu", alt: "Cafe & Cream palace exterior view" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmYT638CXxUVhZ4AFq6LUJTqenWexB3oHbgMsiOAm6wd_X_M7PIQW73OSJkSkmjQS81iY7k7MIToog6QVLKn5p8YUgPsKwIdezNIoLNCF2ss-UVAN1o0AjW6lBWN148KqAK1e-H=w243-h174-n-k-no-nu", alt: "Cozy indoor seating arrangement" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWniNsj811td-mRPPEMmaGT70B7Q0VbTS5VzBJHQmivmNw9j8JW-OvlbMlQZuq14J3hM5O2bQjr86208ogIyjZhYyzBu6uLii9PPPTxNoQo4Ja0GpbqHDT2to8iAOGBCk18vd5kLyw=w243-h406-n-k-no-nu", alt: "Freshly brewed coffee and treats" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk6H061IpmXD9e-pmV37ul2jCVqNmOmbY6MA9mj3tvyb7_Jj7_hRwujWxuQxEFS0VoYVef35KP_UZD7wiRmAPqIj6gxpmYQCIWlxAnJI0hSOaWghsEPEtAJDqbOAyb8-v8EZ6WV=w243-h174-n-k-no-nu", alt: "Courtyard outdoor garden ambiance" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Location & Timings",
    title: "Visit Us Today",
    description: "Located within the quiet heritage compound of Sugan Niwas Palace, just behind the Sindhi Camp Bus Stand in Jaipur.",
    address: "Heritage Boutique Hotel, Sugan Niwas Palace, Vijay Path, behind Sindhi Camp Bus Stand, near Laxmi Palace, Kanti Nagar, Sindhi Camp, Jaipur, Rajasthan 302006",
    hours: [
      "Monday - Tuesday: 7:30 AM - 10:30 PM",
      "Wednesday - Friday: 7:30 AM - 10:30 PM",
      "Thursday - Sunday: 7:30 AM - 11:00 PM"
    ],
    email: "contact@cafeandcream.com",
    phone: "+91 96027 80077",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5188373468087!2d75.7972!3d26.9218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e333333333%3A0x123456789abcdef!2sSugan%20Niwas%20Palace!5e0!3m2!1sen!2sin!4v1614134823123!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Crafting royal, serene coffee experiences and artisanal sweet treats in Jaipur's heritage heart.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/cafeandcream_?stkn=ZjBra3V1YW52bnQ4", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/jaipur/cafe-cream-mi-road?amp=1", iconClass: "ph-fork-knife" },
      { platform: "swiggy", url: "https://www.swiggy.com/restaurants/cafe-and-cream-gopalbari-jaipur-640141/dineout", iconClass: "ph-shopping-bag" }
    ],
    copyright: "© 2026 Cafe & Cream. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Cafe_And_Cream_Guest",
    password: "suganniwaspalace"
  }
};
/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
