"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, ArrowLeft, ImageIcon, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SubmissionType = "owner" | "sharing" | null;
type FormStep = 1 | 2;

interface ImageFile extends File {
  preview: string;
}

export default function SubmitPage() {
  const [date, setDate] = useState<Date | null>(null);
  const [step, setStep] = useState<FormStep>(1);
  const [submissionType, setSubmissionType] = useState<SubmissionType>(null);
  const [thumbnail, setThumbnail] = useState<ImageFile | null>(null);
  const [galleryImages, setGalleryImages] = useState<ImageFile[]>([]);

  const handleTypeSelection = (type: SubmissionType) => {
    setSubmissionType(type);
    setStep(2);
  };

  const goBack = () => {
    setStep(1);
    setSubmissionType(null);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      setThumbnail(file as ImageFile);
    }
  };

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) => {
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
        return file as ImageFile;
      });
      setGalleryImages((prev) => [...prev, ...newImages].slice(0, 5));
    }
  };

  const removeGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeThumbnail = () => {
    setThumbnail(null);
  };

  if (step === 1) {
    return (
      <div className="container py-8 max-w-3xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Submit a Product</h1>
            <p className="text-muted-foreground">
              Share amazing products with the Indonesian tech community
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card
              className="hover:border-primary cursor-pointer transition-colors"
              onClick={() => handleTypeSelection("owner")}
            >
              <CardHeader>
                <CardTitle>I&apos;m the Creator</CardTitle>
                <CardDescription>
                  I created this product and want to share it with the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-2">
                  <li>Showcase your creation</li>
                  <li>Get direct feedback</li>
                  <li>Connect with potential users</li>
                  <li>Build your reputation</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="hover:border-primary cursor-pointer transition-colors"
              onClick={() => handleTypeSelection("sharing")}
            >
              <CardHeader>
                <CardTitle>Sharing a Discovery</CardTitle>
                <CardDescription>
                  I found an interesting product that others might like
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-2">
                  <li>Share cool finds</li>
                  <li>Help others discover great products</li>
                  <li>Support Indonesian creators</li>
                  <li>Contribute to the community</li>
                </ul>
                <div className="mt-4 p-3 bg-muted/50 rounded-lg text-sm">
                  <p className="text-muted-foreground">
                    <strong>Note:</strong> After submission, Karyaqu will verify
                    the product and reach out to the creators. Once verified,
                    the product will be featured on our platform.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-3xl">
      <div className="space-y-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          onClick={goBack}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            {submissionType === "owner"
              ? "Submit Your Product"
              : "Share a Product"}
          </h1>
          <p className="text-muted-foreground">
            {submissionType === "owner"
              ? "Share your creation with the Indonesian tech community and get valuable feedback"
              : "Help others discover great products made by Indonesian creators"}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>
              {submissionType === "owner"
                ? "Tell us about your product. Be clear and concise to attract more interest."
                : "Tell us about the product you want to share. Make sure it's made by Indonesian creators."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input id="name" placeholder="Enter the product name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="What does this product do? What problems does it solve?"
                className="min-h-[100px]"
              />
            </div>

            {submissionType === "sharing" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="creator">Creator Name/Company *</Label>
                  <Input id="creator" placeholder="Who created this product?" />
                </div>
                <div className="rounded-lg bg-muted/50 p-4 space-y-3">
                  <h4 className="font-medium text-sm">What happens next?</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>1. Our team will verify the product details</li>
                    <li>
                      2. We&apos;ll reach out to the creators to confirm
                      ownership
                    </li>
                    <li>
                      3. Once verified, the product will be featured on Karya
                      Raya
                    </li>
                    <li>
                      4. You&apos;ll be notified when the product goes live
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    This process helps ensure authenticity and gives creators
                    control over their product&apos;s presence on our platform.
                  </p>
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="website">Website/URL *</Label>
              <Input id="website" type="url" placeholder="https://" />
            </div>

            <div className="space-y-2">
              <Label>Category *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="mobile-app">Mobile App</SelectItem>
                  <SelectItem value="web-app">Web App</SelectItem>
                  <SelectItem value="open-source">Open Source</SelectItem>
                  <SelectItem value="desktop-app">Desktop App</SelectItem>
                  <SelectItem value="developer-tool">Developer Tool</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {submissionType === "owner" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="launch-date">Launch Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select launch date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        selected={date}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="early-access" />
                  <label
                    htmlFor="early-access"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    This product is in early access/beta
                  </label>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Thumbnail Image *</Label>
                    <div
                      className={cn(
                        "border-2 border-dashed rounded-lg transition-colors",
                        "hover:border-primary/50 hover:bg-muted/50",
                        thumbnail ? "p-4" : "p-8"
                      )}
                    >
                      {thumbnail ? (
                        <div className="relative aspect-video">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={thumbnail.preview}
                            alt="Thumbnail preview"
                            className="rounded-md object-cover w-full h-full"
                          />
                          <Button
                            variant="secondary"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={removeThumbnail}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <ImageIcon className="h-8 w-8 text-muted-foreground" />
                          <label
                            htmlFor="thumbnail"
                            className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
                          >
                            Click to upload thumbnail
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Recommended size: 1200x630px. Max 2MB.
                          </p>
                          <input
                            id="thumbnail"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Gallery Images</Label>
                    <div
                      className={cn(
                        "border-2 border-dashed rounded-lg transition-colors",
                        "hover:border-primary/50 hover:bg-muted/50",
                        galleryImages.length > 0 ? "p-4" : "p-8"
                      )}
                    >
                      {galleryImages.length > 0 ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {galleryImages.map((image, index) => (
                              <div
                                key={index}
                                className="relative aspect-video"
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={image.preview}
                                  alt={`Gallery image ${index + 1}`}
                                  className="rounded-md object-cover w-full h-full"
                                />
                                <Button
                                  variant="secondary"
                                  size="icon"
                                  className="absolute top-2 right-2"
                                  onClick={() => removeGalleryImage(index)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                          {galleryImages.length < 5 && (
                            <div className="flex justify-center">
                              <label
                                htmlFor="gallery"
                                className="cursor-pointer hover:text-primary transition-colors text-sm"
                              >
                                Add more images ({5 - galleryImages.length}{" "}
                                remaining)
                              </label>
                              <input
                                id="gallery"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                multiple
                                onChange={handleGalleryChange}
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <ImageIcon className="h-8 w-8 text-muted-foreground" />
                          <label
                            htmlFor="gallery"
                            className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
                          >
                            Click to upload gallery images
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Upload up to 5 images to showcase your product. Max
                            2MB each.
                          </p>
                          <input
                            id="gallery"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            multiple
                            onChange={handleGalleryChange}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Submit for Review</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
