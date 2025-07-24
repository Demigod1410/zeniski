# Zeniski - AI-Powered Task Management

Zeniski is a modern task management platform that combines productivity with gamification. Transform your to-do list into an engaging experience with AI-powered roadmap generation, experience points, and social features.

## 🚀 Features

- **AI-Powered Roadmaps**: Generate detailed task breakdowns using Gemini AI
- **Gamification**: Earn experience points and level up by completing tasks
- **Task Management**: Create, edit, and track tasks with deadlines and priorities
- **User Authentication**: Secure sign-in/sign-up with Clerk
- **Responsive Design**: Beautiful UI with Tailwind CSS and Framer Motion animations
- **Dashboard Analytics**: Track your productivity and progress

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Authentication**: Clerk
- **AI Integration**: Google Gemini API
- **Database**: MongoDB
- **Package Manager**: pnpm

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/shubhojit-mitra-dev/zeniski.git
   cd zeniski
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   ├── sign-in/          # Authentication pages
│   └── sign-up/
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   └── ...               # Feature-specific components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
└── data/                 # Static data and configurations
```

## 🎮 How It Works

1. **Sign Up/Sign In**: Create an account or sign in using Clerk authentication
2. **Create Tasks**: Add tasks with descriptions, deadlines, and difficulty levels
3. **Generate Roadmaps**: Use AI to break down complex tasks into manageable steps
4. **Earn XP**: Complete tasks to earn experience points and level up
5. **Track Progress**: Monitor your productivity through the dashboard

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: info@zeniski.com
- **Phone**: +91 7536050155
- **Location**: Dehradun, India

---

Built with ❤️ using Next.js and modern web technologies.
