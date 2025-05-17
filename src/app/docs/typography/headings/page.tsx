"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Copy,
  Check,
  Info,
  AlertCircle,
  Type,
  List,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeadingsPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Headings
        </h1>
        <p className="text-lg text-muted-foreground">
          Typography styles for headings to establish visual hierarchy and
          structure in your UI.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Headings help users scan content and understand the structure of a
          page. They establish information hierarchy and provide visual breaks
          in content to improve readability.
        </p>
        <p className="leading-7">
          Our typography styles use Tailwind CSS classes to provide consistent
          heading styles that scale appropriately across different screen sizes
          and maintain proper spacing.
        </p>
      </div>

      {/* Basic Examples */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>
        <p className="leading-7">
          Below are examples of the different heading levels (h1-h6) with their
          respective styles.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 space-y-6">
            <div className="space-y-3">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Heading 1
              </h1>
              <div className="text-sm text-muted-foreground">
                text-4xl font-extrabold tracking-tight lg:text-5xl
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Heading 2
              </h2>
              <div className="text-sm text-muted-foreground">
                text-3xl font-semibold tracking-tight border-b pb-2
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Heading 3
              </h3>
              <div className="text-sm text-muted-foreground">
                text-2xl font-semibold tracking-tight
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Heading 4
              </h4>
              <div className="text-sm text-muted-foreground">
                text-xl font-semibold tracking-tight
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Heading 5
              </h5>
              <div className="text-sm text-muted-foreground">
                text-lg font-semibold tracking-tight
              </div>
            </div>

            <div className="space-y-3">
              <h6 className="scroll-m-20 text-base font-semibold tracking-tight">
                Heading 6
              </h6>
              <div className="text-sm text-muted-foreground">
                text-base font-semibold tracking-tight
              </div>
            </div>
          </div>

          <Separator />

          <div className="p-4 bg-muted/50">
            <div className="relative">
              <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                <code>{`// Heading 1
<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
  Heading 1
</h1>

// Heading 2
<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
  Heading 2
</h2>

// Heading 3
<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
  Heading 3
</h3>

// Heading 4
<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
  Heading 4
</h4>

// Heading 5
<h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
  Heading 5
</h5>

// Heading 6
<h6 className="scroll-m-20 text-base font-semibold tracking-tight">
  Heading 6
</h6>`}</code>
              </pre>
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                onClick={() =>
                  copyToClipboard(
                    `// Heading 1
<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
  Heading 1
</h1>

// Heading 2
<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
  Heading 2
</h2>

// Heading 3
<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
  Heading 3
</h3>

// Heading 4
<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
  Heading 4
</h4>

// Heading 5
<h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
  Heading 5
</h5>

// Heading 6
<h6 className="scroll-m-20 text-base font-semibold tracking-tight">
  Heading 6
</h6>`,
                    "headings-basic"
                  )
                }
              >
                {copied["headings-basic"] ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Heading Variants
        </h2>
        <p className="leading-7">
          Different heading styles can be used depending on the context and
          design requirements.
        </p>

        <div className="space-y-8">
          {/* Variant 1: Large Display Heading */}
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Large Display Heading
            </h3>
            <p className="leading-7">
              For hero sections or major page headers that need significant
              visual impact.
            </p>

            <div className="rounded-lg border">
              <div className="p-6">
                <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
                  Display Heading
                </h1>
              </div>

              <Separator />

              <div className="p-4 bg-muted/50">
                <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                  <code>{`<h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
  Display Heading
</h1>`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Variant 2: Section Heading with Underline */}
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Section Heading with Underline
            </h3>
            <p className="leading-7">
              Useful for major sections where a visual separator helps with
              content organization.
            </p>

            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  Section Heading
                </h2>
              </div>

              <Separator />

              <div className="p-4 bg-muted/50">
                <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                  <code>{`<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
  Section Heading
</h2>`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Variant 3: Subtle Heading */}
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Subtle Heading
            </h3>
            <p className="leading-7">
              Less prominent heading for subsections or areas where visual
              weight needs to be reduced.
            </p>

            <div className="rounded-lg border">
              <div className="p-6">
                <h3 className="scroll-m-20 text-xl font-medium tracking-tight text-muted-foreground">
                  Subtle Heading
                </h3>
              </div>

              <Separator />

              <div className="p-4 bg-muted/50">
                <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                  <code>{`<h3 className="scroll-m-20 text-xl font-medium tracking-tight text-muted-foreground">
  Subtle Heading
</h3>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage Guidelines
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective heading usage in your interface:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Heading Hierarchy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Maintain a logical heading hierarchy (h1 → h2 → h3...)</li>
                <li>Use only one h1 per page for the main page title</li>
                <li>
                  Ensure headings accurately describe the content that follows
                </li>
                <li>Keep headings concise and descriptive</li>
                <li>
                  Use sentence case for headings (capitalize first word only)
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Skip heading levels (e.g., jumping from h1 to h3)</li>
                <li>Use headings for styling purposes only</li>
                <li>Make headings too long or complex</li>
                <li>Use all caps for entire headings</li>
                <li>
                  Create headings that don't accurately reflect the content
                </li>
              </ul>
            </div>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8">
            Visual Spacing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Use consistent spacing between headings and content</li>
                <li>Maintain sufficient whitespace around headings</li>
                <li>Ensure headings are visually distinct from body text</li>
                <li>Use proper line-height for readability</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Crowd headings with insufficient spacing</li>
                <li>
                  Use inconsistent spacing patterns across similar sections
                </li>
                <li>Create headings that are too similar to body text</li>
                <li>Use decorative fonts that reduce readability</li>
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
          Proper heading structure is crucial for accessibility, particularly
          for users of screen readers.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Semantic Structure</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Use heading elements (h1-h6) semantically to create a proper
                document outline rather than styling text to look like headings.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Logical Hierarchy</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Maintain a logical heading hierarchy that reflects the document
                structure, allowing screen reader users to navigate content
                effectively.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Descriptive Text</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Write headings that clearly describe the content that follows,
                helping all users understand the page structure.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Scroll Margin</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The <code className="text-xs font-mono">scroll-m-20</code>{" "}
                utility adds margin to headings when they're targeted by anchor
                links, ensuring they're not hidden under fixed headers.
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
              When users navigate with screen readers, headings are one of the
              primary ways they understand page structure. Use the{" "}
              <span className="font-mono text-xs">role="heading"</span> and{" "}
              <span className="font-mono text-xs">aria-level</span> attributes
              if you need to create a visual heading that doesn't fit the
              semantic document structure.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs">Back to Documentation</a>
        </Button>
        <Button asChild>
          <a href="/docs/typography/text">Next: Text Typography</a>
        </Button>
      </div>
    </div>
  );
}
