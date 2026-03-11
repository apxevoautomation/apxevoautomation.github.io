/* 所有文本 & 图片都集中在这里配置 */
const HOME_CONFIG = {
  nav: {
    logoText: "ABC",
    logoBadge: "",
    logoHref: "#",
  },
  left: {
    markText: "ABC",
    titleLine1: "A",
    titleLine2: "SOLUTIONS",
    subtitle:
      "AAAAAA",
    linkLabel: "Explore A",
    linkHref: "#defence",
    background: {
      src:
        "https://images.pexels.com/photos/6021873/pexels-photo-6021873.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "A image",
    },
  },
  right: {
    markText: "ABC",
    titleLine1: "B",
    titleLine2: "SOLUTIONS",
    subtitle:
      "BBBBBB",
    linkLabel: "Explore B",
    linkHref: "#security",
    background: {
      src:
        "https://img-baofun.zhhainiao.com/fs/a738b78612429c5a35fcab3ef695689b.jpg",
      alt: "B image",
    },
  },
  product: {
    badge: "LOGO",
    category: "CATEGORY · SUBCATEGORY",
    title: "PRODUCT NAME",
    tagline:
      "Product tagline description here.",
    body:
      "Product body text goes here. Describe the product features and benefits.",
    linkLabel: "PRODUCT NAME",
    linkHref: "#product",
    image: {
      src: "https://images.pexels.com/photos/1260563/pexels-photo-1260563.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Product image",
    },
  },
  philosophy: {
    icon: "LOGO",
    headingBold: "Heading ",
    headingLight: "slogan.",
    tagline:
      "Tagline text goes here.",
    body:
      "Body text goes here. Describe the design philosophy, company history, or brand values.",
    image: {
      src: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Philosophy image",
    },
  },
  footer: {
    logo: "BRAND",
    slogan: "Slogan text goes here.",
    copyright: "\u00A9 2026 BRAND. All rights reserved.",
  },
};

function applyHomeConfig(cfg) {
  // 导航栏
  document.getElementById("nav-logo-text").textContent =
    cfg.nav.logoText || "";
  document.getElementById("nav-logo-badge").textContent =
    cfg.nav.logoBadge || "";
  document.getElementById("nav-logo").href = cfg.nav.logoHref || "#";

  // 左侧
  document.getElementById("hero-left-mark").textContent =
    cfg.left.markText || "";
  document.getElementById("hero-left-title-line1").textContent =
    cfg.left.titleLine1 || "";
  document.getElementById("hero-left-title-line2").textContent =
    cfg.left.titleLine2 || "";
  document.getElementById("hero-left-subtitle").textContent =
    cfg.left.subtitle || "";
  document.getElementById("hero-left-link-label").textContent =
    cfg.left.linkLabel || "";
  document.getElementById("hero-left-link").href = cfg.left.linkHref || "#";
  const leftBg = document.getElementById("hero-left-bg");
  leftBg.src = (cfg.left.background && cfg.left.background.src) || "";
  leftBg.alt = (cfg.left.background && cfg.left.background.alt) || "";

  // 右侧
  document.getElementById("hero-right-mark").textContent =
    cfg.right.markText || "";
  document.getElementById("hero-right-title-line1").textContent =
    cfg.right.titleLine1 || "";
  document.getElementById("hero-right-title-line2").textContent =
    cfg.right.titleLine2 || "";
  document.getElementById("hero-right-subtitle").textContent =
    cfg.right.subtitle || "";
  document.getElementById("hero-right-link-label").textContent =
    cfg.right.linkLabel || "";
  document.getElementById("hero-right-link").href =
    cfg.right.linkHref || "#";
  const rightBg = document.getElementById("hero-right-bg");
  rightBg.src = (cfg.right.background && cfg.right.background.src) || "";
  rightBg.alt = (cfg.right.background && cfg.right.background.alt) || "";

  // 整个左/右块也可以点击
  document.getElementById("hero-left").addEventListener("click", () => {
    window.location.href = cfg.left.linkHref || "#";
  });
  document.getElementById("hero-right").addEventListener("click", () => {
    window.location.href = cfg.right.linkHref || "#";
  });

  // 产品卡片
  if (cfg.product) {
    const pr = cfg.product;
    document.getElementById("product-card-badge").textContent = pr.badge || "";
    document.getElementById("product-card-category").textContent = pr.category || "";
    document.getElementById("product-card-title").textContent = pr.title || "";
    document.getElementById("product-card-tagline").textContent = pr.tagline || "";
    document.getElementById("product-card-body").textContent = pr.body || "";
    document.getElementById("product-card-link-label").textContent = pr.linkLabel || "";
    document.getElementById("product-card-link").href = pr.linkHref || "#";
    const prImg = document.getElementById("product-card-img");
    if (prImg && pr.image) {
      prImg.src = pr.image.src || "";
      prImg.alt = pr.image.alt || "";
    }
  }

  // 设计理念
  if (cfg.philosophy) {
    const p = cfg.philosophy;
    document.getElementById("philosophy-icon").textContent = p.icon || "";
    document.getElementById("philosophy-heading-bold").textContent = p.headingBold || "";
    document.getElementById("philosophy-heading-light").textContent = p.headingLight || "";
    document.getElementById("philosophy-tagline").textContent = p.tagline || "";
    document.getElementById("philosophy-body").textContent = p.body || "";
    const img = document.getElementById("philosophy-img");
    if (img && p.image) {
      img.src = p.image.src || "";
      img.alt = p.image.alt || "";
    }
  }

  // Footer
  if (cfg.footer) {
    const f = cfg.footer;
    document.getElementById("footer-logo").textContent = f.logo || "";
    document.getElementById("footer-slogan").textContent = f.slogan || "";
    document.getElementById("footer-copyright").textContent = f.copyright || "";
  }
}

function initMenuToggle() {
  const overlay = document.getElementById("menu-overlay");
  const button = document.getElementById("nav-menu-btn");

  if (!overlay || !button) {
    return;
  }

  const openMenu = () => {
    overlay.classList.add("is-active");
    button.classList.add("is-active");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    overlay.classList.remove("is-active");
    button.classList.remove("is-active");
    document.body.style.overflow = "";
  };

  button.addEventListener("click", () => {
    if (overlay.classList.contains("is-active")) {
      closeMenu();
    } else {
      closeMenu(); // 先确保清理，再打开
      openMenu();
    }
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeMenu();
    }
  });
}

function initScrollReveal() {
  const sections = document.querySelectorAll(".fade-section");
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((s) => observer.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
  applyHomeConfig(HOME_CONFIG);
  initMenuToggle();
  initScrollReveal();
});

