/* =====================================================================
   CONTENT.JS — CHỈNH SỬA NỘI DUNG WEBSITE TẠI ĐÂY
   ---------------------------------------------------------------------
   • Chỉ cần sửa chữ trong dấu "..." — không cần đụng vào HTML/CSS.
   • Các mục có ghi chú  // TODO  là chỗ bạn nên điền/kiểm tra lại.
   • Ảnh đại diện: bỏ file ảnh vào thư mục assets/img/ rồi ghi đường dẫn
     vào trường "photo" (vd: "assets/img/dao.jpg"). Để trống "" thì web
     sẽ tự hiển thị chữ cái viết tắt.
   ===================================================================== */

window.SITE = {
  /* ---------- 1. THÔNG TIN CÁ NHÂN ---------- */
  owner: {
    name: "Hoàng Minh Hiển",
    shortName: "Minh Hien",
    initials: "MH",
    photo: "assets/img/Hien.jpg",                                   // TODO: "assets/img/dao.jpg"
    headline: "Commercial & Financial Analysis",
    tagline:
      "I turn numbers into decisions — from distributor performance and sales forecasting to full three-statement financial analysis.",
    location: "Ho Chi Minh City, Vietnam",
    email: "hoangminhhien210@gmail.com",             // TODO: email cá nhân
    linkedin: "https://www.linkedin.com/in/your-profile", // TODO
    cv: "",                                      // TODO: "assets/cv/CV_Phan_Thi_Anh_Dao.pdf"
    about: [
      "I work at the intersection of sales operations and finance. In my current role in Distributor Development, I manage distributor performance, sales forecasting, stock allocation and process documentation for a multinational FMCG business.",
      "Alongside work, I study finance and apply it to real companies — most recently a five-year financial statements analysis and FY2026 scenario forecast of Vinamilk (HOSE: VNM), presented below.",
    ],
    highlights: [
      { value: "FMCG", label: "Industry experience" },
      { value: "3-statement", label: "Modelling & forecasting" },
      { value: "Excel · VBA", label: "Automation & reporting" },
    ],
    skills: [
      { group: "Finance", items: ["Financial statements analysis", "Ratio & DuPont analysis", "Scenario & sensitivity modelling", "Credit & market research"] },
      { group: "Commercial", items: ["Distributor management", "Sales forecasting (LE)", "Stock allocation", "SOP & process design"] },
      { group: "Tools", items: ["Excel (advanced) & VBA", "Power BI", "PowerPoint", "SAP / BW reporting"] },
    ],
    experience: [
      // TODO: kiểm tra & bổ sung thời gian, mô tả
      { period: "Present", title: "Distributor Manager — Distributor Development", org: "Multinational FMCG company, Ho Chi Minh City", text: "Distributor performance, sales forecasting, allocation and cross-border sales SOPs; built Excel/VBA tools to automate allocation and forecast updates." },
      { period: "In progress", title: "Finance studies", org: "RMIT University Vietnam", text: "Coursework in money & debt markets, credit risk and corporate financial analysis." },
    ],
  },

  /* ---------- 2. THÀNH VIÊN NHÓM ---------- */
  team: [
    {
      name: "Minh Hien",                // tên hiển thị
      fullName: "Hoang Minh Hien",
      role: "Report integration & editing", // TODO: kiểm tra lại vai trò của bạn
      photo: "",
      contributions: ["Final report structure & design", "Content moderation", "Cross-checking all figures"],
      linkedin: "",
    },
    {
      name: "Thư",
      fullName: "Thư",                 // TODO: họ tên đầy đủ
      role: "Balance sheet · Ratio analysis · Forecasting",
      photo: "",
      contributions: ["Balance sheet extraction & alignment", "Ratio analysis dashboard", "Core forecasting assumptions & scenarios"],
      linkedin: "",
    },
    {
      name: "Hương",
      fullName: "Hương",               // TODO
      role: "Income statement · Market research · Forecasting",
      photo: "",
      contributions: ["Income statement extraction", "Market research (GDT, FMCG, FX, competitors)", "Core forecasting assumptions & scenarios"],
      linkedin: "",
    },
    {
      name: "Hưng",
      fullName: "Hưng",                // TODO
      role: "Cash flow · Horizontal/vertical · Risk & sensitivity",
      photo: "",
      contributions: ["Cash flow statement extraction", "Vertical & horizontal analysis", "Key forecast risks & sensitivity"],
      linkedin: "",
    },
    {
      name: "Hiển",
      fullName: "Hiển",                // TODO
      role: "Horizontal/vertical · Margin drivers",
      photo: "",
      contributions: ["Vertical & horizontal analysis", "Margin dynamics & historical drivers"],
      linkedin: "",
    },
  ],

  /* ---------- 3. PROJECT ---------- */
  project: {
    tag: "Financial Statements Analysis · FY2021–FY2025 · FY2026F",
    title: "Vinamilk (HOSE: VNM): Resilient Top Line, Compressed Margins",
    summary:
      "A five-year analysis of Vietnam's largest dairy producer using audited consolidated statements — horizontal, vertical, ratio and DuPont analysis — linked to market research on global dairy prices, FMCG demand, competition and FX, then extended into a three-scenario FY2026 forecast with sensitivity testing.",
    report: "assets/report/VNM_Financial_Statements_Analysis_2021-2025.pdf",
    kpis: [
      { value: 54249, prefix: "VND ", suffix: " bn", label: "Revenue FY2025 (record)" },
      { value: 28.65, suffix: "%", decimals: 2, label: "Gross margin FY2025" },
      { value: 23.91, suffix: "%", decimals: 2, label: "ROE FY2025" },
      { value: 1.95, suffix: "x", decimals: 2, label: "Current ratio FY2025" },
    ],
    steps: [
      { n: "01", title: "Data extraction & alignment", text: "Five years of income statement, balance sheet and cash flow aligned into a linked three-statement structure." },
      { n: "02", title: "Horizontal & vertical analysis", text: "Year-over-year change and common-size statements to isolate where margin was lost." },
      { n: "03", title: "Ratio & DuPont analysis", text: "Liquidity, leverage, efficiency and profitability; ROE decomposed into margin × turnover × leverage." },
      { n: "04", title: "Market research & drivers", text: "GDT milk-powder prices, Vietnam FMCG demand, market share and USD/VND explain the historical pattern." },
      { n: "05", title: "Scenario forecast & sensitivity", text: "Base, Bull and Bear FY2026 cases plus a gross-margin sensitivity test on earnings before tax." },
    ],
    findings: [
      { title: "Revenue resilient, growth slow", text: "Revenue moved in a narrow VND 51,456–54,249 bn band, compounding at only 1.145% CAGR — a mature, competitive category." },
      { title: "2022 cost shock reset margins", text: "Gross margin fell from 30.43% to 27.09% as cost of sales jumped to 72.91% of revenue; net profit fell 18.78% on a 0.73% revenue dip." },
      { title: "High earnings quality", text: "Operating cash flow tracked net profit every year (CFO/NP 0.97x–1.12x): the profit decline was real, not an accounting effect." },
      { title: "Balance sheet carries the business", text: "Current ratio ~1.95x and D/E only 0.58x; modest added leverage supported ROE at 23–24%." },
      { title: "Risk sits in input costs", text: "FY2026F net income ranges from +VND 7,953 bn (Bull) to −VND 393 bn (Bear); 1 ppt of gross margin ≈ VND 549 bn of EBT." },
    ],
    years: ["2021", "2022", "2023", "2024", "2025"],
    revenue: [51834, 51456, 51465, 52577, 54249],
    netProfit: [9708, 7885, 8247, 8686, 8505],
    cfo: [9862, 8854, 7988, 9771, 8949],
    grossMargin: [30.43, 27.09, 28.18, 28.85, 28.65],
    ebitMargin: [21.31, 17.11, 17.71, 18.38, 18.22],
    netMargin: [18.73, 15.32, 16.02, 16.52, 15.68],
    roe: [26.84, 23.61, 23.05, 23.37, 23.91],
    scenarios: [
      { name: "Bear", netIncome: -393, cash: -1381, growth: "1.96%", gm: "27.09%", sga: "27.8%" },
      { name: "Base", netIncome: 6848, cash: 4720, growth: "1.145%", gm: "40.2%", sga: "24.6%" },
      { name: "Bull", netIncome: 7953, cash: 5175, growth: "5.32%", gm: "41.9%", sga: "24.5%" },
    ],
    pages: [
      { src: "assets/report/page-1.jpg", caption: "Executive summary" },
      { src: "assets/report/page-3.jpg", caption: "Earnings & margins" },
      { src: "assets/report/page-4.jpg", caption: "Returns & DuPont" },
      { src: "assets/report/page-7.jpg", caption: "Margin drivers" },
      { src: "assets/report/page-9.jpg", caption: "Scenario outputs" },
      { src: "assets/report/page-11.jpg", caption: "Conclusion" },
    ],
    disclaimer:
      "Prepared for academic purposes. Based on publicly available filings and third-party research; not investment advice.",
  },
};
