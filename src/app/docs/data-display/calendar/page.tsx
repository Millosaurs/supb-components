"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Copy,
  Check,
  Info,
  AlertCircle,
  Calendar as CalendarIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

export default function CalendarPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  const handleDateRangeSelect = (
    range: { from: Date | undefined; to: Date | undefined } | undefined
  ) => {
    if (range) {
      setDateRange(range);
    }
  };

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
          Calendar
        </h1>
        <p className="text-lg text-muted-foreground">
          A date picker component with range and multi-selection capabilities.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Calendar component provides an interactive date picker that allows
          users to select dates. It supports single date selection, date range
          selection, and multiple date selection.
        </p>
        <p className="leading-7">
          Our Calendar component is built with React DayPicker and follows
          WAI-ARIA best practices. It provides keyboard navigation, focus
          management, and screen reader announcements.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The default Calendar component provides a simple date picker with a
          single date selection.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
            <CodePopover
              code={`import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
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

        {/* Date Range Selection */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Date Range Selection
          </h3>
          <p className="leading-7">
            The Calendar component can be configured to select a range of dates.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={(range: DateRange | undefined) =>
                    handleDateRangeSelect(
                      range as { from: Date | undefined; to: Date | undefined }
                    )
                  }
                  className="rounded-md border"
                  numberOfMonths={2}
                />
              </div>
              <CodePopover
                code={`import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { addDays } from "date-fns"

export function CalendarWithRange() {
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: addDays(new Date(), 7),
  })
  
  const handleDateRangeSelect = (range) => {
    if (range) {
      setDateRange(range);
    }
  };
  
  return (
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={handleDateRangeSelect}
      className="rounded-md border"
      numberOfMonths={2}
    />
  )
}`}
                language="tsx"
                buttonLabel="View Range Example"
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
            Add a footer to the calendar to display additional information or
            actions.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  footer={
                    <div className="p-2 border-t">
                      <p className="text-sm text-center">
                        {date ? format(date, "PPP") : "No date selected"}
                      </p>
                    </div>
                  }
                />
              </div>
              <CodePopover
                code={`import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { format } from "date-fns"

export function CalendarWithFooter() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      footer={
        <div className="p-2 border-t">
          <p className="text-sm text-center">
            {date ? format(date, "PPP") : "No date selected"}
          </p>
        </div>
      }
    />
  )
}`}
                language="tsx"
                buttonLabel="View Footer Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Disabled Dates */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Disabled Dates
          </h3>
          <p className="leading-7">
            Disable specific dates or date ranges that cannot be selected.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  disabled={(date) =>
                    date < new Date() || date > addDays(new Date(), 30)
                  }
                />
              </div>
              <CodePopover
                code={`import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { addDays } from "date-fns"

export function CalendarWithDisabledDates() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      disabled={(date) => 
        date < new Date() || 
        date > addDays(new Date(), 30)
      }
    />
  )
}`}
                language="tsx"
                buttonLabel="View Disabled Example"
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
            Customize the appearance of the calendar with additional CSS
            classes.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border p-3"
                  classNames={{
                    day_selected:
                      "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                    day_today: "bg-accent text-accent-foreground",
                    day_outside: "text-muted-foreground opacity-50",
                    day_disabled: "text-muted-foreground opacity-50",
                    day_range_middle:
                      "aria-selected:bg-accent aria-selected:text-accent-foreground",
                    day_hidden: "invisible",
                    caption: "text-sm font-medium",
                    caption_label: "text-base font-bold",
                    nav_button: "border rounded-md p-1 hover:bg-accent",
                    table: "border-collapse space-y-1",
                    head_cell:
                      "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                    cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md",
                  }}
                />
              </div>
              <CodePopover
                code={`import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export function CalendarWithCustomStyling() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border p-3"
      classNames={{
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        caption: "text-sm font-medium",
        caption_label: "text-base font-bold",
        nav_button: "border rounded-md p-1 hover:bg-accent",
        table: "border-collapse space-y-1",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md",
      }}
    />
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
          The Calendar component accepts the following props:
        </p>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Prop</TableHead>
                <TableHead className="w-[200px]">Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs">mode</TableCell>
                <TableCell className="font-mono text-xs">
                  "single" | "multiple" | "range" | "default"
                </TableCell>
                <TableCell>
                  The selection mode of the calendar. Defaults to "single".
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">selected</TableCell>
                <TableCell className="font-mono text-xs">
                  Date | Date[] | DateRange | undefined
                </TableCell>
                <TableCell>
                  The selected date(s). The type depends on the selection mode.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">onSelect</TableCell>
                <TableCell className="font-mono text-xs">function</TableCell>
                <TableCell>
                  Callback function called when a date is selected.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">disabled</TableCell>
                <TableCell className="font-mono text-xs">
                  boolean | ((date: Date) ={">"} boolean)
                </TableCell>
                <TableCell>Disable specific dates or all dates.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  defaultMonth
                </TableCell>
                <TableCell className="font-mono text-xs">Date</TableCell>
                <TableCell>The default month to display.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  numberOfMonths
                </TableCell>
                <TableCell className="font-mono text-xs">number</TableCell>
                <TableCell>
                  Number of months to display. Defaults to 1.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">fromDate</TableCell>
                <TableCell className="font-mono text-xs">Date</TableCell>
                <TableCell>The minimum date that can be selected.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">toDate</TableCell>
                <TableCell className="font-mono text-xs">Date</TableCell>
                <TableCell>The maximum date that can be selected.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">footer</TableCell>
                <TableCell className="font-mono text-xs">ReactNode</TableCell>
                <TableCell>
                  Footer element to display at the bottom of the calendar.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">className</TableCell>
                <TableCell className="font-mono text-xs">string</TableCell>
                <TableCell>
                  Additional CSS classes to apply to the calendar.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">classNames</TableCell>
                <TableCell className="font-mono text-xs">object</TableCell>
                <TableCell>
                  Custom class names for specific elements within the calendar.
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
          Follow these guidelines for effective use of the Calendar component:
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
                <li>Use appropriate selection mode for your use case</li>
                <li>Provide clear visual feedback for selected dates</li>
                <li>Disable dates that are not valid for selection</li>
                <li>Use date formatting that matches your user's locale</li>
                <li>
                  Ensure the calendar is accessible via keyboard navigation
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Display too many months at once on small screens</li>
                <li>Use confusing date formats that may be misinterpreted</li>
                <li>Hide important context about date selection</li>
                <li>Make it difficult to navigate between months</li>
                <li>Forget to provide a way to clear the selection</li>
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
          The Calendar component follows WAI-ARIA guidelines for accessibility:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Keyboard Navigation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The calendar supports keyboard navigation using arrow keys, Home,
              End, Page Up, and Page Down. This allows users to navigate between
              days, weeks, and months without using a mouse.
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
              When using the Calendar component in forms, always provide a text
              input alternative for users who prefer to type dates directly.
              This improves accessibility and provides a faster input method for
              keyboard users.
            </p>
          </div>
        </div>
      </div>

      {/* Integration with Form Components */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Integration with Form Components
        </h2>
        <p className="leading-7">
          The Calendar component can be integrated with other form components to
          create a complete date picker experience. Here's an example of
          integrating the Calendar with a Popover and Input component:
        </p>

        <div className="rounded-lg border">
          <div className="p-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                This example shows how to create a date picker with a popover.
                The actual implementation would require additional components
                like Popover and Input.
              </p>
              <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                <code>{`import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"

export function DatePicker() {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/data-display/badge">Previous: Badge Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/data-display/card">Next: Card Component</a>
        </Button>
      </div>
    </div>
  );
}
