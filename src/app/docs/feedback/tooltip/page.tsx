"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  HelpCircle,
  Settings,
  Plus,
  Trash,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TooltipPage() {
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
          Tooltip
        </h1>
        <p className="text-lg text-muted-foreground">
          A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Tooltips provide additional information about an element when users hover over or focus on it. 
          They're useful for explaining the purpose of buttons, icons, or other UI elements that might not be immediately obvious.
        </p>
        <p className="leading-7">
          Tooltips should be concise and informative, providing just enough context to help users understand the element's purpose without overwhelming them with information.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The Tooltip component consists of a provider, trigger, and content. Wrap your application with TooltipProvider, then use TooltipTrigger for the element that triggers the tooltip, and TooltipContent for the tooltip itself.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover Me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <CodePopover
              code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover Me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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

        {/* Icon Tooltips */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Icon Tooltips
          </h3>
          <p className="leading-7">
            Tooltips are commonly used with icon buttons to provide context about their function.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="outline">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Help</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Help and documentation</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="outline">
                          <Settings className="h-4 w-4" />
                          <span className="sr-only">Settings</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Adjust settings</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="outline">
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Add</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add new item</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="outline" className="text-destructive">
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete item</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <CodePopover
                code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HelpCircle, Settings, Plus, Trash } from "lucide-react"

export function IconTooltips() {
  return (
    <div className="flex items-center gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="outline">
              <HelpCircle className="h-4 w-4" />
              <span className="sr-only">Help</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Help and documentation</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="outline">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Adjust settings</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="outline">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add new item</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="outline" className="text-destructive">
              <Trash className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete item</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Icon Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Tooltip Positions */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Tooltip Positions
          </h3>
          <p className="leading-7">
            Tooltips can be positioned in different directions relative to the trigger element.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Top</Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>Tooltip on top</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Right</Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Tooltip on right</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Bottom</Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Tooltip on bottom</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Left</Button>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>Tooltip on left</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <CodePopover
                code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipPositions() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltip on top</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Positions Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Rich Content */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Rich Content
          </h3>
          <p className="leading-7">
            Tooltips can contain rich content, including formatted text, icons, and other elements.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Rich Tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent className="w-80">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                          <p className="font-medium">Important Information</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          This action will permanently delete the selected items. 
                          This cannot be undone and the items cannot be recovered.
                        </p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <CodePopover
                code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AlertCircle } from "lucide-react"

export function RichTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Rich Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent className="w-80">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              <p className="font-medium">Important Information</p>
            </div>
            <p className="text-sm text-muted-foreground">
              This action will permanently delete the selected items. 
              This cannot be undone and the items cannot be recovered.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}
                language="tsx"
                buttonLabel="View Rich Content Example"
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
          The Tooltip component consists of several parts, each with their own props:
        </p>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Component</TableHead>
                <TableHead className="w-[200px]">Prop</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  TooltipProvider
                </TableCell>
                <TableCell className="font-mono text-xs">
                  delayDuration?: number
                </TableCell>
                <TableCell>
                  The delay duration in milliseconds before showing the tooltip. Default: 700.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  skipDelayDuration?: number
                </TableCell>
                <TableCell>
                  The skip delay duration in milliseconds. Default: 300.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  Tooltip
                </TableCell>
                <TableCell className="font-mono text-xs">
                  defaultOpen?: boolean
                </TableCell>
                <TableCell>
                  Whether the tooltip is open by default. Default: false.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  open?: boolean
                </TableCell>
                <TableCell>
                  Controlled open state of the tooltip.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={1}>
                  TooltipTrigger
                </TableCell>
                <TableCell className="font-mono text-xs">
                  asChild?: boolean
                </TableCell>
                <TableCell>
                  Whether to merge the props of the component with the props of its child. Default: false.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={5}>
                  TooltipContent
                </TableCell>
                <TableCell className="font-mono text-xs">
                  side?: "top" | "right" | "bottom" | "left"
                </TableCell>
                <TableCell>
                  The preferred side of the trigger to render the tooltip. Default: "top".
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  sideOffset?: number
                </TableCell>
                <TableCell>
                  The distance in pixels from the trigger. Default: 4.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  align?: "start" | "center" | "end"
                </TableCell>
                <TableCell>
                  The preferred alignment against the trigger. Default: "center".
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  alignOffset?: number
                </TableCell>
                <TableCell>
                  An offset in pixels from the "start" or "end" alignment. Default: 0.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  avoidCollisions?: boolean
                </TableCell>
                <TableCell>
                  Whether to avoid collisions with the viewport edges. Default: true.
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
          Follow these guidelines for effective use of the Tooltip component:
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
                <li>Keep tooltip content concise and to the point</li>
                <li>Use tooltips for elements that might not be immediately obvious</li>
                <li>Ensure tooltips are accessible via keyboard navigation</li>
                <li>Position tooltips consistently throughout your application</li>
                <li>Use tooltips to provide additional context for icon buttons</li>
                <li>Include keyboard shortcuts in tooltips when applicable</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use tooltips for essential information that users need to complete a task</li>
                <li>Include interactive elements inside tooltips</li>
                <li>Make tooltips appear too quickly or too slowly</li>
                <li>Create tooltips with excessive text or complex formatting</li>
                <li>Use tooltips for obvious elements with clear labels</li>
                <li>Position tooltips where they might obscure important content</li>
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
          The Tooltip component is designed with accessibility in mind:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Keyboard Navigation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Tooltips can be triggered by focusing on an element using the keyboard, making them accessible to users who navigate with a keyboard.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Screen Readers</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The tooltip content is announced by screen readers when the tooltip is displayed, providing context for users with visual impairments.
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
              When using icon buttons, always include a visually hidden text label using <code>className="sr-only"</code> to ensure screen reader users understand the button's purpose, even without the tooltip.
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
          Here are some advanced patterns for using the Tooltip component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Controlled Tooltip
          </h3>
          <p className="leading-7">
            You can control the open state of a tooltip programmatically:
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to create a controlled tooltip.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function ControlledTooltip() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>Show Tooltip</Button>
        <Button onClick={() => setOpen(false)} variant="outline">Hide Tooltip</Button>
      </div>
      
      <TooltipProvider>
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover or Click Buttons</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip is controlled programmatically</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Delay
          </h3>
          <p className="leading-7">
            You can customize the delay before showing tooltips:
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to customize the tooltip delay.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function CustomDelayTooltip() {
  return (
    <div className="flex gap-4">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Fast Tooltip (100ms)</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip appears quickly</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      <TooltipProvider delayDuration={1000}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Slow Tooltip (1000ms)</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip has a longer delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/feedback/toast">Previous: Toast Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/navigation/breadcrumb">Next: Breadcrumb Component</a>
        </Button>
      </div>
    </div>
  );
}