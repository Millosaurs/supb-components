"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  Settings,
  User,
  Plus,
  Trash,
  X,
  Save,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CodePopover } from "@/components/code-popover";

export default function DialogPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

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
          Dialog
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
          The Dialog component is used to create accessible modal dialogs that
          appear on top of the page content. Dialogs are useful for capturing
          user attention and requiring an immediate response or acknowledgment
          before they can continue interacting with the page.
        </p>
        <p className="leading-7">
          Our Dialog component is built on Radix UI's Dialog primitive and
          follows WAI-ARIA guidelines for accessibility. It includes support for
          keyboard navigation, focus management, and screen reader
          announcements.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          A basic dialog requires at minimum a trigger element, content
          container, title, description, and a way to close the dialog.
        </p>

        <div className="rounded-lg border">
          <div className="p-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>
                    This is a description of the dialog's purpose. It provides
                    context for the user.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-muted-foreground">
                    Dialog content goes here. You can include any elements you
                    need.
                  </p>
                </div>
                <DialogFooter>
                  <Button>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Separator />

          <div className="p-4 bg-muted/50">
            <Tabs defaultValue="tsx" className="w-full">
              <TabsList className="mb-2">
                <TabsTrigger value="tsx">TSX</TabsTrigger>
                <TabsTrigger value="jsx">JSX</TabsTrigger>
              </TabsList>
              <div className="relative">
                <TabsContent value="tsx" className="mt-0">
                  <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                    <CodePopover
                      code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of the dialog's purpose. It provides context for the user.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-muted-foreground">
            Dialog content goes here. You can include any elements you need.
          </p>
        </div>
        <DialogFooter>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}
                      language="tsx"
                      buttonLabel="View Code"
                      showLineNumbers={true}
                    />
                  </pre>
                  <button
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                    onClick={() =>
                      copyToClipboard(
                        `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of the dialog's purpose. It provides context for the user.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-muted-foreground">
            Dialog content goes here. You can include any elements you need.
          </p>
        </div>
        <DialogFooter>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
                        "basic-dialog"
                      )
                    }
                  >
                    {copied["basic-dialog"] ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </TabsContent>
                <TabsContent value="jsx" className="mt-0">
                  <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                    <code>{`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of the dialog's purpose. It provides context for the user.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-muted-foreground">
            Dialog content goes here. You can include any elements you need.
          </p>
        </div>
        <DialogFooter>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}</code>
                  </pre>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Dialog Variations */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Dialog Variations
        </h2>

        {/* Controlled Dialog */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Controlled Dialog
          </h3>
          <p className="leading-7">
            You can control the open state of the dialog programmatically using
            the <code className="text-xs font-mono">open</code> and{" "}
            <code className="text-xs font-mono">onOpenChange</code> props.
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4 items-start">
                <Button onClick={() => setOpen(true)}>
                  Open Controlled Dialog
                </Button>
                <p className="text-sm text-muted-foreground">
                  Dialog is {open ? "open" : "closed"}
                </p>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Controlled Dialog</DialogTitle>
                      <DialogDescription>
                        This dialog's state is controlled programmatically.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-muted-foreground">
                        You can control when the dialog opens and closes using
                        state.
                      </p>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setOpen(false)}>
                        Close
                      </Button>
                      <Button onClick={() => setOpen(false)}>Save</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50">
              <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                <code>{`import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function ControlledDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Controlled Dialog</Button>
      <p className="text-sm text-muted-foreground">
        Dialog is {open ? "open" : "closed"}
      </p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Dialog</DialogTitle>
            <DialogDescription>
              This dialog's state is controlled programmatically.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-muted-foreground">
              You can control when the dialog opens and closes using state.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Form Dialog */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Form Dialog
          </h3>
          <p className="leading-7">
            Dialogs are commonly used to present forms that require user input.
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <Dialog open={formOpen} onOpenChange={setFormOpen}>
                <DialogTrigger asChild>
                  <Button>Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue="John Doe"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue="@johndoe"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => setFormOpen(false)}>
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50">
              <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                <code>{`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function ProfileFormDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@johndoe" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Confirmation Dialog */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Confirmation Dialog
          </h3>
          <p className="leading-7">
            Use a confirmation dialog to prompt users before they take a
            significant or destructive action.
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
                <DialogTrigger asChild>
                  <Button variant="destructive">Delete Account</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setConfirmOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        // Handle delete action
                        setConfirmOpen(false);
                      }}
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50">
              <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                <code>{`import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"

export function ConfirmationDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button 
            variant="destructive" 
            onClick={() => {
              // Handle delete action
              setOpen(false);
            }}
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}</code>
              </pre>
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
          The Dialog component is composed of several parts that work together
          to create a fully accessible dialog.
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
                <TableCell className="font-mono text-xs">Dialog</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">open?:</span> boolean
                    </p>
                    <p>
                      <span className="font-semibold">onOpenChange?:</span>{" "}
                      (open: boolean) ={">"} void
                    </p>
                    <p>
                      <span className="font-semibold">modal?:</span> boolean
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The root component that wraps all dialog parts. When{" "}
                  <code className="text-xs font-mono">modal</code> is true
                  (default), interaction with outside elements will be disabled
                  and only dialog content will be visible to screen readers.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  DialogTrigger
                </TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">asChild?:</span> boolean
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The button that opens the dialog. By default, it renders a
                  button; add <code className="text-xs font-mono">asChild</code>{" "}
                  to customize.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  DialogContent
                </TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">children:</span>{" "}
                      React.ReactNode
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The component that contains dialog content. It handles
                  accessibility attributes like
                  <code className="text-xs font-mono">
                    aria-labelledby
                  </code> and{" "}
                  <code className="text-xs font-mono">aria-describedby</code>.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  DialogHeader
                </TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  Contains dialog title and description. Styled for proper
                  spacing.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">DialogTitle</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The title of the dialog, linked via{" "}
                  <code className="text-xs font-mono">aria-labelledby</code>.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  DialogDescription
                </TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The description of the dialog, linked via{" "}
                  <code className="text-xs font-mono">aria-describedby</code>.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  DialogFooter
                </TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The footer of the dialog, typically contains action buttons.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">DialogClose</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">asChild?:</span> boolean
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  A button that closes the dialog. Can be customized with{" "}
                  <code className="text-xs font-mono">asChild</code>.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          The Dialog components are built on top of{" "}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/dialog"
            className="text-primary underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Radix UI Dialog
          </a>{" "}
          and inherit its properties.
        </p>
      </div>

      {/* Accessibility */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <p className="leading-7">
          The Dialog component follows WAI-ARIA guidelines to ensure
          accessibility:
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Focus Management</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Focus is automatically trapped within the dialog when opened,
                and returns to the trigger when closed.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-mono text-xs">Escape</span> key closes the
                dialog, and <span className="font-mono text-xs">Tab</span> key
                navigates through focusable elements.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">ARIA Attributes</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Proper <code className="text-xs font-mono">role="dialog"</code>,{" "}
                <code className="text-xs font-mono">aria-labelledby</code>, and{" "}
                <code className="text-xs font-mono">aria-describedby</code>{" "}
                attributes are automatically set.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">
                  Screen Reader Announcements
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Content outside the dialog is hidden from screen readers when
                the dialog is open.
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
              Always provide a descriptive title and sufficient context in the
              dialog description. For form dialogs, ensure all form controls
              have proper labels.
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
          Follow these guidelines to ensure effective use of the Dialog
          component:
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">When to Use</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>
                  Use for important actions that require attention and user
                  confirmation
                </li>
                <li>
                  Use for forms that need to be overlaid on the current context
                </li>
                <li>
                  Use for temporary, contextual interfaces like settings or
                  details
                </li>
                <li>Keep dialogs focused on a single task or topic</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Use for non-essential information or frequent interactions
                </li>
                <li>
                  Use when there are many fields or complex forms (consider a
                  separate page)
                </li>
                <li>Stack multiple dialogs on top of each other</li>
                <li>
                  Use for complex workflows with multiple steps (use a wizard or
                  dedicated page)
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8">Content Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Use clear, descriptive titles that indicate the purpose</li>
                <li>Keep content concise and focused</li>
                <li>
                  Use button labels that clearly indicate the action (e.g.,
                  "Save Changes" not "OK")
                </li>
                <li>
                  Place the primary action button on the right (in LTR layouts)
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Use vague or generic titles like "Alert" or "Information"
                </li>
                <li>
                  Overload dialogs with too much content or multiple actions
                </li>
                <li>Use ambiguous button labels like "OK" or "Yes"</li>
                <li>Create dialogs without a clear way to dismiss them</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8">User Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Provide visual feedback when actions are completed</li>
                <li>
                  Ensure dialogs are responsive and work well on all device
                  sizes
                </li>
                <li>
                  Consider providing keyboard shortcuts for common actions
                </li>
                <li>Position dialogs in the center of the viewport</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Position dialogs partially off-screen or in hard-to-reach
                  areas
                </li>
                <li>
                  Close dialogs without user action when forms have unsaved
                  changes
                </li>
                <li>
                  Use dialogs that have no clear relation to the user's current
                  task
                </li>
                <li>Overuse animations that delay the dialog's appearance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs">Back to Documentation</a>
        </Button>
        <Button asChild>
          <a href="/docs/overlay/drawer">Next: Drawer Component</a>
        </Button>
      </div>
    </div>
  );
}
