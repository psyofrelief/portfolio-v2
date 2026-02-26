<details>
<summary>Table of Contents</summary>
<ol>
<li>
<a href="#overview">Overview</a>
<ul>
<li><a href="#built-with">Built With</a></li>
<li><a href="#demo">Demo</a></li>
</ul>
</li>
<li>
<a href="#getting-started">Getting Started</a>
<ul>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#installation">Installation</a></li>
</ul>
</li>
<li>
<a href="#features">Features</a>
<ul>
<li><a href="#contact-system">Contact System</a></li>
<li><a href="#ui-components">UI Components</a></li>
</ul>
</li>
<li><a href="#design">Design</a></li>
<li><a href="#accessibility--optimisation">Accessibility / Optimisation</a></li>
<li><a href="#contributions">Contributions</a></li>
<li><a href="#credits">Credits</a></li>
</ol>
</details>

# Overview

This portfolio is a high performance web app built to showcase UI engineering and brand identity projects. It features a minimal aesthetic and a robust contact system designed for direct communication through ProtonMail.

The site highlights professional work for clients like Scantek and AYWA. It focuses on clean code, type safety, and modern styling through Tailwind v4.

## Built With

**Frontend**

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS v4
* React Hook Form
* Zod

**Backend**

* Web3Forms API
* Node.js

**Hosting**

* Optimised for Vercel deployment.

# Getting Started

To run this portfolio locally, ensure your environment is configured and follow these steps.

## Prerequisites

You need a modern version of Node.js and a package manager like pnpm.

```bash
# Verify Node.js version
node -v

# Verify package manager
pnpm -v

```

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/psyofrelief/portfolio.git
cd portfolio

# 2. Install dependencies
pnpm install

# 3. Environment Variables
# Create a .env.local file and add your key
# NEXT_PUBLIC_MAIL_ACCESS_TOKEN=your_web3forms_key

# 4. Start the development server
pnpm run dev

```

# Features

## Contact System

* Secure form submission via Web3Forms.
* Real time validation with Zod and React Hook Form.
* Custom loading states and success handling.
* Environment variable protection for API keys.

## UI Components

* Custom CSS spinners built with Tailwind v4.
* Reusable button components with variants.
* Responsive layouts for all device sizes.
* Smooth transitions and hover effects.

# Design

### Design Philosophy

* Minimalist aesthetic focusing on typography and whitespace.
* Visual consistency across all project cards and forms.
* Professional presentation of brand identity assets.

### Technical Approach

* CSS first styling using Tailwind v4 theme variables.
* Type safe form handling to prevent runtime errors.
* Modular component architecture for scalability.

# Accessibility / Optimisation

* WCAG compliant contrast for improved readability.
* Fast load times through Next.js server components.
* Mobile first design ensuring usability on phones and tablets.
* Optimised assets and clean semantic HTML.

# Contributions

This project is currently maintained and developed by **Faried Idris**. External contributions are not open at this time.

# Credits

Designed and developed by **Faried Idris**.
Portfolio: [https://fariedidris.com](https://www.google.com/search?q=https://fariedidris.com)
GitHub: [https://github.com/psyofrelief](https://github.com/psyofrelief)
