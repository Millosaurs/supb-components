"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Info,
  AlertCircle,
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TablePage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Table</h1>
        <p className="text-lg text-muted-foreground">
          A responsive table component for displaying tabular data.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Table component provides a way to organize and display data in rows and columns.
          It supports features like headers, captions, and footers to enhance data presentation.
        </p>
        <p className="leading-7">
          Our Table component is built with accessibility in mind, using semantic HTML table elements
          with proper ARIA attributes and keyboard navigation support.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The basic Table component provides a simple way to display tabular data with headers and rows.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-3xl">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell>Pending</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Robert Johnson</TableCell>
                    <TableCell>robert@example.com</TableCell>
                    <TableCell>Inactive</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <CodePopover
              code={`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Robert Johnson</TableCell>
          <TableCell>robert@example.com</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
      </TableBody>
    </Table>
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

        {/* With Caption */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Caption
          </h3>
          <p className="leading-7">
            Add a caption to provide a title or description for your table.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-3xl">
                <Table>
                  <TableCaption>A list of recent users and their status.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>Pending</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Robert Johnson</TableCell>
                      <TableCell>robert@example.com</TableCell>
                      <TableCell>Inactive</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <CodePopover
                code={`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableWithCaption() {
  return (
    <Table>
      <TableCaption>A list of recent users and their status.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Robert Johnson</TableCell>
          <TableCell>robert@example.com</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`}
                language="tsx"
                buttonLabel="View Caption Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* With Footer */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Footer
          </h3>
          <p className="leading-7">
            Add a footer to display summary information or totals at the bottom of the table.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-3xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Product A</TableCell>
                      <TableCell className="text-right">2</TableCell>
                      <TableCell className="text-right">$120.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Product B</TableCell>
                      <TableCell className="text-right">1</TableCell>
                      <TableCell className="text-right">$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Product C</TableCell>
                      <TableCell className="text-right">3</TableCell>
                      <TableCell className="text-right">$210.00</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell className="text-right">$480.00</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
              <CodePopover
                code={`import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableWithFooter() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Product A</TableCell>
          <TableCell className="text-right">2</TableCell>
          <TableCell className="text-right">$120.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Product B</TableCell>
          <TableCell className="text-right">1</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Product C</TableCell>
          <TableCell className="text-right">3</TableCell>
          <TableCell className="text-right">$210.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$480.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}`}
                language="tsx"
                buttonLabel="View Footer Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Column Alignment */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Column Alignment
          </h3>
          <p className="leading-7">
            Customize the alignment of table cells to improve readability.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-3xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-center">Role</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell className="text-center">Admin</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell className="text-center">Editor</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Robert Johnson</TableCell>
                      <TableCell className="text-center">Viewer</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <CodePopover
                code={`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

export function TableWithAlignment() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="text-center">Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell className="text-center">Admin</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell className="text-center">Editor</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Robert Johnson</TableCell>
          <TableCell className="text-center">Viewer</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`}
                language="tsx"
                buttonLabel="View Alignment Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Custom Styling */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Styling
          </h3>
          <p className="leading-7">
            Customize the appearance of the table with additional CSS classes.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-3xl">
                <Table className="border rounded-md">
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-bold">Name</TableHead>
                      <TableHead className="font-bold">Email</TableHead>
                      <TableHead className="font-bold">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-muted/50">
                      <TableCell className="font-medium">John Doe</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          Active
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/50">
                      <TableCell className="font-medium">Jane Smith</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/50">
                      <TableCell className="font-medium">Robert Johnson</TableCell>
                      <TableCell>robert@example.com</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                          Inactive
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <CodePopover
                code={`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableWithCustomStyling() {
  return (
    <Table className="border rounded-md">
      <TableHeader>
        <TableRow className="bg-muted/50">
          <TableHead className="font-bold">Name</TableHead>
          <TableHead className="font-bold">Email</TableHead>
          <TableHead className="font-bold">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-muted/50">
          <TableCell className="font-medium">John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>
            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
              Active
            </span>
          </TableCell>
        </TableRow>
        <TableRow className="hover:bg-muted/50">
          <TableCell className="font-medium">Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>
            <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
              Pending
            </span>
          </TableCell>
        </TableRow>
        <TableRow className="hover:bg-muted/50">
          <TableCell className="font-medium">Robert Johnson</TableCell>
          <TableCell>robert@example.com</TableCell>
          <TableCell>
            <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
              Inactive
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
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
          The Table component consists of several sub-components that accept the following props:
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
                <TableCell className="font-mono text-xs">Table</TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the table element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">TableHeader</TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the table header element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">TableBody</TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the table body element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">TableFooter</TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the table footer element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">TableRow</TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the table row element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">TableHead</TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string<br />
                  colSpan?: number
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the table head cell element. The colSpan prop allows the cell to span multiple columns.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">TableCell</TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string<br />
                  colSpan?: number
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the table cell element. The colSpan prop allows the cell to span multiple columns.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">TableCaption</TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the table caption element.
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
          Follow these guidelines for effective use of the Table component:
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
                <li>Use semantic table elements for proper accessibility</li>
                <li>Include headers to describe the content of each column</li>
                <li>Use captions to provide context for the table data</li>
                <li>Align numeric data to the right for better readability</li>
                <li>Use appropriate spacing and padding for table cells</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use tables for layout purposes instead of displaying data</li>
                <li>Overcrowd tables with too much information</li>
                <li>Nest tables within tables unnecessarily</li>
                <li>Use inconsistent alignment across similar data types</li>
                <li>Forget to make tables responsive for mobile devices</li>
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
          The Table component follows accessibility best practices to ensure that tabular data is accessible to all users:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Semantic Structure</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The Table component uses semantic HTML elements like <code>table</code>, <code>thead</code>, <code>tbody</code>, <code>tr</code>, <code>th</code>, and <code>td</code> to ensure proper structure and navigation for screen readers.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Header Cells</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Using <code>TableHead</code> components properly identifies header cells, which helps screen readers announce column and row headers when navigating through the table.
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
              For complex tables with many columns, consider adding a <code>scope</code> attribute to header cells to explicitly associate them with rows or columns. You can also use <code>aria-labelledby</code> to associate data cells with their headers.
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
          The Table component can be extended with additional functionality for more complex use cases:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Sortable Columns
          </h3>
          <p className="leading-7">
            Implement sortable columns by adding click handlers to the table headers:
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to create sortable columns. The actual implementation would require state management for sorting.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { useState } from "react"

export function SortableTable() {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Button variant="ghost" onClick={() => handleSort("name")}>
              Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead>
            <Button variant="ghost" onClick={() => handleSort("email")}>
              Email
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead>
            <Button variant="ghost" onClick={() => handleSort("status")}>
              Status
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Table rows would be sorted based on sortColumn and sortDirection */}
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        {/* More rows... */}
      </TableBody>
    </Table>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Responsive Tables
          </h3>
          <p className="leading-7">
            Make tables responsive for mobile devices by using a container with horizontal scrolling:
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to create a responsive table that can be scrolled horizontally on small screens.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function ResponsiveTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Developer</TableCell>
            <TableCell>Engineering</TableCell>
            <TableCell>New York</TableCell>
          </TableRow>
          {/* More rows... */}
        </TableBody>
      </Table>
    </div>
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
          <a href="/docs/data-display/calendar">Previous: Calendar Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/data-display/tabs">Next: Tabs Component</a>
        </Button>
      </div>
    </div>
  );
}