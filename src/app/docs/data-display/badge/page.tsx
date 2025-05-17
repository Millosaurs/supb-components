"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Info,
  AlertCircle,
  Bell,
  Clock,
  ShieldCheck,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function BadgePage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Badge</h1>
        <p className="text-lg text-muted-foreground">
          A small visual indicator used to highlight an item, status, or category.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Badge component is used to highlight and categorize items, display counts, or indicate status.
          Badges are small, distinctive visual elements that draw attention to specific information.
        </p>
        <p className="leading-7">
          Our Badge component is designed to be flexible and customizable, with various variants to suit different UI needs.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The default Badge component provides a simple, visually distinct element for highlighting information.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4">
              <Badge>Badge</Badge>
            </div>
            <CodePopover
              code={`import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
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

        {/* Variants */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Variants
          </h3>
          <p className="leading-7">
            The Badge component comes with different variants to represent different states or importance levels.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
              <CodePopover
                code={`import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Variants"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* With Icons */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Icons
          </h3>
          <p className="leading-7">
            Add icons to badges to provide additional visual context.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="gap-1">
                    <Bell className="h-3 w-3" />
                    Notifications
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Clock className="h-3 w-3" />
                    Pending
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    Secure
                  </Badge>
                  <Badge variant="destructive" className="gap-1">
                    <X className="h-3 w-3" />
                    Rejected
                  </Badge>
                </div>
              </div>
              <CodePopover
                code={`import { Badge } from "@/components/ui/badge"
import { Bell, Clock, ShieldCheck, X } from "lucide-react"

export function BadgeWithIcons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="gap-1">
        <Bell className="h-3 w-3" />
        Notifications
      </Badge>
      <Badge variant="secondary" className="gap-1">
        <Clock className="h-3 w-3" />
        Pending
      </Badge>
      <Badge variant="outline" className="gap-1">
        <ShieldCheck className="h-3 w-3" />
        Secure
      </Badge>
      <Badge variant="destructive" className="gap-1">
        <X className="h-3 w-3" />
        Rejected
      </Badge>
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
            As Link
          </h3>
          <p className="leading-7">
            Badges can be used as links by using the <code>asChild</code> prop with a Link component.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge asChild>
                    <a href="#" onClick={(e) => e.preventDefault()}>Link Badge</a>
                  </Badge>
                </div>
              </div>
              <CodePopover
                code={`import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function BadgeAsLink() {
  return (
    <Badge asChild>
      <Link href="/categories/new">New Category</Link>
    </Badge>
  )
}`}
                language="tsx"
                buttonLabel="View Link Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Custom Styling */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Styling
          </h3>
          <p className="leading-7">
            Customize the appearance of badges with additional CSS classes.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500 hover:bg-blue-600">Custom Blue</Badge>
                  <Badge className="bg-amber-500 hover:bg-amber-600">Custom Amber</Badge>
                  <Badge className="bg-emerald-500 hover:bg-emerald-600">Custom Green</Badge>
                  <Badge className="border-2 border-purple-500 bg-transparent text-purple-500 hover:bg-purple-500 hover:text-white">
                    Outline Custom
                  </Badge>
                </div>
              </div>
              <CodePopover
                code={`import { Badge } from "@/components/ui/badge"

export function CustomBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-blue-500 hover:bg-blue-600">Custom Blue</Badge>
      <Badge className="bg-amber-500 hover:bg-amber-600">Custom Amber</Badge>
      <Badge className="bg-emerald-500 hover:bg-emerald-600">Custom Green</Badge>
      <Badge className="border-2 border-purple-500 bg-transparent text-purple-500 hover:bg-purple-500 hover:text-white">
        Outline Custom
      </Badge>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Custom Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Notification Badges */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Notification Badges
          </h3>
          <p className="leading-7">
            Use badges to display notification counts or status indicators.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Button variant="outline" size="icon">
                      <Bell className="h-4 w-4" />
                    </Button>
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">
                      5
                    </Badge>
                  </div>
                  <div className="relative">
                    <Button variant="outline">
                      Inbox
                      <Badge className="ml-2" variant="secondary">
                        12
                      </Badge>
                    </Button>
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

export function NotificationBadges() {
  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">
          5
        </Badge>
      </div>
      <div className="relative">
        <Button variant="outline">
          Inbox
          <Badge className="ml-2" variant="secondary">
            12
          </Badge>
        </Button>
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Notification Example"
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
          The Badge component accepts the following props:
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
                <TableCell className="font-mono text-xs">variant</TableCell>
                <TableCell className="font-mono text-xs">
                  "default" | "secondary" | "outline" | "destructive"
                </TableCell>
                <TableCell>
                  The visual style of the badge. Defaults to "default".
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">className</TableCell>
                <TableCell className="font-mono text-xs">string</TableCell>
                <TableCell>
                  Additional CSS classes to apply to the badge.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">asChild</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell>
                  Change the default rendered element for the one passed as a child, merging their props and behavior.
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
          Follow these guidelines for effective use of the Badge component:
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
                <li>Keep badge text short and concise</li>
                <li>Use appropriate variants to convey meaning</li>
                <li>Use badges sparingly to avoid visual clutter</li>
                <li>Ensure sufficient color contrast for accessibility</li>
                <li>Use consistent badge styles throughout your application</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use badges for primary content or long text</li>
                <li>Overuse badges which can lead to visual noise</li>
                <li>Use too many different badge styles in one view</li>
                <li>Place badges where they might be confused with buttons</li>
                <li>Use badges without clear meaning or context</li>
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
          The Badge component follows accessibility best practices:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Color Contrast</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Ensure that badge colors have sufficient contrast against their background for readability.
              This is especially important for badges with text content.
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
              When using badges to convey important information, don't rely solely on color to communicate meaning.
              Include text or icons to ensure the information is accessible to users with color vision deficiencies.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/data-display/avatar">Previous: Avatar Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/data-display/calendar">Next: Calendar Component</a>
        </Button>
      </div>
    </div>
  );
}