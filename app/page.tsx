import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock data for products
const products = [
  {
    id: "1",
    name: "Batik AI",
    tagline: "Generate unique batik patterns using AI",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1604973104381-870c92f10343?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    upvotes: 128,
    launchDate: "2023-12-15",
    categories: ["AI", "Design"],
    user: {
      name: "Budi Santoso",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  },
  {
    id: "2",
    name: "Wayang Chat",
    tagline: "Chat with Indonesian wayang characters powered by GPT-4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1662793762129-6a14c55bb0ee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    upvotes: 95,
    launchDate: "2023-12-10",
    categories: ["AI", "Entertainment"],
    user: {
      name: "Siti Rahayu",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  },
  {
    id: "3",
    name: "Lokal Market",
    tagline: "Marketplace for Indonesian artisans and craftsmen",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1727124443494-32e9275dd8fa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    upvotes: 87,
    launchDate: "2023-12-05",
    categories: ["E-commerce", "Marketplace"],
    user: {
      name: "Agus Wijaya",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    id: "4",
    name: "Jajan Pay",
    tagline: "Mobile payment solution for street food vendors",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    upvotes: 76,
    launchDate: "2023-12-01",
    categories: ["Fintech", "Mobile"],
    user: {
      name: "Dewi Putri",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
  },
  {
    id: "5",
    name: "Candi AR",
    tagline: "Explore ancient Indonesian temples in augmented reality",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    upvotes: 64,
    launchDate: "2023-11-28",
    categories: ["AR/VR", "Education"],
    user: {
      name: "Raden Mas",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  },
  {
    id: "6",
    name: "Warung OS",
    tagline: "Operating system for small local shops and warungs",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1602763288580-927cfda37a72?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    upvotes: 52,
    launchDate: "2023-11-25",
    categories: ["SaaS", "Retail"],
    user: {
      name: "Eko Prasetyo",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  },
];

export default function Home() {
  return (
    <div className="container py-8">
      {/* Hero section */}
      <section className="py-12 space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Discover the Best{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Indonesian Products
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Karyaqu is where makers and creators showcase their products and get
          feedback from the Indonesian tech community.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/submit">Submit Your Product</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/categories">Browse Categories</Link>
          </Button>
        </div>
      </section>

      {/* Featured categories */}
      <section className="py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Categories</h2>
          <Button variant="ghost" asChild>
            <Link href="/categories">View All</Link>
          </Button>
        </div>
        <div className="relative px-8">
          <Carousel
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {[
                "AI",
                "Fintech",
                "E-commerce",
                "SaaS",
                "Mobile",
                "Education",
              ].map((category) => (
                <CarouselItem
                  key={category}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                      <span className="text-primary font-bold">
                        {category.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium line-clamp-1">
                      {category}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Product listings */}
      <section className="py-8">
        <Tabs defaultValue="today" className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Products</h2>
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">This Week</TabsTrigger>
              <TabsTrigger value="month">This Month</TabsTrigger>
              <TabsTrigger value="all">All Time</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="today" className="mt-0">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="week" className="mt-0">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .slice()
                .reverse()
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="month" className="mt-0">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...products]
                .sort(() => Math.random() - 0.5)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...products]
                .sort((a, b) => b.upvotes - a.upvotes)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA section */}
      <section className="py-12 my-8 bg-accent/10 rounded-xl">
        <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold">
            Ready to showcase your product?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of Indonesian makers and get your product in front of
            eager early adopters and investors.
          </p>
          <Button size="lg" asChild>
            <Link href="/submit">Submit Your Product</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
