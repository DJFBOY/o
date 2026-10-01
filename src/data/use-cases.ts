export interface UseCaseItem {
  name: string;
  slug: string;
  description: string;
}

export interface UseCaseGroup {
  group: string;
  icon: string;
  slug: string;
  items: UseCaseItem[];
}

export const useCaseGroups: UseCaseGroup[] = [
  {
    group: "Content & Writing", icon: "✍️", slug: "content-writing",
    items: [
      { name: "Write Blog Posts", slug: "write-blog-posts", description: "AI tools that draft, outline, and polish blog articles." },
      { name: "Write Social Media Content", slug: "social-media-content", description: "Tools for creating and scheduling social posts." },
      { name: "Write Emails & Newsletters", slug: "write-emails", description: "AI writing tools for email campaigns and newsletters." },
      { name: "Improve Writing", slug: "improve-writing", description: "Grammar, style, and clarity tools for better writing." },
      { name: "Generate Content Ideas", slug: "content-ideas", description: "Brainstorming tools for topics, angles, and headlines." },
      { name: "Plan YouTube Content", slug: "youtube-content", description: "Script, plan, and grow a YouTube channel with AI." }
    ]
  },
  {
    group: "Marketing & Growth", icon: "📈", slug: "marketing-growth",
    items: [
      { name: "Improve SEO", slug: "improve-seo", description: "Tools to rank higher in search with AI-driven SEO." },
      { name: "Write Ads", slug: "write-ads", description: "Copy and creative tools for ads across all platforms." },
      { name: "Get More Leads", slug: "get-more-leads", description: "AI tools for lead generation and outreach." },
      { name: "Plan Marketing Campaigns", slug: "marketing-campaigns", description: "Strategy and planning tools for marketing campaigns." },
      { name: "Grow Social Media", slug: "grow-social-media", description: "Grow followers and engagement with AI assistance." }
    ]
  },
  {
    group: "Development & Tech", icon: "💻", slug: "development-tech",
    items: [
      { name: "Write Code", slug: "write-content", description: "AI coding assistants for writing clean, fast code." },
      { name: "Fix & Debug Code", slug: "code-tools", description: "Tools that detect and fix bugs in your codebase." },
      { name: "Build Apps Faster", slug: "build-apps", description: "Build full applications and prototypes with AI." },
      { name: "Work with APIs", slug: "work-with-apis", description: "Tools for integrating, testing, and working with APIs." },
      { name: "No-Code Tools", slug: "no-code-tools", description: "Build products without writing a single line of code." }
    ]
  },
  {
    group: "Design & Media", icon: "🎨", slug: "design-media",
    items: [
      { name: "Generate Images", slug: "generate-images", description: "Text-to-image AI for art, photos, and illustrations." },
      { name: "Edit Photos", slug: "edit-photos", description: "AI-powered photo editing and enhancement tools." },
      { name: "Create Videos", slug: "grow-youtube-channel", description: "Tools for generating and editing videos with AI." },
      { name: "Design UI/UX", slug: "design-uiux", description: "AI tools for wireframing, prototyping, and UI design." },
      { name: "Make Logos & Branding", slug: "logos-branding", description: "Brand identity and logo creation with AI." },
      { name: "Create Presentations", slug: "create-presentations", description: "AI slide builders and presentation design tools." }
    ]
  },
  {
    group: "Productivity & Study", icon: "📚", slug: "productivity-study",
    items: [
      { name: "Study Smarter", slug: "study-smarter", description: "AI tutors and study tools for any subject." },
      { name: "Finish Assignments Faster", slug: "finish-assignments", description: "Tools that speed up homework and writing tasks." },
      { name: "Take Notes", slug: "take-notes", description: "AI note-taking and meeting transcription tools." },
      { name: "Summarize Text", slug: "summarize-documents", description: "Quickly extract key points from long documents." },
      { name: "Do Research", slug: "do-research", description: "AI tools to find, verify, and synthesize information." },
      { name: "Organize Work", slug: "save-time", description: "Automation and workflow tools to stay organized." }
    ]
  },
  {
    group: "Business & Money", icon: "💼", slug: "business-money",
    items: [
      { name: "Launch a Startup", slug: "launch-startup", description: "From idea to product — tools for startup founders." },
      { name: "Earn Online", slug: "earn-online", description: "AI tools to build income streams and digital products." },
      { name: "Manage Customers", slug: "manage-customers", description: "CRM and customer support tools powered by AI." },
      { name: "Analyze Data", slug: "analyze-data", description: "Turn raw data into insights with AI analytics." },
      { name: "Automate Workflows", slug: "automate-workflows", description: "AI automation to remove repetitive tasks." },
      { name: "Manage Finances", slug: "manage-finances", description: "Financial planning and accounting tools with AI." }
    ]
  }
];
