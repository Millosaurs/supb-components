"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProgressPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState(45);
  const [loading, setLoading] = useState(false);
  const [indeterminateProgress, setIndeterminateProgress] = useState(false);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const simulateProgress = () => {
    setLoading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 200);
  };

  const toggleIndeterminate = () => {
    setIndeterminateProgress(!indeterminateProgress);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Progress</h1>
        <p className="text-lg text-muted-foreground">
          Displays an indicator showing the completion progress of a task.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Progress component provides visual feedback about the completion status of an operation or activity.
          It can be used to show determinate progress (with a specific value) or indeterminate progress (when the completion time is unknown).
        </p>
        <p className="leading-7">
          Our Progress component follows WAI-ARIA guidelines for accessibility, providing appropriate ARIA attributes and keyboard navigation support.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The basic Progress component displays a horizontal bar that fills based on the provided value (0-100).
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Progress value={progress} className="w-full" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Progress: {progress}%</span>
                <Button onClick={simulateProgress} disabled={loading}>
                  {loading ? "Loading..." : "Simulate Progress"}
                </Button>
              </div>
            </div>
            <CodePopover
              code={`import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ProgressDemo() {
  const [progress, setProgress] = useState(45)
  const [loading, setLoading] = useState(false)

  const simulateProgress = () => {
    setLoading(true)
    setProgress(0)
    
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setLoading(false)
          return 100
        }
        return prevProgress + 5
      })
    }, 200)
  }
  
  return (
    <div className="space-y-4 w-full max-w-md">
      <Progress value={progress} className="w-full" />
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Progress: {progress}%</span>
        <Button onClick={simulateProgress} disabled={loading}>
          {loading ? "Loading..." : "Simulate Progress"}
        </Button>
      </div>
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

        {/* Indeterminate Progress */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Indeterminate Progress
          </h3>
          <p className="leading-7">
            When the completion time of an operation is unknown, you can use an indeterminate progress indicator.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Progress value={indeterminateProgress ? undefined : 80} className="w-full" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {indeterminateProgress ? "Indeterminate" : "Determinate (80%)"}
                  </span>
                  <Button onClick={toggleIndeterminate}>
                    Toggle Mode
                  </Button>
                </div>
              </div>
              <CodePopover
                code={`import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function IndeterminateProgress() {
  const [indeterminate, setIndeterminate] = useState(true)
  
  return (
    <div className="space-y-4 w-full max-w-md">
      <Progress value={indeterminate ? undefined : 80} className="w-full" />
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          {indeterminate ? "Indeterminate" : "Determinate (80%)"}
        </span>
        <Button onClick={() => setIndeterminate(!indeterminate)}>
          Toggle Mode
        </Button>
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Indeterminate Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Custom Sizes */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Sizes
          </h3>
          <p className="leading-7">
            Customize the height of the progress bar to fit your design.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-6 w-full max-w-md">
                <div>
                  <span className="text-sm text-muted-foreground mb-2 block">Small (h-2)</span>
                  <Progress value={75} className="w-full h-2" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground mb-2 block">Default (h-4)</span>
                  <Progress value={75} className="w-full" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground mb-2 block">Large (h-6)</span>
                  <Progress value={75} className="w-full h-6" />
                </div>
              </div>
              <CodePopover
                code={`import { Progress } from "@/components/ui/progress"

export function ProgressSizes() {
  return (
    <div className="space-y-6 w-full max-w-md">
      <div>
        <span className="text-sm text-muted-foreground mb-2 block">Small (h-2)</span>
        <Progress value={75} className="w-full h-2" />
      </div>
      <div>
        <span className="text-sm text-muted-foreground mb-2 block">Default (h-4)</span>
        <Progress value={75} className="w-full" />
      </div>
      <div>
        <span className="text-sm text-muted-foreground mb-2 block">Large (h-6)</span>
        <Progress value={75} className="w-full h-6" />
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Sizes Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Custom Colors */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Colors
          </h3>
          <p className="leading-7">
            Customize the colors of the progress bar to indicate different states or match your brand.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-6 w-full max-w-md">
                <div>
                  <span className="text-sm text-muted-foreground mb-2 block">Default</span>
                  <Progress value={75} className="w-full" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground mb-2 block">Success</span>
                  <Progress value={75} className="w-full [&>div]:bg-green-500" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground mb-2 block">Warning</span>
                  <Progress value={75} className="w-full [&>div]:bg-yellow-500" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground mb-2 block">Error</span>
                  <Progress value={75} className="w-full [&>div]:bg-red-500" />
                </div>
              </div>
              <CodePopover
                code={`import { Progress } from "@/components/ui/progress"

export function ProgressColors() {
  return (
    <div className="space-y-6 w-full max-w-md">
      <div>
        <span className="text-sm text-muted-foreground mb-2 block">Default</span>
        <Progress value={75} className="w-full" />
      </div>
      <div>
        <span className="text-sm text-muted-foreground mb-2 block">Success</span>
        <Progress value={75} className="w-full [&>div]:bg-green-500" />
      </div>
      <div>
        <span className="text-sm text-muted-foreground mb-2 block">Warning</span>
        <Progress value={75} className="w-full [&>div]:bg-yellow-500" />
      </div>
      <div>
        <span className="text-sm text-muted-foreground mb-2 block">Error</span>
        <Progress value={75} className="w-full [&>div]:bg-red-500" />
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Colors Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* With Label */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Label
          </h3>
          <p className="leading-7">
            Add a label to provide more context about the progress.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-6 w-full max-w-md">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Uploading files...</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
                <Button onClick={simulateProgress} disabled={loading}>
                  {loading ? "Uploading..." : "Start Upload"}
                </Button>
              </div>
              <CodePopover
                code={`import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ProgressWithLabel() {
  const [progress, setProgress] = useState(45)
  const [loading, setLoading] = useState(false)

  const simulateProgress = () => {
    setLoading(true)
    setProgress(0)
    
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setLoading(false)
          return 100
        }
        return prevProgress + 5
      })
    }, 200)
  }
  
  return (
    <div className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Uploading files...</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>
      <Button onClick={simulateProgress} disabled={loading}>
        {loading ? "Uploading..." : "Start Upload"}
      </Button>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Label Example"
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
          The Progress component accepts the following props:
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
                <TableCell className="font-mono text-xs">value</TableCell>
                <TableCell className="font-mono text-xs">
                  number | undefined
                </TableCell>
                <TableCell>
                  The current progress value (0-100). If undefined, the progress bar will be in an indeterminate state.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">max</TableCell>
                <TableCell className="font-mono text-xs">
                  number
                </TableCell>
                <TableCell>
                  The maximum value of the progress bar. Defaults to 100.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">className</TableCell>
                <TableCell className="font-mono text-xs">
                  string
                </TableCell>
                <TableCell>
                  Additional CSS classes to apply to the progress bar container.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">aria-label</TableCell>
                <TableCell className="font-mono text-xs">
                  string
                </TableCell>
                <TableCell>
                  Accessible label for the progress bar. Defaults to "Progress".
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">aria-valuetext</TableCell>
                <TableCell className="font-mono text-xs">
                  string
                </TableCell>
                <TableCell>
                  Accessible text representation of the progress value.
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
          Follow these guidelines for effective use of the Progress component:
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
                <li>Use determinate progress when you know the completion percentage</li>
                <li>Use indeterminate progress when the completion time is unknown</li>
                <li>Provide clear labels to explain what the progress represents</li>
                <li>Use appropriate colors to indicate different states (success, warning, error)</li>
                <li>Ensure sufficient contrast between the progress bar and background</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use progress indicators for instant operations (less than 1 second)</li>
                <li>Animate progress too quickly, making it difficult to track</li>
                <li>Use progress bars without context about what they represent</li>
                <li>Rely solely on color to convey the status of the progress</li>
                <li>Make progress bars too thin, which can make them hard to see</li>
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
          The Progress component follows WAI-ARIA guidelines to ensure accessibility:
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">ARIA Attributes</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The Progress component uses <code>role="progressbar"</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>, and <code>aria-valuenow</code> attributes to ensure screen readers can announce the progress correctly.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Indeterminate State</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              When in an indeterminate state, the <code>aria-valuenow</code> attribute is removed to indicate to screen readers that the progress value is unknown.
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
              Always provide an <code>aria-label</code> or <code>aria-labelledby</code> attribute to describe what the progress bar represents. For more detailed information, use <code>aria-valuetext</code> to provide a text equivalent of the current value (e.g., "3 of 10 files uploaded").
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
          Here are some advanced patterns for using the Progress component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Multi-Step Process
          </h3>
          <p className="leading-7">
            Use the Progress component to visualize a multi-step process:
          </p>

          <div className="rounded-lg border">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how to create a multi-step process indicator.
                </p>
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code>{`import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function MultiStepProgress() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4
  const progressPercentage = (currentStep / totalSteps) * 100
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  
  return (
    <div className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <Progress value={progressPercentage} className="w-full" />
      </div>
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button 
          onClick={nextStep}
          disabled={currentStep === totalSteps}
        >
          Next
        </Button>
      </div>
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
          <a href="/docs/data-display/table">Previous: Table Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/data-display/tabs">Next: Tabs Component</a>
        </Button>
      </div>
    </div>
  );
}