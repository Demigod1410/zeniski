# Zeniski - AI-Powered Task Management Platform

Zeniski is a modern, intelligent task management platform built with Next.js 15 that combines productivity features with AI-powered roadmap generation. Streamline your workflow with an intuitive dashboard, smart task organization, and automated planning assistance.

## ✨ Features

- **🚀 Modern UI/UX**: Clean, responsive design built with Tailwind CSS and Radix UI components
- **🤖 AI Integration**: Generate personalized roadmaps using Google's Gemini AI
- **📊 Smart Dashboard**: Comprehensive task overview with analytics and progress tracking
- **🔐 Secure Authentication**: Powered by Clerk for seamless user management
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **⚡ Fast Performance**: Built with Next.js 15 and Turbopack for lightning-fast development

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom components
- **Authentication**: [Clerk](https://clerk.com)
- **AI Integration**: Google Gemini AI
- **Database**: MongoDB
- **Icons**: Lucide React, Tabler Icons
- **Animations**: Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn
- MongoDB database
- Clerk account for authentication
- Google AI API key for Gemini integration

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zeniski-main
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file and add your configuration:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Google AI (Gemini)
GEMINI_API_KEY=your_gemini_api_key
```

4. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── dashboard/      # Dashboard pages
│   ├── sign-in/        # Authentication pages
│   └── sign-up/
├── components/         # Reusable UI components
│   └── ui/            # Base UI components
├── lib/               # Utility functions and configurations
├── hooks/             # Custom React hooks
└── data/              # Static data and configurations
```

## 🚦 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🔧 Configuration

The project uses several configuration files:
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - Shadcn/ui components configuration

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy Zeniski is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more deployment options.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Clerk Documentation](https://docs.clerk.com) - Authentication setup and configuration
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com) - Low-level UI primitives

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

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) team for the amazing framework
- [Vercel](https://vercel.com) for hosting and deployment
- [Clerk](https://clerk.com) for authentication services
- All contributors and the open-source community

## Preview:

![image](https://github.com/user-attachments/assets/705513dc-1975-483b-96f1-762d4bc40b63)
![Screenshot from 2025-03-30 04-45-28](https://github.com/user-attachments/assets/7128b143-c8a6-4d85-b1b7-4f36c499e384)
![Screenshot from 2025-03-30 04-48-05](https://github.com/user-attachments/assets/1fd3b92b-a5ba-4bcb-9065-8303a5b2a1be)
![Screenshot from 2025-03-30 04-48-32](https://github.com/user-attachments/assets/d12a4a87-486c-46cf-8453-0c2e927889fa)

