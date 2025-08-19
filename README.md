# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dark theme with smooth animations and professional design.

## 🚀 Features

- **Dark Theme Design** - Professional dark color scheme with blue/purple accents
- **Responsive Layout** - Optimized for all device sizes
- **Smooth Animations** - Hover effects, transitions, and scroll animations
- **Modular Architecture** - Clean component structure with separation of concerns
- **TypeScript** - Full type safety and better development experience
- **Performance Optimized** - Built with Next.js for optimal performance

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page component
├── components/            # Reusable UI components
│   ├── Navigation.tsx     # Navigation bar component
│   ├── HeroSection.tsx    # Hero section component
│   ├── AboutSection.tsx   # About section component
│   ├── SkillsSection.tsx  # Skills section component
│   ├── ProjectsSection.tsx # Projects section component
│   ├── ContactSection.tsx # Contact section component
│   ├── Footer.tsx         # Footer component
│   └── PortfolioLayout.tsx # Main layout wrapper
├── data/                  # Data files
│   ├── personal.ts        # Personal information
│   ├── skills.ts          # Skills and tools data
│   └── projects.ts        # Projects data
├── lib/                   # Utility functions and hooks
│   ├── utils.ts           # Utility functions
│   └── hooks.ts           # Custom React hooks
└── types/                 # TypeScript type definitions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Emoji icons (can be replaced with heroicons or other icon libraries)
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update your personal information in `src/data/personal.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  // ... other fields
};
```

### Skills

Modify your skills in `src/data/skills.ts`:

```typescript
export const skills: Skill[] = [
  { name: "React", level: 90, color: "#61DAFB", category: "frontend" },
  // ... add your skills
];
```

### Projects

Update your projects in `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Project description",
    tech: ["React", "Node.js"],
    // ... other fields
  },
];
```

## 🎨 Styling

The project uses Tailwind CSS for styling. Key design elements:

- **Color Scheme**: Dark theme with blue/purple gradients
- **Typography**: Clean, modern fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Animations**: Smooth transitions and hover effects

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Development

### Code Style

- Use TypeScript for all components
- Follow React functional component patterns
- Use proper TypeScript interfaces for props
- Implement proper error handling
- Use semantic HTML elements

### Component Structure

Each component follows this pattern:
```typescript
interface ComponentProps {
  className?: string;
  // ... other props
}

const Component: React.FC<ComponentProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      {/* Component content */}
    </div>
  );
};

export default Component;
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `PortfolioLayout.tsx`
3. Update navigation if needed
4. Add any required data to the data files

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS
