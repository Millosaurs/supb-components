"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import { toast } from "sonner";
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
  CheckCircle,
  XCircle,
  Bell,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SonnerPage() {
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
          Sonner
        </h1>
        <p className="text-lg text-muted-foreground">
          An opinionated toast component for React with beautiful defaults.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Sonner is a toast component for React that provides a simple and elegant way to display notifications to users. 
          It offers a clean design with smooth animations and a variety of customization options.
        </p>
        <p className="leading-7">
          Toasts are non-disruptive messages that appear temporarily on the screen to provide feedback or information to users.
          They're perfect for displaying success messages, errors, warnings, or any other brief notifications.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          To use Sonner, you need to add the Toaster component to your application and then call the toast function to display notifications.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Button
                onClick={() => toast("This is a toast notification")}
              >
                Show Toast
              </Button>
            </div>
            <CodePopover
              code={`import { toast } from "sonner"

export function BasicToast() {
  return (
    <Button
      onClick={() => toast("This is a toast notification")}
    >
      Show Toast
    </Button>
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

        {/* Toast Types */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Toast Types
          </h3>
          <p className="leading-7">
            Sonner provides different types of toasts for various scenarios.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    onClick={() => toast.success("Operation completed successfully")}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Success
                  </Button>
                  <Button
                    onClick={() => toast.error("An error occurred")}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <XCircle className="mr-2 h-4 w-4" />
                    Error
                  </Button>
                  <Button
                    onClick={() => toast.info("Here's some information")}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Info className="mr-2 h-4 w-4" />
                    Info
                  </Button>
                  <Button
                    onClick={() => toast.warning("Proceed with caution")}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Warning
                  </Button>
                </div>
              </div>
              <CodePopover
                code={`import { toast } from "sonner"
import { CheckCircle, XCircle, Info, AlertCircle } from "lucide-react"

export function ToastTypes() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        onClick={() => toast.success("Operation completed successfully")}
        className="bg-green-600 hover:bg-green-700"
      >
        <CheckCircle className="mr-2 h-4 w-4" />
        Success
      </Button>
      <Button
        onClick={() => toast.error("An error occurred")}
        className="bg-red-600 hover:bg-red-700"
      >
        <XCircle className="mr-2 h-4 w-4" />
        Error
      </Button>
      <Button
        onClick={() => toast.info("Here's some information")}
        className="bg-blue-600 hover:bg-blue-700"
      >
        <Info className="mr-2 h-4 w-4" />
        Info
      </Button>
      <Button
        onClick={() => toast.warning("Proceed with caution")}
        className="bg-amber-600 hover:bg-amber-700"
      >
        <AlertCircle className="mr-2 h-4 w-4" />
        Warning
      </Button>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Types Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Custom Content */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Content
          </h3>
          <p className="leading-7">
            You can customize toast content with rich elements and styling.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Button
                  onClick={() => 
                    toast(
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4" />
                        <div>
                          <p className="font-medium">New Notification</p>
                          <p className="text-sm text-muted-foreground">You have a new message</p>
                        </div>
                      </div>
                    )
                  }
                >
                  Custom Toast
                </Button>
              </div>
              <CodePopover
                code={`import { toast } from "sonner"
import { Bell } from "lucide-react"

export function CustomToast() {
  return (
    <Button
      onClick={() => 
        toast(
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <div>
              <p className="font-medium">New Notification</p>
              <p className="text-sm text-muted-foreground">You have a new message</p>
            </div>
          </div>
        )
      }
    >
      Custom Toast
    </Button>
  )
}`}
                language="tsx"
                buttonLabel="View Custom Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Promise Toast */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Promise Toast
          </h3>
          <p className="leading-7">
            Sonner can display loading, success, and error states for async operations.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Button
                  onClick={() => {
                    toast.promise(
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          Math.random() > 0.3 ? resolve('Success') : reject('Error');
                        }, 2000);
                      }),
                      {
                        loading: 'Loading...',
                        success: 'Operation completed successfully',
                        error: 'Operation failed',
                      }
                    );
                  }}
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Start Operation
                </Button>
              </div>
              <CodePopover
                code={`import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export function PromiseToast() {
  return (
    <Button
      onClick={() => {
        toast.promise(
          new Promise((resolve, reject) => {
            setTimeout(() => {
              Math.random() > 0.3 ? resolve('Success') : reject('Error');
            }, 2000);
          }),
          {
            loading: 'Loading...',
            success: 'Operation completed successfully',
            error: 'Operation failed',
          }
        );
      }}
    >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Start Operation
    </Button>
  )
}`}
                language="tsx"
                buttonLabel="View Promise Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Toast with Actions */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Toast with Actions
          </h3>
          <p className="leading-7">
            Add interactive buttons to your toasts for user actions.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Button
                  onClick={() => {
                    toast("File uploaded successfully", {
                      description: "Your file has been uploaded and is now processing.",
                      action: {
                        label: "View File",
                        onClick: () => console.log("View file clicked"),
                      },
                      cancel: {
                        label: "Dismiss",
                        onClick: () => console.log("Dismissed"),
                      },
                    });
                  }}
                >
                  Toast with Actions
                </Button>
              </div>
              <CodePopover
                code={`import { toast } from "sonner"

export function ToastWithActions() {
  return (
    <Button
      onClick={() => {
        toast("File uploaded successfully", {
          description: "Your file has been uploaded and is now processing.",
          action: {
            label: "View File",
            onClick: () => console.log("View file clicked"),
          },
          cancel: {
            label: "Dismiss",
            onClick: () => console.log("Dismissed"),
          },
        });
      }}
    >
      Toast with Actions
    </Button>
  )
}`}
                language="tsx"
                buttonLabel="View Actions Example"
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
          Sonner provides a variety of options for customizing toasts:
        </p>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Component/Function</TableHead>
                <TableHead className="w-[200px]">Prop/Parameter</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={8}>
                  Toaster
                </TableCell>
                <TableCell className="font-mono text-xs">
                  position?: string
                </TableCell>
                <TableCell>
                  Position of the toasts. Options: 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-center', 'bottom-center'. Default: 'bottom-right'.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  duration?: number
                </TableCell>
                <TableCell>
                  Default duration in milliseconds for toasts. Default: 4000.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  theme?: string
                </TableCell>
                <TableCell>
                  Theme for the toasts. Options: 'light', 'dark', 'system'. Default: 'system'.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  richColors?: boolean
                </TableCell>
                <TableCell>
                  Use rich colors for the toasts. Default: false.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  expand?: boolean
                </TableCell>
                <TableCell>
                  Expand toasts on hover. Default: false.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  closeButton?: boolean
                </TableCell>
                <TableCell>
                  Show close button on toasts. Default: false.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  offset?: string | number
                </TableCell>
                <TableCell>
                  Offset from the edges of the screen. Default: '32px'.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the toaster container.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={8}>
                  toast()
                </TableCell>
                <TableCell className="font-mono text-xs">
                  message: string | ReactNode
                </TableCell>
                <TableCell>
                  The content of the toast. Can be a string or a React component.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  options?: object
                </TableCell>
                <TableCell>
                  Configuration options for the toast.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  options.description?: string
                </TableCell>
                <TableCell>
                  Additional description text for the toast.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  options.duration?: number
                </TableCell>
                <TableCell>
                  Duration in milliseconds for this specific toast.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  options.icon?: ReactNode
                </TableCell>
                <TableCell>
                  Custom icon to display with the toast.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  options.id?: string | number
                </TableCell>
                <TableCell>
                  Unique identifier for the toast. Useful for updating or dismissing specific toasts.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  options.action?: object
                </TableCell>
                <TableCell>
                  Action button configuration with label and onClick handler.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  options.cancel?: object
                </TableCell>
                <TableCell>
                  Cancel button configuration with label and onClick handler.
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
          Follow these guidelines for effective use of the Sonner toast component:
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
                <li>Keep toast messages concise and clear</li>
                <li>Use appropriate toast types for different scenarios (success, error, etc.)</li>
                <li>Include actionable information when relevant</li>
                <li>Use consistent positioning throughout your application</li>
                <li>Set appropriate duration based on message importance</li>
                <li>Use promise toasts for async operations to show progress</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Overuse toasts for non-important information</li>
                <li>Display multiple toasts simultaneously for related actions</li>
                <li>Use toasts for critical errors that require immediate attention</li>
                <li>Include excessive text in toast messages</li>
                <li>Set extremely short durations that don't allow users to read the message</li>
                <li>Use toasts for complex interactions that require multiple steps</li>
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
          Sonner is designed with accessibility in mind:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">ARIA Roles</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Sonner toasts use appropriate ARIA roles to ensure screen readers announce toast messages.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Keyboard Navigation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Users can dismiss toasts using the keyboard, and action buttons are properly focusable.
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
              When using custom content in toasts, ensure all interactive elements are properly labeled and have sufficient contrast. Consider increasing the duration for toasts with more content to give users enough time to read.
            </p>
          </div>
        </div>
      </div>

      {/* Setup */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Setup
        </h2>
        <p className="leading-7">
          To use Sonner in your application, you need to install it and add the Toaster component to your layout:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Installation
          </h3>
          <pre className="p-4 rounded-md bg-muted overflow-x-auto">
            <code>npm install sonner</code>
          </pre>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">
            Adding to Your Layout
          </h3>
          <pre className="p-4 rounded-md bg-muted overflow-x-auto">
            <code>{`// In your layout component
import { Toaster } from 'sonner'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`}</code>
          </pre>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">
            Custom Theme
          </h3>
          <pre className="p-4 rounded-md bg-muted overflow-x-auto">
            <code>{`// Custom theme configuration
<Toaster
  theme="system" // 'light', 'dark', or 'system'
  position="bottom-right"
  richColors
  closeButton
  duration={5000}
/>`}</code>
          </pre>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/feedback/alert-dialog">Previous: Alert Dialog Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/feedback/toast">Next: Toast Component</a>
        </Button>
      </div>
    </div>
  );
}