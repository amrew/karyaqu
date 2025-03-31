import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, Calendar } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    tagline: string;
    thumbnailUrl: string;
    upvotes: number;
    launchDate: string;
    categories: string[];
    user: {
      name: string;
      image: string;
    };
  };
}

export function ProductCard({ product }: ProductCardProps) {
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
      <CardHeader className="p-4 pb-0">
        <div className="flex items-start justify-between">
          <Link href={`/products/${product.id}`} className="block">
            <h3 className="font-bold text-lg hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-8 w-8"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Upvote</span>
            </Button>
            <span className="text-xs font-medium">{product.upvotes}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{product.tagline}</p>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex flex-wrap gap-2">
          {product.categories.map((category) => (
            <Badge key={category} variant="secondary" className="font-normal">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6 rounded-full overflow-hidden">
            <Image
              src={product.user.image || "/placeholder.svg"}
              alt={product.user.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs text-muted-foreground">
            {product.user.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(product.launchDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
