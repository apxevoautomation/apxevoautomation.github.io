/* 所有文本 & 图片都集中在这里配置 */
const HOME_CONFIG = {
  nav: {
    logoText: "EVO",
    logoBadge: "",
    logoHref: "#",
  },
  left: {
    markText: "RE",
    titleLine1: "RE-121",
    titleLine2: "HUMANOID ROBOT",
    subtitle:
      "Brain\u2013computer interface commanded humanoid robot. Redefining human\u2013machine interaction through thoughts and intentions.",
    linkLabel: "Explore RE-121",
    linkHref: "#product",
    background: {
      src:
        "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "RE-121 Humanoid Robot",
    },
  },
  right: {
    markText: "BCI",
    titleLine1: "ICARUS",
    titleLine2: "BCI SYSTEM",
    subtitle:
      "Non-invasive brain\u2013computer interface. Ultra-lightweight design. Command by thought.",
    linkLabel: "Explore ICARUS",
    linkHref: "#philosophy",
    background: {
      src:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "ICARUS Brain-Computer Interface",
    },
  },
  product: {
    badge: "EVO",
    category: "RE SERIES \u00B7 HUMANOID ROBOT",
    title: "RE-121 [V.M.P.]",
    tagline:
      "THE NEXT GENERATION BRAIN\u2013COMPUTER INTERFACE COMMANDED HUMANOID ROBOT",
    body:
      "Height 1850mm. Full-body articulated & transformable frame. ICARUS BCI + HARO-A AI autonomous decision system + HAI-A dual safety system. Single arm payload 25kg. Carbon\u2013silicon battery with 9h endurance. Delivery begins H2 2026.",
    linkLabel: "RE-121 V.M.P.",
    linkHref: "#",
    image: {
      src: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "RE-121 VMP Robot",
    },
  },
  philosophy: {
    icon: "EVO",
    headingBold: "Design ",
    headingLight: "differently.",
    tagline:
      "Automation technology that empowers lives and redefines possibilities.",
    body:
      "EVO Automation, an APX Industries company, is dedicated to transforming human\u2013machine interaction from keyboard, voice and motion to thoughts and intentions within the next decade. Through the ICARUS brain\u2013computer interface and the RE series humanoid robots, we provide supportive technologies for people with disabilities and socially vulnerable groups\u2014helping them live, rehabilitate and work with dignity and independence.",
    image: {
      src: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "EVO Automation Philosophy",
    },
  },
  footer: {
    logo: "EVO AUTOMATION",
    slogan: "An APX IND. Corporation Company",
    copyright: "\u00A9 2026 EVO Automation Co., Ltd. All rights reserved.",
  },
};

function applyHomeConfig(cfg) {
  // 导航栏
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
    // product-card-badge 已改为图片，不再设置 textContent
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
    // philosophy-icon 已改为图片，不再设置 textContent
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
    // footer-logo 已改为图片，不再设置 textContent
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

