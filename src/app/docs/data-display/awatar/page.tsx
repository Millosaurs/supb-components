"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AvatarPage() {
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The Avatar component displays a user's profile picture, or a fallback when the image is unavailable.
          It's commonly used in user interfaces to represent a user or entity.
        </p>
        <p className="leading-7">
          Our Avatar component is built with Radix UI primitives and follows WAI-ARIA best practices.
          It provides a consistent way to display user avatars with proper fallback handling.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="leading-7">
          The basic Avatar component consists of an image and a fallback. The fallback is displayed when the image fails to load.
        </p>

        <div className="rounded-lg border">
          <div className="p-6 flex flex-row justify-between">
            <div className="flex flex-col gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <CodePopover
              code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
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

        {/* With Fallback */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With Fallback
          </h3>
          <p className="leading-7">
            When an image fails to load, the fallback is displayed. This can be initials, an icon, or any other content.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://invalid-image-url.png" alt="@johndoe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://invalid-image-url.png" alt="@janedoe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://invalid-image-url.png" alt="User" />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CodePopover
                code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "lucide-react"

export function AvatarFallbackDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://invalid-image-url.png" alt="@johndoe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid-image-url.png" alt="@janedoe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid-image-url.png" alt="User" />
        <AvatarFallback>
          <User className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Fallback Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* Different Sizes */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Different Sizes
          </h3>
          <p className="leading-7">
            You can customize the size of the Avatar using CSS classes.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CodePopover
                code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarSizesDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
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

        {/* Custom Styling */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Custom Styling
          </h3>
          <p className="leading-7">
            You can customize the appearance of the Avatar with additional CSS classes.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="border-2 border-primary">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="bg-primary text-primary-foreground">
                    <AvatarImage src="https://invalid-image-url.png" alt="@johndoe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="rounded-lg">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CodePopover
                code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarCustomDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="border-2 border-primary">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="bg-primary text-primary-foreground">
        <AvatarImage src="https://invalid-image-url.png" alt="@johndoe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View Custom Example"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>

        {/* With User Information */}
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            With User Information
          </h3>
          <p className="leading-7">
            Combine the Avatar with text to display user information.
          </p>

          <div className="rounded-lg border">
            <div className="p-6 flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">shadcn</p>
                      <p className="text-sm text-muted-foreground">m@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <CodePopover
                code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarWithTextDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium leading-none">shadcn</p>
        <p className="text-sm text-muted-foreground">m@example.com</p>
      </div>
    </div>
  )
}`}
                language="tsx"
                buttonLabel="View User Info Example"
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
          The Avatar component is composed of three parts: Avatar, AvatarImage, and AvatarFallback.
        </p>

        <div className="space-y-6">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Avatar
          </h3>
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
                  <TableCell className="font-mono text-xs">className</TableCell>
                  <TableCell className="font-mono text-xs">string</TableCell>
                  <TableCell>
                    Additional CSS classes to apply to the avatar.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-xs">asChild</TableCell>
                  <TableCell className="font-mono text-xs">boolean</TableCell>
                  <TableCell>
                    Change the default rendered element for the one passed as a child, merging their props and behavior.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            AvatarImage
          </h3>
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
                  <TableCell className="font-mono text-xs">src</TableCell>
                  <TableCell className="font-mono text-xs">string</TableCell>
                  <TableCell>
                    The source URL of the image.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-xs">alt</TableCell>
                  <TableCell className="font-mono text-xs">string</TableCell>
                  <TableCell>
                    Alternative text description of the image.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-xs">className</TableCell>
                  <TableCell className="font-mono text-xs">string</TableCell>
                  <TableCell>
                    Additional CSS classes to apply to the image.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-xs">onLoadingStatusChange</TableCell>
                  <TableCell className="font-mono text-xs">function</TableCell>
                  <TableCell>
                    Event handler called when the loading status of the image changes.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            AvatarFallback
          </h3>
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
                  <TableCell className="font-mono text-xs">delayMs</TableCell>
                  <TableCell className="font-mono text-xs">number</TableCell>
                  <TableCell>
                    The delay in milliseconds before showing the fallback element.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-xs">className</TableCell>
                  <TableCell className="font-mono text-xs">string</TableCell>
                  <TableCell>
                    Additional CSS classes to apply to the fallback.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-xs">asChild</TableCell>
                  <TableCell className="font-mono text-xs">boolean</TableCell>
                  <TableCell>
                    Change the default rendered element for the one passed as a child, merging their props and behavior.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Best Practices
        </h2>
        <p className="leading-7">
          Follow these guidelines for effective use of the Avatar component:
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
                <li>Always provide a fallback for when images fail to load</li>
                <li>Use appropriate image sizes to avoid distortion</li>
                <li>Include descriptive alt text for accessibility</li>
                <li>Keep fallback content simple and recognizable</li>
                <li>Use consistent sizing across your application</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
              <h4 className="text-base font-medium text-red-800 dark:text-red-300 mb-2">
                Don't
              </h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300 list-disc pl-4">
                <li>Use very large images that slow down page loading</li>
                <li>Omit the fallback component</li>
                <li>Use complex or hard-to-read content in fallbacks</li>
                <li>Forget to provide alt text for screen readers</li>
                <li>Use inconsistent styling across your application</li>
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
          The Avatar component follows WAI-ARIA guidelines to ensure accessibility.
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">Screen Readers</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Always provide descriptive alt text for the AvatarImage to ensure screen readers can convey the purpose of the image to users.
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
              When using avatars to represent users, consider using their initials in the fallback for better recognition. 
              For decorative avatars that don't convey important information, you can use <code>alt=""</code> to indicate to screen readers that the image can be ignored.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <a href="/docs/display/badge">Previous: Badge Component</a>
        </Button>
        <Button asChild>
          <a href="/docs/display/card">Next: Card Component</a>
        </Button>
      </div>
    </div>
  );
}