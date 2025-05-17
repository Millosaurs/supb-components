"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
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
  Volume2,
  VolumeX,
  Sun,
  Moon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SliderPage() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});
  const [volume, setVolume] = useState<number>(50);
  const [brightness, setBrightness] = useState<number>(75);

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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Slider</h1>
        <p className="text-lg text-muted-foreground">
          An input component that allows users to select a value from a range.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Slider component is an interactive control that allows users to select a value or range from a fixed set of values.
          It's commonly used for adjusting settings like volume, brightness, or filtering items by price range.
        </p>
        <p className="leading-7">
          Our Slider component is built with Radix UI primitives and follows WAI-ARIA best practices.
          It supports keyboard navigation, focus management, and screen reader announcements.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The default Slider component provides a simple, accessible range input.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <CodePopover
              code={`import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} />
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

        {/* With Value Display */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Value Display
          </h3>
          <p className="leading-7">
            Display the current value of the slider for better user feedback.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="volume" className="text-sm font-medium leading-none">
                      Volume: {volume}%
                    </label>
                  </div>
                  <Slider
                    id="volume"
                    value={[volume]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setVolume(value[0])}
                  />
                </div>
              </div>
              <CodePopover
                code={`import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export function SliderWithValue() {
  const [volume, setVolume] = useState(50)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label htmlFor="volume" className="text-sm font-medium leading-none">
          Volume: {volume}%
        </label>
      </div>
      <Slider
        id="volume"
        value={[volume]}
        max={100}
        step={1}
        onValueChange={(value) => setVolume(value[0])}
      />
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Value Example"
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
            Add icons to provide visual context for the slider.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="volume-icons" className="text-sm font-medium leading-none">
                        Volume
                      </label>
                      <span className="text-sm text-muted-foreground">{volume}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <VolumeX className="h-4 w-4 text-muted-foreground" />
                      <Slider
                        id="volume-icons"
                        value={[volume]}
                        max={100}
                        step={1}
                        className="flex-1"
                        onValueChange={(value) => setVolume(value[0])}
                      />
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="brightness" className="text-sm font-medium leading-none">
                        Brightness
                      </label>
                      <span className="text-sm text-muted-foreground">{brightness}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Moon className="h-4 w-4 text-muted-foreground" />
                      <Slider
                        id="brightness"
                        value={[brightness]}
                        max={100}
                        step={1}
                        className="flex-1"
                        onValueChange={(value) => setBrightness(value[0])}
                      />
                      <Sun className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Volume2, VolumeX, Sun, Moon } from "lucide-react"

export function SliderWithIcons() {
  const [volume, setVolume] = useState(50)
  const [brightness, setBrightness] = useState(75)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="volume" className="text-sm font-medium leading-none">
            Volume
          </label>
          <span className="text-sm text-muted-foreground">{volume}%</span>
        </div>
        <div className="flex items-center space-x-2">
          <VolumeX className="h-4 w-4 text-muted-foreground" />
          <Slider
            id="volume"
            value={[volume]}
            max={100}
            step={1}
            className="flex-1"
            onValueChange={(value) => setVolume(value[0])}
          />
          <Volume2 className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="brightness" className="text-sm font-medium leading-none">
            Brightness
          </label>
          <span className="text-sm text-muted-foreground">{brightness}%</span>
        </div>
        <div className="flex items-center space-x-2">
          <Moon className="h-4 w-4 text-muted-foreground" />
          <Slider
            id="brightness"
            value={[brightness]}
            max={100}
            step={1}
            className="flex-1"
            onValueChange={(value) => setBrightness(value[0])}
          />
          <Sun className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Icons Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Range Slider */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Range Slider
          </h3>
          <p className="leading-7">
            Create a range slider by providing multiple values.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="price-range" className="text-sm font-medium leading-none">
                      Price Range
                    </label>
                    <span className="text-sm text-muted-foreground">$20 - $80</span>
                  </div>
                  <Slider
                    id="price-range"
                    defaultValue={[20, 80]}
                    max={100}
                    step={1}
                  />
                </div>
              </div>
              <CodePopover
                code={`import { Slider } from "@/components/ui/slider"

export function RangeSlider() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label htmlFor="price-range" className="text-sm font-medium leading-none">
          Price Range
        </label>
        <span className="text-sm text-muted-foreground">$20 - $80</span>
      </div>
      <Slider
        id="price-range"
        defaultValue={[20, 80]}
        max={100}
        step={1}
      />
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Range Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Custom Steps */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Steps
          </h3>
          <p className="leading-7">
            Customize the step size for more precise or coarse control.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="fine-control" className="text-sm font-medium leading-none">
                        Fine Control (0.1 steps)
                      </label>
                    </div>
                    <Slider
                      id="fine-control"
                      defaultValue={[2.5]}
                      max={5}
                      step={0.1}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="coarse-control" className="text-sm font-medium leading-none">
                        Coarse Control (10 steps)
                      </label>
                    </div>
                    <Slider
                      id="coarse-control"
                      defaultValue={[50]}
                      max={100}
                      step={10}
                    />
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { Slider } from "@/components/ui/slider"

export function CustomStepSlider() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="fine-control" className="text-sm font-medium leading-none">
            Fine Control (0.1 steps)
          </label>
        </div>
        <Slider
          id="fine-control"
          defaultValue={[2.5]}
          max={5}
          step={0.1}
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="coarse-control" className="text-sm font-medium leading-none">
            Coarse Control (10 steps)
          </label>
        </div>
        <Slider
          id="coarse-control"
          defaultValue={[50]}
          max={100}
          step={10}
        />
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Steps Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Disabled State */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Disabled State
          </h3>
          <p className="leading-7">
            Slider can be disabled to prevent user interaction.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="disabled-slider" className="text-sm font-medium leading-none text-muted-foreground">
                      Disabled Slider
                    </label>
                  </div>
                  <Slider
                    id="disabled-slider"
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    disabled
                  />
                </div>
              </div>
              <CodePopover
                code={`import { Slider } from "@/components/ui/slider"

export function DisabledSlider() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label htmlFor="disabled-slider" className="text-sm font-medium leading-none text-muted-foreground">
          Disabled Slider
        </label>
      </div>
      <Slider
        id="disabled-slider"
        defaultValue={[50]}
        max={100}
        step={1}
        disabled
      />
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Disabled Example"
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
          The Slider component provides a way to select a value or range from a set of values.
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
                <TableCell className="font-mono text-xs">number[]</TableCell>
                <TableCell>
                  The controlled value of the slider. Use with <code>onValueChange</code> for controlled usage.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">defaultValue</TableCell>
                <TableCell className="font-mono text-xs">number[]</TableCell>
                <TableCell>
                  The default value of the slider when initially rendered. Use for uncontrolled usage.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">onValueChange</TableCell>
                <TableCell className="font-mono text-xs">function</TableCell>
                <TableCell>
                  Event handler called when the value changes.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">min</TableCell>
                <TableCell className="font-mono text-xs">number</TableCell>
                <TableCell>
                  The minimum value for the range. Defaults to 0.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">max</TableCell>
                <TableCell className="font-mono text-xs">number</TableCell>
                <TableCell>
                  The maximum value for the range. Defaults to 100.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">step</TableCell>
                <TableCell className="font-mono text-xs">number</TableCell>
                <TableCell>
                  The stepping interval. Defaults to 1.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">disabled</TableCell>
                <TableCell className="font-mono text-xs">boolean</TableCell>
                <TableCell>
                  When true, prevents the user from interacting with the slider.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">orientation</TableCell>
                <TableCell className="font-mono text-xs">"horizontal" | "vertical"</TableCell>
                <TableCell>
                  The orientation of the slider. Defaults to "horizontal".
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">name</TableCell>
                <TableCell className="font-mono text-xs">string</TableCell>
                <TableCell>
                  The name of the slider. Submitted with its owning form as part of a name/value pair.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground">
          The Slider component also accepts all standard HTML attributes for the <code>div</code> element.
        </p>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage Guidelines
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Slider component:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
              <h4 className="text-base font-medium text-green-800 dark:text-green-300 mb-2">
                Do
              </h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300 list-disc pl-4">
                <li>Use sliders for continuous values like volume, brightness, or zoom</li>
                <li>Display the current value or range for better user feedback</li>
                <li>Use appropriate step sizes for the context (smaller steps for precision)</li>
                <li>Add labels and icons to clarify what the slider controls</li>
                <li>Consider using a default value that is the most common or expected setting</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use sliders for binary choices (use switches or checkboxes instead)</li>
                <li>Use sliders for exact numeric input (use number inputs instead)</li>
                <li>Use sliders without clear indication of their purpose</li>
                <li>Make sliders too small or difficult to interact with</li>
                <li>Use sliders for values that rarely need adjustment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            When to Use Sliders vs. Other Inputs
          </h3>
          <p className="leading-7">
            Choose the right input type for your specific use case:
          </p>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Input Type</TableHead>
                  <TableHead>Best Used For</TableHead>
                  <TableHead>Examples</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Slider</TableCell>
                  <TableCell>Continuous values with visual feedback</TableCell>
                  <TableCell>Volume, brightness, zoom level, opacity</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Number Input</TableCell>
                  <TableCell>Precise numeric values</TableCell>
                  <TableCell>Quantity, age, exact measurements</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Select</TableCell>
                  <TableCell>Discrete options from a list</TableCell>
                  <TableCell>Size selection, quality settings, categories</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Range Slider</TableCell>
                  <TableCell>Selecting a range between min and max</TableCell>
                  <TableCell>Price range, date range, filter by attributes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <p className="leading-7">
          The Slider component follows WAI-ARIA guidelines to ensure accessibility.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Keyboard Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Users can navigate to sliders using the <kbd>Tab</kbd> key and adjust values using:
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li><kbd>Arrow Left/Right</kbd>: Decrease/increase by one step</li>
                <li><kbd>Page Down/Up</kbd>: Decrease/increase by larger steps</li>
                <li><kbd>Home/End</kbd>: Set to minimum/maximum value</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Screen Readers</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The component uses proper ARIA attributes to communicate values and changes to assistive technologies.
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Uses <code>aria-valuemin</code>, <code>aria-valuemax</code>, and <code>aria-valuenow</code></li>
                <li>Announces value changes as users interact with the slider</li>
                <li>Provides context through associated labels</li>
              </ul>
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
              Always associate labels with sliders using the <code>htmlFor</code> attribute that matches the slider's <code>id</code>. 
              For better user experience, display the current value or range to provide visual feedback, especially for users who may have difficulty perceiving small visual differences.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/forms/switch">Previous: Switch Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/forms/checkbox">Next: Checkbox Component</a>
        </Button>
      </div>
    </div>
  );
}