"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
  Info,
  AlertCircle,
  Menu,
  X,
  Home,
  Settings,
  Users,
  FileText,
  BarChart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SidebarPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Sidebar
        </h1>
        <p className="text-lg text-muted-foreground">
          A navigation component for displaying menu items in a vertical layout.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Sidebar component provides a vertical navigation menu that can be
          used to organize and navigate between different sections of an
          application. It's commonly used in dashboards, admin panels, and
          content-heavy applications.
        </p>
        <p className="leading-7">
          Sidebars can be fixed or collapsible, and they often include icons,
          labels, and visual indicators to help users understand the navigation
          structure.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          A basic sidebar consists of a container with navigation links. Here's
          a simple example:
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <div className="flex h-[300px]">
                <div className="w-64 h-full border rounded-lg p-4 bg-background">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold">Navigation</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Menu className="h-4 w-4" />
                    </Button>
                  </div>
                  <nav className="space-y-2">
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                    >
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 bg-accent text-accent-foreground transition-all"
                    >
                      <Users className="h-4 w-4" />
                      <span>Users</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Documents</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                    >
                      <BarChart className="h-4 w-4" />
                      <span>Analytics</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <CodePopover
              code={`import { Home, Users, FileText, BarChart, Settings, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BasicSidebar() {
  return (
    <div className="w-64 h-full border rounded-lg p-4 bg-background">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold">Navigation</h3>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 bg-accent text-accent-foreground transition-all"
        >
          <Users className="h-4 w-4" />
          <span>Users</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
        >
          <FileText className="h-4 w-4" />
          <span>Documents</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
        >
          <BarChart className="h-4 w-4" />
          <span>Analytics</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </a>
      </nav>
    </div>
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

        {/* Collapsible Sidebar */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Collapsible Sidebar
          </h3>
          <p className="leading-7">
            A collapsible sidebar can be toggled between expanded and collapsed
            states to save screen space.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex h-[300px]">
                  <div
                    className={cn(
                      "h-full border rounded-lg p-4 bg-background transition-all duration-300",
                      isOpen ? "w-64" : "w-20"
                    )}
                  >
                    <div className="flex items-center justify-between mb-6">
                      {isOpen && <h3 className="font-semibold">Navigation</h3>}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 ml-auto"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {isOpen ? (
                          <X className="h-4 w-4" />
                        ) : (
                          <Menu className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <nav className="space-y-2">
                      <a
                        href="#"
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent",
                          !isOpen && "justify-center px-2"
                        )}
                      >
                        <Home className="h-4 w-4" />
                        {isOpen && <span>Home</span>}
                      </a>
                      <a
                        href="#"
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 bg-accent text-accent-foreground transition-all",
                          !isOpen && "justify-center px-2"
                        )}
                      >
                        <Users className="h-4 w-4" />
                        {isOpen && <span>Users</span>}
                      </a>
                      <a
                        href="#"
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent",
                          !isOpen && "justify-center px-2"
                        )}
                      >
                        <FileText className="h-4 w-4" />
                        {isOpen && <span>Documents</span>}
                      </a>
                      <a
                        href="#"
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent",
                          !isOpen && "justify-center px-2"
                        )}
                      >
                        <BarChart className="h-4 w-4" />
                        {isOpen && <span>Analytics</span>}
                      </a>
                      <a
                        href="#"
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent",
                          !isOpen && "justify-center px-2"
                        )}
                      >
                        <Settings className="h-4 w-4" />
                        {isOpen && <span>Settings</span>}
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
                  </Button>
                </div>
              </div>
              <CodePopover
                code={`import { useState } from "react"
import { Home, Users, FileText, BarChart, Settings, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CollapsibleSidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "h-full border rounded-lg p-4 bg-background transition-all duration-300",
          isOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          {isOpen && <h3 className="font-semibold">Navigation</h3>}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
        <nav className="space-y-2">
          <a
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent",
              !isOpen && "justify-center px-2"
            )}
          >
            <Home className="h-4 w-4" />
            {isOpen && <span>Home</span>}
          </a>
          <a
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 bg-accent text-accent-foreground transition-all",
              !isOpen && "justify-center px-2"
            )}
          >
            <Users className="h-4 w-4" />
            {isOpen && <span>Users</span>}
          </a>
          <a
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent",
              !isOpen && "justify-center px-2"
            )}
          >
            <FileText className="h-4 w-4" />
            {isOpen && <span>Documents</span>}
          </a>
          <a
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent",
              !isOpen && "justify-center px-2"
            )}
          >
            <BarChart className="h-4 w-4" />
            {isOpen && <span>Analytics</span>}
          </a>
          <a
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent",
              !isOpen && "justify-center px-2"
            )}
          >
            <Settings className="h-4 w-4" />
            {isOpen && <span>Settings</span>}
          </a>
        </nav>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        </Button>
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Collapsible Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Nested Navigation */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Nested Navigation
          </h3>
          <p className="leading-7">
            Sidebars can include nested navigation items to represent
            hierarchical structures.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex h-[400px]">
                  <div className="w-64 h-full border rounded-lg p-4 bg-background">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-semibold">Navigation</h3>
                    </div>
                    <nav className="space-y-1">
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                      >
                        <Home className="h-4 w-4" />
                        <span>Home</span>
                      </a>
                      <div>
                        <a
                          href="#"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 bg-accent text-accent-foreground transition-all"
                        >
                          <Users className="h-4 w-4" />
                          <span>Users</span>
                        </a>
                        <div className="ml-6 mt-1 space-y-1 border-l pl-3">
                          <a
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                          >
                            <span>User Management</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 bg-muted text-foreground transition-all hover:bg-accent"
                          >
                            <span>Permissions</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                          >
                            <span>Groups</span>
                          </a>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                      >
                        <FileText className="h-4 w-4" />
                        <span>Documents</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                      >
                        <BarChart className="h-4 w-4" />
                        <span>Analytics</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { Home, Users, FileText, BarChart, Settings } from "lucide-react"

