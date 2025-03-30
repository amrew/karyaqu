"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { ProductCard } from "@/components/product-card";

// Mock data for demonstration
const mockProducts = [
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
  // Add more mock products as needed
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [sortBy, setSortBy] = useState("newest");
  const [category, setCategory] = useState("all");

  // Mock categories
  const categories = [
    "All",
    "Software",
    "Hardware",
    "Mobile Apps",
    "Web Apps",
    "Games",
    "Tools",
    "Other",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Search Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Search Results for &quot;{query}&quot;
          </h1>
          <p className="text-gray-600">
            Found {mockProducts.length} products matching your search
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Refine your search..."
              defaultValue={query}
              className="max-w-md"
            />
          </div>
          <div className="flex gap-4">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.toLowerCase()} value={cat.toLowerCase()}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="upvotes">Most Upvotes</SelectItem>
                <SelectItem value="comments">Most Comments</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 pt-8">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>

        {/* No Results */}
        {mockProducts.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-900">
              No products found
            </h2>
            <p className="text-gray-600 mt-2">
              Try adjusting your search or filters to find what you&apos;re
              looking for
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
