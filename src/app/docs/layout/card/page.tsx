"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  CreditCard,
  User,
  LayoutTemplate,
  GalleryHorizontalEnd,
  SquareStack,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CardPage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Card</h1>
        <p className="text-lg text-muted-foreground">
          A container that displays content in a self-contained, presentational
          format.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Card component is a versatile container for grouping and
          displaying content in a clean and consistent format. Cards provide a
          flexible and extensible content container with multiple variants and
          options.
        </p>
        <p className="leading-7">
          Cards are commonly used for presenting information, creating UI
          dashboards, displaying products, or grouping related content in a
          visual hierarchy. They can contain text, images, actions, links, and
          other UI elements.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          A basic card typically includes a header, content, and footer section.
        </p>

        <div className="rounded-lg border">
          <div className="p-6">
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>

          <Separator />

          <div className="p-4 bg-muted/50">
            <div className="relative">
              <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                <code>{`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}`}</code>
              </pre>
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                onClick={() =>
                  copyToClipboard(
                    `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}`,
                    "basic"
                  )
                }
              >
                {copied["basic"] ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        {/* Product Card */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Product Card
          </h3>
          <p className="leading-7">
            Cards are commonly used to display product information in e-commerce
            applications.
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <Card className="max-w-sm overflow-hidden">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <SquareStack className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Premium Headphones</CardTitle>
                      <CardDescription>
                        High-quality audio device
                      </CardDescription>
                    </div>
                    <Badge>New</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Experience crystal clear sound with our premium
                    noise-cancelling headphones.
                  </p>
                  <p className="font-semibold text-lg">$299.99</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Add to Wishlist
                  </Button>
                  <Button size="sm">Add to Cart</Button>
                </CardFooter>
              </Card>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50">
              <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                <code>{`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SquareStack } from "lucide-react"

export function ProductCard() {
  return (
    <Card className="max-w-sm overflow-hidden">
      <div className="h-48 bg-muted flex items-center justify-center">
        <SquareStack className="h-12 w-12 text-muted-foreground" />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Premium Headphones</CardTitle>
            <CardDescription>High-quality audio device</CardDescription>
          </div>
          <Badge>New</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Experience crystal clear sound with our premium noise-cancelling headphones.
        </p>
        <p className="font-semibold text-lg">$299.99</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Add to Wishlist</Button>
        <Button size="sm">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Dashboard Card */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Dashboard Card
          </h3>
          <p className="leading-7">
            Cards are perfect for creating dashboards with summarized
            information.
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Users
                    </CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2,350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Projects
                    </CardTitle>
                    <LayoutTemplate className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">
                      +3 new this month
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            <div className="p-4 bg-muted/50">
              <pre className="rounded-md text-sm bg-muted p-4 overflow-x-auto">
                <code>{`import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CreditCard, User, LayoutTemplate } from "lucide-react"

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <User className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2,350</div>
          <p className="text-xs text-muted-foreground">+180.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          <LayoutTemplate className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">+3 new this month</p>
        </CardContent>
      </Card>
    </div>
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
          The Card component consists of several subcomponents that work
          together to create flexible content containers.
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
                <TableCell className="font-mono text-xs">Card</TableCell>
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
                  The main container component that provides the card's styling,
                  borders, and background.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardHeader</TableCell>
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
                  A container for the card's header content, typically
                  containing the title and description. Has appropriate padding
                  and spacing.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardTitle</TableCell>
                <TableCell className="font-mono text-xs">
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">className?:</span> string
                    </p>
                    <p>
                      <span className="font-semibold">children:</span>{" "}
                      React.ReactNode
                    </p>
                    <p>
                      <span className="font-semibold">as?:</span>{" "}
                      React.ElementType
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  The title element of the card. Renders as an h3 by default,
                  but can be changed using the "as" prop.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  CardDescription
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
                  A component for the card's description text. Uses muted
                  styling to create visual hierarchy.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardContent</TableCell>
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
                  The main content container for the card. Has appropriate
                  padding.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardFooter</TableCell>
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
                  A container for the card's footer, typically containing
                  actions or additional information. Has appropriate padding and
                  spacing.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          All card components accept standard HTML attributes in addition to the
          props listed above.
        </p>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage Guidelines
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Card component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Layout and Structure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>
                  Keep card content focused on a single topic or functionality
                </li>
                <li>Use consistent card sizing within the same view</li>
                <li>Maintain appropriate spacing between cards in a grid</li>
                <li>
                  Use appropriate padding within cards for readable content
                </li>
                <li>
                  Follow a consistent order for card elements (header, content,
                  footer)
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Overcrowd cards with too much content</li>
                <li>Use inconsistent sizing for cards in the same view</li>
                <li>Place cards too close together without adequate spacing</li>
                <li>Use different padding or alignment across similar cards</li>
                <li>Nest cards within cards unnecessarily</li>
              </ul>
            </div>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8">
            Content Organization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Use clear, descriptive titles for each card</li>
                <li>Include relevant imagery or icons when applicable</li>
                <li>Group related actions in the card footer</li>
                <li>
                  Use visual hierarchy to highlight the most important
                  information
                </li>
                <li>Keep action buttons clear and descriptive</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Use vague or generic titles that don't describe the content
                </li>
                <li>
                  Mix too many different types of content in a single card
                </li>
                <li>Include too many actions in a card footer</li>
                <li>Use inconsistent styling across cards in the same view</li>
                <li>Create cards without clear purpose or value to the user</li>
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
          Cards should be accessible to all users, including those using screen
          readers or keyboard navigation.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Semantic Structure</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Use proper heading hierarchy within cards. The CardTitle
                component renders as an h3 by default, which should fit into the
                page's overall heading structure.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Ensure all interactive elements within cards (buttons, links)
                are keyboard accessible and have proper focus states.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Color Contrast</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Maintain sufficient color contrast between card backgrounds,
                borders, and text content to ensure readability for users with
                low vision.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Actionable Cards</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                If a card itself is clickable (e.g., linking to a detail view),
                ensure it has appropriate ARIA attributes and keyboard handling.
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
              When making an entire card clickable, avoid placing other
              interactive elements like buttons within the card that could
              create nested interactive elements. Instead, make the card a
              container with a clear call-to-action button.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/layout/accordion">Previous: Accordion Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/layout/separator">Next: Separator Component</a>
        </Button>
      </div>
    </div>
  );
}
