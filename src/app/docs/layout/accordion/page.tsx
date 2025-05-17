"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Info,
  AlertCircle,
  Lock,
  Settings,
  User,
  HelpCircle,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AccordionPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const basicAccordionCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`;

  const multipleAccordionCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function MultipleAccordionDemo() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Account Settings</AccordionTrigger>
        <AccordionContent>
          Manage your account settings and preferences.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Privacy Options</AccordionTrigger>
        <AccordionContent>
          Control your privacy settings and data sharing preferences.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Notification Settings</AccordionTrigger>
        <AccordionContent>
          Configure how and when you receive notifications.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`;

  const disabledAccordionCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function DisabledAccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Available Option</AccordionTrigger>
        <AccordionContent>
          This option is available for all users.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Premium Feature</AccordionTrigger>
        <AccordionContent>
          This feature is only available for premium users.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another Option</AccordionTrigger>
        <AccordionContent>
          This is another available option.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Accordion
        </h1>
        <p className="text-lg text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Accordions allow users to expand and collapse sections of content,
          making interfaces more compact and focused. They're useful for
          organizing related information, FAQs, or settings in a space-efficient
          way.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        {/* Basic Accordion */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Basic Accordion</h3>
          <div className="rounded-lg border">
            <div className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that match the other
                    components' aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={basicAccordionCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Multiple Accordion */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Multiple Accordion</h3>
          <p className="text-muted-foreground">
            Use the <code>type="multiple"</code> prop to allow multiple
            accordion items to be open simultaneously.
          </p>
          <div className="rounded-lg border">
            <div className="p-6">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      <span>Account Settings</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Manage your account settings and preferences.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      <span>Privacy Options</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Control your privacy settings and data sharing preferences.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Notification Settings</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Configure how and when you receive notifications.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={multipleAccordionCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Disabled Item */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Disabled Item</h3>
          <p className="text-muted-foreground">
            Use the <code>disabled</code> prop on an AccordionItem to prevent it
            from being interacted with.
          </p>
          <div className="rounded-lg border">
            <div className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Available Option</AccordionTrigger>
                  <AccordionContent>
                    This option is available for all users.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" disabled>
                  <AccordionTrigger>Premium Feature</AccordionTrigger>
                  <AccordionContent>
                    This feature is only available for premium users.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Another Option</AccordionTrigger>
                  <AccordionContent>
                    This is another available option.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50 flex justify-end">
              <CodePopover
                code={disabledAccordionCode}
                language="tsx"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Custom Styled Accordion */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Custom Styled Accordion</h3>
          <div className="rounded-lg border">
            <div className="p-6">
              <Accordion type="single" collapsible className="w-full px-4">
                <AccordionItem value="item-1" className="border-primary/20">
                  <AccordionTrigger className="bg-primary/5 text-primary">
                    <div className="flex items-center gap-2 px-4">
                      <Info className="h-4 w-4" />
                      <span>Important Information</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      This is a custom styled accordion item with a different
                      background color and icon.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-destructive/20">
                  <AccordionTrigger className="bg-destructive/5 text-destructive">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      <span>Warning Notice</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      This is another custom styled accordion item with warning
                      colors and icon.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
          The Accordion component consists of several subcomponents that work
          together to create expandable content sections.
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
                <TableCell className="font-mono text-xs">Accordion</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">type:</span> "single" |
                      "multiple"
                    </p>
                    <p>
                      <span className="font-semibold">collapsible?:</span>{" "}
                      boolean
                    </p>
                    <p>
                      <span className="font-semibold">defaultValue?:</span>{" "}
                      string | string[]
                    </p>
                    <p>
                      <span className="font-semibold">value?:</span> string |
                      string[]
                    </p>
                    <p>
                      <span className="font-semibold">onValueChange?:</span>{" "}
                      function
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">children:</span>{" "}
                      React.ReactNode
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The main container component that provides the accordion's
                  behavior and context.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  AccordionItem
                </TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">value:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">disabled?:</span> boolean
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">children:</span>{" "}
                      React.ReactNode
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  A single accordion item containing a trigger and content. Each
                  item must have a unique value.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  AccordionTrigger
                </TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">children:</span>{" "}
                      React.ReactNode
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The button that toggles the accordion item. Must be used
                  within an AccordionItem.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  AccordionContent
                </TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">forceMount?:</span>{" "}
                      boolean
                    </p>
                    <p>
                      <span className="font-semibold">children:</span>{" "}
                      React.ReactNode
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The content that is revealed when the accordion item is
                  expanded. Must be used within an AccordionItem.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          All accordion components accept standard HTML attributes in addition
          to the props listed above.
        </p>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage Guidelines
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Accordion component:
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
                <li>Use clear, descriptive headings for each accordion item</li>
                <li>Group related content within each accordion item</li>
                <li>Keep content concise and focused on a single topic</li>
                <li>Use consistent styling across all accordion items</li>
                <li>
                  Consider which accordion type (single or multiple) best suits
                  your content
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Nest accordions within accordions (avoid excessive nesting)
                </li>
                <li>
                  Hide critical information that users need to see immediately
                </li>
                <li>
                  Use vague or generic headings that don't clearly indicate the
                  content
                </li>
                <li>Put too much content in a single accordion item</li>
                <li>Use inconsistent styling across accordion items</li>
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
                <li>Organize content in a logical order</li>
                <li>Use icons to enhance understanding when appropriate</li>
                <li>Keep the most important items at the top</li>
                <li>
                  Ensure content within each item is related to its heading
                </li>
                <li>Use consistent formatting within accordion content</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Include content that doesn't match the accordion heading
                </li>
                <li>Mix unrelated topics within a single accordion item</li>
                <li>
                  Use accordions for sequential content that should be read in
                  order
                </li>
                <li>
                  Hide primary navigation or critical actions in accordions
                </li>
                <li>
                  Use accordions when there are only a few short items that
                  could be displayed directly
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
          Accordions should be accessible to all users, including those using
          screen readers or keyboard navigation.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">ARIA Attributes</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The accordion uses appropriate ARIA attributes like
                aria-expanded, aria-controls, and aria-labelledby to ensure
                proper accessibility for screen readers.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Users can navigate the accordion using Tab to move between
                triggers, and Enter or Space to expand/collapse content.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Focus Management</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The accordion maintains proper focus states to indicate which
                item is currently focused during keyboard navigation.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">
                  Descriptive Headings
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Use clear, descriptive headings for each accordion item to help
                users understand what content will be revealed.
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
              When using accordions for FAQs or similar content, ensure that the
              questions are clear and descriptive. This helps users decide
              whether they need to expand that section without having to open
              each one.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/layout/tabs">Previous: Tabs Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/layout/card">Next: Card Component</a>
        </Button>
      </div>
    </div>
  );
}
