export type ArticleType =
  | "NEWS"
  | "REVIEW"
  | "BEST_OF"
  | "GUIDE"
  | "ANALYSIS"
  | "STARTUP_SPOTLIGHT"
  | "TESTED";

export type ArticleStatus =
  | "DRAFT"
  | "IN_REVIEW"
  | "SCHEDULED"
  | "PUBLISHED"
  | "ARCHIVED";

export type SourceClaimType =
  | "REPORTED_FACT"
  | "COMPANY_CLAIM"
  | "ANALYST_OPINION"
  | "EDITORIAL_ANALYSIS";

export interface Author {
  slug: string;
  name: string;
  bio: string;
  imageUrl?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export interface Source {
  publication: string;
  url: string;
  author?: string;
  publishedAt?: string;
  claimType: SourceClaimType;
}

export interface Correction {
  correctedAt: string;
  explanation: string;
}

export interface BestOfProduct {
  name: string;
  logoUrl?: string;
  description: string;
  officialUrl: string;
  pricing?: string;
  hasFreePlan: boolean;
  keyFeatures: string[];
  strengths: string[];
  limitations: string[];
  bestFor?: string;
  testingNotes?: string;
  needsVerification?: boolean;
  lastVerifiedAt?: string;
}

export interface Article {
  slug: string;
  category: CategorySlug;
  type: ArticleType;
  status: ArticleStatus;
  headline: string;
  deck?: string;
  bodyMarkdown: string;
  featuredImageUrl?: string;
  featuredImageAlt?: string;
  authorSlug: string;
  tags: string[];
  sources?: Source[];
  corrections?: Correction[];
  bestOfProducts?: BestOfProduct[];
  editoriallyReviewed: boolean;
  publishedAt: string;
  updatedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export type CategorySlug =
  | "news"
  | "ai"
  | "tools"
  | "startups"
  | "reviews"
  | "guides"
  | "analysis"
  | "best";

export interface CategoryDef {
  slug: CategorySlug;
  name: string;
  description: string;
}
