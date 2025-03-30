import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock categories data
const categories = [
  {
    id: "ai",
    name: "AI",
    count: 42,
    description: "Artificial intelligence and machine learning products",
  },
  {
    id: "fintech",
    name: "Fintech",
    count: 38,
    description: "Financial technology solutions",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    count: 35,
    description: "Online shopping and marketplace platforms",
  },
  {
    id: "saas",
    name: "SaaS",
    count: 31,
    description: "Software as a service applications",
  },
  {
    id: "mobile",
    name: "Mobile",
    count: 29,
    description: "Mobile apps and services",
  },
  {
    id: "education",
    name: "Education",
    count: 27,
    description: "Learning platforms and educational tools",
  },
  {
    id: "health",
    name: "Health",
    count: 24,
    description: "Healthcare and wellness applications",
  },
  {
    id: "gaming",
    name: "Gaming",
    count: 22,
    description: "Games and gaming platforms",
  },
  {
    id: "productivity",
    name: "Productivity",
    count: 20,
    description: "Tools to improve efficiency and workflow",
  },
  {
    id: "design",
    name: "Design",
    count: 18,
    description: "Design tools and resources",
  },
  {
    id: "social",
    name: "Social",
    count: 16,
    description: "Social networks and community platforms",
  },
  {
    id: "travel",
    name: "Travel",
    count: 14,
    description: "Travel services and applications",
  },
  {
    id: "food",
    name: "Food & Beverage",
    count: 12,
    description: "Food delivery and culinary applications",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    count: 10,
    description: "Entertainment platforms and services",
  },
  {
    id: "ar-vr",
    name: "AR/VR",
    count: 8,
    description: "Augmented and virtual reality experiences",
  },
  {
    id: "iot",
    name: "IoT",
    count: 6,
    description: "Internet of Things devices and platforms",
  },
];

export default function CategoriesPage() {
  return (
    <div className="container py-8">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Categories</h1>
          <p className="text-muted-foreground">
            Browse products by category to find exactly what you&apos;re looking
            for
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search categories..." className="pl-9 max-w-md" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group block space-y-2 rounded-lg border p-4 hover:bg-accent/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {category.name}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {category.count}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button variant="outline" size="lg">
            View All Categories
          </Button>
        </div>
      </div>
    </div>
  );
}
