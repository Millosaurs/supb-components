"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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
  Moon,
  Sun,
  BellRing,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SwitchPage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Switch</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows users to toggle between checked and not checked.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Switch component is a UI control that allows users to toggle between two states: on and off. 
          It's commonly used for enabling or disabling features, toggling settings, or changing modes.
        </p>
        <p className="leading-7">
          Our Switch component is built with Radix UI primitives and follows WAI-ARIA best practices.
          It supports keyboard navigation, focus management, and screen reader announcements.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The default Switch component provides a simple, accessible toggle control.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Switch id="airplane-mode" />
            </div>
            <CodePopover
              code={`import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return <Switch id="airplane-mode" />
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
            Add a label to provide context for the switch.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode-label" />
                  <label
                    htmlFor="airplane-mode-label"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Airplane Mode
                  </label>
                </div>
              </div>
              <CodePopover
                code={`import { Switch } from "@/components/ui/switch"

export function SwitchWithLabel() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label
        htmlFor="airplane-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
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

        {/* Disabled State */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Disabled State
          </h3>
          <p className="leading-7">
            Switch can be disabled to prevent user interaction.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="enabled-switch" />
                    <label
                      htmlFor="enabled-switch"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Enabled
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="disabled-switch" disabled />
                    <label
                      htmlFor="disabled-switch"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Disabled
                    </label>
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { Switch } from "@/components/ui/switch"

export function DisabledSwitch() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="enabled-switch" />
        <label
          htmlFor="enabled-switch"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Enabled
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-switch" disabled />
        <label
          htmlFor="disabled-switch"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled
        </label>
      </div>
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

        {/* Form Integration */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Form Integration
          </h3>
          <p className="leading-7">
            Switch can be integrated into forms for collecting user preferences.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Notification Settings</h4>
                    <p className="text-sm text-muted-foreground">
                      Configure how you receive notifications.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="email-notifications" />
                    <label
                      htmlFor="email-notifications"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email Notifications
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="push-notifications" />
                    <label
                      htmlFor="push-notifications"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Push Notifications
                    </label>
                  </div>
                  <Button type="submit" className="mt-4">
                    Save Preferences
                  </Button>
                </form>
              </div>
              <CodePopover
                code={`import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export function SwitchForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Notification Settings</h4>
        <p className="text-sm text-muted-foreground">
          Configure how you receive notifications.
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="email-notifications" />
        <label
          htmlFor="email-notifications"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email Notifications
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="push-notifications" />
        <label
          htmlFor="push-notifications"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Push Notifications
        </label>
      </div>
      <Button type="submit" className="mt-4">
        Save Preferences
      </Button>
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

        {/* With Icons */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Icons
          </h3>
          <p className="leading-7">
            Add icons to provide visual context for the switch.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <Sun className="h-4 w-4 text-muted-foreground" />
                    <Switch id="theme-switch" />
                    <Moon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <Switch id="notifications-switch" />
                    <BellRing className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { Switch } from "@/components/ui/switch"
import { Sun, Moon, Bell, BellRing } from "lucide-react"

export function SwitchWithIcons() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <Sun className="h-4 w-4 text-muted-foreground" />
        <Switch id="theme-switch" />
        <Moon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="flex items-center space-x-2">
        <Bell className="h-4 w-4 text-muted-foreground" />
        <Switch id="notifications-switch" />
        <BellRing className="h-4 w-4 text-muted-foreground" />
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

        {/* Controlled Example */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Controlled Example
          </h3>
          <p className="leading-7">
            Control the switch state programmatically.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="controlled-switch" />
                    <label
                      htmlFor="controlled-switch"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Airplane Mode
                    </label>
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export function ControlledSwitch() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <label
        htmlFor="airplane-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode {checked ? "On" : "Off"}
      </label>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Controlled Example"
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
          The Switch component provides a way to toggle between two states.
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
                  Whether the switch is checked or not. Use with <code>onCheckedChange</code> for controlled usage.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">defaultChecked</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell>
                  The default state of the switch when initially rendered. Use for uncontrolled usage.
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
                  When true, prevents the user from interacting with the switch.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">required</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell>
                  When true, indicates that the user must check the switch before the form can be submitted.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">name</TableCell>
                <TableCell className="font-mono text-xs">string</TableCell>
                <TableCell>
                  The name of the switch. Submitted with its owning form as part of a name/value pair.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">value</TableCell>
                <TableCell className="font-mono text-xs">string</TableCell>
                <TableCell>
                  The value given as data when submitted with a name.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          The Switch component also accepts all standard HTML attributes for the <code>button</code> element.
        </p>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage Guidelines
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Switch component:
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
                <li>Use switches for binary settings (on/off, enabled/disabled)</li>
                <li>Provide clear labels that describe what the switch controls</li>
                <li>Use switches for settings that take immediate effect</li>
                <li>Group related switches together</li>
                <li>Consider using a default state that is the safest or most common option</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use switches for actions that should be buttons</li>
                <li>Use switches for options that require confirmation before taking effect</li>
                <li>Use switches without clear labels</li>
                <li>Use switches for mutually exclusive options (use radio buttons instead)</li>
                <li>Use switches when a checkbox would be more appropriate (e.g., for agreement to terms)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Switch vs. Checkbox vs. Toggle
          </h3>
          <p className="leading-7">
            While switches, checkboxes, and toggles may seem similar, they have distinct use cases:
          </p>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead>Best Used For</TableHead>
                  <TableHead>Examples</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Switch</TableCell>
                  <TableCell>Binary settings with immediate effect</TableCell>
                  <TableCell>Dark mode, notifications on/off, airplane mode</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Checkbox</TableCell>
                  <TableCell>Selection, agreement, or optional items</TableCell>
                  <TableCell>Terms agreement, multi-select lists, "Remember me"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Toggle</TableCell>
                  <TableCell>UI state changes or mode selection</TableCell>
                  <TableCell>Bold/italic text, showing/hiding panels, view modes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <p className="leading-7">
          The Switch component follows WAI-ARIA guidelines to ensure accessibility.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Users can navigate to switches using the <kbd>Tab</kbd> key and toggle them using the <kbd>Space</kbd> key.
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
              Always associate labels with switches using the <code>htmlFor</code> attribute that matches the switch's <code>id</code>. This ensures that users can click on the label to toggle the switch, and screen readers can announce the label when the switch is focused.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/forms/toggle">Previous: Toggle Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/forms/slider">Next: Slider Component</a>
        </Button>
      </div>
    </div>
  );
}