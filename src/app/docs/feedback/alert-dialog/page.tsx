"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Info, AlertCircle, Trash2, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AlertDialogPage() {
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
          Alert Dialog
        </h1>
        <p className="text-lg text-muted-foreground">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Alert Dialog component is used to interrupt the user flow with an
          important message that requires acknowledgment or a decision. Unlike
          regular dialogs, alert dialogs are specifically designed for critical
          information that requires immediate attention.
        </p>
        <p className="leading-7">
          Alert dialogs should be used sparingly, as they disrupt the user
          experience by forcing interaction before the user can continue. They
          are most appropriate for confirming destructive actions, presenting
          critical warnings, or requiring explicit consent.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The basic Alert Dialog consists of a trigger element, content
          container, header with title and description, and a footer with action
          buttons.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Show Alert Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <CodePopover
              code={`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
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

        {/* Delete Confirmation */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Delete Confirmation
          </h3>
          <p className="leading-7">
            Use an alert dialog to confirm destructive actions like deleting
            items.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="destructive"
                      className="flex items-center gap-2 w-fit"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete Item
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Item</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this item? This action
                        cannot be undone and all associated data will be
                        permanently removed.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <CodePopover
                code={`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

export function DeleteConfirmation() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="flex items-center gap-2 w-fit">
          <Trash2 className="h-4 w-4" />
          Delete Item
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Item</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this item? This action cannot be undone and all associated data will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`}
                language="tsx"
                buttonLabel="View Delete Example"
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
            Use an alert dialog to warn users about potential issues or
            consequences.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 w-fit"
                    >
                      <AlertTriangle className="h-4 w-4" />
                      Show Warning
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        <AlertDialogTitle>
                          Warning: Unsaved Changes
                        </AlertDialogTitle>
                      </div>
                      <AlertDialogDescription>
                        You have unsaved changes that will be lost if you
                        navigate away from this page. Would you like to save
                        your changes before leaving?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Discard Changes</AlertDialogCancel>
                      <AlertDialogAction>Save Changes</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <CodePopover
                code={`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export function WarningAlert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 w-fit">
          <AlertTriangle className="h-4 w-4" />
          Show Warning
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertDialogTitle>Warning: Unsaved Changes</AlertDialogTitle>
          </div>
          <AlertDialogDescription>
            You have unsaved changes that will be lost if you navigate away from this page. Would you like to save your changes before leaving?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Discard Changes</AlertDialogCancel>
          <AlertDialogAction>Save Changes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`}
                language="tsx"
                buttonLabel="View Warning Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Programmatic Control */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Programmatic Control
          </h3>
          <p className="leading-7">
            Control the alert dialog programmatically using React state.
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to control the alert dialog
                  programmatically.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ProgrammaticAlert() {
  const [open, setOpen] = useState(false)
  
  const handleAction = () => {
    // Perform action here
    console.log("Action confirmed")
    setOpen(false)
  }
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Trigger Alert Dialog
      </Button>
      
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleAction}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}`}</code>
                </pre>
              </div>
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
          The Alert Dialog component consists of several parts, each with their
          own props:
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
                <TableCell className="font-mono text-xs" rowSpan={3}>
                  AlertDialog
                </TableCell>
                <TableCell className="font-mono text-xs">
                  open?: boolean
                </TableCell>
                <TableCell>
                  Controls the open state of the dialog when used as a
                  controlled component.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  onOpenChange?: (open: boolean) ={">"} void
                </TableCell>
                <TableCell>
                  Callback fired when the open state of the dialog changes.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  defaultOpen?: boolean
                </TableCell>
                <TableCell>
                  The default open state when initially rendered. Useful when
                  not controlling the open state.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  AlertDialogTrigger
                </TableCell>
                <TableCell className="font-mono text-xs">
                  asChild?: boolean
                </TableCell>
                <TableCell>
                  When true, the trigger will be rendered as its child element
                  instead of a button.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the trigger element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  AlertDialogContent
                </TableCell>
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
                  Additional CSS classes to apply to the content container.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  AlertDialogHeader
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the header container.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  AlertDialogFooter
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the footer container.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  AlertDialogTitle
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the title element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  AlertDialogDescription
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the description element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  AlertDialogAction
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the action button.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  AlertDialogCancel
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the cancel button.
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
          Follow these guidelines for effective use of the Alert Dialog
          component:
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
                <li>
                  Use alert dialogs for critical actions that require
                  confirmation
                </li>
                <li>
                  Keep the title clear and concise, describing the action or
                  decision
                </li>
                <li>
                  Provide descriptive button labels that indicate the action
                </li>
                <li>
                  Explain the consequences of the action in the description
                </li>
                <li>Position the destructive action button on the right</li>
                <li>
                  Use the destructive style for buttons that perform
                  irreversible actions
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Use alert dialogs for non-critical information or actions
                </li>
                <li>Use generic button labels like "OK" or "Yes/No"</li>
                <li>
                  Include multiple actions or complex forms in an alert dialog
                </li>
                <li>
                  Use alert dialogs for routine confirmations that interrupt
                  workflow
                </li>
                <li>
                  Use technical jargon or unclear language in the description
                </li>
                <li>
                  Overuse alert dialogs, which can lead to "dialog fatigue"
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
          The Alert Dialog component follows WAI-ARIA Alert and Message Dialog
          Pattern for accessibility:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">ARIA Roles</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The component uses <code>role="alertdialog"</code> to indicate
              that it contains an important message that requires the user's
              immediate attention.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Keyboard Navigation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Users can navigate the alert dialog using the keyboard:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
              <li>
                <kbd>Tab</kbd>: Moves focus between interactive elements
              </li>
              <li>
                <kbd>Escape</kbd>: Closes the dialog
              </li>
              <li>
                <kbd>Enter</kbd> / <kbd>Space</kbd>: Activates the focused
                button
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
              When the alert dialog opens, focus is automatically moved to the
              first focusable element inside it. When the dialog closes, focus
              returns to the element that triggered it. This ensures that
              keyboard users can navigate the dialog effectively.
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
          Here are some advanced patterns for using the Alert Dialog component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Styling
          </h3>
          <p className="leading-7">
            Customize the appearance of the alert dialog to match your design
            system:
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to create a custom styled alert dialog.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CustomStyledAlert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Custom Alert</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-primary/20 bg-background/95 backdrop-blur-sm">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl text-primary">
            Custom Alert Dialog
          </AlertDialogTitle>
          <AlertDialogDescription className="text-foreground/80">
            This is a custom styled alert dialog with a gradient border and backdrop blur effect.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-primary/20 hover:bg-primary/10">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Form Validation
          </h3>
          <p className="leading-7">
            Combine alert dialog with form validation for critical actions:
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to create an alert dialog with form
                  validation.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function AlertWithValidation() {
  const [open, setOpen] = useState(false)
  const [confirmation, setConfirmation] = useState("")
  const [error, setError] = useState("")
  
  const handleConfirm = () => {
    if (confirmation.toLowerCase() !== "delete") {
      setError("Please type 'delete' to confirm")
      return
    }
    
    // Perform delete action
    console.log("Item deleted")
    setOpen(false)
    setConfirmation("")
    setError("")
  }
  
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. Your account and all associated data will be permanently deleted.
            <br /><br />
            Type <span className="font-semibold">delete</span> to confirm.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-2 py-2">
          <Label htmlFor="confirmation">Confirmation</Label>
          <Input 
            id="confirmation"
            value={confirmation}
            onChange={(e) => {
              setConfirmation(e.target.value)
              setError("")
            }}
            className={error ? "border-destructive" : ""}
          />
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={(e) => {
              e.preventDefault()
              handleConfirm()
            }}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete Account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
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
          <a href="/docs/feedback/dialog">Next: Dialog Component</a>
        </Button>
      </div>
    </div>
  );
}
