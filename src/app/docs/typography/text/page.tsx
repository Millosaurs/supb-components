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
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TextPage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Text</h1>
        <p className="text-lg text-muted-foreground">
          Typography styles for text elements to create clear, readable, and
          visually appealing content.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Text styles provide consistent typography for paragraphs, lead text,
          and other text elements in your interface. Properly styled text
          improves readability, establishes hierarchy, and enhances the overall
          user experience.
        </p>
        <p className="leading-7">
          Our text styles use Tailwind CSS classes to provide consistent
          typography that scales appropriately across different screen sizes
          while maintaining readability and visual appeal.
        </p>
      </div>

      {/* Basic Examples */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>
        <p className="leading-7">
          Below are examples of different text styles available in the component
          library.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 space-y-6">
            {/* Default Paragraph */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Default Paragraph</h3>
              <p className="leading-7">
                This is a standard paragraph with default styling. It uses
                appropriate line height and spacing to ensure readability across
                different screen sizes. The text is set in the default font with
                a comfortable reading size.
              </p>
              <div className="text-sm text-muted-foreground">leading-7</div>
            </div>

            {/* Lead Text */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Lead Text</h3>
              <p className="text-xl text-muted-foreground">
                Lead text is larger and often used for introductory paragraphs
                or to emphasize important content. It creates visual hierarchy
                and guides the user's attention.
              </p>
              <div className="text-sm text-muted-foreground">
                text-xl text-muted-foreground
              </div>
            </div>

            {/* Small Text */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Small Text</h3>
              <p className="text-sm text-muted-foreground">
                Small text is useful for captions, footnotes, or less important
                information. It's set at a smaller size but still maintains
                readability with proper line height.
              </p>
              <div className="text-sm text-muted-foreground">
                text-sm text-muted-foreground
              </div>
            </div>

            {/* Large Text */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Large Text</h3>
              <p className="text-lg">
                Large text can be used for important paragraphs or when you need
                to increase visibility without using headings. It maintains
                readability while providing emphasis.
              </p>
              <div className="text-sm text-muted-foreground">text-lg</div>
            </div>

            {/* Muted Text */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Muted Text</h3>
              <p className="text-muted-foreground">
                Muted text reduces visual prominence for secondary information.
                It's useful for supporting content that shouldn't compete with
                primary content for attention.
              </p>
              <div className="text-sm text-muted-foreground">
                text-muted-foreground
              </div>
            </div>
          </div>

          <Separator />

          <div className="p-4 bg-muted/50">
            <div className="relative">
              <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                <code>{`// Default paragraph
<p className="leading-7">
  This is a standard paragraph with default styling. It uses appropriate line height and spacing 
  to ensure readability across different screen sizes.
</p>

// Lead text
<p className="text-xl text-muted-foreground">
  Lead text is larger and often used for introductory paragraphs or to emphasize important content.
</p>

// Small text
<p className="text-sm text-muted-foreground">
  Small text is useful for captions, footnotes, or less important information.
</p>

// Large text
<p className="text-lg">
  Large text can be used for important paragraphs or when you need to increase visibility 
  without using headings.
</p>

// Muted text
<p className="text-muted-foreground">
  Muted text reduces visual prominence for secondary information.
</p>`}</code>
              </pre>
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                onClick={() =>
                  copyToClipboard(
                    `// Default paragraph
<p className="leading-7">
  This is a standard paragraph with default styling. It uses appropriate line height and spacing 
  to ensure readability across different screen sizes.
</p>

// Lead text
<p className="text-xl text-muted-foreground">
  Lead text is larger and often used for introductory paragraphs or to emphasize important content.
</p>

// Small text
<p className="text-sm text-muted-foreground">
  Small text is useful for captions, footnotes, or less important information.
</p>

// Large text
<p className="text-lg">
  Large text can be used for important paragraphs or when you need to increase visibility 
  without using headings.
</p>

// Muted text
<p className="text-muted-foreground">
  Muted text reduces visual prominence for secondary information.
</p>`,
                    "text-basic"
                  )
                }
              >
                {copied["text-basic"] ? (
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
          Text Variants
        </h2>
        <p className="leading-7">
          Different text styles can be applied to create visual variety and
          hierarchy in your content.
        </p>

        <div className="space-y-8">
          {/* Text Weights */}
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Text Weights
            </h3>
            <p className="leading-7">
              Different font weights can be used to create emphasis and
              hierarchy within your text.
            </p>

            <div className="rounded-lg border">
              <div className="p-6 space-y-4">
                <p className="font-light">This text uses font-light weight.</p>
                <p className="font-normal">
                  This text uses font-normal weight (default).
                </p>
                <p className="font-medium">
                  This text uses font-medium weight.
                </p>
                <p className="font-semibold">
                  This text uses font-semibold weight.
                </p>
                <p className="font-bold">This text uses font-bold weight.</p>
                <p className="font-extrabold">
                  This text uses font-extrabold weight.
                </p>
              </div>

              <Separator />

              <div className="p-4 bg-muted/50">
                <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                  <code>{`<p className="font-light">This text uses font-light weight.</p>
<p className="font-normal">This text uses font-normal weight (default).</p>
<p className="font-medium">This text uses font-medium weight.</p>
<p className="font-semibold">This text uses font-semibold weight.</p>
<p className="font-bold">This text uses font-bold weight.</p>
<p className="font-extrabold">This text uses font-extrabold weight.</p>`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Text Alignment */}
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Text Alignment
            </h3>
            <p className="leading-7">
              Text can be aligned differently depending on your design needs and
              content structure.
            </p>

            <div className="rounded-lg border">
              <div className="p-6 space-y-4">
                <p className="text-left">
                  This paragraph is left-aligned (default). Left alignment is
                  the most common alignment for body text in left-to-right
                  languages, as it provides a consistent starting point for each
                  line.
                </p>
                <p className="text-center">
                  This paragraph is center-aligned. Center alignment works well
                  for short pieces of text like headings, quotes, or other
                  elements that need to stand out.
                </p>
                <p className="text-right">
                  This paragraph is right-aligned. Right alignment is less
                  common for body text but can be useful in specific design
                  contexts or for elements like timestamps.
                </p>
                <p className="text-justify">
                  This paragraph is justified. Justified text aligns to both the
                  left and right margins, creating a clean edge on both sides.
                  It works well for multicolumn layouts but can create uneven
                  spacing between words.
                </p>
              </div>

              <Separator />

              <div className="p-4 bg-muted/50">
                <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                  <code>{`<p className="text-left">This paragraph is left-aligned (default).</p>
<p className="text-center">This paragraph is center-aligned.</p>
<p className="text-right">This paragraph is right-aligned.</p>
<p className="text-justify">This paragraph is justified.</p>`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Text Decoration and Style */}
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Text Decoration and Style
            </h3>
            <p className="leading-7">
              Various decorations and styles can be applied to text for emphasis
              or special formatting.
            </p>

            <div className="rounded-lg border">
              <div className="p-6 space-y-4">
                <p className="italic">This text is italicized for emphasis.</p>
                <p className="underline">This text is underlined.</p>
                <p className="underline decoration-dashed">
                  This text has a dashed underline.
                </p>
                <p className="underline decoration-dotted">
                  This text has a dotted underline.
                </p>
                <p className="underline decoration-wavy">
                  This text has a wavy underline.
                </p>
                <p className="line-through">This text has a strikethrough.</p>
              </div>

              <Separator />

              <div className="p-4 bg-muted/50">
                <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                  <code>{`<p className="italic">This text is italicized for emphasis.</p>
<p className="underline">This text is underlined.</p>
<p className="underline decoration-dashed">This text has a dashed underline.</p>
<p className="underline decoration-dotted">This text has a dotted underline.</p>
<p className="underline decoration-wavy">This text has a wavy underline.</p>
<p className="line-through">This text has a strikethrough.</p>`}</code>
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
          Follow these guidelines for effective text usage in your interface:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Readability
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>
                  Maintain sufficient contrast between text and background
                </li>
                <li>
                  Use appropriate line height for readability (leading-7 for
                  paragraphs)
                </li>
                <li>
                  Keep line length moderate (65-75 characters per line is ideal)
                </li>
                <li>
                  Use consistent font sizes and weights throughout your
                  application
                </li>
                <li>
                  Break long text into smaller paragraphs for easier scanning
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Use very small text sizes (below 14px) for important content
                </li>
                <li>
                  Mix too many font styles, weights, or sizes in a single view
                </li>
                <li>Create extremely long paragraphs without breaks</li>
                <li>Use low contrast between text and background colors</li>
                <li>
                  Overuse decorative styles (italic, underline, etc.) in body
                  text
                </li>
              </ul>
            </div>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8">
            Content Structure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>
                  Use lead text for introductory paragraphs to establish context
                </li>
                <li>Use text hierarchy to guide users through content</li>
                <li>
                  Reserve bold and semibold text for emphasis on key points
                </li>
                <li>Use muted text for supporting information</li>
                <li>
                  Ensure text alignment aligns with reading direction (left for
                  LTR languages)
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Use justified text for narrow columns (can create "rivers" of
                  whitespace)
                </li>
                <li>
                  Center-align large blocks of text (harder to read than
                  left-aligned)
                </li>
                <li>Use all caps for large sections of text</li>
                <li>
                  Overuse emphasis (bold, italic, underline) which can reduce
                  its effectiveness
                </li>
                <li>Use decorative or script fonts for body text</li>
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
          Accessible text is essential for ensuring your content can be read and
          understood by everyone, including users with visual impairments or
          reading disabilities.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Color Contrast</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Ensure sufficient contrast between text and background colors.
                WCAG 2.1 AA requires a contrast ratio of at least 4.5:1 for
                normal text and 3:1 for large text.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Font Size</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Use appropriate font sizes. Body text should generally be at
                least 16px (1rem). Avoid using font sizes below 12px (0.75rem)
                for any essential content.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Line Height</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Use adequate line height (leading). WCAG recommends line spacing
                of at least 1.5 times the font size for body text to improve
                readability, especially for users with dyslexia.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Text Styles</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Don't rely solely on color, font style, or text decoration to
                convey meaning. Always provide additional context or labels for
                screen reader users.
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
              When using justified text, be aware that it can create uneven
              spacing between words that may be difficult for people with
              dyslexia or other reading disabilities. Consider using
              left-aligned text instead for better readability.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Typography */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Responsive Typography
        </h2>
        <p className="leading-7">
          Tailwind CSS makes it easy to create responsive typography that adapts
          to different screen sizes.
        </p>

        <div className="rounded-lg border">
          <div className="p-6">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              This text changes size based on the viewport width.
            </p>
          </div>

          <Separator />

          <div className="p-4 bg-muted/50">
            <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
              <code>{`<p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
  This text changes size based on the viewport width.
</p>`}</code>
            </pre>
          </div>
        </div>

        <p className="leading-7">
          Using responsive text sizing ensures that your content remains
          readable across all device sizes, from mobile phones to desktop
          monitors.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/typography/headings">Previous: Headings</a>
        </Button>
        <Button asChild>
          <a href="/docs/layout/accordion">Next: Accordion Component</a>
        </Button>
      </div>
    </div>
  );
}
