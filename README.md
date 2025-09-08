# Zeniski - AI-Powered Task Management Platform

<div align="center">

![Zeniski Logo](public/logo.png)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Zeniski** is a modern, intelligent task management platform built with Next.js 15 that combines productivity features with AI-powered roadmap generation. Streamline your workflow with an intuitive dashboard, smart task organization, and automated planning assistance.

[🚀 Live Demo](https://zeniski.vercel.app) • [📖 Documentation](#-getting-started) • [🐛 Report Bug](https://github.com/Demigod1410/zeniski/issues) • [✨ Request Feature](https://github.com/Demigod1410/zeniski/issues)

</div>

---

## ✨ Key Features

### 🎯 Core Functionality
- **🚀 Modern UI/UX**: Clean, responsive design built with Tailwind CSS and Radix UI components
- **🤖 AI Integration**: Generate personalized roadmaps using Google's Gemini AI
- **📊 Smart Dashboard**: Comprehensive task overview with analytics and progress tracking
- **🔐 Secure Authentication**: Powered by Clerk for seamless user management

### 🌟 User Experience
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Next.js 15 and Turbopack for lightning-fast development
- **🎨 Beautiful Animations**: Smooth transitions powered by Framer Motion
- **🔍 Smart Search**: Advanced filtering and search capabilities

### 🛡️ Security & Performance
- **🔒 Enterprise-grade Security**: Secure authentication and data protection
- **⚡ Optimized Performance**: Server-side rendering and optimal loading speeds
- **📊 Real-time Updates**: Live task synchronization across devices
- **🌐 PWA Ready**: Progressive Web App capabilities for offline usage

## 🛠️ Tech Stack

<table>
<tr>
<td valign="top" width="33%">

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom components
- **Icons**: Lucide React, Tabler Icons
- **Animations**: Framer Motion

</td>
<td valign="top" width="33%">

### Backend & Database
- **Runtime**: Node.js
- **Database**: MongoDB
- **Authentication**: [Clerk](https://clerk.com)
- **API Routes**: Next.js API Routes
- **Form Handling**: React Hook Form + Zod

</td>
<td valign="top" width="33%">

### AI & Tools
- **AI Integration**: Google Gemini AI
- **Development**: Turbopack
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Deployment**: Vercel

</td>
</tr>
</table>

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **pnpm** (recommended) - `npm install -g pnpm`
- **Git** - [Download here](https://git-scm.com/)

You'll also need accounts for:
- **MongoDB** - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier available)
- **Clerk** - [Clerk Dashboard](https://clerk.com) for authentication
- **Google AI** - [Google AI Studio](https://makersuite.google.com/app/apikey) for Gemini API key

### Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/Demigod1410/zeniski.git
cd zeniski
```

2. **Install dependencies:**
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# MongoDB Configuration
MONGODB_URI=mongodb+srv:YourMongoDBConnectionString

# Google AI (Gemini)
GEMINI_API_KEY=your_gemini_api_key

# Optional: Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run the development server:**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Variables Setup Guide

<details>
<summary>🔧 Detailed Environment Setup</summary>

#### Clerk Setup
1. Sign up at [Clerk](https://clerk.com)
2. Create a new application
3. Copy the publishable key and secret key from the dashboard
4. Configure sign-in/sign-up URLs in your Clerk dashboard

#### MongoDB Setup
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Get your connection string and replace with your credentials

#### Google AI Setup
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to your environment variables

</details>

## 📁 Project Structure

```
zeniski/
├── 📁 public/              # Static assets
│   ├── favicon.ico         # Website favicon
│   └── logo.png           # Application logo
├── 📁 src/                # Source code
│   ├── 📁 app/            # Next.js App Router
│   │   ├── 📁 api/        # API routes
│   │   │   ├── gemini/    # AI integration endpoints
│   │   │   ├── score/     # Task scoring system
│   │   │   └── tasks/     # Task management APIs
│   │   ├── 📁 dashboard/  # Dashboard pages
│   │   │   ├── add-task/  # Task creation page
│   │   │   └── view-tasks/ # Task viewing and editing
│   │   ├── 📁 sign-in/    # Authentication pages
│   │   ├── 📁 sign-up/    # User registration
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage
│   ├── 📁 components/     # Reusable UI components
│   │   ├── 📁 ui/         # Base UI components (shadcn/ui)
│   │   ├── app-sidebar.tsx # Application sidebar
│   │   ├── task-card.tsx  # Task display component
│   │   └── ...            # Other components
│   ├── 📁 lib/            # Utility functions
│   │   ├── mongodb.ts     # Database connection
│   │   └── utils.ts       # Helper functions
│   ├── 📁 hooks/          # Custom React hooks
│   ├── 📁 data/           # Static data and configurations
│   └── 📁 assets/         # Images and media files
├── 📄 components.json     # shadcn/ui configuration
├── 📄 next.config.ts      # Next.js configuration
├── 📄 package.json        # Dependencies and scripts
├── 📄 tailwind.config.ts  # Tailwind CSS configuration
└── 📄 tsconfig.json       # TypeScript configuration
```

## 🚦 Available Scripts

| Command | Description | Usage |
|---------|-------------|-------|
| `pnpm dev` | Start development server with Turbopack | Development |
| `pnpm build` | Build for production | Production build |
| `pnpm start` | Start production server | Production |
| `pnpm lint` | Run ESLint | Code quality |

<<<<<<< HEAD
Repository: [https://github.com/Demigod1410/zeniski.git](https://github.com/Demigod1410/zeniski.git)

=======
### Development Commands
```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Clean install dependencies
pnpm install --frozen-lockfile
```

## 🔧 Configuration

The project uses several configuration files:
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - Shadcn/ui components configuration

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy Zeniski is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Demigod1410/zeniski)

#### Manual Deployment Steps:
1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Other Deployment Options

<details>
<summary>🐳 Docker Deployment</summary>

```dockerfile
# Dockerfile (create this file)
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

```bash
# Build and run with Docker
docker build -t zeniski .
docker run -p 3000:3000 zeniski
```

</details>

<details>
<summary>☁️ Other Cloud Platforms</summary>

- **Netlify**: Use the [Next.js plugin](https://docs.netlify.com/integrations/frameworks/next-js/)
- **Railway**: Connect your GitHub repository
- **Heroku**: Use the [Next.js buildpack](https://github.com/mars/heroku-nextjs)
- **AWS**: Deploy with [AWS Amplify](https://aws.amazon.com/amplify/)

</details>

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more deployment options.

## 📚 Learn More

### Documentation Links
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Clerk Documentation](https://docs.clerk.com) - Authentication setup and configuration
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com) - Low-level UI primitives
- [Google AI Documentation](https://ai.google.dev/docs) - Gemini AI integration guide

### API Reference

The application provides several API endpoints:

- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/[id]` - Get specific task
- `PUT /api/tasks/[id]` - Update task
- `DELETE /api/tasks/[id]` - Delete task
- `POST /api/gemini/roadmap` - Generate AI roadmap
- `GET /api/score` - Get task completion score

## 🔧 Troubleshooting

<details>
<summary>Common Issues and Solutions</summary>

### Environment Variables Not Loading
```bash
# Make sure your .env.local file is in the root directory
# Restart the development server after adding new variables
pnpm dev
```

### Clerk Authentication Issues
- Ensure your Clerk keys are correct
- Check that sign-in/sign-up URLs match your Clerk dashboard configuration
- Verify your domain is added to Clerk's allowed domains

### MongoDB Connection Problems
- Check your MongoDB URI format
- Ensure your IP address is whitelisted in MongoDB Atlas
- Verify database user permissions

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
pnpm build

# Clear node_modules and reinstall
rm -rf node_modules
pnpm install
```

### Gemini AI Not Working
- Verify your API key is valid
- Check API quota limits in Google AI Studio
- Ensure the API key has proper permissions

</details>

## 🎯 Development Roadmap

### Completed ✅
- [x] Project Setup
- [x] Amazing Landing Page
- [x] Dashboard setup
- [x] Auth and middleware
- [x] Add Task
- [x] AI Integration
- [x] Generate Roadmap using AI

### In Progress 🚧
- [ ] Store tasks in the database
- [ ] Task categories and tags
- [ ] Advanced filtering and search
- [ ] Team collaboration features
- [ ] Mobile app development

### Future Plans 🎯
- [ ] Task automation and workflows
- [ ] Advanced AI recommendations
- [ ] Integration with third-party tools
- [ ] Real-time notifications
- [ ] Data visualization and insights

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help make Zeniski better:

### How to Contribute

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features when applicable
- Update documentation as needed
- Ensure your code passes all linting checks

### Types of Contributions

- 🐛 **Bug fixes**
- ✨ **New features**
- 📚 **Documentation improvements**
- 🎨 **UI/UX enhancements**
- ⚡ **Performance optimizations**
- 🧪 **Test coverage improvements**

For major changes, please open an issue first to discuss what you would like to change.

### Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the standards we expect from our community.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Special thanks to the amazing open-source community and the following projects that made Zeniski possible:

- **[Next.js](https://nextjs.org)** - The React framework that powers our application
- **[Vercel](https://vercel.com)** - Hosting and deployment platform
- **[Clerk](https://clerk.com)** - Authentication and user management
- **[Google AI](https://ai.google.dev)** - Gemini AI integration
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com)** - Accessible UI components
- **[shadcn/ui](https://ui.shadcn.com)** - Beautiful component library
- **[MongoDB](https://www.mongodb.com)** - Database solution
- **[Framer Motion](https://www.framer.com/motion)** - Animation library

And all the contributors who help make this project better! 🌟

## 📸 Screenshots & Demo

<div align="center">

### 🏠 Landing Page
![Landing Page](https://github.com/user-attachments/assets/705513dc-1975-483b-96f1-762d4bc40b63)
*Beautiful, modern landing page with clear call-to-actions*

### 📊 Dashboard Overview
![Dashboard](https://github.com/user-attachments/assets/7128b143-c8a6-4d85-b1b7-4f36c499e384)
*Comprehensive dashboard with task analytics and quick actions*

### ✅ Task Management
![Task Management](https://github.com/user-attachments/assets/1fd3b92b-a5ba-4bcb-9065-8303a5b2a1be)
*Intuitive task creation and management interface*

### 🤖 AI Roadmap Generation
![AI Roadmap](https://github.com/user-attachments/assets/d12a4a87-486c-46cf-8453-0c2e927889fa)
*AI-powered roadmap generation for project planning*

</div>

---

<div align="center">

**Made with ❤️ by [Demigod1410](https://github.com/Demigod1410)**

⭐ Star this repository if you found it helpful!

</div>

