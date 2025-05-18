"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarLabel,
  MenubarPortal,
} from "@/components/ui/menubar";
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
  Check,
  ChevronsUpDown,
  Circle,
  Square,
  SquareStack,
  Trash,
  User,
  FileText,
  Save,
  Printer,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function MenubarPage() {
  const [checkedItems, setCheckedItems] = useState({
    showToolbar: true,
    showStatusBar: false,
  });
  const [radioValue, setRadioValue] = useState("andy");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Menubar
        </h1>
        <p className="text-lg text-muted-foreground">
          A horizontal navigation component that hosts dropdown menus.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Menubars provide a horizontal list of menus that can be used to
          organize features and actions in an application. They are commonly
          found at the top of desktop applications and websites.
        </p>
        <p className="leading-7">
          Menubars are particularly useful for complex applications with many
          features, as they provide a structured way to organize functionality
          without cluttering the interface.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The Menubar component consists of a horizontal list of menu triggers,
          each opening a dropdown menu when clicked.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      New Window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Save <MenubarShortcut>⌘S</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Cut <MenubarShortcut>⌘X</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Copy <MenubarShortcut>⌘C</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Paste <MenubarShortcut>⌘V</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Zoom In</MenubarItem>
                    <MenubarItem>Zoom Out</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Reset Zoom</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Help</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Documentation</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>About</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
            <CodePopover
              code={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cut <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copy <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Paste <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Reset Zoom</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>About</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
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
            With Icons
          </h3>
          <p className="leading-7">
            You can enhance menubar items with icons to provide visual cues
            about each action.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <FileText className="mr-2 h-4 w-4" />
                        New Document
                      </MenubarItem>
                      <MenubarItem>
                        <Save className="mr-2 h-4 w-4" />
                        Save
                        <MenubarShortcut>⌘S</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        <Printer className="mr-2 h-4 w-4" />
                        Print
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
              <CodePopover
                code={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { FileText, Save, Printer, User, Settings } from "lucide-react"

export function MenubarWithIcons() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileText className="mr-2 h-4 w-4" />
            New Document
          </MenubarItem>
          <MenubarItem>
            <Save className="mr-2 h-4 w-4" />
            Save
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <User className="mr-2 h-4 w-4" />
            Profile
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`}
                language="tsx"
                buttonLabel="View Icons Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Checkbox Items */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Checkbox Items
          </h3>
          <p className="leading-7">
            Menubars can include checkbox items for toggling options.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                    <MenubarContent>
                      <MenubarCheckboxItem
                        checked={checkedItems.showToolbar}
                        onCheckedChange={(checked) =>
                          setCheckedItems({
                            ...checkedItems,
                            showToolbar: checked === true,
                          })
                        }
                      >
                        Show Toolbar
                      </MenubarCheckboxItem>
                      <MenubarCheckboxItem
                        checked={checkedItems.showStatusBar}
                        onCheckedChange={(checked) =>
                          setCheckedItems({
                            ...checkedItems,
                            showStatusBar: checked === true,
                          })
                        }
                      >
                        Show Status Bar
                      </MenubarCheckboxItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
                <div className="text-sm text-muted-foreground">
                  Toolbar: {checkedItems.showToolbar ? "Visible" : "Hidden"} |
                  Status Bar:{" "}
                  {checkedItems.showStatusBar ? "Visible" : "Hidden"}
                </div>
              </div>
              <CodePopover
                code={`import { useState } from "react"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarCheckboxes() {
  const [checkedItems, setCheckedItems] = useState({
    showToolbar: true,
    showStatusBar: false,
  })

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem
              checked={checkedItems.showToolbar}
              onCheckedChange={(checked) =>
                setCheckedItems({
                  ...checkedItems,
                  showToolbar: checked === true,
                })
              }
            >
              Show Toolbar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={checkedItems.showStatusBar}
              onCheckedChange={(checked) =>
                setCheckedItems({
                  ...checkedItems,
                  showStatusBar: checked === true,
                })
              }
            >
              Show Status Bar
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="text-sm text-muted-foreground">
        Toolbar: {checkedItems.showToolbar ? "Visible" : "Hidden"} | Status Bar: {checkedItems.showStatusBar ? "Visible" : "Hidden"}
      </div>
    </>
  )
}`}
                language="tsx"
                buttonLabel="View Checkboxes Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Radio Items */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Radio Items
          </h3>
          <p className="leading-7">
            Menubars can include radio items for selecting a single option from
            a group.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>Format</MenubarTrigger>
                    <MenubarContent>
                      <MenubarRadioGroup
                        value={radioValue}
                        onValueChange={setRadioValue}
                      >
                        <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                        <MenubarRadioItem value="benoit">
                          Benoit
                        </MenubarRadioItem>
                        <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
                      </MenubarRadioGroup>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
                <div className="text-sm text-muted-foreground">
                  Selected user: {radioValue}
                </div>
              </div>
              <CodePopover
                code={`import { useState } from "react"
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarRadioGroupDemo() {
  const [radioValue, setRadioValue] = useState("andy")

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={radioValue} onValueChange={setRadioValue}>
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="text-sm text-muted-foreground">
        Selected user: {radioValue}
      </div>
    </>
  )
}`}
                language="tsx"
                buttonLabel="View Radio Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Submenu */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Submenu
          </h3>
          <p className="leading-7">
            Menubars can include submenus for organizing complex navigation
            hierarchies.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>Insert</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Text</MenubarItem>
                      <MenubarItem>Image</MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>Shape</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>
                            <Square className="mr-2 h-4 w-4" />
                            Square
                          </MenubarItem>
                          <MenubarItem>
                            <Circle className="mr-2 h-4 w-4" />
                            Circle
                          </MenubarItem>
                          <MenubarItem>
                            <SquareStack className="mr-2 h-4 w-4" />
                            Stack
                          </MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem>Chart</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
              <CodePopover
                code={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Square, Circle, SquareStack } from "lucide-react"

export function MenubarWithSubmenu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Insert</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Text</MenubarItem>
          <MenubarItem>Image</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Shape</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Square className="mr-2 h-4 w-4" />
                Square
              </MenubarItem>
              <MenubarItem>
                <Circle className="mr-2 h-4 w-4" />
                Circle
              </MenubarItem>
              <MenubarItem>
                <SquareStack className="mr-2 h-4 w-4" />
                Stack
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Chart</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`}
                language="tsx"
                buttonLabel="View Submenu Example"
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
          The Menubar component consists of several parts, each with their own
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
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  Menubar
                </TableCell>
                <TableCell className="font-mono text-xs">
                  defaultValue?: string
                </TableCell>
                <TableCell>
                  The default value for the uncontrolled menubar.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the menubar.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  MenubarMenu
                </TableCell>
                <TableCell className="font-mono text-xs">
                  value?: string
                </TableCell>
                <TableCell>The controlled value of the menu.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the menu.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  MenubarTrigger
                </TableCell>
                <TableCell className="font-mono text-xs">
                  asChild?: boolean
                </TableCell>
                <TableCell>
                  When true, the trigger will be rendered as its child element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the trigger.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={4}>
                  MenubarContent
                </TableCell>
                <TableCell className="font-mono text-xs">
                  align?: "start" | "center" | "end"
                </TableCell>
                <TableCell>
                  Alignment of the menu content relative to the trigger.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  sideOffset?: number
                </TableCell>
                <TableCell>Distance in pixels from the trigger.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  side?: "top" | "right" | "bottom" | "left"
                </TableCell>
                <TableCell>
                  The side of the trigger to render the content.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the content.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  MenubarItem
                </TableCell>
                <TableCell className="font-mono text-xs">
                  disabled?: boolean
                </TableCell>
                <TableCell>
                  When true, the item will be disabled and non-interactive.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the menu item.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  MenubarCheckboxItem
                </TableCell>
                <TableCell className="font-mono text-xs">
                  checked?: boolean
                </TableCell>
                <TableCell>The controlled checked state of the item.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  onCheckedChange?: (checked: boolean) ={">"} void
                </TableCell>
                <TableCell>
                  Callback function called when the checked state changes.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  MenubarRadioGroup
                </TableCell>
                <TableCell className="font-mono text-xs">
                  value?: string
                </TableCell>
                <TableCell>
                  The value of the currently selected radio item.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  onValueChange?: (value: string) ={">"} void
                </TableCell>
                <TableCell>
                  Callback function called when the value changes.
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
          Follow these guidelines for effective use of the Menubar component:
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
                  Use menubars for organizing complex application features
                </li>
                <li>Group related actions together in the same menu</li>
                <li>Use clear, concise labels for menu items and triggers</li>
                <li>Include icons to provide visual cues when appropriate</li>
                <li>Use separators to group related items</li>
                <li>Provide keyboard shortcuts for common actions</li>
                <li>Ensure menubar components are keyboard accessible</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Overload menus with too many options</li>
                <li>Use menubars for simple interfaces with few actions</li>
                <li>
                  Nest submenus too deeply (avoid more than one level when
                  possible)
                </li>
                <li>Mix unrelated actions in the same menu</li>
                <li>Use vague or ambiguous labels</li>
                <li>
                  Place destructive actions without clear warning or
                  confirmation
                </li>
                <li>
                  Create overly wide menus that extend beyond the viewport
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
          The Menubar component is designed with accessibility in mind:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Keyboard Navigation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Users can navigate menubars using the keyboard:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6">
              <li>
                <kbd>Tab</kbd> to focus the menubar
              </li>
              <li>
                <kbd>Space</kbd> or <kbd>Enter</kbd> to open a menu
              </li>
              <li>
                <kbd>Arrow Left</kbd> and <kbd>Arrow Right</kbd> to navigate
                between menu triggers
              </li>
              <li>
                <kbd>Arrow Up</kbd> and <kbd>Arrow Down</kbd> to navigate
                between menu items
              </li>
              <li>
                <kbd>Enter</kbd> or <kbd>Space</kbd> to select/activate an item
              </li>
              <li>
                <kbd>Escape</kbd> to close a menu
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">ARIA Attributes</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The menubar uses appropriate ARIA attributes to ensure screen
              reader compatibility:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6">
              <li>
                Uses <code>role="menubar"</code> for the menubar
              </li>
              <li>
                Uses <code>role="menu"</code> for dropdown menus
              </li>
              <li>
                Uses <code>role="menuitem"</code> for menu items
              </li>
              <li>
                Uses <code>aria-expanded</code> to indicate the open state
              </li>
              <li>
                Uses <code>aria-haspopup</code> to indicate that the trigger has
                a popup
              </li>
              <li>
                Uses <code>aria-checked</code> for checkbox and radio items
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
              When using icons in menubar items, ensure they have appropriate{" "}
              <code>aria-hidden="true"</code> attributes, and that text labels
              are always provided for screen reader users.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/navigation/dropdown">Previous: Dropdown Menu</a>
        </Button>
        <Button asChild>
          <a href="/docs/navigation/navigation-menu">Next: Navigation Menu</a>
        </Button>
      </div>
    </div>
  );
}
