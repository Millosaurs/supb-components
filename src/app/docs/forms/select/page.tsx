"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  ChevronDown,
  ChevronsUpDown,
  Filter,
  SortAsc,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SelectPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});
  const [value, setValue] = useState("");

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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Select</h1>
        <p className="text-lg text-muted-foreground">
          A dropdown component that allows users to choose a single value from a list of options.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Select component provides a way for users to choose a single option from a dropdown list.
          It's designed to be accessible, customizable, and easy to integrate into forms.
        </p>
        <p className="leading-7">
          Our Select component is built with Radix UI primitives and follows WAI-ARIA best practices.
          It supports keyboard navigation, screen readers, and can be styled to match your design system.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The basic Select component provides a clean, accessible dropdown selection.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="grape">Grape</SelectItem>
                  <SelectItem value="strawberry">Strawberry</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <CodePopover
              code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
        <SelectItem value="strawberry">Strawberry</SelectItem>
      </SelectContent>
    </Select>
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

        {/* With Label */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Label
          </h3>
          <p className="leading-7">
            Combine the Select with a label for better accessibility.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="grid w-full gap-1.5">
                  <label htmlFor="fruit" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Favorite Fruit
                  </label>
                  <Select>
                    <SelectTrigger id="fruit">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                      <SelectItem value="grape">Grape</SelectItem>
                      <SelectItem value="strawberry">Strawberry</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">
                    Select your favorite fruit from the list.
                  </p>
                </div>
              </div>
              <CodePopover
                code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <label
        htmlFor="fruit"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Favorite Fruit
      </label>
      <Select>
        <SelectTrigger id="fruit">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
          <SelectItem value="strawberry">Strawberry</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        Select your favorite fruit from the list.
      </p>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Label Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* With Groups */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Groups
          </h3>
          <p className="leading-7">
            Organize options into logical groups with labels.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a food" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Vegetables</SelectLabel>
                      <SelectItem value="carrot">Carrot</SelectItem>
                      <SelectItem value="broccoli">Broccoli</SelectItem>
                      <SelectItem value="spinach">Spinach</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <CodePopover
                code={`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectWithGroups() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a food" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="spinach">Spinach</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`}
                language="tsx"
                buttonLabel="View Groups Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Disabled States */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Disabled States
          </h3>
          <p className="leading-7">
            Disable the entire select or individual options.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Disabled select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select with disabled options" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2" disabled>Option 2 (Disabled)</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                    <SelectItem value="option4" disabled>Option 4 (Disabled)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CodePopover
                code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DisabledSelectDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select with disabled options" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2" disabled>Option 2 (Disabled)</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          <SelectItem value="option4" disabled>Option 4 (Disabled)</SelectItem>
        </SelectContent>
      </Select>
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
      </div>

      {/* API Reference */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          API Reference
        </h2>
        <p className="leading-7">
          The Select component consists of multiple parts that work together to create a complete dropdown experience.
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
                <TableCell className="font-mono text-xs">Select</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">defaultValue?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">value?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">onValueChange?:</span> (value: string) =&gt; void
                    </p>
                    <p>
                      <span className="font-semibold">disabled?:</span> boolean
                    </p>
                    <p>
                      <span className="font-semibold">name?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The root component that manages the select state.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">SelectTrigger</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">children:</span> React.ReactNode
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The button that toggles the select dropdown. Usually contains the SelectValue.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">SelectValue</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">placeholder?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  Displays the selected value or a placeholder.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">SelectContent</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">children:</span> React.ReactNode
                    </p>
                    <p>
                      <span className="font-semibold">position?:</span> "popper" | "item-aligned"
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The floating dropdown that contains the select options.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">SelectItem</TableCell>
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
                      <span className="font-semibold">children:</span> React.ReactNode
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  An item in the select dropdown menu.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">SelectGroup</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">children:</span> React.ReactNode
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  Groups related select items with an optional label.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">SelectLabel</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">children:</span> React.ReactNode
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  A label for a group of select items.
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
          Follow these guidelines for effective use of the Select component:
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
                <li>Use clear, descriptive labels for the select and its options</li>
                <li>Group related options when the list is long</li>
                <li>Provide a meaningful placeholder that indicates what to select</li>
                <li>Use disabled states appropriately to indicate unavailable options</li>
                <li>Consider the default selected value carefully</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use for very short lists (2-3 items) where radio buttons might be better</li>
                <li>Include too many options without grouping or filtering</li>
                <li>Use vague labels or placeholders that don't indicate the purpose</li>
                <li>Nest select dropdowns within each other</li>
                <li>Use for multiple selection (use checkboxes or a multi-select component instead)</li>
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
          The Select component is designed with accessibility in mind, following best practices for interactive UI elements.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Users can navigate the select using arrow keys, type to search for options, use Enter to select, and Escape to close the dropdown.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">ARIA Attributes</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The component uses appropriate ARIA attributes like aria-expanded, aria-selected, and aria-labelledby to communicate state to assistive technologies.
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
              Always pair the Select component with a visible label using the htmlFor attribute to connect them. This improves usability for all users, especially those using screen readers.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/forms/input">Previous: Input Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/forms/checkbox">Next: Checkbox Component</a>
        </Button>
      </div>
    </div>
  );
}