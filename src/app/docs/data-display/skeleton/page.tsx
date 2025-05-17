"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Info,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SkeletonPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Skeleton</h1>
        <p className="text-lg text-muted-foreground">
          Used to show a placeholder while content is loading.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Skeleton component is used to create placeholder loading states that mimic the shape of your content before it loads.
          This helps reduce perceived loading time and prevents layout shifts when content becomes available.
        </p>
        <p className="leading-7">
          Skeletons improve user experience by providing visual feedback during loading states, making the application feel more responsive.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The basic Skeleton component can be used to create simple loading placeholders of any size.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            </div>
            <CodePopover
              code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  )
}`}
              language="tsx"
              buttonLabel="View Code"
              showLineNumbers={true}
            />
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        {/* Card Skeleton */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Card Skeleton
          </h3>
          <p className="leading-7">
            Create a skeleton placeholder for a card component.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-2/5" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                  <Skeleton className="h-32 w-full rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-4 w-3/5" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-10 w-24 rounded-md" />
                    <Skeleton className="h-10 w-24 rounded-md" />
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { Skeleton } from "@/components/ui/skeleton"

export function CardSkeleton() {
  return (
    <div className="border rounded-lg p-4 space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <Skeleton className="h-32 w-full rounded-md" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/5" />
      </div>
      <div className="flex justify-between">
        <Skeleton className="h-10 w-24 rounded-md" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Card Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Content Loading State */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Content Loading State
          </h3>
          <p className="leading-7">
            Toggle between skeleton loading state and actual content.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                {isLoading ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-4 w-[100px]" />
                      </div>
                    </div>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        JD
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Jane Doe</p>
                        <p className="text-sm text-muted-foreground">Product Designer</p>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                )}
                <Button onClick={toggleLoading}>
                  {isLoading ? "Show Content" : "Show Skeleton"}
                </Button>
              </div>
              <CodePopover
                code={`import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ContentLoadingState() {
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div className="space-y-4 w-full max-w-md">
      {isLoading ? (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              JD
            </div>
            <div className="space-y-1">
              <p className="font-medium">Jane Doe</p>
              <p className="text-sm text-muted-foreground">Product Designer</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      )}
      <Button onClick={() => setIsLoading(!isLoading)}>
        {isLoading ? "Show Content" : "Show Skeleton"}
      </Button>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Loading Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Table Skeleton */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Table Skeleton
          </h3>
          <p className="leading-7">
            Create a skeleton placeholder for a table component.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="rounded-md border">
                  <div className="p-4">
                    <div className="flex items-center justify-between pb-4">
                      <Skeleton className="h-5 w-[150px]" />
                      <Skeleton className="h-8 w-[100px] rounded-md" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-[100px]" />
                        <Skeleton className="h-4 w-[100px]" />
                        <Skeleton className="h-4 w-[100px]" />
                      </div>
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex justify-between">
                          <Skeleton className="h-4 w-[100px]" />
                          <Skeleton className="h-4 w-[100px]" />
                          <Skeleton className="h-4 w-[100px]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { Skeleton } from "@/components/ui/skeleton"

export function TableSkeleton() {
  return (
    <div className="rounded-md border">
      <div className="p-4">
        <div className="flex items-center justify-between pb-4">
          <Skeleton className="h-5 w-[150px]" />
          <Skeleton className="h-8 w-[100px] rounded-md" />
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Table Example"
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
          The Skeleton component accepts the following props:
        </p>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Prop</TableHead>
                <TableHead className="w-[200px]">Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs">className</TableCell>
                <TableCell className="font-mono text-xs">
                  string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the skeleton element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">as</TableCell>
                <TableCell className="font-mono text-xs">
                  React.ElementType
                </TableCell>
                <TableCell>
                  The element type to render the skeleton as. Defaults to "div".
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Best Practices
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Skeleton component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Recommendations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Match skeleton shapes and sizes to the actual content they represent</li>
                <li>Use skeletons for content that takes more than 300ms to load</li>
                <li>Group related skeleton elements to match your content structure</li>
                <li>Use rounded corners for elements that will have rounded corners</li>
                <li>Keep skeleton designs simple and abstract</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use skeletons for content that loads very quickly (under 300ms)</li>
                <li>Create skeletons that are too detailed or complex</li>
                <li>Use skeletons that don't match the size of the actual content</li>
                <li>Forget to handle the transition between skeleton and actual content</li>
                <li>Use skeletons for small UI elements like icons or buttons</li>
              </ul>
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
          The Skeleton component is designed with accessibility in mind:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">ARIA Attributes</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The Skeleton component uses <code>aria-hidden="true"</code> to hide it from screen readers, as it represents visual-only loading states.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Loading State Announcements</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              When using skeletons, it's important to also provide a text-based loading indicator for screen reader users, such as "Loading content..." with <code>aria-live="polite"</code>.
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/50 border-l-4 border-yellow-400 dark:border-yellow-500/50 p-4 rounded-r-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Accessibility Tip
              </h3>
            </div>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Always provide a text-based loading indicator alongside skeleton loaders. This ensures that screen reader users are aware that content is loading. Use <code>aria-live="polite"</code> to announce when content has finished loading.
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Advanced Usage
        </h2>
        <p className="leading-7">
          Here are some advanced patterns for using the Skeleton component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Animation
          </h3>
          <p className="leading-7">
            Customize the skeleton animation with CSS:
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to create a custom pulse animation for skeletons.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import "./custom-skeleton.css" // Create this CSS file with your custom animations

export function CustomAnimatedSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className={cn(
        "h-4 w-[250px]",
        "custom-skeleton-animation" // Your custom animation class
      )} />
      <Skeleton className={cn(
        "h-4 w-[200px]",
        "custom-skeleton-animation"
      )} />
      <Skeleton className={cn(
        "h-4 w-[150px]",
        "custom-skeleton-animation"
      )} />
    </div>
  )
}

// In custom-skeleton.css:
/*
.custom-skeleton-animation {
  background: linear-gradient(90deg, 
    var(--skeleton-start-color) 0%, 
    var(--skeleton-end-color) 50%, 
    var(--skeleton-start-color) 100%);
  background-size: 200% 100%;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

@keyframes skeleton-pulse {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -200% 0%;
  }
}
*/`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/data-display/progress">Previous: Progress Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/data-display/tabs">Next: Tabs Component</a>
        </Button>
      </div>
    </div>
  );
}