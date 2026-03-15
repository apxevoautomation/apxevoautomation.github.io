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
    linkHref: "#product-card",
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
    linkHref: "#icarus-section",
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
    linkHref: "#specs-section",
    images: [
      { src: "img/robot/front.jpg", alt: "RE-121 Front View" },
      { src: "img/robot/side1.jpg", alt: "RE-121 Side View" },
      { src: "img/robot/side3.jpg", alt: "RE-121 Side View 2" },
      { src: "img/robot/back.jpg", alt: "RE-121 Back View" },
    ],
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
  icarus: {
    kicker: "FLAGSHIP SYSTEM",
    headline: "I.C.A.R.U.S.\nBrain\u2013Computer Interface",
    lead: "ICARUS is a non-invasive brain\u2013computer interface command system that transforms human thoughts into robot actions. It does not directly control the robot\u2014instead, it captures user intent and delegates execution to the HARO-A AI system, dramatically reducing cognitive load and command complexity while minimizing the risk of errors.",
    features: [
      {
        title: "Non-invasive Design",
        desc: "The BCI signal transmitter requires no surgical implantation. It sits comfortably on the user's head with an ultra-lightweight form factor designed for extended daily wear.",
      },
      {
        title: "Intent, Not Control",
        desc: "ICARUS captures high-level intentions\u2014not granular motor commands. The user thinks about what they want, and HARO-A figures out how to do it, reducing cognitive effort significantly.",
      },
      {
        title: "Noise-resistant Processing",
        desc: "Advanced BCI signal processing algorithms filter environmental and biological noise, ensuring reliable command recognition even in challenging real-world conditions.",
      },
      {
        title: "Personalized Calibration",
        desc: "First-time users complete a sampling calibration process that maps their unique neural patterns, ensuring high recognition accuracy tailored to each individual.",
      },
      {
        title: "Pre-configured Profiles",
        desc: "The system ships with pre-configured model parameters optimized for different user types\u2014including patients with varying degrees of motor impairment.",
      },
      {
        title: "Sub-second Response",
        desc: "From thought to action in under 0.3 seconds. The entire pipeline\u2014signal capture, noise filtering, intent recognition, and HARO-A execution\u2014completes in less than one second.",
      },
      {
        title: "Continuous Learning",
        desc: "Working alongside HARO-A, the system continuously adapts to the user's behavior patterns and environment, improving accuracy and responsiveness over time.",
      },
      {
        title: "Offline Capable",
        desc: "Core BCI command processing works without an internet connection, ensuring the system remains functional in any environment or network condition.",
      },
    ],
    flowLabel: "HOW ICARUS WORKS",
    flowSteps: [
      { title: "Think", desc: "User forms an intention\u2014e.g. 'I want water'" },
      { title: "Capture", desc: "BCI transmitter reads neural signals non-invasively" },
      { title: "Filter", desc: "Noise-resistant algorithm cleans and processes the signal" },
      { title: "Interpret", desc: "HARO-A analyzes intent and plans the action sequence" },
      { title: "Execute", desc: "Robot performs the task autonomously and safely" },
    ],
  },
  tech: {
    label: "CORE TECHNOLOGY",
    title: "Three Pillars of Innovation",
    cards: [
      {
        icon: "\u2660",
        name: "ICARUS",
        full: "Brain\u2013Computer Interface Command System",
        desc: "Non-invasive BCI signal transmitter with ultra-lightweight design. Commands are analyzed and executed by HARO-A\u2014reducing command complexity, minimizing errors, and lowering cognitive load. Sampling calibration ensures recognition accuracy.",
        stats: [
          { value: "< 0.3s", label: "Response" },
          { value: "Non-invasive", label: "Design" },
        ],
      },
      {
        icon: "\u2666",
        name: "HARO-A",
        full: "AI Autonomous Decision & Control System",
        desc: "Upgraded from RE-78/79 series. Enhanced command recognition accuracy, faster analysis, and quicker response execution. Self-learns user environment on first use, continuously adapts to user behavior. Noise-resistant BCI signal processing. Full process under 1 second.",
        stats: [
          { value: "< 1s", label: "Full Cycle" },
          { value: "Offline", label: "Capable" },
        ],
      },
      {
        icon: "\u2663",
        name: "HAI-A",
        full: "Human\u2013AI Dual Safety System",
        desc: "Rejects unsafe or prohibited commands automatically. Any stop command is executed immediately. Prevents dangerous commands from both human users and AI systems. Auto-protects user in identified emergency conditions. Black-box technology shields AI evolution data.",
        stats: [
          { value: "Dual", label: "Safety Layer" },
          { value: "Real-time", label: "Monitoring" },
        ],
      },
    ],
  },
  specs: {
    label: "TECHNICAL SPECIFICATIONS",
    title: "RE-121 [V.M.P.] Parameters",
    overlayLabel: "RE-121",
    images: [
      { src: "img/robot/front.jpg", alt: "RE-121 Front View" },
      { src: "img/robot/side2.jpg", alt: "RE-121 Side Detail" },
      { src: "img/robot/side1.jpg", alt: "RE-121 Side View" },
      { src: "img/robot/back.jpg", alt: "RE-121 Back View" },
      { src: "img/robot/side3.jpg", alt: "RE-121 Side View 2" },
    ],
    rows: [
      { key: "Height", val: "1,850 mm" },
      { key: "Weight (All Set)", val: "75 kg" },
      { key: "Weight (Skeleton)", val: "65 kg" },
      { key: "Single Arm Payload", val: "25 kg" },
      { key: "Motion Points", val: "11 (excl. hands)" },
      { key: "Dexterous Hands", val: "Yes" },
      { key: "Materials", val: "Al + Ti + CF + EP" },
      { key: "Joint Bearings", val: "Semi-fluid Damping" },
      { key: "Joint Motors", val: "Low-inertia HEF" },
      { key: "Cooling", val: "Air Cooled" },
      { key: "Battery Life (Internal)", val: "3 hours" },
      { key: "Battery Life (Backpack)", val: "9 hours" },
      { key: "Power Supply", val: "Carbon\u2013Silicon / Cable" },
      { key: "Computing", val: "Intel Core i9" },
      { key: "Primary Sensor", val: "Optical + mmWave" },
      { key: "Connectivity", val: "WiFi 6 / BT 5.2" },
      { key: "Offline Mode", val: "Supported" },
      { key: "Modular Interface", val: "Yes" },
      { key: "Transformable Frame", val: "Folds to Box Shape" },
      { key: "Charging Station", val: "Compatible" },
    ],
  },
  scenarios: {
    label: "USE CASES",
    title: "Designed for Real Impact",
    subtitle: "From disability assistance to enterprise automation, RE-121 adapts to the needs of diverse users and environments.",
    cards: [
      {
        icon: "\u2764\uFE0F",
        title: "Disability Assistance",
        desc: "A paralyzed patient wearing the ICARUS BCI transmitter can command RE-121 to fetch water, assist with feeding, and perform daily care tasks\u2014all through thought alone.",
      },
      {
        icon: "\u267B\uFE0F",
        title: "Rehabilitation Support",
        desc: "Certified by government and rehabilitation institutions. Patients follow doctor-prescribed programs to adapt to and utilize the robot, enabling gradual return to independent living and work.",
      },
      {
        icon: "\u2699\uFE0F",
        title: "Enterprise Automation",
        desc: "B2B direct purchase with on-site engineer support, free return shipping for repairs, and collaborative development of specialized modular accessory packages for industry-specific needs.",
      },
      {
        icon: "\u2B50",
        title: "Modular Customization",
        desc: "Official accessories for diverse environments. Users can design and 3D-print compatible custom parts via the official software, with key interface adaptation ensuring core performance.",
      },
      {
        icon: "\u26A1",
        title: "Portable Deployment",
        desc: "Transformable frame technology allows RE-121 to fold into a compact box shape, dramatically improving storage, portability, and transportation. Compatible with home mini charging station.",
      },
      {
        icon: "\u2696\uFE0F",
        title: "Affordable Access Program",
        desc: "Eligible disabled users can pre-purchase at significantly reduced prices through a government-supervised program, with work-assistance training and sustainable upgrade commitments.",
      },
    ],
  },
  comparison: {
    label: "COMPETITIVE LANDSCAPE",
    title: "How RE-121 Compares",
    headers: ["Feature", "RE-121", "Tesla Optimus", "Unitree H2", "Atlas"],
    rows: [
      ["Control Interface", "Brain\u2013Computer Interface", "AI Voice", "AI Large Model", "Pre-programmed"],
      ["Interaction Naturalness", "High", "Medium", "Low", "Low"],
      ["Autonomous Decision", "High (HARO-A)", "Medium", "Medium", "Low"],
      ["Safety System", "Dual (HAI-A)", "Standard", "Standard", "Standard"],
      ["Transformable Frame", "Yes", "No", "No", "No"],
      ["Modular Design", "Full-body", "Limited", "Limited", "No"],
      ["Disability Focused", "Core Mission", "No", "No", "No"],
      ["Offline Mode", "Supported", "Limited", "No", "Yes"],
    ],
  },
  cta: {
    title: "Ready to Redefine Interaction?",
    body: "RE-121 V.M.P. delivery begins H2 2026. Early adopters receive continuous free upgrades and exclusive discounts on future RE-121 series products and accessories.",
    primaryLabel: "Pre-order Now",
    primaryHref: "preorder.html",
    secondaryLabel: "Contact Sales",
    secondaryHref: "#",
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

  // 整个左/右块也可以点击（平滑滚动）
  function smoothScrollTo(selector) {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
  document.getElementById("hero-left").addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    smoothScrollTo(cfg.left.linkHref || "#");
  });
  document.getElementById("hero-right").addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    smoothScrollTo(cfg.right.linkHref || "#");
  });
  document.querySelectorAll(".hero-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      smoothScrollTo(link.getAttribute("href"));
    });
  });

  // 产品卡片
  if (cfg.product) {
    const pr = cfg.product;
    document.getElementById("product-card-category").textContent = pr.category || "";
    document.getElementById("product-card-title").textContent = pr.title || "";
    document.getElementById("product-card-tagline").textContent = pr.tagline || "";
    document.getElementById("product-card-body").textContent = pr.body || "";
    document.getElementById("product-card-link-label").textContent = pr.linkLabel || "";
    document.getElementById("product-card-link").href = pr.linkHref || "#";
    if (pr.images && pr.images.length) {
      initCarousel("product-carousel", pr.images);
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

  // ICARUS 深度介绍
  if (cfg.icarus) {
    const ic = cfg.icarus;
    document.getElementById("icarus-kicker").textContent = ic.kicker || "";
    document.getElementById("icarus-headline").textContent = ic.headline || "";
    document.getElementById("icarus-lead").textContent = ic.lead || "";

    const featGrid = document.getElementById("icarus-features");
    featGrid.innerHTML = "";
    (ic.features || []).forEach((f, i) => {
      const card = document.createElement("div");
      card.className = "icarus-feat";
      card.innerHTML =
        '<div class="icarus-feat-num">' +
        String(i + 1).padStart(2, "0") +
        "</div>" +
        '<h3 class="icarus-feat-title">' +
        f.title +
        "</h3>" +
        '<p class="icarus-feat-desc">' +
        f.desc +
        "</p>";
      featGrid.appendChild(card);
    });

    document.getElementById("icarus-flow-label").textContent = ic.flowLabel || "";
    const flowContainer = document.getElementById("icarus-flow-steps");
    flowContainer.innerHTML = "";
    (ic.flowSteps || []).forEach((s, i) => {
      if (i > 0) {
        const arrow = document.createElement("div");
        arrow.className = "icarus-step-arrow";
        arrow.innerHTML = "&#10140;";
        flowContainer.appendChild(arrow);
      }
      const step = document.createElement("div");
      step.className = "icarus-step";
      step.innerHTML =
        '<div class="icarus-step-num">' +
        (i + 1) +
        "</div>" +
        '<div class="icarus-step-title">' +
        s.title +
        "</div>" +
        '<div class="icarus-step-desc">' +
        s.desc +
        "</div>";
      flowContainer.appendChild(step);
    });
  }

  // 核心技术
  if (cfg.tech) {
    const t = cfg.tech;
    document.getElementById("tech-label").textContent = t.label || "";
    document.getElementById("tech-title").textContent = t.title || "";
    const grid = document.getElementById("tech-grid");
    grid.innerHTML = "";
    (t.cards || []).forEach((c) => {
      const card = document.createElement("div");
      card.className = "tech-card";
      let statsHtml = "";
      if (c.stats && c.stats.length) {
        statsHtml =
          '<div class="tech-card-stats">' +
          c.stats
            .map(
              (s) =>
                '<div class="tech-stat"><span class="tech-stat-value">' +
                s.value +
                '</span><span class="tech-stat-label">' +
                s.label +
                "</span></div>"
            )
            .join("") +
          "</div>";
      }
      card.innerHTML =
        '<div class="tech-card-icon">' +
        c.icon +
        "</div>" +
        '<h3 class="tech-card-name">' +
        c.name +
        "</h3>" +
        '<p class="tech-card-full">' +
        c.full +
        "</p>" +
        '<p class="tech-card-desc">' +
        c.desc +
        "</p>" +
        statsHtml;
      grid.appendChild(card);
    });
  }

  // 技术规格
  if (cfg.specs) {
    const sp = cfg.specs;
    document.getElementById("specs-label").textContent = sp.label || "";
    document.getElementById("specs-title").textContent = sp.title || "";
    document.getElementById("specs-overlay-label").textContent = sp.overlayLabel || "";
    if (sp.images && sp.images.length) {
      initCarousel("specs-carousel", sp.images);
    }
    const table = document.getElementById("specs-table");
    table.innerHTML = "";
    (sp.rows || []).forEach((r) => {
      const row = document.createElement("div");
      row.className = "specs-row";
      row.innerHTML =
        '<span class="specs-row-key">' +
        r.key +
        '</span><span class="specs-row-val">' +
        r.val +
        "</span>";
      table.appendChild(row);
    });
  }

  // 使用场景
  if (cfg.scenarios) {
    const sc = cfg.scenarios;
    document.getElementById("scenario-label").textContent = sc.label || "";
    document.getElementById("scenario-title").textContent = sc.title || "";
    document.getElementById("scenario-subtitle").textContent = sc.subtitle || "";
    const grid = document.getElementById("scenario-grid");
    grid.innerHTML = "";
    (sc.cards || []).forEach((c, i) => {
      const card = document.createElement("div");
      card.className = "scenario-card";
      card.innerHTML =
        '<span class="scenario-card-num">' +
        String(i + 1).padStart(2, "0") +
        "</span>" +
        '<div class="scenario-card-icon">' +
        c.icon +
        "</div>" +
        '<h3 class="scenario-card-title">' +
        c.title +
        "</h3>" +
        '<p class="scenario-card-desc">' +
        c.desc +
        "</p>";
      grid.appendChild(card);
    });
  }

  // 竞争对比
  if (cfg.comparison) {
    const cm = cfg.comparison;
    document.getElementById("compare-label").textContent = cm.label || "";
    document.getElementById("compare-title").textContent = cm.title || "";
    const table = document.getElementById("compare-table");
    table.innerHTML = "";
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    (cm.headers || []).forEach((h, i) => {
      const th = document.createElement("th");
      th.textContent = h;
      if (i === 1) th.className = "compare-highlight";
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    (cm.rows || []).forEach((r) => {
      const tr = document.createElement("tr");
      r.forEach((cell, i) => {
        const td = document.createElement("td");
        td.textContent = cell;
        if (i === 0) td.className = "compare-feature";
        else if (i === 1) td.className = "compare-highlight";
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  }

  // CTA
  if (cfg.cta) {
    const ct = cfg.cta;
    document.getElementById("cta-title").textContent = ct.title || "";
    document.getElementById("cta-body").textContent = ct.body || "";
    const btnP = document.getElementById("cta-btn-primary");
    btnP.textContent = ct.primaryLabel || "";
    btnP.href = ct.primaryHref || "#";
    const btnS = document.getElementById("cta-btn-secondary");
    btnS.textContent = ct.secondaryLabel || "";
    btnS.href = ct.secondaryHref || "#";
  }

  // Footer
  if (cfg.footer) {
    const f = cfg.footer;
    // footer-logo 已改为图片，不再设置 textContent
    document.getElementById("footer-slogan").textContent = f.slogan || "";
    document.getElementById("footer-copyright").textContent = f.copyright || "";
  }
}

function resolveAsset(path) {
  var prefix = window.__STATIC_PREFIX__ || "";
  if (prefix && !path.startsWith("http") && !path.startsWith("/")) {
    return prefix + path;
  }
  return path;
}

function initCarousel(containerId, images) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const track = container.querySelector(".carousel-track");
  const dotsWrap = container.querySelector(".carousel-dots");
  const prevBtn = container.querySelector(".carousel-prev");
  const nextBtn = container.querySelector(".carousel-next");
  let current = 0;

  track.innerHTML = "";
  dotsWrap.innerHTML = "";
  images.forEach((img, i) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    const imgEl = document.createElement("img");
    imgEl.src = resolveAsset(img.src);
    imgEl.alt = img.alt || "";
    imgEl.loading = "lazy";
    slide.appendChild(imgEl);
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " is-active" : "");
    dot.type = "button";
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(idx) {
    current = ((idx % images.length) + images.length) % images.length;
    track.style.transform = "translateX(-" + (current * 100) + "%)";
    dotsWrap.querySelectorAll(".carousel-dot").forEach((d, i) => {
      d.classList.toggle("is-active", i === current);
    });
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  let autoTimer = setInterval(() => goTo(current + 1), 4000);
  container.addEventListener("mouseenter", () => clearInterval(autoTimer));
  container.addEventListener("mouseleave", () => {
    autoTimer = setInterval(() => goTo(current + 1), 4000);
  });
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

  overlay.querySelectorAll(".menu-nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("href");
      closeMenu();
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 380);
    });
  });

  const preorderBtn = overlay.querySelector(".menu-newsletter-btn");
  if (preorderBtn && preorderBtn.getAttribute("href")) {
    preorderBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = preorderBtn.getAttribute("href");
      closeMenu();
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 380);
    });
  }
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

