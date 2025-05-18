"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Info, AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DialogPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Dialog
        </h1>
        <p className="text-lg text-muted-foreground">
          A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Dialog component provides a way to create accessible modal dialogs that interrupt the user workflow to deliver important information or request user input. Dialogs appear over the page content and disable interactions with the rest of the page until they are dismissed.
        </p>
        <p className="leading-7">
          Dialogs are commonly used for confirmations, alerts, forms, and other interactive elements that require immediate attention.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          A basic dialog consists of a trigger element and the dialog content. Here's a simple example:
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
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
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
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
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
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

        {/* Alert Dialog */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Alert Dialog
          </h3>
          <p className="leading-7">
            An alert dialog is used to display important information that requires acknowledgment.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex flex-row justify-end gap-2 sm:justify-end">
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button variant="destructive">Delete Account</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <CodePopover
                code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function AlertDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row justify-end gap-2 sm:justify-end">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}
                language="tsx"
                buttonLabel="View Alert Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Custom Dialog */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Dialog
          </h3>
          <p className="leading-7">
            You can customize the appearance and behavior of dialogs to match your design system.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Show Custom Dialog</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] rounded-lg border-0 shadow-lg">
                    <div className="absolute right-4 top-4">
                      <DialogClose asChild>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </Button>
                      </DialogClose>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 p-6">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Info className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold">Welcome to our app!</h2>
                      <p className="text-center text-sm text-muted-foreground">
                        We're excited to have you on board. This is a custom styled dialog
                        that you can use as a template for your own designs.
                      </p>
                      <Button className="mt-4 w-full">Get Started</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <CodePopover
                code={`import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Info, X } from "lucide-react"

export function CustomDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Show Custom Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-lg border-0 shadow-lg">
        <div className="absolute right-4 top-4">
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 p-6">
          <div className="rounded-full bg-primary/10 p-3">
            <Info className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">Welcome to our app!</h2>
          <p className="text-center text-sm text-muted-foreground">
            We're excited to have you on board. This is a custom styled dialog
            that you can use as a template for your own designs.
          </p>
          <Button className="mt-4 w-full">Get Started</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}`}
                language="tsx"
                buttonLabel="View Custom Example"
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
          The Dialog component consists of several parts, each with their own props and functionality.
        </p>

        {/* Dialog */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Dialog
          </h3>
          <p className="leading-7">
            The main container component that provides context for the dialog.
          </p>

          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>open</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    Controls the open state of the dialog.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>onOpenChange</TableCell>
                  <TableCell>function</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    Callback function called when the open state changes.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>modal</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>true</TableCell>
                  <TableCell>
                    Whether to render the dialog as a modal that blocks interaction with the rest of the page.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* DialogTrigger */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            DialogTrigger
          </h3>
          <p className="leading-7">
            The button that opens the dialog.
          </p>

          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>asChild</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>
                    When true, the trigger will be rendered as its child element.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* DialogContent */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            DialogContent
          </h3>
          <p className="leading-7">
            The component that contains the content of the dialog.
          </p>

          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>forceMount</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>
                    Force mounting when used within a conditional context.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>onEscapeKeyDown</TableCell>
                  <TableCell>function</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    Event handler called when the escape key is down.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>onPointerDownOutside</TableCell>
                  <TableCell>function</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    Event handler called when a pointer event occurs outside the bounds of the component.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>onInteractOutside</TableCell>
                  <TableCell>function</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    Event handler called when an interaction occurs outside the bounds of the component.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>className</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    Additional CSS classes to apply to the content.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <p className="leading-7">
          The Dialog component follows the WAI-ARIA Dialog Pattern.
        </p>

        <div className="rounded-lg border p-4 bg-muted/50">
          <div className="flex gap-2">
            <AlertCircle className="h-5 w-5 text-muted-foreground" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Accessibility Considerations
              </p>
              <p className="text-sm text-muted-foreground">
                - Dialogs are automatically labeled by their title.
                <br />
                - Keyboard focus is trapped within the dialog when open.
                <br />
                - Pressing Escape closes the dialog.
                <br />
                - Focus is returned to the trigger element when the dialog closes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <a href="/docs/navigation/sidebar">Previous: Sidebar</a>
        <a href="/docs/overlay/drawer">Next: Drawer</a>
      </div>
    </div>
  );
}