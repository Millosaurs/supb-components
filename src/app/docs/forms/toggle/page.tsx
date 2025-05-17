"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
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
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TogglePage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Toggle</h1>
        <p className="text-lg text-muted-foreground">
          A two-state button that can be either on or off.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Toggle component is a two-state button that can be either on or off. It's commonly used for enabling or disabling options, 
          showing or hiding UI elements, or toggling between two states.
        </p>
        <p className="leading-7">
          Our Toggle component is built with Radix UI primitives and follows WAI-ARIA best practices.
          It supports keyboard navigation, focus management, and screen reader announcements.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The default Toggle component provides a simple, accessible toggle button.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Toggle aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
            </div>
            <CodePopover
              code={`import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
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

        {/* With Text */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Text
          </h3>
          <p className="leading-7">
            Toggle with text for better clarity.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Toggle>
                  <Bold className="mr-2 h-4 w-4" />
                  Bold
                </Toggle>
              </div>
              <CodePopover
                code={`import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

export function ToggleWithText() {
  return (
    <Toggle>
      <Bold className="mr-2 h-4 w-4" />
      Bold
    </Toggle>
  )
}`}
                language="tsx"
                buttonLabel="View Text Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Toggle Group */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Toggle Group
          </h3>
          <p className="leading-7">
            Group multiple toggles together for related options.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex items-center space-x-2">
                  <Toggle aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Toggle underline">
                    <Underline className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>
              <CodePopover
                code={`import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

export function ToggleGroup() {
  return (
    <div className="flex items-center space-x-2">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Group Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Disabled State */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Disabled State
          </h3>
          <p className="leading-7">
            Toggle can be disabled to prevent user interaction.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex items-center space-x-2">
                  <Toggle>
                    <Bold className="mr-2 h-4 w-4" />
                    Enabled
                  </Toggle>
                  <Toggle disabled>
                    <Bold className="mr-2 h-4 w-4" />
                    Disabled
                  </Toggle>
                </div>
              </div>
              <CodePopover
                code={`import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

export function DisabledToggle() {
  return (
    <div className="flex items-center space-x-2">
      <Toggle>
        <Bold className="mr-2 h-4 w-4" />
        Enabled
      </Toggle>
      <Toggle disabled>
        <Bold className="mr-2 h-4 w-4" />
        Disabled
      </Toggle>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Disabled Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Variants
          </h3>
          <p className="leading-7">
            Toggle comes with different variants to match your design needs.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex flex-col space-y-4">
                  <Toggle variant="default">
                    <Bold className="mr-2 h-4 w-4" />
                    Default
                  </Toggle>
                  <Toggle variant="outline">
                    <Italic className="mr-2 h-4 w-4" />
                    Outline
                  </Toggle>
                </div>
              </div>
              <CodePopover
                code={`import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic } from "lucide-react"

export function ToggleVariants() {
  return (
    <div className="flex flex-col space-y-4">
      <Toggle variant="default">
        <Bold className="mr-2 h-4 w-4" />
        Default
      </Toggle>
      <Toggle variant="outline">
        <Italic className="mr-2 h-4 w-4" />
        Outline
      </Toggle>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Variants Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Sizes
          </h3>
          <p className="leading-7">
            Toggle comes in different sizes to fit your UI needs.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex flex-col space-y-4">
                  <Toggle size="sm">
                    <Bold className="mr-2 h-3 w-3" />
                    Small
                  </Toggle>
                  <Toggle size="default">
                    <Bold className="mr-2 h-4 w-4" />
                    Default
                  </Toggle>
                  <Toggle size="lg">
                    <Bold className="mr-2 h-5 w-5" />
                    Large
                  </Toggle>
                </div>
              </div>
              <CodePopover
                code={`import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

export function ToggleSizes() {
  return (
    <div className="flex flex-col space-y-4">
      <Toggle size="sm">
        <Bold className="mr-2 h-3 w-3" />
        Small
      </Toggle>
      <Toggle size="default">
        <Bold className="mr-2 h-4 w-4" />
        Default
      </Toggle>
      <Toggle size="lg">
        <Bold className="mr-2 h-5 w-5" />
        Large
      </Toggle>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Sizes Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Text Alignment */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Text Alignment
          </h3>
          <p className="leading-7">
            Example of using toggles for text alignment options.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex items-center space-x-2">
                  <Toggle aria-label="Align left">
                    <AlignLeft className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Align center">
                    <AlignCenter className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Align right">
                    <AlignRight className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>
              <CodePopover
                code={`import { Toggle } from "@/components/ui/toggle"
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react"

export function TextAlignmentToggle() {
  return (
    <div className="flex items-center space-x-2">
      <Toggle aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </Toggle>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Alignment Example"
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
          The Toggle component provides a way to switch between two states.
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
                <TableCell className="font-mono text-xs">pressed</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell>
                  Whether the toggle is pressed or not. Use with <code>onPressedChange</code> for controlled usage.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">defaultPressed</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell>
                  The default state of the toggle when initially rendered. Use for uncontrolled usage.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">onPressedChange</TableCell>
                <TableCell className="font-mono text-xs">function</TableCell>
                <TableCell>
                  Event handler called when the pressed state changes.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">disabled</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell>
                  When true, prevents the user from interacting with the toggle.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">variant</TableCell>
                <TableCell className="font-mono text-xs">"default" | "outline"</TableCell>
                <TableCell>
                  The visual style of the toggle.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">size</TableCell>
                <TableCell className="font-mono text-xs">"sm" | "default" | "lg"</TableCell>
                <TableCell>
                  The size of the toggle.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">asChild</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell>
                  When true, the component will render its child as the toggle.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          The Toggle component also accepts all standard HTML attributes for the <code>button</code> element.
        </p>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage Guidelines
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Toggle component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Use toggles for binary states (on/off, enabled/disabled)</li>
                <li>Group related toggles together</li>
                <li>Use clear icons or labels to indicate the toggle's purpose</li>
                <li>Provide immediate visual feedback when the state changes</li>
                <li>Use aria-label for icon-only toggles</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use toggles for actions that should be buttons</li>
                <li>Use toggles for mutually exclusive options (use radio buttons instead)</li>
                <li>Use toggles without clear indication of their purpose</li>
                <li>Place toggles too close together, making them difficult to select</li>
                <li>Use toggles for complex state changes that aren't immediately visible</li>
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
          The Toggle component follows WAI-ARIA guidelines to ensure accessibility.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Users can navigate to toggles using the <kbd>Tab</kbd> key and toggle them using the <kbd>Space</kbd> key.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Screen Readers</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The component uses proper ARIA attributes to communicate state changes to assistive technologies.
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
              Always provide an <code>aria-label</code> for icon-only toggles to ensure screen reader users understand their purpose. For toggles with visible text, the text content will be used as the accessible name.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/forms/radio-group">Previous: Radio Group Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/forms/switch">Next: Switch Component</a>
        </Button>
      </div>
    </div>
  );
}