import { Article } from "@/lib/types";

const listingSource = {
  publication: "Rexol.World product directory",
  url: "https://rexol.world/",
  claimType: "REPORTED_FACT" as const
};

const stories: Array<Pick<Article, "slug" | "headline" | "deck" | "tags" | "bodyMarkdown">> = [
  {
    slug: "claude-ai-assistant-overview-2026",
    headline: "Claude in 2026: an AI assistant for documents, code, and vision",
    deck: "Rexol lists Claude for conversational work, document analysis, coding, and vision tasks.",
    tags: ["claude", "chatbots", "ai-assistants"],
    bodyMarkdown: `## What Rexol lists\n\nRexol.World describes Claude as an Anthropic AI assistant with document analysis, code generation, vision capabilities, and an extended context window. That combination makes it a product to consider when a task involves more than a short question, such as reviewing a long file or working through code alongside written material.\n\n## When it may fit\n\nStart with the work you need to do: ask whether you need help understanding documents, generating or discussing code, interpreting visual inputs, or having a general conversation. The directory description can help you shortlist a tool, but it does not establish how well Claude performs on your own files or workflow.\n\n## What to check\n\nBefore using an assistant with sensitive material, review its current privacy and data settings. Feature availability and plan limits can change.\n\nThis is a summary of Rexol.World's directory description, not a hands-on test or product ranking. [Explore Claude on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "gemini-multimodal-assistant-overview-2026",
    headline: "Gemini in 2026: Google's multimodal AI assistant and connected tools",
    deck: "Rexol highlights Gemini's multimodal capabilities, Google-service integration, coding, and image generation.",
    tags: ["gemini", "chatbots", "multimodal-ai"],
    bodyMarkdown: `## What Rexol lists\n\nRexol.World describes Gemini as Google's multimodal AI assistant, with Google-service integration, coding, and image-generation capabilities. For people who already work in Google's ecosystem, that integration is one detail to investigate when comparing assistants.\n\n## Match the assistant to the task\n\nA broad feature list is a starting point, not a guarantee that every capability is available in every plan or location. Try the particular tasks you care about—such as asking questions across different kinds of input or getting help with code—and check the current product documentation for limits.\n\n## Keep in mind\n\nThis article does not compare Gemini against other assistants or report independent benchmark results. It summarizes how the tool is represented in Rexol's directory. Check current privacy settings before sharing personal or business information.\n\n[Explore Gemini on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "github-copilot-coding-features-2026",
    headline: "GitHub Copilot in 2026: coding assistance from completion to code review",
    deck: "Rexol's listing covers code completion, chat, coding agents, CLI workflows, and code review help.",
    tags: ["github-copilot", "coding", "developer-tools"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's GitHub Copilot entry describes a range of developer features: code completion, Copilot Chat, coding agents, command-line support, and code review assistance. That range can make it relevant at several points in a development workflow, from writing code to inspecting a change.\n\n## A practical way to evaluate it\n\nTry a small task in the environment where you actually work. Review suggested changes before accepting them, and run the project's tests and checks. For agent or review features, pay attention to the files the tool can access and what actions it can take.\n\n## Scope of this article\n\nThe feature list here comes from Rexol.World's directory entry. This is not a benchmark, a security assessment, or a claim that generated code is ready to merge without review. Features and access may vary by plan.\n\n[Explore GitHub Copilot on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "midjourney-image-generation-overview-2026",
    headline: "Midjourney in 2026: prompt-based image creation and style controls",
    deck: "Rexol lists prompt-driven image generation, style controls, image prompts, and personalization features.",
    tags: ["midjourney", "image-generation", "design"],
    bodyMarkdown: `## What Rexol lists\n\nRexol.World describes Midjourney as an AI image-generation platform with prompt-based generation, style controls, image prompts, and personalization options. These features point to a creative workflow where a user guides image generation through text and visual references.\n\n## Questions to ask before choosing\n\nThink about how much control you need over visual consistency, how you want to provide references, and whether the available editing workflow suits your project. Review the current terms for commercial use and check plan details before relying on generated work in a paid project.\n\n## Scope of this article\n\nThis is a directory-based overview, not a comparison of image quality or an independent test. The available tools and terms may change.\n\n[Explore Midjourney on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "grammarly-writing-tools-overview-2026",
    headline: "Grammarly in 2026: writing, grammar, and revision tools in one listing",
    deck: "Rexol groups Grammarly's grammar checking, AI writing, plagiarism checking, paraphrasing, and citation tools.",
    tags: ["grammarly", "writing", "editing"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's Grammarly entry covers grammar checking, AI writing tools, plagiarism checking, paraphrasing, citation tools, and other writing-related features. That broad set can be useful to consider if you want one place to review several stages of a writing task.\n\n## Choose by writing task\n\nProofreading, rephrasing, drafting, and citation support are different needs. Check which features are included in the plan you would use, and verify citations against their original sources. Automated writing suggestions can miss context, so keep a human review in the process.\n\n## Scope of this article\n\nThis overview reflects the capabilities described in Rexol.World's directory. It is not a comparative writing-quality test, and plan features can change.\n\n[Explore Grammarly on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "pika-labs-ai-video-overview-2026",
    headline: "Pika Labs in 2026: text-to-video, image-to-video, and creative effects",
    deck: "Rexol describes Pika Labs as a video generator with text and image inputs, including Pikaffects.",
    tags: ["pika-labs", "video-ai", "creative-tools"],
    bodyMarkdown: `## What Rexol lists\n\nRexol.World lists Pika Labs as an AI video-generation tool that can work from text and images. The entry also calls out creative effects such as Pikaffects. These capabilities make it a candidate to explore for short-form visual ideas and experiments.\n\n## Before building a workflow around it\n\nTest the output length, consistency, editing controls, and export options against your actual project. If a video includes recognizable people, brands, or copyrighted material, check the tool's current terms and your own usage rights.\n\n## Scope of this article\n\nThis article summarizes Rexol's directory entry and does not claim that we tested Pika Labs or evaluated its output quality. Availability and features can change.\n\n[Explore Pika Labs on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "notebooklm-source-based-study-tools-2026",
    headline: "NotebookLM in 2026: an AI notebook built around your sources",
    deck: "Rexol describes NotebookLM as a way to work with uploaded sources, summarize information, and make study materials.",
    tags: ["notebooklm", "education", "research"],
    bodyMarkdown: `## What Rexol lists\n\nRexol.World describes NotebookLM as an AI research notebook that works with uploaded sources, summarizes information, and generates study materials. The source-centered setup is worth exploring for people who want assistance grounded in a set of documents they provide.\n\n## Use it as a study aid\n\nCheck summaries and answers against the original source material, especially when accuracy matters. For school or research work, use the tool to support understanding rather than to replace reading, attribution, or your institution's academic rules.\n\n## Scope of this article\n\nThis is a short overview based on Rexol's directory listing, not an independent evaluation of accuracy or educational outcomes. Review current data handling and availability details before uploading sensitive documents.\n\n[Explore NotebookLM on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "aider-terminal-coding-assistant-2026",
    headline: "Aider in 2026: an open-source coding assistant for terminal workflows",
    deck: "Rexol lists Aider for code refactoring, bug fixing, testing, and edits across multiple files.",
    tags: ["aider", "open-source", "coding"],
    bodyMarkdown: `## What Rexol lists\n\nRexol describes Aider as an open-source AI coding assistant for terminal workflows. Its directory entry highlights refactoring, bug fixing, testing, and editing multiple files. That makes it a distinct option to investigate for developers who prefer working from a command line.\n\n## Review changes carefully\n\nAs with any coding assistant, inspect the diff before accepting changes, run tests, and keep backups or version control. Check which model or service your setup uses and what code or context is sent to it.\n\n## Scope of this article\n\nThe description is based on Rexol.World's listing. We have not independently tested setup, model compatibility, or code quality here.\n\n[Explore Aider on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "wolframalpha-computational-knowledge-2026",
    headline: "WolframAlpha in 2026: computational help for math, science, and data",
    deck: "Rexol lists equation solving and graphing among WolframAlpha's computational capabilities.",
    tags: ["wolframalpha", "education", "math"],
    bodyMarkdown: `## What Rexol lists\n\nRexol.World describes WolframAlpha as a computational knowledge engine for mathematics, science, and data. The entry highlights equation solving and graphing, which can help users explore a problem and inspect a result.\n\n## Check the reasoning\n\nFor learning, look at the steps and definitions behind an answer rather than copying a result alone. Confirm inputs, units, assumptions, and the method used—especially when a calculation informs a real decision.\n\n## Scope of this article\n\nThis overview summarizes the Rexol directory entry. It is not an accuracy benchmark or a substitute for checking important calculations. Capabilities may vary depending on the query and current product access.\n\n[Explore WolframAlpha on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "suno-ai-music-generation-overview-2026",
    headline: "Suno in 2026: AI music generation with lyrics and style controls",
    deck: "Rexol lists custom lyrics, style selection, and song extension among Suno's music-generation features.",
    tags: ["suno", "music-ai", "audio"],
    bodyMarkdown: `## What Rexol lists\n\nRexol.World describes Suno as an AI music-generation platform with support for custom lyrics, style selection, and extending songs. Those features make it a tool to explore for people experimenting with generated music and creative arrangements.\n\n## Check rights and plan details\n\nBefore publishing or monetizing generated audio, read the current terms for the plan you use and check how they address ownership, licensing, and commercial use. Keep track of any lyrics, samples, or references you contribute.\n\n## Scope of this article\n\nThis article is based on Rexol's directory description, not a listening test or legal assessment. Product features and terms can change.\n\n[Explore Suno on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "replit-ghostwriter-coding-2026",
    headline: "Replit Ghostwriter in 2026: AI code generation inside Replit",
    deck: "Rexol lists code generation, transformation, explanation, chat, and refactoring integrated into Replit.",
    tags: ["replit-ghostwriter", "coding", "developer-tools"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's directory describes Replit Ghostwriter with code generation, transformation, explanation, chat, and refactoring features integrated into Replit. Its place inside the Replit environment is a key detail for anyone comparing coding assistants.\n\n## How to evaluate it\n\nTry a small task in a project you can safely change. Review the proposed code, check how it handles your existing files, and run tests before using changes.\n\nThis is a directory-based overview, not a coding benchmark or hands-on review. [Explore Replit Ghostwriter on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "continue-open-source-coding-assistant-2026",
    headline: "Continue in 2026: an open-source coding assistant for popular IDEs",
    deck: "Rexol lists Continue as a VS Code and JetBrains extension with local-model support and codebase chat.",
    tags: ["continue", "open-source", "coding"],
    bodyMarkdown: `## What Rexol lists\n\nRexol describes Continue as an open-source coding assistant extension for VS Code and JetBrains. Its listing calls out local-model support and chat that can use codebase context.\n\n## What to check\n\nConfirm which models and IDE versions are currently supported, and review the extension's access to your project files. If using a local model matters to you, verify what runs locally in your chosen setup.\n\nThis overview is based on the Rexol directory and is not a hands-on test. [Explore Continue on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "qodo-codium-ai-coding-tools-2026",
    headline: "Qodo / Codium AI in 2026: coding and code-quality assistance",
    deck: "Rexol includes Qodo/Codium AI in its developer-tools listings.",
    tags: ["qodo", "codium-ai", "coding"],
    bodyMarkdown: `## What Rexol lists\n\nQodo/Codium AI appears in Rexol.World's coding and developer tools category. The supplied directory material names it among tools developers can explore alongside code completion, coding agents, and code review products.\n\n## Before choosing\n\nCheck the current product page for supported editors, repository integrations, and available code-quality features. Evaluate suggestions against your own tests and review process.\n\nRexol's listing is the basis for this mention; this is not an independent product review. [Explore Qodo / Codium AI on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "amazon-codewhisperer-developer-tools-2026",
    headline: "Amazon CodeWhisperer in 2026: a coding tool in Rexol's developer directory",
    deck: "Rexol includes Amazon CodeWhisperer among the coding assistants in its directory.",
    tags: ["amazon-codewhisperer", "coding", "developer-tools"],
    bodyMarkdown: `## What Rexol lists\n\nAmazon CodeWhisperer is included in the coding and developer tools named in Rexol.World's directory material. The listing places it among options developers may want to compare for coding workflows.\n\n## What to verify\n\nProduct names, features, access, and integrations can change. Check the current official documentation and evaluate code suggestions in your own development environment before relying on them.\n\nThis short profile reflects the Rexol listing, not an independent review. [Explore Amazon CodeWhisperer on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "trae-ai-powered-ide-2026",
    headline: "Trae in 2026: an AI-powered IDE with conversational programming",
    deck: "Rexol describes Trae with code completion, conversational programming, and a Builder Mode.",
    tags: ["trae", "ai-ide", "coding"],
    bodyMarkdown: `## What Rexol lists\n\nRexol describes Trae as an AI-powered IDE with code completion, conversational programming, and a Builder Mode. These are the features highlighted in its directory entry.\n\n## A useful first check\n\nIf considering an AI-focused IDE, try it on a small project and see how its suggestions fit your usual editor workflow. Review generated changes and check current data and privacy settings.\n\nThis profile summarizes Rexol's listing and does not claim independent testing. [Explore Trae on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "leonardo-ai-image-creation-2026",
    headline: "Leonardo AI in 2026: image creation and visual generation tools",
    deck: "Rexol lists Leonardo AI among its image and design products for generating images, artwork, and short video clips.",
    tags: ["leonardo-ai", "image-generation", "design"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's image and design category includes Leonardo AI, described as a platform for generating images, artwork, and short video clips.\n\n## Compare it to your creative needs\n\nConsider the kind of output you need, the editing controls available, and the terms for using generated work. Review current plan details before relying on a feature for a project.\n\nThis directory-based profile is not a quality comparison or hands-on test. [Explore Leonardo AI on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "dall-e-image-generation-editing-2026",
    headline: "DALL·E in 2026: image generation, edits, and variations",
    deck: "Rexol lists text-to-image generation, image editing, and variations for DALL·E.",
    tags: ["dall-e", "image-generation", "design"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's image category describes DALL·E with text-to-image generation, image editing, and variations. Those features cover both creating a visual from a prompt and iterating on an existing image.\n\n## What to check\n\nTry representative prompts and edits, and review current usage limits and rights guidance before using generated images in a project.\n\nThis article reflects Rexol's directory description and is not an independent image-quality test. [Explore DALL·E on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "ideogram-text-in-images-2026",
    headline: "Ideogram in 2026: an image generator listed for legible text",
    deck: "Rexol specifically describes Ideogram as specializing in legible text inside generated images.",
    tags: ["ideogram", "image-generation", "design"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's directory highlights Ideogram for generating images with legible text. That makes it a product to explore when a visual concept includes words as part of the image.\n\n## Test the exact layout\n\nText rendering can depend on the prompt and design. Try the names, short phrases, or layout you need, then inspect every character before publishing.\n\nThis summary is based on Rexol's listing, not a hands-on comparison. [Explore Ideogram on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "fooocus-open-source-image-generation-2026",
    headline: "Fooocus in 2026: an open-source option for AI image generation",
    deck: "Rexol lists Fooocus as an open-source image-generation tool focused on accessible, high-quality generation.",
    tags: ["fooocus", "open-source", "image-generation"],
    bodyMarkdown: `## What Rexol lists\n\nRexol describes Fooocus as an open-source image-generation tool focused on accessible, high-quality generation.\n\n## Check your setup\n\nOpen-source tools may require more setup than hosted services. Check current installation instructions, hardware needs, and model terms before building a workflow around one.\n\nThis directory-based profile is not a benchmark or installation guide. [Explore Fooocus on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "quizlet-q-chat-study-tools-2026",
    headline: "Quizlet Q-Chat in 2026: AI tutoring in a study ecosystem",
    deck: "Rexol lists Q-Chat as AI tutoring integrated with Quizlet's study ecosystem.",
    tags: ["quizlet-q-chat", "education", "study"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's education directory describes Quizlet Q-Chat as AI tutoring integrated with Quizlet's study ecosystem.\n\n## Use it to support learning\n\nA tutor can help you practice and explore a topic, but check explanations against trusted class materials. Confirm current access and feature availability before planning around the tool.\n\nThis profile summarizes the Rexol listing; it does not evaluate learning outcomes. [Explore Quizlet Q-Chat on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "khanmigo-ai-tutor-2026",
    headline: "Khanmigo in 2026: Khan Academy's AI tutor and writing support",
    deck: "Rexol describes Khanmigo with tutoring and writing-related assistance.",
    tags: ["khanmigo", "education", "tutoring"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's education section describes Khanmigo as Khan Academy's AI tutor, including tutoring and writing-related assistance.\n\n## A learning-first approach\n\nUse tutoring prompts to work through concepts and ask for explanations. Check answers against your course materials and review current access details for learners and educators.\n\nThis article is based on Rexol's directory description, not an independent evaluation of outcomes. [Explore Khanmigo on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "socratic-ai-homework-helper-2026",
    headline: "Socratic in 2026: an AI homework helper across school subjects",
    deck: "Rexol lists Socratic as a homework helper for math, science, literature, social studies, and more.",
    tags: ["socratic", "education", "homework"],
    bodyMarkdown: `## What Rexol lists\n\nRexol describes Socratic as an AI-powered homework helper covering subjects including mathematics, science, literature, and social studies.\n\n## Check the explanation\n\nUse a homework helper to understand a process, then verify each step and make sure you can explain the answer yourself. Check current product access and supported subjects.\n\nThis summary reflects Rexol's listing and is not an accuracy test. [Explore Socratic on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "chatgpt-edu-university-ai-2026",
    headline: "ChatGPT Edu in 2026: an education-focused AI offering for universities",
    deck: "Rexol lists the education-focused ChatGPT offering for universities.",
    tags: ["chatgpt-edu", "education", "universities"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's education category includes ChatGPT Edu as an education-focused offering for universities.\n\n## Questions for institutions\n\nUniversities evaluating AI tools should review current administrative controls, data handling, access, and policy fit. Students should follow their institution's guidance on acceptable use.\n\nThis article only summarizes Rexol's listing; it does not describe plan terms or independently assess the product. [Explore ChatGPT Edu on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "mathway-math-problem-solving-2026",
    headline: "Mathway in 2026: a math problem-solving tool from basics to calculus",
    deck: "Rexol lists Mathway for mathematics problem solving across topics including calculus.",
    tags: ["mathway", "education", "math"],
    bodyMarkdown: `## What Rexol lists\n\nRexol describes Mathway as a mathematics problem-solving tool covering topics from basic math through calculus.\n\n## Use solutions to learn\n\nWhen working through a problem, examine the method and check each step rather than relying on a final answer alone. Confirm current features and subject coverage.\n\nThis is a summary of Rexol's directory entry, not an independent accuracy review. [Explore Mathway on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "prowritingaid-writing-editor-2026",
    headline: "ProWritingAid in 2026: writing and manuscript tools in Rexol's directory",
    deck: "Rexol lists grammar, readability, style analysis, repetition detection, plagiarism checking, and rewriting.",
    tags: ["prowritingaid", "writing", "editing"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's writing tools section describes ProWritingAid with grammar and readability support, style analysis, repetition detection, plagiarism checking, rewriting, and manuscript-oriented features.\n\n## Choose based on your editing process\n\nConsider whether you need help with sentence-level editing, longer manuscripts, or style feedback. Review suggestions yourself, and check current feature and plan details.\n\nThis profile summarizes Rexol's listing; we have not independently tested the product. [Explore ProWritingAid on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "languagetool-grammar-style-checker-2026",
    headline: "LanguageTool in 2026: grammar, spelling, punctuation, and readability",
    deck: "Rexol describes LanguageTool as a grammar and style checker for spelling, punctuation, and readability.",
    tags: ["languagetool", "writing", "editing"],
    bodyMarkdown: `## What Rexol lists\n\nRexol describes LanguageTool as a grammar and style checker covering spelling, punctuation, and readability.\n\n## Keep your voice\n\nAutomated edits can smooth writing but may also change meaning or tone. Review each suggestion in context and check current language support and integrations for your needs.\n\nThis summary is based on the Rexol directory and is not a product comparison. [Explore LanguageTool on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "udio-ai-music-generation-2026",
    headline: "Udio in 2026: AI music generation with vocals and transformations",
    deck: "Rexol lists music generation with vocals and multiple transformation capabilities.",
    tags: ["udio", "music-ai", "audio"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's music and audio section describes Udio with AI music generation, vocals, and multiple transformation capabilities.\n\n## Check the terms before release\n\nFor any generated audio, review the current service terms and rights guidance before sharing or monetizing work. Test the specific controls and export options you need.\n\nThis is a directory-based overview, not a listening test or legal assessment. [Explore Udio on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "mubert-ai-music-for-creators-2026",
    headline: "Mubert in 2026: AI-generated music for content creators",
    deck: "Rexol highlights royalty-free music, API access, and commercial licensing options in its Mubert listing.",
    tags: ["mubert", "music-ai", "creators"],
    bodyMarkdown: `## What Rexol lists\n\nRexol describes Mubert as an AI-generated music service aimed at content creators, with API and commercial licensing options noted in its listing.\n\n## Verify licensing details\n\nLicensing depends on current terms and the plan or use case. Read the applicable agreement before publishing audio in a client project, advertisement, or monetized channel.\n\nThis article summarizes Rexol's listing and does not provide a legal review. [Explore Mubert on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "beatoven-ai-music-for-video-podcasts-2026",
    headline: "Beatoven AI in 2026: music composition for video and podcasts",
    deck: "Rexol lists controls for genre, mood, and instruments in Beatoven AI.",
    tags: ["beatoven-ai", "music-ai", "podcasts"],
    bodyMarkdown: `## What Rexol lists\n\nRexol describes Beatoven AI as a music-composition tool for videos and podcasts, with controls around genre, mood, and instruments.\n\n## Fit the music to the project\n\nTry a short segment with the tone and pacing you need. Before release, check current licensing terms and confirm the output fits your project's rights requirements.\n\nThis directory-based overview is not a listening test or legal advice. [Explore Beatoven AI on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "poe-bots-custom-ai-assistants-2026",
    headline: "Poe Bots in 2026: creating and sharing custom AI bots",
    deck: "Rexol lists Poe Bots for creating custom bots and working with multiple AI models.",
    tags: ["poe-bots", "chatbots", "custom-ai"],
    bodyMarkdown: `## What Rexol lists\n\nRexol's custom and knowledge bot category describes Poe Bots as a way to create and share custom AI bots and work with multiple models.\n\n## Consider how a bot is configured\n\nIf you use a custom bot for work, review its instructions, model behavior, and data settings. Shared bots can vary in quality, so verify important responses.\n\nThis article reflects the Rexol listing, not an independent review. [Explore Poe Bots on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "open-webui-private-ai-workspaces-2026",
    headline: "Open WebUI in 2026: an open-source interface for private AI workspaces",
    deck: "Rexol describes Open WebUI as an open-source platform for private workspaces and custom assistants.",
    tags: ["open-webui", "open-source", "custom-ai"],
    bodyMarkdown: `## What Rexol lists\n\nRexol describes Open WebUI as an open-source platform for private AI workspaces and custom assistants.\n\n## Privacy depends on configuration\n\nA self-hosted interface does not by itself determine where model requests go. Check which model provider or local model is configured, and review network and storage settings.\n\nThis short profile is based on Rexol's directory entry, not a security assessment. [Explore Open WebUI on Rexol.World](https://rexol.world/).`
  },
  {
    slug: "anythingllm-document-knowledge-bots-2026",
    headline: "AnythingLLM in 2026: building AI knowledge bots from documents",
    deck: "Rexol lists AnythingLLM as an open-source tool for creating knowledge bots from documents and other sources.",
    tags: ["anythingllm", "open-source", "knowledge-bots"],
    bodyMarkdown: `## What Rexol lists\n\nRexol describes AnythingLLM as an open-source tool for creating AI knowledge bots from documents and other sources.\n\n## Check answers against source files\n\nA document-based assistant can help locate and summarize information, but its responses may still be incomplete or mistaken. Verify important details in the original files and check how your chosen setup stores or processes data.\n\nThis summary is based on Rexol's listing, not an independent product or security review. [Explore AnythingLLM on Rexol.World](https://rexol.world/).`
  }
];

export const rexolNewsArticles: Article[] = stories.map((story, index) => ({
  ...story,
  category: "news",
  type: "NEWS",
  status: "PUBLISHED",
  authorSlug: index % 2 === 0 ? "mara-lindqvist" : "devon-okafor",
  editoriallyReviewed: false,
  publishedAt: "2026-09-27T09:00:00.000Z",
  sources: [listingSource]
}));

export const rexolToolsRoundup: Article = {
  slug: "ai-tools-listed-on-rexol-world-2026",
  category: "news",
  type: "GUIDE",
  status: "PUBLISHED",
  headline: "32 AI tools listed on Rexol.World in 2026",
  deck: "Explore tools across coding, images, education, writing, music, and custom assistants. Every name links to its own RexolNews page.",
  authorSlug: "mara-lindqvist",
  tags: ["ai-tools", "directory", "2026"],
  editoriallyReviewed: false,
  publishedAt: "2026-09-27T09:00:00.000Z",
  sources: [listingSource],
  bodyMarkdown: `This roundup collects the AI tools named in the Rexol.World material shared with RexolNews. Each linked profile summarizes the directory description and is not a hands-on review or ranking.\n\n${stories.map((story) => `- [${story.headline}](/news/${story.slug})`).join("\n")}\n\nProduct features, availability, pricing, and terms can change. Follow the Rexol.World listing for current product details.`
};
