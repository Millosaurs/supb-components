"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  Copy,
  Check,
  Info,
  AlertCircle,
  ChevronsUpDown,
  Plus,
  Minus,
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

export default function CollapsiblePage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [isParentOpen, setIsParentOpen] = useState(false);
  const [isChildOpen, setIsChildOpen] = useState(false);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const basicCollapsibleCode = `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full max-w-[500px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          What is a Collapsible component?
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          A UI component that can be expanded or collapsed to show or hide content.
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`;

  const customCollapsibleCode = `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CustomCollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full max-w-[500px] rounded-md border p-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          Advanced Settings
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm" className="gap-1">
            {isOpen ? (
              <>
                <Minus className="h-3.5 w-3.5" />
                <span>Hide</span>
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" />
                <span>Show</span>
              </>
            )}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2 mt-2">
        <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
          <div className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Configuration options</span>
          </div>
        </div>
        <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>User preferences</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`;

  const nestedCollapsibleCode = `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function NestedCollapsibleDemo() {
  const [isParentOpen, setIsParentOpen] = useState(false)
  const [isChildOpen, setIsChildOpen] = useState(false)

  return (
    <Collapsible
      open={isParentOpen}
      onOpenChange={setIsParentOpen}
      className="w-full max-w-[500px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          Categories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          Main Category
        </div>
        <Collapsible
          open={isChildOpen}
          onOpenChange={setIsChildOpen}
          className="ml-4 space-y-2 border-l pl-4"
        >
          <div className="flex items-center justify-between space-x-4">
            <h5 className="text-sm">Subcategories</h5>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-3 w-3" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md bg-muted px-4 py-2 font-mono text-sm">
              Subcategory 1
            </div>
            <div className="rounded-md bg-muted px-4 py-2 font-mono text-sm">
              Subcategory 2
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  )
}`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Collapsible
        </h1>
        <p className="text-lg text-muted-foreground">
          An interactive component that expands/collapses content.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Collapsible component provides an expandable/collapsible section
          that can be toggled to show or hide content. It's useful for creating
          accordion-like interfaces, FAQ sections, or any UI where you want to
          conserve space by hiding content until it's needed.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        {/* Basic Collapsible */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Basic Collapsible</h3>
          <div className="rounded-lg border">
            <div className="p-6">
              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-full max-w-[500px] space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">
                    What is a Collapsible component?
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    A UI component that can be expanded or collapsed to show or
                    hide content.
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={basicCollapsibleCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Custom Collapsible */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Custom Collapsible</h3>
          <p className="text-muted-foreground">
            Customize the trigger button and add styling to the collapsible
            container.
          </p>
          <div className="rounded-lg border">
            <div className="p-6">
              <Collapsible
                open={isCustomOpen}
                onOpenChange={setIsCustomOpen}
                className="w-full max-w-[500px] rounded-md border p-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">Advanced Settings</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      {isCustomOpen ? (
                        <>
                          <Minus className="h-3.5 w-3.5" />
                          <span>Hide</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-3.5 w-3.5" />
                          <span>Show</span>
                        </>
                      )}
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2 mt-2">
                  <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
                    <div className="flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Configuration options</span>
                    </div>
                  </div>
                  <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>User preferences</span>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={customCollapsibleCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Nested Collapsible */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Nested Collapsible</h3>
          <p className="text-muted-foreground">
            Create hierarchical collapsible sections by nesting components.
          </p>
          <div className="rounded-lg border">
            <div className="p-6">
              <Collapsible
                open={isParentOpen}
                onOpenChange={setIsParentOpen}
                className="w-full max-w-[500px] space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">
                    Categories
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-2 font-mono text-sm">
                    Main Category
                  </div>
                  <Collapsible
                    open={isChildOpen}
                    onOpenChange={setIsChildOpen}
                    className="ml-4 space-y-2 border-l pl-4"
                  >
                    <div className="flex items-center justify-between space-x-4">
                      <h5 className="text-sm">Subcategories</h5>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                          <ChevronsUpDown className="h-3 w-3" />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="space-y-2">
                      <div className="rounded-md bg-muted px-4 py-2 font-mono text-sm">
                        Subcategory 1
                      </div>
                      <div className="rounded-md bg-muted px-4 py-2 font-mono text-sm">
                        Subcategory 2
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={nestedCollapsibleCode}
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
          The Collapsible component consists of three parts: Collapsible (the
          container), CollapsibleTrigger (the button that toggles the content),
          and CollapsibleContent (the content to be shown/hidden).
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
                <TableCell className="font-mono text-xs">Collapsible</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">open?:</span> boolean
                    </p>
                    <p>
                      <span className="font-semibold">onOpenChange?:</span>{" "}
                      (open: boolean) =&gt; void
                    </p>
                    <p>
                      <span className="font-semibold">defaultOpen?:</span>{" "}
                      boolean
                    </p>
                    <p>
                      <span className="font-semibold">disabled?:</span> boolean
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The root container component that manages the
                  expanded/collapsed state.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  CollapsibleTrigger
                </TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">asChild?:</span> boolean
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The button that toggles the collapsible content. When asChild
                  is true, it merges its props with its child element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  CollapsibleContent
                </TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">asChild?:</span> boolean
                    </p>
                    <p>
                      <span className="font-semibold">forceMount?:</span>{" "}
                      boolean
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The component that contains the content to be shown/hidden.
                  When forceMount is true, the content is always rendered but
                  hidden when collapsed.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          All components accept standard HTML attributes in addition to the
          props listed above.
        </p>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage Guidelines
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Collapsible
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
                <li>Use consistent spacing around collapsible components</li>
                <li>
                  Place triggers in predictable, easily accessible locations
                </li>
                <li>
                  Group related content within a single collapsible section
                </li>
                <li>Consider the expanded state in your layout planning</li>
                <li>Use visual cues to indicate that content is collapsible</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Hide critical information in collapsible sections</li>
                <li>
                  Create deeply nested collapsible hierarchies that are hard to
                  navigate
                </li>
                <li>Place collapsible components too close together</li>
                <li>
                  Use collapsible sections for very small amounts of content
                </li>
                <li>Create layout shifts when expanding/collapsing content</li>
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
                <li>Use descriptive headings for collapsible triggers</li>
                <li>
                  Group related information within a single collapsible section
                </li>
                <li>Organize content in a logical hierarchy</li>
                <li>Consider default open state for important information</li>
                <li>Use collapsible sections to simplify complex interfaces</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Hide primary actions or critical information</li>
                <li>Use vague or unclear labels for collapsible triggers</li>
                <li>
                  Include unrelated content within the same collapsible section
                </li>
                <li>Create an excessive number of collapsible sections</li>
                <li>Nest collapsible sections too deeply</li>
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
          The Collapsible component is designed with accessibility in mind,
          following WAI-ARIA patterns for disclosure widgets.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Users can interact with the collapsible trigger using the
                keyboard. The trigger is focusable and can be activated with
                Enter or Space.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">ARIA Attributes</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The component uses appropriate ARIA attributes like
                aria-expanded and aria-controls to communicate the state to
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
              Always provide clear visual indicators of the collapsible state.
              If using icons alone for the trigger, include screen reader text
              using the sr-only class to ensure the purpose is clear to all
              users.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/layout/separator">Previous: Separator Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/layout/dialog">Next: Dialog Component</a>
        </Button>
      </div>
    </div>
  );
}
