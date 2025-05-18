"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
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
  ChevronDown,
  Settings,
  User,
  LogOut,
  CreditCard,
  Mail,
  MessageSquare,
  PlusCircle,
  UserPlus,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DropdownPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});
  const [position, setPosition] = useState("bottom");
  const [checkedItems, setCheckedItems] = useState({
    comments: true,
    notifications: false,
  });
  const [radioValue, setRadioValue] = useState("pedro");

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
          Dropdown Menu
        </h1>
        <p className="text-lg text-muted-foreground">
          A vertically stacked menu that appears when triggered by a button.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Dropdown menus display a list of actions or options that a user can
          choose from. They appear when the user interacts with a button,
          action, or other control.
        </p>
        <p className="leading-7">
          Dropdown menus are commonly used for navigation, settings, user
          profiles, and other actions that don't need to be permanently visible
          in the interface.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The Dropdown component consists of a trigger element and a content
          area that appears when the trigger is clicked.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Open Menu <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <CodePopover
              code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Open Menu <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
            You can enhance dropdown menu items with icons to provide visual
            cues about each action.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CodePopover
                code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { User, CreditCard, Settings, LogOut, ChevronDown } from "lucide-react"

export function DropdownMenuWithIcons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <User className="mr-2 h-4 w-4" />
          Profile
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Billing</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
                language="tsx"
                buttonLabel="View Icons Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* With Keyboard Shortcuts */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Keyboard Shortcuts
          </h3>
          <p className="leading-7">
            You can display keyboard shortcuts alongside menu items to help
            users navigate your application more efficiently.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Actions <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuItem>
                      New Tab
                      <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      New Window
                      <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                      New Incognito Window
                      <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      Save Page As...
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Print...
                      <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CodePopover
                code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function DropdownMenuWithShortcuts() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Actions <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          New Tab
          <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          New Incognito Window
          <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Save Page As...
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Print...
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
                language="tsx"
                buttonLabel="View Shortcuts Example"
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
            Dropdown menus can include checkbox items for toggling options.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Preferences <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Notification Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={checkedItems.comments}
                      onCheckedChange={(checked) =>
                        setCheckedItems({
                          ...checkedItems,
                          comments: checked === true,
                        })
                      }
                    >
                      Comments
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={checkedItems.notifications}
                      onCheckedChange={(checked) =>
                        setCheckedItems({
                          ...checkedItems,
                          notifications: checked === true,
                        })
                      }
                    >
                      Notifications
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CodePopover
                code={`import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function DropdownMenuCheckboxes() {
  const [checkedItems, setCheckedItems] = useState({
    comments: true,
    notifications: false,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Preferences <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Notification Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={checkedItems.comments}
          onCheckedChange={(checked) =>
            setCheckedItems({
              ...checkedItems,
              comments: checked === true,
            })
          }
        >
          Comments
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={checkedItems.notifications}
          onCheckedChange={(checked) =>
            setCheckedItems({
              ...checkedItems,
              notifications: checked === true,
            })
          }
        >
          Notifications
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
            Dropdown menus can include radio items for selecting a single option
            from a group.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Select User <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Active User</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={radioValue}
                      onValueChange={setRadioValue}
                    >
                      <DropdownMenuRadioItem value="pedro">
                        Pedro Duarte
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="colm">
                        Colm Tuite
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="shadcn">
                        shadcn
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CodePopover
                code={`import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function DropdownMenuRadioGroupDemo() {
  const [radioValue, setRadioValue] = useState("pedro")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Select User <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Active User</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={radioValue}
          onValueChange={setRadioValue}
        >
          <DropdownMenuRadioItem value="pedro">
            Pedro Duarte
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="colm">
            Colm Tuite
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="shadcn">
            shadcn
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
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
            Dropdown menus can include submenus for organizing complex
            navigation hierarchies.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Options <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Team</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <UserPlus className="mr-2 h-4 w-4" />
                            <span>Add Member</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Invite Member</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>New Team</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CodePopover
                code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, User, Users, UserPlus, Mail, PlusCircle, Settings } from "lucide-react"

export function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Options <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Add Member</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Invite Member</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>New Team</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
          The Dropdown Menu component consists of several parts, each with their
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
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  DropdownMenu
                </TableCell>
                <TableCell className="font-mono text-xs">
                  open?: boolean
                </TableCell>
                <TableCell>
                  Controls the open state of the dropdown menu.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  onOpenChange?: (open: boolean) ={">"} void
                </TableCell>
                <TableCell>
                  Callback function called when the open state changes.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  DropdownMenuTrigger
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
                  DropdownMenuContent
                </TableCell>
                <TableCell className="font-mono text-xs">
                  align?: "start" | "center" | "end"
                </TableCell>
                <TableCell>
                  Alignment of the dropdown menu relative to the trigger.
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
                  DropdownMenuItem
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
                <TableCell className="font-mono text-xs" rowSpan={1}>
                  DropdownMenuCheckboxItem
                </TableCell>
                <TableCell className="font-mono text-xs">
                  checked?: boolean
                </TableCell>
                <TableCell>The controlled checked state of the item.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={1}>
                  DropdownMenuRadioGroup
                </TableCell>
                <TableCell className="font-mono text-xs">
                  value?: string
                </TableCell>
                <TableCell>
                  The value of the currently selected radio item.
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
          Follow these guidelines for effective use of the Dropdown Menu
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
                  Use dropdown menus for actions that don't need to be
                  permanently visible
                </li>
                <li>Group related actions together in the same dropdown</li>
                <li>Use clear, concise labels for menu items</li>
                <li>Include icons to provide visual cues when appropriate</li>
                <li>Use separators to group related items</li>
                <li>Provide keyboard shortcuts for common actions</li>
                <li>Ensure dropdown menus are keyboard accessible</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Overload dropdown menus with too many options</li>
                <li>
                  Use dropdown menus for primary actions that should be
                  immediately visible
                </li>
                <li>
                  Nest submenus too deeply (avoid more than one level when
                  possible)
                </li>
                <li>Mix unrelated actions in the same dropdown</li>
                <li>Use vague or ambiguous labels</li>
                <li>
                  Place destructive actions without clear warning or
                  confirmation
                </li>
                <li>
                  Create overly wide dropdown menus that extend beyond the
                  viewport
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
          The Dropdown Menu component is designed with accessibility in mind:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Keyboard Navigation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Users can navigate dropdown menus using the keyboard:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6">
              <li>
                <kbd>Space</kbd> or <kbd>Enter</kbd> to open/close the dropdown
              </li>
              <li>
                <kbd>Arrow Down</kbd> to focus the first item when the dropdown
                is opened
              </li>
              <li>
                <kbd>Arrow Up</kbd> and <kbd>Arrow Down</kbd> to navigate
                between items
              </li>
              <li>
                <kbd>Enter</kbd> or <kbd>Space</kbd> to select/activate an item
              </li>
              <li>
                <kbd>Escape</kbd> to close the dropdown
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">ARIA Attributes</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The dropdown menu uses appropriate ARIA attributes to ensure
              screen reader compatibility:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6">
              <li>
                Uses <code>role="menu"</code> for the dropdown content
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
              When using icons in dropdown menu items, ensure they have
              appropriate <code>aria-hidden="true"</code> attributes, and that
              text labels are always provided for screen reader users.
            </p>
          </div>
        </div>
      </div>
      {/* Positioning */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Positioning
        </h2>
        <p className="leading-7">
          You can control the position of the dropdown menu relative to its
          trigger using the <code>align</code> and <code>side</code> props.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <div className="flex flex-wrap gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Bottom (Default)</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Item 2</DropdownMenuItem>
                    <DropdownMenuItem>Item 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Top</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top">
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Item 2</DropdownMenuItem>
                    <DropdownMenuItem>Item 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Left</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="left">
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Item 2</DropdownMenuItem>
                    <DropdownMenuItem>Item 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Right</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right">
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Item 2</DropdownMenuItem>
                    <DropdownMenuItem>Item 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <CodePopover
              code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function DropdownMenuPositioning() {
  return (
    <div className="flex flex-wrap gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Bottom (Default)
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Top
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Left
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Right
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`}
              language="tsx"
              buttonLabel="View Positioning Example"
              showLineNumbers={true}
            />
          </div>
        </div>
      </div>
      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/navigation/breadcrumb">
            Previous: Breadcrumb Component
          </a>
        </Button>
        <Button asChild>
          <a href="/docs/navigation/pagination">Next: Pagination Component</a>
        </Button>
      </div>
    </div>
  );
}
