# System Context: Mulyam Agronomics Web Platform Re-architecture
This document serves as the absolute ground truth for the development, styling, and structural execution of the Mulyam Agronomics corporate web platform. Every component, layout grid, and style utility generated must strictly adhere to the constraints defined herein.

---

## 1. Core Platform Identity & Mission
Mulyam Agronomics Private Limited is a high-volume, B2B agritech enterprise headquartered in Pune. The platform acts as a mission-critical technology and supply chain layer bridging rural agricultural cultivation hubs with modern quick-commerce dark stores and corporate retail networks. 

### Key Product Ecosystems to Represent:
*   **I'mFresh:** The consumer-facing quality trademark for premium fresh produce distributed pan-India.
*   **ImKisan:** The digital, farmer-first crop advisory and logistics mobile platform built in partnership with ICAR-DOGR.
*   **AI Quality Automation:** Proprietary computer vision scanning arrays used for post-harvest grading, sorting, and telemetry tracing.

---

## 2. Design System Tokens & Brand Compliance (Strict)
All UI code must precisely mirror the official corporate guidelines. Global styles must be injected into the Tailwind CSS configuration using these exact tokens:

### A. Color Specification
*   **Primary Brand Accent:** `Mulyam Green` -> `#00BD67` (RGB: 0, 189, 103)
    *   *Usage:* Interactive elements, successful system states, active tab underscores, positive telemetry indicators.
*   **Functional Highlights:** `Mulyam Yellow` -> `#FFC400` (RGB: 255, 196, 0)
    *   *Usage:* Hyper-alerts, warning logs, critical numeric highlights, secondary state changes.
*   **Structural Backbone:** `Mulyam Blue` -> `#004B8B` (RGB: 0, 75, 139)
    *   *Usage:* Primary typography anchors, dark container structural backgrounds, text block emphasis.

### B. Typography Configuration
*   **Font Family:** Poppins (Global import).
*   **Weights:**
    *   Titles/Hero Headlines: `Poppins ExtraBold` or `Poppins Bold`.
    *   Subheaders / Interactive Nodes: `Poppins SemiBold` or `Poppins Medium`.
    *   Body Copy / Data Telemetry: `Poppins Regular` or `Poppins Light`.

### C. Visual Scale & Proportions
*   **Layout Density:** Maintain a dense, information-rich look. Avoid oversized typography and massive whitespace gaps.
*   **Padding Constraints:** Rely heavily on tight padding (`py-6` to `py-10`) and compact component footprints.
*   **Optimal Zoom Target:** Design code explicitly proportioned to maintain scannability and structural balance equivalent to a standard web page viewed at a crisp, data-dense 75% scale factor.

---

## 3. Platform Architecture & Multi-Page Boundaries
The application is structured as a modular multi-page system. The Landing Page acts strictly as a high-conversion gateway routing traffic into deeply technical sub-pages rather than dumping all operational data onto a single view.

---

## 4. Operational Directives for the UI Agent
*   **No Placeholders:** All code components must contain realistic, agritech-specific domain text and numbers. No `lorem ipsum` or empty state containers.
*   **Component Modularity:** Write clean, typed TypeScript interfaces for each UI block, separating visual layout from state management.
*   **Strict Color Compliance:** Do not use randomly generated color values (e.g., standard zinc, gray, or neutral variants) for primary actions. Every micro-interaction must resolve precisely to `Mulyam Green`, `Mulyam Yellow`, or `Mulyam Blue`.

---

## 5. Core Brand Experience & Motion Architecture

### A. Executive Design Engine (UI UX Pro Max Skill)
- Strict Execution Framework: The agent must activate and utilize the 'UI UX Pro Max' skill framework during the ideation, structural layout, and execution of any design change. Every visual modification or structural layout adjustment must be justified through elite-level design principles, prioritizing clean interface mechanics, strict spatial balance, and cognitive optimization.

### B. Experience Philosophy & Brand Perception
- Visual Authority: The user experience must project confidence, premium scaling, and institutional maturity. Rely on deliberate, balanced spacing, high-contrast typography hierarchies, and layouts that communicate structural weight rather than visual complexity.
- Visual Scale Control: Every view must be architected with tight padding (`py-6` to `py-10`) and clean, information-dense components. The overall UI scale must feel perfectly proportioned, scannable, and razor-sharp without excessive empty tracking space.

### C. Scroll Choreography & Interactive Narratives
- Cinematic Progression: The interface must operate as a fluid, scroll-driven journey. Pages should feel like a connected digital experience where components progressively interact as the user scrolls down, building engagement rather than acting as static, disconnected sections.
- Intentional Motion Design: Every animation, state transition, and reveal must serve an information routing or explanatory purpose. Avoid purely decorative elements. Use micro-animations, progressive UI reveals, and data-visualization transitions to naturally guide the eye through operational data layers.
- Seamless Micro-Interactions: Elevate tactile feedback across all interactive nodes (buttons, card states, links). Hover and active actions should deliver clean, highly responsive visual feedback utilizing strict brand token colors to signal platform responsiveness.

### D. Layout Architecture & Information Hierarchy
- Purpose-Driven Layouts: Structure every component block to structurally follow a psychological progression of trust: establish a compelling challenge, reveal the infrastructural solution, validate with core metric structures, and provide frictionless pathways to dive deeper.
- Cross-Page Flow: The layout system must act as an explicit routing mechanism, gracefully channeling distinct user segments (partners, bulk procurement operators, tech evaluators) into deeper, highly focused sub-page environments.

### E. Absolute Mobile-First Experience
- Desktop Adaptation Rule: The mobile view must not feel like a secondary, shrunken down version of a desktop grid. Design every block using a Mobile-First layout philosophy, prioritizing native-feeling vertical stacks, natural thumb reach regions, clean mobile navigation systems, and preserved hierarchy constraints on ultra-compact screens.
