"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Search,
  Mail,
  Lock,
  User,
  Info,
  AlertCircle,
  Eye,
  EyeOff,
  Calendar,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function InputPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Input</h1>
        <p className="text-lg text-muted-foreground">
          A form control that allows users to enter and edit text or numeric
          data.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Input component is a fundamental UI element used to collect user
          data. It provides a way for users to enter text, numbers, and other
          information into forms and interfaces.
        </p>
        <p className="leading-7">
          Our Input component is built with accessibility in mind and follows
          WAI-ARIA best practices. It supports various states, types, and can be
          easily customized to fit your design needs.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The default Input component provides a clean, accessible text input
          field.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Input placeholder="Enter your name" />
            </div>
            <CodePopover
              code={`import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return <Input placeholder="Enter your name" />
}`}
              language="tsx"
              buttonLabel="View Code"
              showLineNumbers={true}
            />
          </div>
        </div>
      </div>

      {/* Types */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Input Types
        </h2>
        <p className="leading-7">
          Input supports various HTML input types to collect different kinds of
          data.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Input type="text" placeholder="Text" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Input type="number" placeholder="Number" />
              <Input type="date" />
              <Input type="tel" placeholder="Phone number" />
            </div>
            <CodePopover
              code={`import { Input } from "@/components/ui/input"

export default function InputTypesDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Input type="text" placeholder="Text" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="date" />
      <Input type="tel" placeholder="Phone number" />
    </div>
  )
}`}
              language="tsx"
              buttonLabel="View Types"
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

        {/* With Icons */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Icons
          </h3>
          <p className="leading-7">
            Enhance inputs with icons for better visual communication.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-8"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-8"
                    type="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-8 pr-8"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <button
                    className="absolute right-2.5 top-2.5"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
              <CodePopover
                code={`import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, Mail, Lock, Eye, EyeOff } from "lucide-react"

export function InputWithIcons() {
  const [showPassword, setShowPassword] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          className="pl-8" 
          placeholder="Search..." 
          value={searchValue} 
          onChange={(e) => setSearchValue(e.target.value)} 
        />
      </div>
      <div className="relative">
        <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input className="pl-8" type="email" placeholder="Email address" />
      </div>
      <div className="relative">
        <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          className="pl-8 pr-8" 
          type={showPassword ? "text" : "password"} 
          placeholder="Password" 
        />
        <button 
          className="absolute right-2.5 top-2.5" 
          onClick={() => setShowPassword(!showPassword)}
          type="button"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Eye className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
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

        {/* Input Sizes */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Sizes
          </h3>
          <p className="leading-7">
            Customize input sizes using Tailwind CSS classes.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Input className="h-8 text-sm" placeholder="Small input" />
                <Input placeholder="Default input" />
                <Input className="h-12 text-lg" placeholder="Large input" />
              </div>
              <CodePopover
                code={`import { Input } from "@/components/ui/input"

export function InputSizes() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Input className="h-8 text-sm" placeholder="Small input" />
      <Input placeholder="Default input" />
      <Input className="h-12 text-lg" placeholder="Large input" />
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

        {/* Input States */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Input States
          </h3>
          <p className="leading-7">
            Inputs can have different states to indicate their current status.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Input placeholder="Default input" />
                <Input placeholder="Disabled input" disabled />
                <Input placeholder="Read-only input" readOnly />
                <div className="space-y-1">
                  <Input
                    placeholder="Error input"
                    className="border-red-500 focus-visible:ring-red-500"
                  />
                  <p className="text-sm text-red-500">This field is required</p>
                </div>
              </div>
              <CodePopover
                code={`import { Input } from "@/components/ui/input"

export function InputStates() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Input placeholder="Default input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="Read-only input" readOnly />
      <div className="space-y-1">
        <Input 
          placeholder="Error input" 
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

        {/* With Button */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Input with Button
          </h3>
          <p className="leading-7">
            Combine inputs with buttons for search fields, forms, and more.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex w-full items-center space-x-2">
                  <Input placeholder="Email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </div>
                <div className="flex w-full items-center space-x-2">
                  <Input placeholder="Search..." />
                  <Button variant="secondary" type="submit">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CodePopover
                code={`import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function InputWithButton() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex w-full items-center space-x-2">
        <Input placeholder="Email" type="email" />
        <Button type="submit">Subscribe</Button>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input placeholder="Search..." />
        <Button variant="secondary" type="submit">
          <Search className="h-4 w-4" />
        </Button>
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

        {/* Specialized Inputs */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Specialized Inputs
          </h3>
          <p className="leading-7">
            Create specialized inputs for specific data formats.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="relative">
                  <CreditCard className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-8"
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\s/g, "");
                      const formattedValue = value
                        .replace(/\D/g, "")
                        .replace(/(\d{4})(?=\d)/g, "$1 ");
                      e.target.value = formattedValue;
                    }}
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-8"
                    placeholder="MM/YY"
                    maxLength={5}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\//g, "");
                      const formattedValue = value
                        .replace(/\D/g, "")
                        .replace(/(\d{2})(?=\d)/g, "$1/");
                      e.target.value = formattedValue;
                    }}
                  />
                </div>
              </div>
              <CodePopover
                code={`import { Input } from "@/components/ui/input"
import { CreditCard, Calendar } from "lucide-react"

export function SpecializedInputs() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="relative">
        <CreditCard className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          className="pl-8" 
          placeholder="0000 0000 0000 0000" 
          maxLength={19}
          onChange={(e) => {
            const value = e.target.value.replace(/\\s/g, "");
            const formattedValue = value
              .replace(/\\D/g, "")
              .replace(/(\\d{4})(?=\\d)/g, "$1 ");
            e.target.value = formattedValue;
          }}
        />
      </div>
      <div className="relative">
        <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          className="pl-8" 
          placeholder="MM/YY" 
          maxLength={5}
          onChange={(e) => {
            const value = e.target.value.replace(/\\//g, "");
            const formattedValue = value
              .replace(/\\D/g, "")
              .replace(/(\\d{2})(?=\\d)/g, "$1/");
            e.target.value = formattedValue;
          }}
        />
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Specialized Example"
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
          The Input component extends the HTML input element with additional
          styling.
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
                <TableCell className="font-mono text-xs">type</TableCell>
                <TableCell className="font-mono text-xs">
                  HTML input types
                </TableCell>
                <TableCell className="font-mono text-xs">'text'</TableCell>
                <TableCell>The type of input field.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">placeholder</TableCell>
                <TableCell className="font-mono text-xs">string</TableCell>
                <TableCell className="font-mono text-xs">undefined</TableCell>
                <TableCell>Placeholder text for the input.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">disabled</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell className="font-mono text-xs">false</TableCell>
                <TableCell>When true, the input will be disabled.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">readOnly</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell className="font-mono text-xs">false</TableCell>
                <TableCell>When true, the input will be read-only.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">className</TableCell>
                <TableCell className="font-mono text-xs">string</TableCell>
                <TableCell className="font-mono text-xs">undefined</TableCell>
                <TableCell>
                  Additional CSS classes to add to the input.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          The Input component also accepts all the props of the HTML input
          element.
        </p>
      </div>

      {/* Accessibility */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <p className="leading-7">
          The Input component follows accessibility best practices to ensure
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
                Always associate inputs with labels using the htmlFor attribute
                or by nesting inputs within label elements.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Focus States</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Clearly visible focus states are provided for keyboard
                navigation.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Error Messaging</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Use aria-invalid and aria-describedby to connect inputs with
                error messages.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Disabled States</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                When disabled, the input communicates its unavailable state to
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
              When using icons with inputs, ensure they have appropriate ARIA
              labels or are purely decorative. For inputs that accept specific
              formats (like credit cards or dates), provide clear instructions
              about the expected format.
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
          Follow these guidelines to ensure effective use of the Input
          component:
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Input Design</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Use clear, concise placeholder text</li>
                <li>Provide visible labels for inputs</li>
                <li>Use appropriate input types (email, password, etc.)</li>
                <li>Indicate required fields clearly</li>
                <li>Provide helpful error messages</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use placeholder text as the only label</li>
                <li>Create inputs without sufficient contrast</li>
                <li>Use vague error messages</li>
                <li>Make inputs too small to tap on mobile devices</li>
                <li>Use inputs without proper validation</li>
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
                <li>Group related inputs together</li>
                <li>Align labels and inputs consistently</li>
                <li>Use appropriate spacing between form elements</li>
                <li>Provide clear submit and cancel actions</li>
                <li>Use fieldsets and legends for groups of inputs</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Create overly long forms without sections</li>
                <li>Mix different label alignments in the same form</li>
                <li>Place inputs too close together</li>
                <li>Use inconsistent input widths without purpose</li>
                <li>Hide important form controls</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Accessibility */}
      <div className="space-y-6">
        {/* ... existing accessibility content ... */}
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/forms/button">Previous: Button Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/forms/textarea">Next: Textarea Component</a>
        </Button>
      </div>
    </div>
  );
}
