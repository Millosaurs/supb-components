"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodePopover } from "@/components/code-popover";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Pagination
        </h1>
        <p className="text-lg text-muted-foreground">
          A component for navigating through multiple pages of content.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Pagination component provides a way to navigate through multiple
          pages of content. It's commonly used in applications that display
          large datasets, search results, or any content that's divided into
          multiple pages.
        </p>
        <p className="leading-7">
          Pagination helps improve user experience by breaking down large
          amounts of content into manageable chunks, reducing load times and
          making navigation more intuitive.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The Pagination component consists of a container with navigation
          controls for moving between pages.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <CodePopover
              code={`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
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

        {/* Interactive Pagination */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Interactive Pagination
          </h3>
          <p className="leading-7">
            This example demonstrates a fully interactive pagination component
            with state management.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="text-center mb-4">
                  <p className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </p>
                </div>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          handlePageChange(Math.max(1, currentPage - 1))
                        }
                        className={cn(
                          currentPage === 1 && "pointer-events-none opacity-50"
                        )}
                      />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, i) => {
                      const page = i + 1;
                      // Show first page, last page, and pages around current page
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => handlePageChange(page)}
                              isActive={currentPage === page}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      }
                      // Show ellipsis for gaps
                      if (
                        (page === 2 && currentPage > 3) ||
                        (page === totalPages - 1 &&
                          currentPage < totalPages - 2)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      return null;
                    })}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          handlePageChange(
                            Math.min(totalPages, currentPage + 1)
                          )
                        }
                        className={cn(
                          currentPage === totalPages &&
                            "pointer-events-none opacity-50"
                        )}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
              <CodePopover
                code={`import { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"

export function InteractivePagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div className="text-center mb-4">
        <p className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </p>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              className={cn(
                currentPage === 1 && "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1
            // Show first page, last page, and pages around current page
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => handlePageChange(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            }
            // Show ellipsis for gaps
            if (
              (page === 2 && currentPage > 3) ||
              (page === totalPages - 1 && currentPage < totalPages - 2)
            ) {
              return (
                <PaginationItem key={page}>
                  <PaginationEllipsis className="h-8 w-8 p-0 flex items-center justify-center" />
                </PaginationItem>
              )
            }
            return null
          })}
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              className={cn(
                currentPage === totalPages && "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}`}
                language="tsx"
                buttonLabel="View Interactive Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Custom Pagination */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Pagination
          </h3>
          <p className="leading-7">
            You can customize the appearance of pagination components to match
            your design system.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Pagination>
                  <PaginationContent className="flex flex-row gap-1">
                    <PaginationItem>
                      <PaginationPrevious
                        className="rounded-full h-8 w-8 p-0 flex items-center justify-center mr-6"
                        aria-label="Go to previous page"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </PaginationPrevious>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        className="rounded-full h-8 w-8 p-0 flex items-center justify-center"
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        className="rounded-full h-8 w-8 p-0 flex items-center justify-center bg-primary text-primary-foreground"
                        isActive
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        className="rounded-full h-8 w-8 p-0 flex items-center justify-center"
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis className="h-8 w-8 p-0 flex items-center justify-center" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        className="rounded-full h-8 w-8 p-0 flex items-center justify-center"
                        aria-label="Go to next page"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </PaginationNext>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
              <CodePopover
                code={`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CustomPagination() {
  return (
    <Pagination>
      <PaginationContent className="flex flex-row gap-1">
        <PaginationItem>
          <PaginationPrevious
            className="rounded-full h-8 w-8 p-0 flex items-center justify-center"
            aria-label="Go to previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </PaginationPrevious>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="rounded-full h-8 w-8 p-0 flex items-center justify-center"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="rounded-full h-8 w-8 p-0 flex items-center justify-center bg-primary text-primary-foreground"
            isActive
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="rounded-full h-8 w-8 p-0 flex items-center justify-center"
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="h-8 w-8 p-0 flex items-center justify-center" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className="rounded-full h-8 w-8 p-0 flex items-center justify-center"
            aria-label="Go to next page"
          >
            <ChevronRight className="h-4 w-4" />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
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
          The Pagination component consists of several parts, each with their
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
                <TableCell className="font-mono text-xs" rowSpan={1}>
                  Pagination
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the pagination container.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={1}>
                  PaginationContent
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the pagination content.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={1}>
                  PaginationItem
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the pagination item.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={2}>
                  PaginationLink
                </TableCell>
                <TableCell className="font-mono text-xs">
                  isActive?: boolean
                </TableCell>
                <TableCell>
                  When true, the link will be styled as the active page.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the pagination link.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={1}>
                  PaginationPrevious
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the previous button.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={1}>
                  PaginationNext
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the next button.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs" rowSpan={1}>
                  PaginationEllipsis
                </TableCell>
                <TableCell className="font-mono text-xs">
                  className?: string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the ellipsis.
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
          Follow these guidelines for effective use of the Pagination component:
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
                  Use pagination for large datasets or content collections
                </li>
                <li>
                  Show the current page clearly with visual differentiation
                </li>
                <li>Include previous and next buttons for easy navigation</li>
                <li>
                  Use ellipsis to indicate skipped pages for large page counts
                </li>
                <li>Keep the pagination component visible and accessible</li>
                <li>Consider showing the total number of pages or items</li>
                <li>Ensure pagination controls are keyboard accessible</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>
                  Use pagination for small datasets that could fit on one page
                </li>
                <li>
                  Show too many page numbers at once, which can be overwhelming
                </li>
                <li>
                  Hide or disable pagination controls without clear indication
                </li>
                <li>
                  Place pagination in inconsistent locations across different
                  pages
                </li>
                <li>
                  Use pagination for content that's better suited for infinite
                  scrolling
                </li>
                <li>
                  Make pagination controls too small or difficult to click
                </li>
                <li>Forget to include proper ARIA labels for accessibility</li>
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
          The Pagination component is designed with accessibility in mind:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Keyboard Navigation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Users can navigate pagination using the keyboard:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6">
              <li>
                <kbd>Tab</kbd> to focus on pagination links
              </li>
              <li>
                <kbd>Enter</kbd> or <kbd>Space</kbd> to activate the focused
                link
              </li>
              <li>
                <kbd>Shift + Tab</kbd> to move focus to the previous link
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">ARIA Attributes</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The pagination component uses appropriate ARIA attributes to
              ensure screen reader compatibility:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-6">
              <li>
                Uses <code>aria-current="page"</code> for the active page
              </li>
              <li>
                Uses <code>aria-label</code> for previous and next buttons
              </li>
              <li>Ensures proper focus management for interactive elements</li>
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
              When implementing pagination, ensure that page content updates are
              announced to screen readers. Consider using ARIA live regions or
              focus management to notify users when new content is loaded after
              a page change.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/navigation/navigation-menu">
            Previous: Navigation Menu
          </a>
        </Button>
        <Button asChild>
          <a href="/docs/navigation/tabs">Next: Tabs</a>
        </Button>
      </div>
    </div>
  );
}
