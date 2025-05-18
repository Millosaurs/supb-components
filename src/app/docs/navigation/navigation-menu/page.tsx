"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Info, AlertCircle, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ListItem = React.forwardRef(
  (
    {
      className,
      title,
      children,
      ...props
    }: React.ComponentPropsWithoutRef<"a"> & {
      title: string;
      children: React.ReactNode;
    },
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default function NavigationMenuPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Navigation Menu
        </h1>
        <p className="text-lg text-muted-foreground">
          A responsive navigation component with support for submenus and
          complex layouts.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Navigation Menu component provides a way to create responsive
          navigation interfaces with dropdown menus. It's designed to be
          accessible and supports keyboard navigation, making it suitable for
          primary navigation in websites and applications.
        </p>
        <p className="leading-7">
          Unlike traditional dropdown menus, the Navigation Menu is optimized
          for site navigation with support for complex layouts within dropdown
          panels, making it ideal for mega menus and multi-column navigation
          structures.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The Navigation Menu component consists of a horizontal list of items,
          with some items triggering dropdown panels when clicked or hovered.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Getting Started
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Documentation
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Learn how to use our components and build your
                                application.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem
                          href="/docs/introduction"
                          title="Introduction"
                        >
                          What is this UI library and how to get started.
                        </ListItem>
                        <ListItem
                          href="/docs/installation"
                          title="Installation"
                        >
                          How to install dependencies and set up your project.
                        </ListItem>
                        <ListItem href="/docs/components" title="Components">
                          Explore all available UI components.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ListItem href="/docs/components/button" title="Button">
                          A clickable button element for user interactions.
                        </ListItem>
                        <ListItem href="/docs/components/dialog" title="Dialog">
                          A modal dialog that interrupts the user workflow.
                        </ListItem>
                        <ListItem href="/docs/components/card" title="Card">
                          A container for displaying content and actions.
                        </ListItem>
                        <ListItem href="/docs/components/avatar" title="Avatar">
                          An image element representing a user or entity.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Documentation
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <CodePopover
              code={`import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Documentation
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Learn how to use our components and build your application.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs/introduction" title="Introduction">
                What is this UI library and how to get started.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and set up your project.
              </ListItem>
              <ListItem href="/docs/components" title="Components">
                Explore all available UI components.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/docs/components/button" title="Button">
                A clickable button element for user interactions.
              </ListItem>
              <ListItem href="/docs/components/dialog" title="Dialog">
                A modal dialog that interrupts the user workflow.
              </ListItem>
              <ListItem href="/docs/components/card" title="Card">
                A container for displaying content and actions.
              </ListItem>
              <ListItem href="/docs/components/avatar" title="Avatar">
                An image element representing a user or entity.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})`}
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

        {/* Responsive Navigation */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Responsive Navigation
          </h3>
          <p className="leading-7">
            The Navigation Menu component is designed to be responsive, adapting
            to different screen sizes.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <p className="text-sm text-muted-foreground">
                  Resize the window to see how the navigation menu adapts to
                  different screen sizes. On smaller screens, the menu items may
                  collapse or display differently.
                </p>
                <NavigationMenu>
                  <NavigationMenuList className="flex-wrap">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          <ListItem href="#" title="Product 1">
                            Description for Product 1
                          </ListItem>
                          <ListItem href="#" title="Product 2">
                            Description for Product 2
                          </ListItem>
                          <ListItem href="#" title="Product 3">
                            Description for Product 3
                          </ListItem>
                          <ListItem href="#" title="Product 4">
                            Description for Product 4
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          <ListItem href="#" title="Service 1">
                            Description for Service 1
                          </ListItem>
                          <ListItem href="#" title="Service 2">
                            Description for Service 2
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          About
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Contact
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Blog
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <CodePopover
                code={`import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function ResponsiveNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="#" title="Product 1">
                Description for Product 1
              </ListItem>
              <ListItem href="#" title="Product 2">
                Description for Product 2
              </ListItem>
              <ListItem href="#" title="Product 3">
                Description for Product 3
              </ListItem>
              <ListItem href="#" title="Product 4">
                Description for Product 4
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="#" title="Service 1">
                Description for Service 1
              </ListItem>
              <ListItem href="#" title="Service 2">
                Description for Service 2
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`}
                language="tsx"
                buttonLabel="View Responsive Example"
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
            You can enhance navigation menu items with icons to provide visual
            cues.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Info className="mr-2 h-4 w-4" />
                        About Us
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          <ListItem href="#" title="Our Story">
                            Learn about our company history and mission.
                          </ListItem>
                          <ListItem href="#" title="Team">
                            Meet the people behind our products.
                          </ListItem>
                          <ListItem href="#" title="Careers">
                            Join our growing team of professionals.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          External Link
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <CodePopover
                code={`import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Info, ExternalLink } from "lucide-react"

export function NavigationMenuWithIcons() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Info className="mr-2 h-4 w-4" />
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <ListItem href="#" title="Our Story">
                Learn about our company history and mission.
              </ListItem>
              <ListItem href="#" title="Team">
                Meet the people behind our products.
              </ListItem>
              <ListItem href="#" title="Careers">
                Join our growing team of professionals.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <ExternalLink className="mr-2 h-4 w-4" />
              External Link
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`}
                language="tsx"
                buttonLabel="View Icons Example"
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
          The Navigation Menu component consists of several parts, each with
          their own props:
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
                  NavigationMenu
                </TableCell>
                <TableCell className="font-mono text-xs">
                  defaultValue?: string
                </TableCell>
                <TableCell>
                  The default value for the uncontrolled navigation menu.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the navigation menu.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={1}>
                  NavigationMenuList
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the navigation menu list.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  NavigationMenuItem
                </TableCell>
                <TableCell className="font-mono text-xs">
                  value?: string
                </TableCell>
                <TableCell>
                  The unique value of the navigation menu item.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the navigation menu item.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  NavigationMenuTrigger
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
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  NavigationMenuContent
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the content.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  forceMount?: boolean
                </TableCell>
                <TableCell>
                  Force mounting when used within a motion/animation library.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  NavigationMenuLink
                </TableCell>
                <TableCell className="font-mono text-xs">
                  asChild?: boolean
                </TableCell>
                <TableCell>
                  When true, the link will be rendered as its child element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the link.
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
          Follow these guidelines for effective use of the Navigation Menu
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
                <li>Use for primary site navigation</li>
                <li>Group related navigation items together</li>
                <li>Use clear, concise labels for navigation items</li>
                <li>Include icons to provide visual cues when appropriate</li>
                <li>Ensure dropdown content is organized and scannable</li>
                <li>
                  Provide sufficient contrast between the navigation and
                  background
                </li>
                <li>Test navigation on different screen sizes</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Overload navigation with too many items</li>
                <li>Use vague or ambiguous labels</li>
                <li>Create overly complex dropdown structures</li>
                <li>Hide critical navigation paths in dropdowns</li>
                <li>Use navigation menus for actions that should be buttons</li>
                <li>
                  Create dropdown content that extends beyond the viewport
                </li>
                <li>Nest navigation menus too deeply</li>
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
          The Navigation Menu component is designed with accessibility in mind:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Keyboard Navigation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Users can navigate the menu using the keyboard:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6">
              <li>
                <kbd>Tab</kbd> to focus the navigation menu
              </li>
              <li>
                <kbd>Enter</kbd> or <kbd>Space</kbd> to open a dropdown
              </li>
              <li>
                <kbd>Arrow Down</kbd> to focus the first item in an open
                dropdown
              </li>
              <li>
                <kbd>Arrow Up</kbd> and <kbd>Arrow Down</kbd> to navigate
                between dropdown items
              </li>
              <li>
                <kbd>Arrow Right</kbd> and <kbd>Arrow Left</kbd> to navigate
                between top-level items
              </li>
              <li>
                <kbd>Escape</kbd> to close an open dropdown
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">ARIA Attributes</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The navigation menu uses appropriate ARIA attributes to ensure
              screen reader compatibility:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6">
              <li>
                Uses <code>role="navigation"</code> for the navigation menu
              </li>
              <li>
                Uses <code>aria-expanded</code> to indicate the open state of
                dropdowns
              </li>
              <li>
                Uses <code>aria-haspopup</code> to indicate that a trigger has a
                popup
              </li>
              <li>
                Uses <code>aria-controls</code> to associate triggers with their
                content
              </li>
              <li>
                Uses <code>aria-labelledby</code> to associate content with
                their triggers
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
              When using icons in navigation menu items, ensure they have
              appropriate <code>aria-hidden="true"</code> attributes, and that
              text labels are always provided for screen reader users.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/navigation/menubar">Previous: Menubar</a>
        </Button>
        <Button asChild>
          <a href="/docs/navigation/pagination">Next: Pagination</a>
        </Button>
      </div>
    </div>
  );
}