export function NestedSidebar() {
  return (
    <div className="w-64 h-full border rounded-lg p-4 bg-background">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold">Navigation</h3>
      </div>
      <nav className="space-y-1">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </a>
        <div>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 bg-accent text-accent-foreground transition-all"
          >
            <Users className="h-4 w-4" />
            <span>Users</span>
          </a>
          <div className="ml-6 mt-1 space-y-1 border-l pl-3">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
            >
              <span>User Management</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 bg-muted text-foreground transition-all hover:bg-accent"
            >
              <span>Permissions</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
            >
              <span>Groups</span>
            </a>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
        >
          <FileText className="h-4 w-4" />
          <span>Documents</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
        >
          <BarChart className="h-4 w-4" />
          <span>Analytics</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent"
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </a>
      </nav>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Nested Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Implementation */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Implementation
        </h2>
        <p className="leading-7">
          The sidebar component can be implemented using a combination of HTML,
          CSS, and JavaScript. Here's a reusable sidebar component:
        </p>

        <div className="rounded-lg border">
          <div className="p-6">
            <CodePopover
              code={`import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface SidebarProps {
  children: React.ReactNode
  className?: string
  collapsible?: boolean
  defaultOpen?: boolean
  title?: string
}

export function Sidebar({
  children,
  className,
  collapsible = false,
  defaultOpen = true,
  title,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className={cn(
        "h-full border rounded-lg p-4 bg-background transition-all duration-300",
        isOpen ? "w-64" : "w-20",
        className
      )}
    >
      {(title || collapsible) && (
        <div className="flex items-center justify-between mb-6">
          {isOpen && title && <h3 className="font-semibold">{title}</h3>}
          {collapsible && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 ml-auto"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      )}
      <nav className="space-y-2">
        {children}
      </nav>
    </div>
  )
}

interface SidebarItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  isActive?: boolean
  href?: string
  onClick?: () => void
  className?: string
}

export function SidebarItem({
  children,
  icon,
  isActive = false,
  href,
  onClick,
  className,
}: SidebarItemProps) {
  const Component = href ? "a" : "button"
  const props = href ? { href } : { onClick, type: "button" }

  return (
    <Component
      {...props}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-accent w-full text-left",
        isActive && "bg-accent text-accent-foreground",
        className
      )}
    >
      {icon}
      <span>{children}</span>
    </Component>
  )
}

// Usage example:
// <Sidebar title="Navigation" collapsible>
//   <SidebarItem icon={<Home className="h-4 w-4" />} isActive>Home</SidebarItem>
//   <SidebarItem icon={<Users className="h-4 w-4" />}>Users</SidebarItem>
// </Sidebar>`}
              language="tsx"
              buttonLabel="View Component Implementation"
              showLineNumbers={true}
            />
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Best Practices
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Sidebar component:
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
                <li>Use clear, recognizable icons alongside labels</li>
                <li>Highlight the active/current page or section</li>
                <li>Group related navigation items together</li>
                <li>
                  Consider making the sidebar collapsible on smaller screens
                </li>
                <li>Use consistent spacing and alignment</li>
                <li>Ensure sufficient contrast between text and background</li>
                <li>Keep the sidebar structure simple and intuitive</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Overcrowd the sidebar with too many items</li>
                <li>
                  Use ambiguous icons without labels (unless space is limited)
                </li>
                <li>Hide important navigation items in nested menus</li>
                <li>Use inconsistent styling across navigation items</li>
                <li>
                  Make the sidebar too wide, taking up valuable screen space
                </li>
                <li>Use animations that are distracting or slow</li>
                <li>Place rarely used items in prominent positions</li>
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
          The Sidebar component should be designed with accessibility in mind:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Keyboard Navigation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Ensure that users can navigate the sidebar using keyboard:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6">
              <li>
                <kbd>Tab</kbd> to focus on navigation items
              </li>
              <li>
                <kbd>Enter</kbd> or <kbd>Space</kbd> to activate the focused
                item
              </li>
              <li>
                <kbd>Escape</kbd> to close expanded/nested menus
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">ARIA Attributes</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Use appropriate ARIA attributes to enhance screen reader
              compatibility:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6">
              <li>
                Use <code>aria-current="page"</code> for the active page
              </li>
              <li>
                Use <code>aria-expanded</code> for collapsible sections
              </li>
              <li>
                Use <code>aria-controls</code> to associate toggle buttons with
                their content
              </li>
              <li>
                Use <code>aria-label</code> for buttons without visible text
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
              When implementing a collapsible sidebar, ensure that the toggle
              button has a clear purpose and that the expanded/collapsed state
              is communicated to screen readers. Consider adding a "Skip to main
              content" link at the beginning of the sidebar for keyboard users.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/navigation/pagination">Previous: Pagination</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/docs/overlay/dialog">Next: Dialog</a>
        </Button>
      </div>
    </div>
  );
}
