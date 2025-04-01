import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Edit, ExternalLink } from "lucide-react";

interface Product {
  id: string;
  name: string;
  thumbnailUrl: string | null;
  user: {
    id: string;
    name: string;
    image: string | null;
  };
  upvotes: number;
  tagline: string;
  categories: string[];
  launchDate: string;
}

// Mock user data
const user = {
  id: "u1",
  name: "Budi Santoso",
  image: "/placeholder.svg?height=200&width=200",
  bio: "AI Engineer and batik enthusiast. Building products that celebrate Indonesian culture.",
  website: "https://budisantoso.com",
  twitter: "@budisantoso",
  createdAt: "2023-01-15",
  products: [
    {
      id: "1",
      name: "Batik AI",
      tagline: "Generate unique batik patterns using AI",
      thumbnailUrl: "/placeholder.svg?height=300&width=300",
      upvotes: 128,
      launchDate: "2023-12-15",
      categories: ["AI", "Design"],
    },
    {
      id: "2",
      name: "Wayang Chat",
      tagline: "Chat with Indonesian wayang characters powered by GPT-4",
      thumbnailUrl: "/placeholder.svg?height=300&width=300",
      upvotes: 95,
      launchDate: "2023-12-10",
      categories: ["AI", "Entertainment"],
    },
  ],
  upvoted: [
    {
      id: "3",
      name: "Lokal Market",
      tagline: "Marketplace for Indonesian artisans and craftsmen",
      thumbnailUrl: "/placeholder.svg?height=300&width=300",
      upvotes: 87,
      launchDate: "2023-12-05",
      categories: ["E-commerce", "Marketplace"],
    },
    {
      id: "4",
      name: "Jajan Pay",
      tagline: "Mobile payment solution for street food vendors",
      thumbnailUrl: "/placeholder.svg?height=300&width=300",
      upvotes: 76,
      launchDate: "2023-12-01",
      categories: ["Fintech", "Mobile"],
    },
  ],
};

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
              <Image
                src={user.image || "/placeholder.svg"}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            <h1 className="mt-4 text-2xl font-bold">{user.name}</h1>
            <p className="text-sm text-muted-foreground">
              Member since{" "}
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm">{user.bio}</p>

            {user.website && (
              <div className="flex items-center gap-2 text-sm">
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {user.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}

            {user.twitter && (
              <div className="flex items-center gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-muted-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <a
                  href={`https://twitter.com/${user.twitter.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {user.twitter}
                </a>
              </div>
            )}

            <Button variant="outline" className="w-full" asChild>
              <Link href="/settings">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Link>
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3 space-y-6">
          <Tabs defaultValue="products">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="products">
                Products ({user.products.length})
              </TabsTrigger>
              <TabsTrigger value="upvoted">
                Upvoted ({user.upvoted.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="pt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {user.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{
                      id: product.id,
                      name: product.name,
                      thumbnailUrl: product.thumbnailUrl,
                      user: user,
                      upvotes: product.upvotes,
                      tagline: product.tagline,
                      categories: product.categories,
                      launchDate: product.launchDate,
                    }}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upvoted" className="pt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {user.upvoted.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{
                      id: product.id,
                      name: product.name,
                      thumbnailUrl: product.thumbnailUrl,
                      user: user,
                      upvotes: product.upvotes,
                      tagline: product.tagline,
                      categories: product.categories,
                      launchDate: product.launchDate,
                    }}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden group">
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-[3/2] relative overflow-hidden">
          <Image
            src={product.thumbnailUrl || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <Link href={`/products/${product.id}`} className="block">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">{product.tagline}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {product.categories.map((category) => (
              <Badge key={category} variant="secondary" className="font-normal">
                {category}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-xs text-muted-foreground pt-2">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(product.launchDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
