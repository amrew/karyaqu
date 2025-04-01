"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CommentFormProps {
  isAuthenticated: boolean;
  user?: {
    name: string;
    image?: string;
  };
  onSubmit: (content: string) => void;
}

export function CommentForm({
  isAuthenticated,
  user,
  onSubmit,
}: CommentFormProps) {
  const [content, setContent] = useState("");

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
        <p className="text-sm text-muted-foreground">
          Please sign in to leave a comment
        </p>
        <Button asChild>
          <a href="/login">Sign In</a>
        </Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-start gap-4">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.image} alt={user?.name} />
          <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
        </Avatar>
        <Textarea
          placeholder="Share your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 resize-none"
          rows={3}
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={!content.trim()}>
          Post Comment
        </Button>
      </div>
    </form>
  );
}
