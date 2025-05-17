"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  CircleDot,
  Circle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function RadioGroupPage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Radio Group</h1>
        <p className="text-lg text-muted-foreground">
          A set of checkable buttons where only one can be checked at a time.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Radio Group component allows users to select a single option from a list of mutually exclusive choices.
          Radio groups are commonly used in forms, surveys, and settings where users need to make a single selection from multiple options.
        </p>
        <p className="leading-7">
          Our Radio Group component is built with Radix UI primitives and follows WAI-ARIA best practices.
          It supports keyboard navigation, focus management, and screen reader announcements.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The default Radio Group component provides a clean, accessible set of radio buttons.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <label htmlFor="option-one" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Option One
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <label htmlFor="option-two" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Option Two
                  </label>
                </div>
              </RadioGroup>
            </div>
            <CodePopover
              code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <label htmlFor="option-one" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Option One
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <label htmlFor="option-two" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Option Two
        </label>
      </div>
    </RadioGroup>
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

        {/* With Form Label */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Form Label
          </h3>
          <p className="leading-7">
            Add a form label to provide context for the radio group.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="space-y-3">
                  <h4 className="font-medium leading-none">Subscription Plan</h4>
                  <RadioGroup defaultValue="monthly">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <label htmlFor="monthly" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Monthly ($12/month)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yearly" id="yearly" />
                      <label htmlFor="yearly" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Yearly ($120/year)
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <CodePopover
                code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupWithLabel() {
  return (
    <div className="space-y-3">
      <h4 className="font-medium leading-none">Subscription Plan</h4>
      <RadioGroup defaultValue="monthly">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="monthly" id="monthly" />
          <label htmlFor="monthly" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Monthly ($12/month)
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yearly" id="yearly" />
          <label htmlFor="yearly" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Yearly ($120/year)
          </label>
        </div>
      </RadioGroup>
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

        {/* Card Radio Group */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Card Radio Group
          </h3>
          <p className="leading-7">
            Create a more visual radio group using cards.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <RadioGroup defaultValue="card1" className="grid grid-cols-2 gap-4">
                  <div>
                    <RadioGroupItem value="card1" id="card1" className="peer sr-only" />
                    <label
                      htmlFor="card1"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                    >
                      <CircleDot className="mb-3 h-6 w-6" />
                      <p className="text-sm font-medium leading-none">Standard</p>
                      <p className="text-sm text-muted-foreground mt-1">$10/month</p>
                    </label>
                  </div>
                  <div>
                    <RadioGroupItem value="card2" id="card2" className="peer sr-only" />
                    <label
                      htmlFor="card2"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                    >
                      <CircleDot className="mb-3 h-6 w-6" />
                      <p className="text-sm font-medium leading-none">Pro</p>
                      <p className="text-sm text-muted-foreground mt-1">$20/month</p>
                    </label>
                  </div>
                </RadioGroup>
              </div>
              <CodePopover
                code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CircleDot } from "lucide-react"

export function CardRadioGroup() {
  return (
    <RadioGroup defaultValue="card1" className="grid grid-cols-2 gap-4">
      <div>
        <RadioGroupItem value="card1" id="card1" className="peer sr-only" />
        <label
          htmlFor="card1"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
        >
          <CircleDot className="mb-3 h-6 w-6" />
          <p className="text-sm font-medium leading-none">Standard</p>
          <p className="text-sm text-muted-foreground mt-1">$10/month</p>
        </label>
      </div>
      <div>
        <RadioGroupItem value="card2" id="card2" className="peer sr-only" />
        <label
          htmlFor="card2"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
        >
          <CircleDot className="mb-3 h-6 w-6" />
          <p className="text-sm font-medium leading-none">Pro</p>
          <p className="text-sm text-muted-foreground mt-1">$20/month</p>
        </label>
      </div>
    </RadioGroup>
  )
}`}
                language="tsx"
                buttonLabel="View Card Example"
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
            Radio items can be disabled to prevent user interaction.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="r-option-one" />
                    <label htmlFor="r-option-one" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Available Option
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="r-option-two" disabled />
                    <label htmlFor="r-option-two" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Disabled Option
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="r-option-three" />
                    <label htmlFor="r-option-three" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Another Option
                    </label>
                  </div>
                </RadioGroup>
              </div>
              <CodePopover
                code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function DisabledRadioGroup() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="r-option-one" />
        <label htmlFor="r-option-one" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Available Option
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="r-option-two" disabled />
        <label htmlFor="r-option-two" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Disabled Option
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="r-option-three" />
        <label htmlFor="r-option-three" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Another Option
        </label>
      </div>
    </RadioGroup>
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
          The Radio Group component consists of two parts: RadioGroup (the container) and RadioGroupItem (the individual radio buttons).
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
                <TableCell className="font-mono text-xs">RadioGroup</TableCell>
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
                      <span className="font-semibold">required?:</span> boolean
                    </p>
                    <p>
                      <span className="font-semibold">name?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The container component that manages the state of the radio group and provides context for the radio items.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">RadioGroupItem</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">value:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">disabled?:</span> boolean
                    </p>
                    <p>
                      <span className="font-semibold">required?:</span> boolean
                    </p>
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  An individual radio button that can be selected. Each item must have a unique value within the group.
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
          Follow these guidelines for effective use of the Radio Group component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            When to Use
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Use when users need to select exactly one option from a list</li>
                <li>Use when options are mutually exclusive</li>
                <li>Provide clear, concise labels for each option</li>
                <li>Group related radio buttons together</li>
                <li>Consider using a default selected value when appropriate</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use when users need to select multiple options (use checkboxes instead)</li>
                <li>Use when there are too many options (consider a select component)</li>
                <li>Use without labels or with unclear labels</li>
                <li>Use for binary choices (consider a single checkbox or toggle)</li>
                <li>Place radio buttons too close together, making them difficult to select</li>
              </ul>
            </div>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8">
            Layout and Presentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Arrange radio buttons vertically for better readability</li>
                <li>Use consistent spacing between options</li>
                <li>Consider visual enhancements like cards for important choices</li>
                <li>Provide adequate touch targets for mobile users</li>
                <li>Use descriptive text to explain the consequences of each choice</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Arrange radio buttons horizontally if there are more than 3-4 options</li>
                <li>Use inconsistent styling across different radio groups</li>
                <li>Hide or obscure the selected state</li>
                <li>Change the order of options dynamically</li>
                <li>Use radio buttons for actions (use buttons instead)</li>
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
          The Radio Group component is designed with accessibility in mind, following WAI-ARIA best practices.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Users can navigate between radio buttons using the arrow keys, and select an option using the Space key.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">ARIA Attributes</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The component uses appropriate ARIA roles and states to communicate the purpose and state of the radio buttons to assistive technologies.
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
              Always associate labels with radio buttons using the <code>htmlFor</code> attribute that matches the radio button's <code>id</code>. This ensures that users can click on the label to select the radio button, and screen readers can announce the label when the radio button is focused.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/forms/checkbox">Previous: Checkbox Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/forms/toggle">Next: Toggle Component</a>
        </Button>
      </div>
    </div>
  );
}