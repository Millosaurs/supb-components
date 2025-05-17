"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  CheckSquare,
  Square,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CheckboxPage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows users to select multiple items from a list of options.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Checkbox component is used to allow users to select one or more items from a list of options, 
          or to mark an item as checked or completed. Checkboxes are commonly used in forms, lists, and 
          data tables.
        </p>
        <p className="leading-7">
          Our Checkbox component is built with Radix UI primitives and follows WAI-ARIA best practices.
          It supports keyboard navigation, focus management, and screen reader announcements.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The default Checkbox component provides a clean, accessible checkbox input.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <CodePopover
              code={`import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
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

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        {/* Checkbox Group */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Checkbox Group
          </h3>
          <p className="leading-7">
            Group multiple checkboxes together for related options.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Notify me about...</h4>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="new-products" />
                      <label
                        htmlFor="new-products"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        New products
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="offers" defaultChecked />
                      <label
                        htmlFor="offers"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Special offers
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="updates" />
                      <label
                        htmlFor="updates"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Product updates
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxGroupDemo() {
  return (
    <div className="space-y-2">
      <h4 className="font-medium leading-none">Notify me about...</h4>
      <div className="space-y-3 pt-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="new-products" />
          <label
            htmlFor="new-products"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            New products
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="offers" defaultChecked />
          <label
            htmlFor="offers"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Special offers
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="updates" />
          <label
            htmlFor="updates"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Product updates
          </label>
        </div>
      </div>
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

        {/* Checkbox States */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Checkbox States
          </h3>
          <p className="leading-7">
            Checkboxes can have different states to indicate their current status.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex items-center space-x-2">
                  <Checkbox id="default" />
                  <label
                    htmlFor="default"
                    className="text-sm font-medium leading-none"
                  >
                    Default
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checked" defaultChecked />
                  <label
                    htmlFor="checked"
                    className="text-sm font-medium leading-none"
                  >
                    Checked
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="disabled" disabled />
                  <label
                    htmlFor="disabled"
                    className="text-sm font-medium leading-none text-muted-foreground"
                  >
                    Disabled
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="disabled-checked" disabled defaultChecked />
                  <label
                    htmlFor="disabled-checked"
                    className="text-sm font-medium leading-none text-muted-foreground"
                  >
                    Disabled checked
                  </label>
                </div>
              </div>
              <CodePopover
                code={`import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxStatesDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex items-center space-x-2">
        <Checkbox id="default" />
        <label
          htmlFor="default"
          className="text-sm font-medium leading-none"
        >
          Default
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checked" defaultChecked />
        <label
          htmlFor="checked"
          className="text-sm font-medium leading-none"
        >
          Checked
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <label
          htmlFor="disabled"
          className="text-sm font-medium leading-none text-muted-foreground"
        >
          Disabled
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <label
          htmlFor="disabled-checked"
          className="text-sm font-medium leading-none text-muted-foreground"
        >
          Disabled checked
        </label>
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View States Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* With Form */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Form
          </h3>
          <p className="leading-7">
            Use checkboxes within forms to collect multiple selections.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Select your interests</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="design" />
                        <label htmlFor="design" className="text-sm">Design</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="development" />
                        <label htmlFor="development" className="text-sm">Development</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="marketing" />
                        <label htmlFor="marketing" className="text-sm">Marketing</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="business" />
                        <label htmlFor="business" className="text-sm">Business</label>
                      </div>
                    </div>
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </div>
              <CodePopover
                code={`import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function CheckboxFormDemo() {
  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Select your interests</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="design" />
            <label htmlFor="design" className="text-sm">Design</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="development" />
            <label htmlFor="development" className="text-sm">Development</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <label htmlFor="marketing" className="text-sm">Marketing</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="business" />
            <label htmlFor="business" className="text-sm">Business</label>
          </div>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}`}
                language="tsx"
                buttonLabel="View Form Example"
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
          The Checkbox component provides a way to select multiple options from a set.
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
                <TableCell className="font-mono text-xs">checked</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell>
                  Whether the checkbox is checked or not. Use with <code>onCheckedChange</code> for controlled usage.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">defaultChecked</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell>
                  The default state of the checkbox when initially rendered. Use for uncontrolled usage.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">onCheckedChange</TableCell>
                <TableCell className="font-mono text-xs">function</TableCell>
                <TableCell>
                  Event handler called when the checked state changes.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">disabled</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell>
                  When true, prevents the user from interacting with the checkbox.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">id</TableCell>
                <TableCell className="font-mono text-xs">string</TableCell>
                <TableCell>
                  A unique identifier for the checkbox. Used to associate with a label.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          The Checkbox component also accepts all standard HTML attributes for the <code>button</code> element.
        </p>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage Guidelines
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Checkbox component:
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
                <li>Use checkboxes for multiple selection from a list of options</li>
                <li>Group related checkboxes together</li>
                <li>Use clear, concise labels that describe the option</li>
                <li>Place labels to the right of checkboxes</li>
                <li>Use checkboxes for boolean (yes/no) settings</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use checkboxes for mutually exclusive options (use radio buttons instead)</li>
                <li>Use checkboxes for actions or commands (use buttons instead)</li>
                <li>Create overly long lists of checkboxes without organization</li>
                <li>Use checkboxes without labels</li>
                <li>Use checkboxes for single-selection from a large list (use select instead)</li>
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
          The Checkbox component follows WAI-ARIA guidelines to ensure accessibility.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Users can navigate to checkboxes using the <kbd>Tab</kbd> key and toggle them using the <kbd>Space</kbd> key.
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
              Always associate checkboxes with labels using the <code>htmlFor</code> attribute that matches the checkbox's <code>id</code>. This ensures that users can click on the label to toggle the checkbox and that screen readers announce the label when the checkbox is focused.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/forms/select">Previous: Select Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/forms/radio-group">Next: Radio Group Component</a>
        </Button>
      </div>
    </div>
  );
}