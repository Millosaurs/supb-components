"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
  MessageSquare,
  FileText,
  Edit,
  AlignLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TextareaPage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Textarea</h1>
        <p className="text-lg text-muted-foreground">
          A multi-line text input field for collecting longer form content.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Textarea component is designed for collecting multi-line text input from users.
          It's ideal for comments, messages, descriptions, and other longer-form content.
        </p>
        <p className="leading-7">
          Our Textarea component is built with accessibility in mind and follows
          WAI-ARIA best practices. It supports various states and can be
          easily customized to fit your design needs.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The default Textarea component provides a clean, accessible multi-line text input field.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Textarea placeholder="Type your message here." />
            </div>
            <CodePopover
              code={`import { Textarea } from "@/components/ui/textarea"

export default function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
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
            Combine the Textarea with a label for better accessibility.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="grid w-full gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Your message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here."
                    className="min-h-[120px]"
                  />
                  <p className="text-sm text-muted-foreground">
                    Your message will be sent to our support team.
                  </p>
                </div>
              </div>
              <CodePopover
                code={`import { Textarea } from "@/components/ui/textarea"

export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <label
        htmlFor="message"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Your message
      </label>
      <Textarea
        id="message"
        placeholder="Type your message here."
        className="min-h-[120px]"
      />
      <p className="text-sm text-muted-foreground">
        Your message will be sent to our support team.
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

        {/* Textarea States */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Textarea States
          </h3>
          <p className="leading-7">
            Textareas can have different states to indicate their current status.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Textarea placeholder="Default textarea" />
                <Textarea placeholder="Disabled textarea" disabled />
                <Textarea placeholder="Read-only textarea" readOnly />
                <div className="space-y-1">
                  <Textarea
                    placeholder="Error textarea"
                    className="border-red-500 focus-visible:ring-red-500"
                  />
                  <p className="text-sm text-red-500">This field is required</p>
                </div>
              </div>
              <CodePopover
                code={`import { Textarea } from "@/components/ui/textarea"

export function TextareaStates() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Textarea placeholder="Default textarea" />
      <Textarea placeholder="Disabled textarea" disabled />
      <Textarea placeholder="Read-only textarea" readOnly />
      <div className="space-y-1">
        <Textarea
          placeholder="Error textarea"
          className="border-red-500 focus-visible:ring-red-500"
        />
        <p className="text-sm text-red-500">This field is required</p>
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

        {/* Custom Sizes */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Sizes
          </h3>
          <p className="leading-7">
            Customize textarea sizes using Tailwind CSS classes.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Textarea className="h-20" placeholder="Small textarea" />
                <Textarea className="min-h-[120px]" placeholder="Medium textarea" />
                <Textarea className="min-h-[200px]" placeholder="Large textarea" />
              </div>
              <CodePopover
                code={`import { Textarea } from "@/components/ui/textarea"

export function TextareaSizes() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Textarea className="h-20" placeholder="Small textarea" />
      <Textarea className="min-h-[120px]" placeholder="Medium textarea" />
      <Textarea className="min-h-[200px]" placeholder="Large textarea" />
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

        {/* With Character Count */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Character Count
          </h3>
          <p className="leading-7">
            Add a character counter to limit and track input length.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="grid w-full gap-1.5">
                  <label htmlFor="message-with-count" className="text-sm font-medium leading-none">
                    Your message
                  </label>
                  <Textarea
                    id="message-with-count"
                    placeholder="Type your message here."
                    className="min-h-[120px]"
                    value={value}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      if (newValue.length <= 500) {
                        setValue(newValue);
                      }
                    }}
                  />
                  <div className="flex justify-end">
                    <p className={cn(
                      "text-sm text-muted-foreground",
                      value.length > 450 && "text-amber-500",
                      value.length >= 500 && "text-red-500"
                    )}>
                      {value.length}/500 characters
                    </p>
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function TextareaWithCount() {
  const [value, setValue] = useState("")
  
  return (
    <div className="grid w-full gap-1.5">
      <label
        htmlFor="message-with-count"
        className="text-sm font-medium leading-none"
      >
        Your message
      </label>
      <Textarea
        id="message-with-count"
        placeholder="Type your message here."
        className="min-h-[120px]"
        value={value}
        onChange={(e) => {
          const newValue = e.target.value;
          if (newValue.length <= 500) {
            setValue(newValue);
          }
        }}
      />
      <div className="flex justify-end">
        <p className={cn(
          "text-sm text-muted-foreground",
          value.length > 450 && "text-amber-500",
          value.length >= 500 && "text-red-500"
        )}>
          {value.length}/500 characters
        </p>
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Count Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* With Button */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Button
          </h3>
          <p className="leading-7">
            Combine textarea with buttons for comment forms, feedback forms, and more.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="grid w-full gap-2">
                  <Textarea placeholder="Write a comment..." className="min-h-[100px]" />
                  <div className="flex justify-end">
                    <Button>Post Comment</Button>
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Write a comment..." className="min-h-[100px]" />
      <div className="flex justify-end">
        <Button>Post Comment</Button>
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Button Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Props/API */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          API Reference
        </h2>
        <p className="leading-7">
          The Textarea component extends the HTML textarea element with additional styling.
        </p>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Prop</TableHead>
                <TableHead className="w-[200px]">Type</TableHead>
                <TableHead className="w-[200px]">Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs">placeholder</TableCell>
                <TableCell className="font-mono text-xs">string</TableCell>
                <TableCell className="font-mono text-xs">undefined</TableCell>
                <TableCell>Placeholder text for the textarea.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">disabled</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell className="font-mono text-xs">false</TableCell>
                <TableCell>When true, the textarea will be disabled.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">readOnly</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell className="font-mono text-xs">false</TableCell>
                <TableCell>When true, the textarea will be read-only.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">rows</TableCell>
                <TableCell className="font-mono text-xs">number</TableCell>
                <TableCell className="font-mono text-xs">3</TableCell>
                <TableCell>The number of visible text lines.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">className</TableCell>
                <TableCell className="font-mono text-xs">string</TableCell>
                <TableCell className="font-mono text-xs">undefined</TableCell>
                <TableCell>
                  Additional CSS classes to add to the textarea.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          The Textarea component also accepts all the props of the HTML textarea element.
        </p>
      </div>

      {/* Accessibility */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <p className="leading-7">
          The Textarea component follows accessibility best practices to ensure
          usability for all users:
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Proper Labeling</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Always associate textareas with labels using the htmlFor attribute or by nesting textareas within label elements.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Focus States</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Clearly visible focus states are provided for keyboard navigation.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Error Messaging</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Use aria-invalid and aria-describedby to connect textareas with error messages.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Resizing</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                By default, textareas can be resized by users, which is important for accessibility. Only restrict resizing when absolutely necessary.
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
              For longer forms, consider providing clear instructions above the textarea and 
              feedback about the remaining character count. This helps users understand 
              constraints and expectations before they start typing.
            </p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Best Practices
        </h2>
        <p className="leading-7">
          Follow these guidelines to ensure effective use of the Textarea component:
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Textarea Design</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Provide clear, descriptive labels</li>
                <li>Set an appropriate initial size</li>
                <li>Allow resizing when possible</li>
                <li>Indicate character limits visually</li>
                <li>Show helpful placeholder text</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Make textareas too small for their expected content</li>
                <li>Disable resizing without good reason</li>
                <li>Use placeholder text as the only label</li>
                <li>Set unnecessarily restrictive character limits</li>
                <li>Hide validation errors until form submission</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8">Form Layout</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Place textareas below their labels</li>
                <li>Group related form elements together</li>
                <li>Provide clear submission buttons</li>
                <li>Show character count for limited fields</li>
                <li>Maintain consistent spacing between form elements</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Place labels far from their textareas</li>
                <li>Use inconsistent layouts within the same form</li>
                <li>Hide important helper text or instructions</li>
                <li>Make textareas wider than their container</li>
                <li>Use fixed heights that don't accommodate content</li>
              </ul>
            </div>
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