"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Info, AlertCircle, Terminal, AlertTriangle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AlertPage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Alert
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a callout for user attention with important, contextual information.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Alert component is used to display important messages or feedback to users. 
          It's designed to be noticeable but not disruptive, allowing users to continue 
          their workflow while being informed of important information.
        </p>
        <p className="leading-7">
          Alerts can be used to provide contextual feedback about user actions, 
          system status updates, or to highlight important information that requires attention.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The basic Alert consists of a container with optional title and description.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
            </div>
            <CodePopover
              code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
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

        {/* Info Alert */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Info Alert
          </h3>
          <p className="leading-7">
            Use an info alert to provide helpful information to users.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/50">
                  <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <AlertTitle className="text-blue-800 dark:text-blue-300">Information</AlertTitle>
                  <AlertDescription className="text-blue-700 dark:text-blue-300">
                    Your password will expire in 7 days. Please update it before it expires.
                  </AlertDescription>
                </Alert>
              </div>
              <CodePopover
                code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export function InfoAlert() {
  return (
    <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/50">
      <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      <AlertTitle className="text-blue-800 dark:text-blue-300">Information</AlertTitle>
      <AlertDescription className="text-blue-700 dark:text-blue-300">
        Your password will expire in 7 days. Please update it before it expires.
      </AlertDescription>
    </Alert>
  )
}`}
                language="tsx"
                buttonLabel="View Info Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Warning Alert */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Warning Alert
          </h3>
          <p className="leading-7">
            Use a warning alert to highlight potential issues or actions that require caution.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/50">
                  <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <AlertTitle className="text-amber-800 dark:text-amber-300">Warning</AlertTitle>
                  <AlertDescription className="text-amber-700 dark:text-amber-300">
                    Your storage is almost full. Consider upgrading your plan or deleting unused files.
                  </AlertDescription>
                </Alert>
              </div>
              <CodePopover
                code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export function WarningAlert() {
  return (
    <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/50">
      <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
      <AlertTitle className="text-amber-800 dark:text-amber-300">Warning</AlertTitle>
      <AlertDescription className="text-amber-700 dark:text-amber-300">
        Your storage is almost full. Consider upgrading your plan or deleting unused files.
      </AlertDescription>
    </Alert>
  )
}`}
                language="tsx"
                buttonLabel="View Warning Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Error Alert */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Error Alert
          </h3>
          <p className="leading-7">
            Use an error alert to communicate critical issues that need immediate attention.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/50">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  <AlertTitle className="text-red-800 dark:text-red-300">Error</AlertTitle>
                  <AlertDescription className="text-red-700 dark:text-red-300">
                    There was an error processing your payment. Please check your payment details and try again.
                  </AlertDescription>
                </Alert>
              </div>
              <CodePopover
                code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function ErrorAlert() {
  return (
    <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/50">
      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
      <AlertTitle className="text-red-800 dark:text-red-300">Error</AlertTitle>
      <AlertDescription className="text-red-700 dark:text-red-300">
        There was an error processing your payment. Please check your payment details and try again.
      </AlertDescription>
    </Alert>
  )
}`}
                language="tsx"
                buttonLabel="View Error Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Success Alert */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Success Alert
          </h3>
          <p className="leading-7">
            Use a success alert to confirm that an action has been completed successfully.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/50">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertTitle className="text-green-800 dark:text-green-300">Success</AlertTitle>
                  <AlertDescription className="text-green-700 dark:text-green-300">
                    Your profile has been updated successfully. The changes are now live.
                  </AlertDescription>
                </Alert>
              </div>
              <CodePopover
                code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from "lucide-react"

export function SuccessAlert() {
  return (
    <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/50">
      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
      <AlertTitle className="text-green-800 dark:text-green-300">Success</AlertTitle>
      <AlertDescription className="text-green-700 dark:text-green-300">
        Your profile has been updated successfully. The changes are now live.
      </AlertDescription>
    </Alert>
  )
}`}
                language="tsx"
                buttonLabel="View Success Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Command Alert */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Command Alert
          </h3>
          <p className="leading-7">
            Use a command alert to display terminal commands or code snippets.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    <p>
                      You can install this component by running the following command:
                    </p>
                    <pre className="mt-2 w-full rounded-md bg-slate-950 p-2 font-mono text-xs text-white">
                      <code>npm install @/components/ui/alert</code>
                    </pre>
                  </AlertDescription>
                </Alert>
              </div>
              <CodePopover
                code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export function CommandAlert() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        <p>
          You can install this component by running the following command:
        </p>
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-2 font-mono text-xs text-white">
          <code>npm install @/components/ui/alert</code>
        </pre>
      </AlertDescription>
    </Alert>
  )
}`}
                language="tsx"
                buttonLabel="View Command Example"
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
          The Alert component consists of several parts, each with their own props:
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
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  Alert
                </TableCell>
                <TableCell className="font-mono text-xs">
                  variant?: "default" | "destructive"
                </TableCell>
                <TableCell>
                  Controls the visual style of the alert. Defaults to "default".
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the alert container.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  AlertTitle
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the alert title.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  AlertDescription
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the alert description.
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
          Follow these guidelines for effective use of the Alert component:
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
                <li>Use appropriate colors and icons to indicate the alert type (info, warning, error, success)</li>
                <li>Keep alert messages concise and clear</li>
                <li>Provide actionable information when possible</li>
                <li>Use alerts sparingly to avoid overwhelming users</li>
                <li>Position alerts where they are easily noticeable but not disruptive</li>
                <li>Include a title that summarizes the alert message</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use alerts for non-important information</li>
                <li>Create alerts with vague or unhelpful messages</li>
                <li>Overuse alerts, which can lead to alert fatigue</li>
                <li>Use inappropriate alert types (e.g., success for errors)</li>
                <li>Create alerts with excessive text</li>
                <li>Position alerts where they might be easily missed</li>
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
          The Alert component is designed with accessibility in mind:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">ARIA Roles</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The Alert component uses <code>role="alert"</code> to ensure screen readers announce the alert content when it appears.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Color Contrast</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Ensure that the text and background colors used in alerts have sufficient contrast to be readable by users with visual impairments.
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/50 border-l-4 border-yellow-400 dark:border-yellow-500/50 p-4 rounded-r-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Accessibility Tip
              </h3>
            </div>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              When using icons in alerts, ensure they have appropriate ARIA labels or are decorative. Icons should enhance the message, not replace text content.
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
          Here are some advanced patterns for using the Alert component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Dismissible Alert
          </h3>
          <p className="leading-7">
            Create a dismissible alert by combining the Alert component with state management:
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to create a dismissible alert.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"

export function DismissibleAlert() {
  const [isVisible, setIsVisible] = useState(true)
  const [showButton, setShowButton] = useState(false)
  
  const handleDismiss = () => {
    setIsVisible(false)
  }
  
  const handleReset = () => {
    setIsVisible(true)
  }
  
  return (
    <div className="space-y-4">
      {isVisible ? (
        <Alert className="relative">
          <AlertTitle>Important Update</AlertTitle>
          <AlertDescription>
            This is an important notification about your account.
          </AlertDescription>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-6 w-6"
            onClick={handleDismiss}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </Alert>
      ) : (
        <Button onClick={handleReset}>Show Alert</Button>
      )}
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
            Alert with Action
          </h3>
          <p className="leading-7">
            Add interactive elements to alerts to allow users to take action:
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to create an alert with action buttons.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export function AlertWithAction() {
  return (
    <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/50">
      <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
      <AlertTitle className="text-amber-800 dark:text-amber-300">Your trial is ending soon</AlertTitle>
      <AlertDescription className="text-amber-700 dark:text-amber-300">
        <div className="flex flex-col space-y-4">
          <p>Your trial period will end in 3 days. Upgrade now to continue enjoying all features.</p>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="border-amber-600 text-amber-600 hover:bg-amber-100 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-900/50">
              Learn more
            </Button>
            <Button size="sm" className="bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600">
              Upgrade now
            </Button>
          </div>
        </div>
      </AlertDescription>
    </Alert>
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
          <a href="/docs/feedback/accordion">Previous: Accordion Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/feedback/alert-dialog">Next: Alert Dialog Component</a>
        </Button>
      </div>
    </div>
  );
}