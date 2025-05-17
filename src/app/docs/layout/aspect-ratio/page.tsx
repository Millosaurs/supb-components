"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import {
  Copy,
  Check,
  Info,
  AlertCircle,
  Image as ImageIcon,
  Video,
  Map,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function AspectRatioPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const basicAspectRatioCode = `import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

export function AspectRatioDemo() {
  return (
    <div className="w-full max-w-[600px]">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Image"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}`;

  const videoAspectRatioCode = `import { AspectRatio } from "@/components/ui/aspect-ratio"

export function VideoAspectRatioDemo() {
  return (
    <div className="w-full max-w-[600px]">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full rounded-md"
        />
      </AspectRatio>
    </div>
  )
}`;

  const mapAspectRatioCode = `import { AspectRatio } from "@/components/ui/aspect-ratio"

export function MapAspectRatioDemo() {
  return (
    <div className="w-full max-w-[600px]">
      <AspectRatio ratio={4 / 3}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647534825888!5m2!1sen!2sus"
          title="Google Maps"
          className="h-full w-full rounded-md border-0"
          loading="lazy"
        />
      </AspectRatio>
    </div>
  )
}`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Aspect Ratio
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays content within a desired ratio.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Aspect Ratio component helps maintain consistent width-to-height
          ratios across different screen sizes. It's particularly useful for
          responsive images, videos, maps, and other media content that needs to
          maintain specific proportions.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        {/* Basic Aspect Ratio */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Image with Aspect Ratio</h3>
          <div className="rounded-lg border">
            <div className="p-6">
              <div className="w-full max-w-[600px]">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="Image"
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={basicAspectRatioCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Video Aspect Ratio */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Video with Aspect Ratio</h3>
          <p className="text-muted-foreground">
            Maintain consistent video dimensions with the <code>ratio</code>{" "}
            prop.
          </p>
          <div className="rounded-lg border">
            <div className="p-6">
              <div className="w-full max-w-[600px]">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full rounded-md"
                  />
                </AspectRatio>
              </div>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={videoAspectRatioCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Map Aspect Ratio */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Map with Aspect Ratio</h3>
          <p className="text-muted-foreground">
            Use a different ratio (4:3) for map embeds.
          </p>
          <div className="rounded-lg border">
            <div className="p-6">
              <div className="w-full max-w-[600px]">
                <AspectRatio ratio={4 / 3}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647534825888!5m2!1sen!2sus"
                    title="Google Maps"
                    className="h-full w-full rounded-md border-0"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={mapAspectRatioCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          API Reference
        </h2>
        <p className="leading-7">
          The AspectRatio component maintains a consistent width-to-height ratio
          for its content.
        </p>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Component</TableHead>
                <TableHead className="w-[200px]">Props</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs">AspectRatio</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">ratio:</span> number
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">children:</span>{" "}
                      React.ReactNode
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  A container component that maintains a specified aspect ratio
                  for its content.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          The AspectRatio component accepts standard HTML attributes in addition
          to the props listed above.
        </p>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage Guidelines
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the AspectRatio
          component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Layout and Structure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>
                  Place AspectRatio components within responsive containers
                </li>
                <li>Use consistent aspect ratios for similar content types</li>
                <li>
                  Consider the viewport size when choosing container widths
                </li>
                <li>Maintain proper spacing around AspectRatio components</li>
                <li>
                  Use in card layouts, hero sections, and galleries for
                  consistency
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use AspectRatio without a defined container width</li>
                <li>
                  Place AspectRatio components directly in flex containers
                  without width constraints
                </li>
                <li>
                  Nest AspectRatio components within other AspectRatio
                  components
                </li>
                <li>
                  Use inconsistent aspect ratios for the same type of content
                </li>
                <li>Overcrowd layouts with too many AspectRatio components</li>
              </ul>
            </div>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8">
            Content Organization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Group similar content with consistent aspect ratios</li>
                <li>
                  Use AspectRatio to create visual harmony in content grids
                </li>
                <li>
                  Pair with appropriate typography and spacing for balanced
                  layouts
                </li>
                <li>Consider content hierarchy when choosing aspect ratios</li>
                <li>Use for featured content that needs visual emphasis</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Mix different aspect ratios in a single content grid</li>
                <li>
                  Use for content where the full height needs to be visible
                </li>
                <li>
                  Apply to text-heavy content that should expand with its
                  content
                </li>
                <li>
                  Use for interactive elements that need flexible dimensions
                </li>
                <li>
                  Force content into inappropriate aspect ratios that cause
                  important details to be cropped
                </li>
              </ul>
            </div>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8">
            Common Ratios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col space-y-2 border rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                <h4 className="text-base font-medium">16:9</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Standard widescreen ratio, ideal for videos and presentations.
              </p>
              <div className="mt-2">
                <AspectRatio
                  ratio={16 / 9}
                  className="bg-muted rounded-md flex items-center justify-center"
                >
                  <p className="text-xs text-muted-foreground">16:9</p>
                </AspectRatio>
              </div>
              <p className="text-xs font-mono mt-2">ratio={"{16 / 9}"}</p>
            </div>
            <div className="flex flex-col space-y-2 border rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Map className="h-5 w-5 text-primary" />
                <h4 className="text-base font-medium">4:3</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Traditional TV and monitor ratio, good for maps and older
                content.
              </p>
              <div className="mt-2">
                <AspectRatio
                  ratio={4 / 3}
                  className="bg-muted rounded-md flex items-center justify-center"
                >
                  <p className="text-xs text-muted-foreground">4:3</p>
                </AspectRatio>
              </div>
              <p className="text-xs font-mono mt-2">ratio={"{4 / 3}"}</p>
            </div>
            <div className="flex flex-col space-y-2 border rounded-lg p-4">
              <div className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-primary" />
                <h4 className="text-base font-medium">1:1</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Square ratio, perfect for profile pictures and thumbnails.
              </p>
              <div className="mt-2">
                <AspectRatio
                  ratio={1 / 1}
                  className="bg-muted rounded-md flex items-center justify-center"
                >
                  <p className="text-xs text-muted-foreground">1:1</p>
                </AspectRatio>
              </div>
              <p className="text-xs font-mono mt-2">ratio={"{1 / 1}"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <p className="leading-7">
          When using the AspectRatio component, ensure your content remains
          accessible to all users.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Alt Text</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Always provide descriptive alt text for images within
                AspectRatio components to ensure screen reader users understand
                the content.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Iframe Titles</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                When using iframes for videos or maps, always include a
                descriptive title attribute for screen reader accessibility.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/50 border-l-4 border-yellow-400 dark:border-yellow-500/50 p-4 rounded-r-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Accessibility Tip
              </h3>
            </div>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              For videos, ensure controls are enabled and consider providing
              captions or transcripts for users who are deaf or hard of hearing.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/layout/accordion">Previous: Accordion Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/layout/card">Next: Card Component</a>
        </Button>
      </div>
    </div>
  );
}
