"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
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
  Copy,
  Check,
  ChevronRight,
  Github,
  Loader2,
  Plus,
  Mail,
  Info,
  AlertCircle,
  Share,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ButtonPage() {
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
          Button
        </h1>
        <p className="text-lg text-muted-foreground">
          A versatile interactive element that triggers actions and navigates
          users through an interface.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Button component is a fundamental UI element used to help users
          perform actions and make choices. Buttons communicate actions that
          users can take and typically appear in forms, dialogs, and toolbars.
        </p>
        <p className="leading-7">
          Our Button component is built with accessibility in mind and follows
          WAI-ARIA best practices. It supports keyboard navigation, focus
          states, and can be rendered as different HTML elements.
        </p>
      </div>

      {/* Variants */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Variants
        </h2>
        <p className="leading-7">
          Button comes in different variants to help communicate purpose and
          hierarchy.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <CodePopover
              code={`import { Button } from "@/components/ui/button"

export default function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
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

      {/* Sizes */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Sizes
        </h2>
        <p className="leading-7">
          Buttons are available in different sizes to accommodate various UI
          needs.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-wrap gap-4 items-end">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <CodePopover
              code={`import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon"><Plus className="h-4 w-4" /></Button>
    </div>
  )
}`}
              language="tsx"
              buttonLabel="View Size Examples"
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

        {/* Loading button */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Loading State
          </h3>
          <p className="leading-7">
            You can add a loading spinner to buttons to indicate processing.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-wrap gap-4">
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
                <Button variant="outline" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </Button>
              </div>
              <CodePopover
                code={`import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function ButtonLoading() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button variant="outline" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Loading Button Code"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* With icons */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Icons
          </h3>
          <p className="leading-7">
            Enhance your buttons with icons for better visual communication.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Button>
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" /> Login with GitHub
                </Button>
                <Button variant="secondary">
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
              <CodePopover
                code={`import { Button } from "@/components/ui/button"
import { ChevronRight, Github, Mail, Share } from "lucide-react"

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button variant="outline">
        <Github className="mr-2 h-4 w-4" /> Login with GitHub
      </Button>
      <Button variant="secondary">
        Next <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Share className="h-4 w-4" />
      </Button>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Icons Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* As Link */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Using with Links
          </h3>
          <p className="leading-7">
            The Button component can be used as an anchor (&lt;a&gt;) element by
            using the asChild prop with a Link component.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a href="#">External Link</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#">Documentation</a>
                </Button>
              </div>
              <CodePopover
                code={`import { Button } from "@/components/ui/button"

// For Next.js app router, use with Link component
import Link from "next/link"

export function ButtonAsLink() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
      <Button variant="outline" asChild>
        <a href="https://example.com">External Link</a>
      </Button>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Icons Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Props/API */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          API Reference
        </h2>
        <p className="leading-7">
          The Button component accepts the following props:
        </p>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Prop</TableHead>
                <TableHead className="w-[200px]">Type</TableHead>
                <TableHead className="w-[200px]">Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs">variant</TableCell>
                <TableCell className="font-mono text-xs">
                  'default' | 'destructive' | 'outline' | 'secondary' | 'ghost'
                  | 'link'
                </TableCell>
                <TableCell className="font-mono text-xs">'default'</TableCell>
                <TableCell>The visual variant of the button.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">size</TableCell>
                <TableCell className="font-mono text-xs">
                  'default' | 'sm' | 'lg' | 'icon'
                </TableCell>
                <TableCell className="font-mono text-xs">'default'</TableCell>
                <TableCell>The size of the button.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">asChild</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell className="font-mono text-xs">false</TableCell>
                <TableCell>
                  When true, the button will render its children directly
                  without wrapping them. Useful for applying button styles to
                  other elements like links.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">className</TableCell>
                <TableCell className="font-mono text-xs">string</TableCell>
                <TableCell className="font-mono text-xs">undefined</TableCell>
                <TableCell>
                  Additional CSS classes to add to the button.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">disabled</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell className="font-mono text-xs">false</TableCell>
                <TableCell>When true, the button will be disabled.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          The Button component also accepts all the props of the HTML button
          element.
        </p>
      </div>

      {/* Accessibility */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <p className="leading-7">
          The Button component follows WAI-ARIA guidelines to ensure accessible
          implementation:
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Buttons are natively focusable and can be activated using the
                keyboard (Space or Enter).
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Proper Roles</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The component uses the native button element, which provides the
                appropriate ARIA role by default.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Focus States</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Clearly visible focus states are provided for keyboard
                navigation.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Disabled States</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                When disabled, the button communicates its unavailable state to
                assistive technologies.
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
              When using icon-only buttons, always provide a descriptive label
              either visually or using aria-label to ensure users of assistive
              technologies understand the button's purpose.
            </p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Best Practices
        </h2>
        <p className="leading-7">
          Follow these guidelines to ensure effective use of the Button
          component:
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Use Appropriate Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>
                  Use the <span className="font-mono">default</span> variant for
                  primary actions
                </li>
                <li>
                  Use the <span className="font-mono">destructive</span> variant
                  for potentially destructive actions
                </li>
                <li>
                  Use the <span className="font-mono">secondary</span> or{" "}
                  <span className="font-mono">outline</span> variants for
                  secondary actions
                </li>
                <li>
                  Use the <span className="font-mono">ghost</span> variant for
                  tertiary actions or in toolbars
                </li>
                <li>
                  Use the <span className="font-mono">link</span> variant for
                  navigation links that visually appear as buttons
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use multiple primary buttons in a single view</li>
                <li>
                  Use the <span className="font-mono">destructive</span> variant
                  for non-destructive actions
                </li>
                <li>Mix too many button variants in a single area</li>
                <li>
                  Use buttons when a simple link would be more appropriate
                </li>
                <li>Place buttons without sufficient spacing between them</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8">Labeling</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Use clear, concise, action-oriented labels</li>
                <li>
                  Use verbs to indicate actions (e.g., "Save," "Delete,"
                  "Submit")
                </li>
                <li>
                  Be specific about the action (e.g., "Save Draft" vs "Publish")
                </li>
                <li>Add aria-label for icon-only buttons</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Use vague or generic labels (e.g., "Click Here," "Button")
                </li>
                <li>Use the same label for different actions</li>
                <li>Use lengthy button text that can get truncated</li>
                <li>Omit accessible labels for icon-only buttons</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8">Placement</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>
                  Place primary actions on the right in left-to-right languages
                  (RTL aware)
                </li>
                <li>Group related actions together with consistent spacing</li>
                <li>
                  Maintain a visual hierarchy corresponding to the importance of
                  actions
                </li>
                <li>
                  Follow a consistent button placement pattern across your
                  application
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Place too many buttons in a single view without clear
                  hierarchy
                </li>
                <li>
                  Position buttons inconsistently across different screens
                </li>
                <li>
                  Place opposing actions like "Save" and "Delete" next to each
                  other
                </li>
                <li>
                  Use button positioning that could lead to accidental clicks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs">Back to Documentation</a>
        </Button>
        <Button asChild>
          <a href="/docs/forms/input">Next: Input Component</a>
        </Button>
      </div>
    </div>
  );
}
