"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import { cn } from "@/lib/utils";
import {
  Copy,
  Check,
  Info,
  AlertCircle,
  Settings,
  User,
  Mail,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SeparatorPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const basicSeparatorCode = `import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}`;

  const customSeparatorCode = `import { Separator } from "@/components/ui/separator"

export function CustomSeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Account Settings</h4>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <Separator className="my-4 bg-primary/50" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Messages</h4>
        <p className="text-sm text-muted-foreground">
          View and manage your messages.
        </p>
      </div>
      <Separator className="my-4 bg-destructive/50" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Notifications</h4>
        <p className="text-sm text-muted-foreground">
          Configure your notification preferences.
        </p>
      </div>
    </div>
  )
}`;

  const decorativeSeparatorCode = `import { Separator } from "@/components/ui/separator"

export function DecorativeSeparatorDemo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <div className="flex-1">
          <h4 className="text-sm font-medium leading-none">Profile</h4>
        </div>
        <Separator className="mx-2 flex-[0.5]" />
        <User className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="flex items-center">
        <div className="flex-1">
          <h4 className="text-sm font-medium leading-none">Settings</h4>
        </div>
        <Separator className="mx-2 flex-[0.5]" />
        <Settings className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="flex items-center">
        <div className="flex-1">
          <h4 className="text-sm font-medium leading-none">Messages</h4>
        </div>
        <Separator className="mx-2 flex-[0.5]" />
        <Mail className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  )
}`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Separator
        </h1>
        <p className="text-lg text-muted-foreground">
          A visual divider between content areas.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Separator component creates a visual divider between content
          areas. It can be used horizontally or vertically to create clear
          visual separation between UI elements, improving readability and
          organization.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        {/* Basic Separator */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Basic Separator</h3>
          <div className="rounded-lg border">
            <div className="p-6">
              <div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">
                    Radix Primitives
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    An open-source UI component library.
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>Blog</div>
                  <Separator orientation="vertical" />
                  <div>Docs</div>
                  <Separator orientation="vertical" />
                  <div>Source</div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={basicSeparatorCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Custom Styled Separator */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Custom Styled Separator</h3>
          <p className="text-muted-foreground">
            Customize the appearance of separators with different colors.
          </p>
          <div className="rounded-lg border">
            <div className="p-6">
              <div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">
                    Account Settings
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Manage your account settings and preferences.
                  </p>
                </div>
                <Separator className="my-4 bg-primary/50" />
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Messages</h4>
                  <p className="text-sm text-muted-foreground">
                    View and manage your messages.
                  </p>
                </div>
                <Separator className="my-4 bg-destructive/50" />
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">
                    Notifications
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Configure your notification preferences.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={customSeparatorCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Decorative Separator */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Decorative Separator</h3>
          <p className="text-muted-foreground">
            Use separators as decorative elements in your UI.
          </p>
          <div className="rounded-lg border">
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium leading-none">
                      Profile
                    </h4>
                  </div>
                  <Separator className="mx-2 flex-[0.5]" />
                  <User className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium leading-none">
                      Settings
                    </h4>
                  </div>
                  <Separator className="mx-2 flex-[0.5]" />
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium leading-none">
                      Messages
                    </h4>
                  </div>
                  <Separator className="mx-2 flex-[0.5]" />
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={decorativeSeparatorCode}
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
          The Separator component provides a simple way to create visual
          dividers.
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
                <TableCell className="font-mono text-xs">Separator</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">orientation?:</span>{" "}
                      "horizontal" | "vertical"
                    </p>
                    <p>
                      <span className="font-semibold">decorative?:</span>{" "}
                      boolean
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  A visual divider that separates content. The default
                  orientation is horizontal.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          The Separator component accepts standard HTML attributes in addition
          to the props listed above.
        </p>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage Guidelines
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Separator component:
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
                <li>Use consistent spacing before and after separators</li>
                <li>
                  Align vertical separators properly with surrounding content
                </li>
                <li>
                  Use separators to create clear visual hierarchy in your layout
                </li>
                <li>
                  Consider using separators to group related content sections
                </li>
                <li>
                  Ensure separators have sufficient contrast with the background
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Place separators too close to content, making the layout feel
                  cramped
                </li>
                <li>Use separators inconsistently throughout your interface</li>
                <li>
                  Add separators between every element, creating visual noise
                </li>
                <li>Use vertical separators in spaces that are too narrow</li>
                <li>
                  Rely solely on separators for layout structure without proper
                  spacing
                </li>
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
                <li>
                  Use separators to distinguish between different content
                  sections
                </li>
                <li>
                  Apply separators consistently for similar content patterns
                </li>
                <li>
                  Consider using styled separators to indicate content
                  importance
                </li>
                <li>Use horizontal separators for major section breaks</li>
                <li>
                  Use vertical separators for inline content that belongs
                  together
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Use separators between logically connected content that should
                  appear unified
                </li>
                <li>
                  Add separators when whitespace alone would provide sufficient
                  distinction
                </li>
                <li>
                  Use separators with high-contrast colors that draw too much
                  attention
                </li>
                <li>
                  Place separators between items in a single form or input group
                </li>
                <li>
                  Use different separator styles inconsistently for the same
                  content patterns
                </li>
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
          The Separator component is designed with accessibility in mind.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">ARIA Role</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The separator uses the appropriate <code>role="separator"</code>{" "}
                to ensure screen readers understand its purpose.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Decorative Option</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                When used purely for visual styling, you can set{" "}
                <code>decorative={true}</code> to make it invisible to screen
                readers.
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
              When using vertical separators, ensure there's enough spacing
              around them to maintain readability and that they have sufficient
              contrast with the background.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/layout/aspect-ratio">
            Previous: Aspect Ratio Component
          </a>
        </Button>
        <Button asChild>
          <a href="/docs/layout/card">Next: Card Component</a>
        </Button>
      </div>
    </div>
  );
}
