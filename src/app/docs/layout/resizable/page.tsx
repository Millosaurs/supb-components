"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import { 
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup 
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import {
  Copy,
  Check,
  Info,
  AlertCircle,
  GripVertical,
  GripHorizontal,
  Maximize,
  Minimize,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ResizablePage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const basicResizableCode = `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`;

  const verticalResizableCode = `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export function VerticalResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[400px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Top Panel</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Bottom Panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`;

  const multipleResizableCode = `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export function MultipleResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25} minSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25} minSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Properties</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Resizable
        </h1>
        <p className="text-lg text-muted-foreground">
          Resizable panels with draggable handles.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Resizable component provides a set of panels that can be resized by dragging handles between them. 
          This is useful for creating flexible layouts like sidebars, split views, and other UI patterns where 
          users might want to adjust the size of different sections.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        {/* Basic Resizable */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Basic Horizontal Resizable</h3>
          <div className="rounded-lg border">
            <div className="p-6">
              <ResizablePanelGroup
                direction="horizontal"
                className="min-h-[200px] max-w-md rounded-lg border"
              >
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Panel One</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Panel Two</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={basicResizableCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Vertical Resizable */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Vertical Resizable</h3>
          <p className="text-muted-foreground">
            Create vertically resizable panels with the <code>direction</code> prop.
          </p>
          <div className="rounded-lg border">
            <div className="p-6">
              <ResizablePanelGroup
                direction="vertical"
                className="min-h-[500px] max-w-md rounded-lg border"
              >
                <ResizablePanel defaultSize={30} minSize={20}>
                  <div className="flex h-full items-center justify-center p-6 bg-muted/20">
                    <span className="font-semibold">Top Panel</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle>
                  <div className="flex h-4 w-4 items-center justify-center">
                    <GripHorizontal className="h-2.5 w-2.5" />
                  </div>
                </ResizableHandle>
                <ResizablePanel defaultSize={70}>
                  <div className="flex h-full items-center justify-center p-6 bg-muted/10">
                    <span className="font-semibold">Bottom Panel</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={verticalResizableCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Multiple Panels */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Multiple Panels</h3>
          <p className="text-muted-foreground">
            Create complex layouts with multiple resizable panels.
          </p>
          <div className="rounded-lg border">
            <div className="p-6">
              <ResizablePanelGroup
                direction="horizontal"
                className="min-h-[200px] max-w-md rounded-lg border"
              >
                <ResizablePanel defaultSize={25} minSize={20}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Sidebar</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Content</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={25} minSize={20}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Properties</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={multipleResizableCode}
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
          The Resizable component consists of three parts: ResizablePanelGroup (the container), ResizablePanel (the individual panels), and ResizableHandle (the draggable divider between panels).
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
                <TableCell className="font-mono text-xs">ResizablePanelGroup</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">direction:</span> "horizontal" | "vertical"
                    </p>
                    <p>
                      <span className="font-semibold">onLayout?:</span> (sizes: number[]) =&gt; void
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The container component that manages the layout direction and overall behavior of the resizable panels.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">ResizablePanel</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">defaultSize:</span> number
                    </p>
                    <p>
                      <span className="font-semibold">minSize?:</span> number
                    </p>
                    <p>
                      <span className="font-semibold">maxSize?:</span> number
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  An individual panel that can be resized. The size is specified as a percentage of the total available space.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">ResizableHandle</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">withHandle?:</span> boolean
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The draggable handle between panels. When withHandle is true, it displays a visual indicator for dragging.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          All components accept standard HTML attributes in addition to the props listed above.
        </p>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage Guidelines
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Resizable component:
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
                <li>Set appropriate minimum sizes to prevent panels from becoming too small</li>
                <li>Use horizontal layouts for side-by-side content like sidebars and main content</li>
                <li>Use vertical layouts for stacked content like code editors and preview panes</li>
                <li>Consider the overall container size when setting panel proportions</li>
                <li>Provide visual cues for draggable handles</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Create too many resizable panels in a single group</li>
                <li>Use resizable panels for content that doesn't benefit from resizing</li>
                <li>Nest resizable panels too deeply</li>
                <li>Forget to set constraints (minSize/maxSize) for critical UI elements</li>
                <li>Use in layouts where space is already constrained</li>
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
                <li>Group related content within the same panel</li>
                <li>Use for interfaces where users benefit from adjusting content proportions</li>
                <li>Consider saving panel sizes for returning users</li>
                <li>Ensure content adapts well to different panel sizes</li>
                <li>Use for complex interfaces like dashboards, editors, and admin panels</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Place critical information in panels that might be resized too small</li>
                <li>Use for content that has fixed size requirements</li>
                <li>Split logically connected content across different panels</li>
                <li>Create panels with content that doesn't resize gracefully</li>
                <li>Use for simple layouts where fixed proportions work better</li>
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
          The Resizable component is designed with accessibility in mind, following best practices for interactive UI elements.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Resizable handles can be operated using keyboard controls. Users can focus on handles and use arrow keys to adjust panel sizes.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">ARIA Attributes</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The component uses appropriate ARIA attributes like aria-valuenow and aria-valuetext to communicate the current state to assistive technologies.
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
              Ensure that resizable panels maintain sufficient contrast ratios at all sizes. Content should remain readable and interactive elements should remain accessible even when panels are resized to their minimum dimensions.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/layout/collapsible">Previous: Collapsible Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/layout/scroll-area">Next: Scroll Area Component</a>
        </Button>
      </div>
    </div>
  );
}