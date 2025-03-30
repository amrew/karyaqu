import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUp,
  Calendar,
  ExternalLink,
  MessageSquare,
  Share2,
} from "lucide-react";

// Mock product data
const product = {
  id: "1",
  name: "Batik AI",
  tagline: "Generate unique batik patterns using AI",
  description:
    "Batik AI uses advanced machine learning algorithms to generate unique batik patterns inspired by traditional Indonesian designs. Our technology preserves cultural heritage while enabling new creative possibilities for designers, fashion brands, and art enthusiasts.\n\nWith Batik AI, you can generate unlimited patterns, customize colors and motifs, and export high-resolution files for printing or digital use. We also offer an API for developers who want to integrate our technology into their own applications.",
  websiteUrl: "https://batik-ai.com",
  thumbnailUrl: "/placeholder.svg?height=600&width=1200",
  galleryUrls: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  launchDate: "2023-12-15",
  upvotes: 128,
  categories: ["AI", "Design", "Culture"],
  user: {
    id: "u1",
    name: "Budi Santoso",
    image: "/placeholder.svg?height=40&width=40",
    bio: "AI Engineer and batik enthusiast",
  },
  comments: [
    {
      id: "c1",
      content:
        "This is amazing! I've been looking for something like this for my fashion line.",
      createdAt: "2023-12-15T10:30:00Z",
      user: {
        id: "u2",
        name: "Dewi Putri",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: "c2",
      content:
        "How does this preserve the cultural significance of traditional batik patterns?",
      createdAt: "2023-12-15T11:45:00Z",
      user: {
        id: "u3",
        name: "Agus Wijaya",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: "c3",
      content:
        "Just tried the demo and the results are stunning! Can't wait to use this for my next project.",
      createdAt: "2023-12-16T09:15:00Z",
      user: {
        id: "u4",
        name: "Siti Rahayu",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
  ],
};

export default function ProductPage() {
  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link
                href="/categories/ai"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                AI
              </Link>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-xl text-muted-foreground">
                  {product.tagline}
                </p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10"
              >
                <ArrowUp className="h-5 w-5" />
                <span className="sr-only">Upvote</span>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="font-normal"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Product image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={product.thumbnailUrl || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product details */}
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="comments">
                Comments ({product.comments.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6 pt-4">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">About {product.name}</h2>
                <div className="prose prose-sm max-w-none">
                  {product.description.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="pt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {product.galleryUrls.map((url, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-lg"
                  >
                    <Image
                      src={url || "/placeholder.svg"}
                      alt={`${product.name} gallery image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="comments" className="space-y-4 pt-4">
              {product.comments.map((comment) => (
                <Card key={comment.id}>
                  <CardHeader className="p-4 pb-2 flex flex-row items-start gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={comment.user.image}
                        alt={comment.user.name}
                      />
                      <AvatarFallback>
                        {comment.user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">
                          {comment.user.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(comment.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm">{comment.content}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="p-4 pb-2">
              <h3 className="font-semibold">Product Info</h3>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Launched</span>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="text-sm">
                    {new Date(product.launchDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Upvotes</span>
                <div className="flex items-center">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span className="text-sm">{product.upvotes}</span>
                </div>
              </div>

              <Button className="w-full" asChild>
                <a
                  href={product.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </a>
              </Button>

              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="flex-1">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button variant="outline" size="icon" className="flex-1">
                  <MessageSquare className="h-4 w-4" />
                  <span className="sr-only">Comment</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4 pb-2">
              <h3 className="font-semibold">Maker</h3>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={product.user.image}
                    alt={product.user.name}
                  />
                  <AvatarFallback>{product.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{product.user.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {product.user.bio}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4 pb-2">
              <h3 className="font-semibold">Related Products</h3>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt={`Related product ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Related Product {i}</h4>
                    <p className="text-xs text-muted-foreground">
                      Short description
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
