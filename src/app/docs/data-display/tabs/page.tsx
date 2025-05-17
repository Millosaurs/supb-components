"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Settings,
  User,
  CreditCard,
  Bell,
  Code,
  FileText,
  Image,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TabsPage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Tabs</h1>
        <p className="text-lg text-muted-foreground">
          A set of layered sections of content that display one panel at a time.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Tabs component allows users to navigate between related sections
          of content, displaying one section at a time. Tabs help organize
          content into logical sections, making interfaces more efficient and
          easier to navigate.
        </p>
        <p className="leading-7">
          Our Tabs component follows the WAI-ARIA design pattern for tabs,
          ensuring proper keyboard navigation and screen reader support.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The basic Tabs component consists of a TabsList containing TabsTrigger
          elements, and TabsContent elements that display when their
          corresponding trigger is selected.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="account"
                  className="p-4 border rounded-md mt-2"
                >
                  <h3 className="text-lg font-medium">Account Settings</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Manage your account settings and preferences.
                  </p>
                </TabsContent>
                <TabsContent
                  value="password"
                  className="p-4 border rounded-md mt-2"
                >
                  <h3 className="text-lg font-medium">Password Settings</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Change your password and security settings.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
            <CodePopover
              code={`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4 border rounded-md mt-2">
        <h3 className="text-lg font-medium">Account Settings</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your account settings and preferences.
        </p>
      </TabsContent>
      <TabsContent value="password" className="p-4 border rounded-md mt-2">
        <h3 className="text-lg font-medium">Password Settings</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Change your password and security settings.
        </p>
      </TabsContent>
    </Tabs>
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

        {/* With Icons */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Tabs with Icons
          </h3>
          <p className="leading-7">
            Add icons to tab triggers to enhance visual recognition.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger
                      value="account"
                      className="flex items-center gap-2"
                    >
                      <User className="h-4 w-4" />
                      <span>Account</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="billing"
                      className="flex items-center gap-2"
                    >
                      <CreditCard className="h-4 w-4" />
                      <span>Billing</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="settings"
                      className="flex items-center gap-2"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="account"
                    className="p-4 border rounded-md mt-2"
                  >
                    <h3 className="text-lg font-medium">Account Settings</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage your account information and preferences.
                    </p>
                  </TabsContent>
                  <TabsContent
                    value="billing"
                    className="p-4 border rounded-md mt-2"
                  >
                    <h3 className="text-lg font-medium">Billing Information</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage your billing information and payment methods.
                    </p>
                  </TabsContent>
                  <TabsContent
                    value="settings"
                    className="p-4 border rounded-md mt-2"
                  >
                    <h3 className="text-lg font-medium">
                      Application Settings
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage your application settings and preferences.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
              <CodePopover
                code={`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { User, CreditCard, Settings } from "lucide-react"

export function TabsWithIcons() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account" className="flex items-center justify-center gap-2">
          <User className="h-4 w-4" />
          <span>Account</span>
        </TabsTrigger>
        <TabsTrigger value="billing" className="flex items-center justify-center gap-2">
          <CreditCard className="h-4 w-4" />
          <span>Billing</span>
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center justify-center gap-2">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4 border rounded-md mt-2">
        <h3 className="text-lg font-medium">Account Settings</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your account information and preferences.
        </p>
      </TabsContent>
      <TabsContent value="billing" className="p-4 border rounded-md mt-2">
        <h3 className="text-lg font-medium">Billing Information</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your billing information and payment methods.
        </p>
      </TabsContent>
      <TabsContent value="settings" className="p-4 border rounded-md mt-2">
        <h3 className="text-lg font-medium">Application Settings</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your application settings and preferences.
        </p>
      </TabsContent>
    </Tabs>
  )
}`}
                language="tsx"
                buttonLabel="View Icons Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Vertical Tabs */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Vertical Tabs
          </h3>
          <p className="leading-7">
            Create vertical tabs by adjusting the layout of the tabs list and
            content.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Tabs
                  defaultValue="account"
                  className="flex flex-row space-x-4"
                >
                  <TabsList className="flex flex-col h-auto space-y-2 w-32">
                    <TabsTrigger value="account" className="justify-start">
                      Account
                    </TabsTrigger>
                    <TabsTrigger value="password" className="justify-start">
                      Password
                    </TabsTrigger>
                    <TabsTrigger
                      value="notifications"
                      className="justify-start"
                    >
                      Notifications
                    </TabsTrigger>
                  </TabsList>
                  <div className="flex-1">
                    <TabsContent
                      value="account"
                      className="p-4 border rounded-md mt-0"
                    >
                      <h3 className="text-lg font-medium">Account Settings</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Manage your account settings and preferences.
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="password"
                      className="p-4 border rounded-md mt-0"
                    >
                      <h3 className="text-lg font-medium">Password Settings</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Change your password and security settings.
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="notifications"
                      className="p-4 border rounded-md mt-0"
                    >
                      <h3 className="text-lg font-medium">
                        Notification Settings
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Configure how you receive notifications.
                      </p>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
              <CodePopover
                code={`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function VerticalTabs() {
  return (
    <Tabs defaultValue="account" className="flex flex-row space-x-4">
      <TabsList className="flex flex-col h-auto space-y-2 w-32">
        <TabsTrigger value="account" className="justify-start">Account</TabsTrigger>
        <TabsTrigger value="password" className="justify-start">Password</TabsTrigger>
        <TabsTrigger value="notifications" className="justify-start">Notifications</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="account" className="p-4 border rounded-md mt-0">
          <h3 className="text-lg font-medium">Account Settings</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your account settings and preferences.
          </p>
        </TabsContent>
        <TabsContent value="password" className="p-4 border rounded-md mt-0">
          <h3 className="text-lg font-medium">Password Settings</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Change your password and security settings.
          </p>
        </TabsContent>
        <TabsContent value="notifications" className="p-4 border rounded-md mt-0">
          <h3 className="text-lg font-medium">Notification Settings</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Configure how you receive notifications.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  )
}`}
                language="tsx"
                buttonLabel="View Vertical Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* File Type Tabs */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            File Type Tabs
          </h3>
          <p className="leading-7">
            Use tabs to switch between different file types or views.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Tabs defaultValue="code" className="w-full">
                  <TabsList>
                    <TabsTrigger
                      value="code"
                      className="flex items-center gap-2"
                    >
                      <Code className="h-4 w-4" />
                      <span>Code</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="docs"
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Docs</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="images"
                      className="flex items-center gap-2"
                    >
                      <Image className="h-4 w-4" />
                      <span>Images</span>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="code"
                    className="p-4 border rounded-md mt-2"
                  >
                    <pre className="bg-muted p-2 rounded-md text-sm">
                      <code>{`function greet() {
  console.log("Hello, world!");
}`}</code>
                    </pre>
                  </TabsContent>
                  <TabsContent
                    value="docs"
                    className="p-4 border rounded-md mt-2"
                  >
                    <div className="prose prose-sm dark:prose-invert">
                      <h4>Documentation</h4>
                      <p>This is the documentation for the greet function.</p>
                      <ul>
                        <li>No parameters required</li>
                        <li>Outputs a greeting to the console</li>
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="images"
                    className="p-4 border rounded-md mt-2"
                  >
                    <div className="flex items-center justify-center h-32 bg-muted rounded-md">
                      <p className="text-muted-foreground">
                        Image preview would appear here
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              <CodePopover
                code={`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Code, FileText, Image } from "lucide-react"

