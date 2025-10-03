# Next.js App Router Project

Welcome to my **Next.js project**!  
This project was built while completing the official [Next.js documentation](https://nextjs.org/docs), and it demonstrates my understanding of **modern React, Next.js features, and full-stack web development**.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router, Server & Client Components)
- **Language:** TypeScript / JavaScript
- **Styling:** Tailwind CSS
- **Icons/UI:** Heroicons, shadcn/ui
- **Auth:** NextAuth.js (App Router integration)
- **Database:** PostgreSQL (via `postgres` client)
- **Validation:** Zod
- **Deployment Ready:** Vercel / Docker

---

##  Features

-  **App Router** with Server and Client Components  
-  **Server Actions** for form handling (create, update, delete)  
-  **Authentication** with NextAuth.js (credentials provider)  
-  **Database integration** with PostgreSQL  
-  **Form validation** with Zod  
-  **Dynamic metadata** for SEO  
-  **Responsive UI** with Tailwind  
-  **Revalidation and caching** using Next.js utilities  

---

## 📂 Project Structure

```bash
├── app/
│   ├── customer/
│   │   └── page.tsx
│   ├── dashboard/
│   │   ├── (overview)/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── customers/
│   │   │   └── page.tsx
│   │   ├── invoices/
│   │   │   ├── [id]/
│   │   │   │   └── edit/
│   │   │   │       ├── not-found.tsx
│   │   │   │       └── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   ├── error.tsx
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── lib/
│   │   ├── actions.ts
│   │   ├── data.ts
│   │   ├── definitions.ts
│   │   ├── placeholder-data.ts
│   │   └── utils.ts
│   ├── login/
│   │   └── page.tsx
│   ├── query/
│   │   └── route.ts
│   ├── seed/
│   │   └── route.ts
│   ├── ui/
│   │   ├── customers/
│   │   │   └── table.tsx
│   │   ├── dashboard/
│   │   │   ├── cards.tsx
│   │   │   ├── latest-invoices.tsx
│   │   │   ├── nav-links.tsx
│   │   │   ├── revenue-chart.tsx
│   │   │   └── sidenav.tsx
│   │   ├── invoices/
│   │   │   ├── breadcrumbs.tsx
│   │   │   ├── buttons.tsx
│   │   │   ├── create-form.tsx
│   │   │   ├── edit-form.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── status.tsx
│   │   │   └── table.tsx
│   │   ├── acme-logo.tsx
│   │   ├── button.tsx
│   │   ├── fonts.ts
│   │   ├── global.css
│   │   ├── home.module.css
│   │   ├── login-form.tsx
│   │   ├── search.tsx
│   │   └── skeletons.tsx
│   ├── auth.ts
│   ├── favicon.ico
│   ├── layout.tsx
│   ├── middleware.ts
│   ├── opengraph-image.png
│   └── page.tsx
├── public/
│   ├── customers/
│   │   ├── amy-burns.png
│   │   ├── balazs-orban.png
│   │   ├── delba-de-oliveira.png
│   │   ├── evil-rabbit.png
│   │   ├── lee-robinson.png
│   │   └── michael-novotny.png
│   ├── hero-desktop.png
│   └── hero-mobile.png
├── .eslintrc.json
├── .gitignore
├── README.md
├── auth.config.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started
```bash
git clone https://github.com/4ssh1/nextjs-dashboard.git
cd your-nextjs-dashboard
```

## Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Set up environment variables

```bash
POSTGRES_URL="your_postgres_connection_url"
NEXTAUTH_SECRET="your_secret_key"
NEXTAUTH_URL="http://localhost:3000"
```
### Available Scripts

- npm run dev – Start development server
- npm run build – Build for production
- npm start – Run production build
- npm run lint – Run ESLint checks

## Learnings

By completing the official Next.js docs and building this project, I practiced:

- Building server components and client components
- Using server actions for CRUD with PostgreSQL
- Handling auth flows with NextAuth
- Applying Zod validation in forms
- Implementing SEO-friendly metadata
- Managing revalidation and caching

<img width="1080" height="657" alt="image" src="https://github.com/user-attachments/assets/f907ec24-2429-4a1c-8433-e2ca28d32f28" />


## License
This project is licensed under the MIT License