export function FileTypeTabs() {
  return (
    <Tabs defaultValue="code" className="w-full">
      <TabsList>
        <TabsTrigger value="code" className="flex items-center gap-2">
          <Code className="h-4 w-4" />
          <span>Code</span>
        </TabsTrigger>
        <TabsTrigger value="docs" className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          <span>Docs</span>
        </TabsTrigger>
        <TabsTrigger value="images" className="flex items-center gap-2">
          <Image className="h-4 w-4" />
          <span>Images</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="code" className="p-4 border rounded-md mt-2">
        <pre className="bg-muted p-2 rounded-md text-sm">
          <code>{\`function greet() {
  console.log("Hello, world!");
}\`}</code>
        </pre>
      </TabsContent>
      <TabsContent value="docs" className="p-4 border rounded-md mt-2">
        <div className="prose prose-sm dark:prose-invert">
          <h4>Documentation</h4>
          <p>This is the documentation for the greet function.</p>
          <ul>
            <li>No parameters required</li>
            <li>Outputs a greeting to the console</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="images" className="p-4 border rounded-md mt-2">
        <div className="flex items-center justify-center h-32 bg-muted rounded-md">
          <p className="text-muted-foreground">Image preview would appear here</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}`}
                language="tsx"
                buttonLabel="View File Type Example"
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
          The Tabs component consists of several parts, each with their own
          props:
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
                <TableCell className="font-mono text-xs" rowSpan={4}>
                  Tabs
                </TableCell>
                <TableCell className="font-mono text-xs">
                  defaultValue?: string
                </TableCell>
                <TableCell>
                  The value of the tab that should be active when initially
                  rendered. Use when you don't need to control the state.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  value?: string
                </TableCell>
                <TableCell>
                  The controlled value of the tab to activate. Should be used
                  with onValueChange.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  onValueChange?: (value: string) ={">"} void
                </TableCell>
                <TableCell>Callback called when the value changes.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the tabs container.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  TabsList
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the tabs list.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  loop?: boolean
                </TableCell>
                <TableCell>
                  When true, keyboard navigation will loop from last tab to
                  first, and vice versa. Defaults to true.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  TabsTrigger
                </TableCell>
                <TableCell className="font-mono text-xs">
                  value: string
                </TableCell>
                <TableCell>
                  A unique value that associates the trigger with a content
                  component.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the tab trigger.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={3}>
                  TabsContent
                </TableCell>
                <TableCell className="font-mono text-xs">
                  value: string
                </TableCell>
                <TableCell>
                  A unique value that associates the content with a trigger
                  component.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  forceMount?: boolean
                </TableCell>
                <TableCell>
                  Used to force mounting when more control is needed. Useful
                  when controlling animation with React animation libraries.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the tab content.
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
          Follow these guidelines for effective use of the Tabs component:
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
                <li>Use clear, concise labels for tab triggers</li>
                <li>Group related content within tabs</li>
                <li>Use icons alongside text to enhance recognition</li>
                <li>Ensure tab content is of similar importance and nature</li>
                <li>Make the active tab visually distinct</li>
                <li>Keep the number of tabs manageable (typically 2-7)</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Use tabs for sequential content that should be viewed in order
                </li>
                <li>Hide critical information behind tabs</li>
                <li>Create too many tabs that overflow the container</li>
                <li>
                  Use tabs for content that needs to be compared side by side
                </li>
                <li>Nest tabs within tabs (creates complex UI)</li>
                <li>Use long tab labels that get truncated</li>
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
          The Tabs component follows WAI-ARIA guidelines to ensure
          accessibility:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">ARIA Roles</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The component uses <code>role="tablist"</code>,{" "}
              <code>role="tab"</code>, and <code>role="tabpanel"</code> to
              establish the proper semantic structure.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Keyboard Navigation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Users can navigate between tabs using the keyboard:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
              <li>
                <kbd>Tab</kbd>: Moves focus to the active tab and then to the
                tab panel
              </li>
              <li>
                <kbd>→</kbd> / <kbd>↓</kbd>: Moves focus to the next tab
              </li>
              <li>
                <kbd>←</kbd> / <kbd>↑</kbd>: Moves focus to the previous tab
              </li>
              <li>
                <kbd>Home</kbd>: Moves focus to the first tab
              </li>
              <li>
                <kbd>End</kbd>: Moves focus to the last tab
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/50 border-l-4 border-yellow-400 dark:border-yellow-500/50 p-4 rounded-r-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Accessibility Tip
              </h3>
            </div>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Ensure tab labels are descriptive and accurately represent the
              content they control. Avoid using generic labels like "Tab 1" or
              "Tab 2" as these don't provide context for screen reader users.
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
          Here are some advanced patterns for using the Tabs component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Controlled Tabs
          </h3>
          <p className="leading-7">Control the active tab programmatically:</p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to create controlled tabs where the
                  active tab can be changed programmatically.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ControlledTabs() {
  const [activeTab, setActiveTab] = useState("tab1")
  
  // Function to cycle through tabs
  const cycleTab = () => {
    if (activeTab === "tab1") setActiveTab("tab2")
    else if (activeTab === "tab2") setActiveTab("tab3")
    else setActiveTab("tab1")
  }
  
  return (
    <div className="space-y-4">
      <Button onClick={cycleTab}>
        Cycle Tab
      </Button>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium">Tab 1 Content</h3>
          <p className="text-sm text-muted-foreground mt-1">
            This is the content for Tab 1.
          </p>
        </TabsContent>
        <TabsContent value="tab2" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium">Tab 2 Content</h3>
          <p className="text-sm text-muted-foreground mt-1">
            This is the content for Tab 2.
          </p>
        </TabsContent>
        <TabsContent value="tab3" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium">Tab 3 Content</h3>
          <p className="text-sm text-muted-foreground mt-1">
            This is the content for Tab 3.
          </p>
        </TabsContent>
      </Tabs>
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
            Tabs with Custom Styling
          </h3>
          <p className="leading-7">
            Customize the appearance of tabs to match your design system:
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to create tabs with custom styling.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export function CustomStyledTabs() {
  return (
    <Tabs defaultValue="tab1" className="w-full">
      <TabsList className="flex h-auto p-0 bg-transparent space-x-2">
        {["tab1", "tab2", "tab3"].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className={cn(
              "px-4 py-2 rounded-t-lg border-b-2 data-[state=active]:border-primary",
              "data-[state=active]:bg-background data-[state=active]:text-foreground",
              "data-[state=inactive]:bg-muted/50 data-[state=inactive]:text-muted-foreground",
              "transition-all"
            )}
          >
            {tab === "tab1" ? "First Tab" : tab === "tab2" ? "Second Tab" : "Third Tab"}
          </TabsTrigger>
        ))}
      </TabsList>
      {["tab1", "tab2", "tab3"].map((tab) => (
        <TabsContent
          key={tab}
          value={tab}
          className="p-6 border rounded-b-lg mt-0 shadow-sm"
        >
          <h3 className="text-lg font-medium">
            {tab === "tab1" ? "First Tab" : tab === "tab2" ? "Second Tab" : "Third Tab"} Content
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            This is the content for {tab === "tab1" ? "the first tab" : tab === "tab2" ? "the second tab" : "the third tab"}.
          </p>
        </TabsContent>
      ))}
    </Tabs>
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
          <a href="/docs/data-display/skeleton">Previous: Skeleton Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/data-display/tooltip">Next: Tooltip Component</a>
        </Button>
      </div>
    </div>
  );
}
