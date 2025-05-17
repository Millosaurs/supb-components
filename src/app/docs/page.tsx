import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileCode, Lightbulb, Palette, Zap } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the Components Library documentation. Explore our beautifully designed, accessible components built with Radix UI and Tailwind CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Zap className="h-5 w-5 text-primary mb-2" />
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Quick setup to start using the component library in your project
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p>Install the components into your project using npm or yarn:</p>
            <pre className="my-4 rounded-lg bg-muted px-4 py-3 font-mono text-sm">
              <code>npm install components-library</code>
            </pre>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/docs/getting-started">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Palette className="h-5 w-5 text-primary mb-2" />
            <CardTitle>Theming</CardTitle>
            <CardDescription>
              Learn how to customize the look and feel of components
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p>The components can be themed using CSS variables:</p>
            <pre className="my-4 rounded-lg bg-muted px-4 py-3 font-mono text-sm overflow-x-auto">
              <code>{`:root {
  --primary: #72e3ad;
  --primary-foreground: #1e2723;
  ...
}`}</code>
            </pre>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/docs/theming">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">How to Use the Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-start space-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-lg font-medium">Browse Components</h3>
            <p className="text-sm text-muted-foreground">
              Navigate through component categories in the sidebar to find what you need.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-lg font-medium">Copy Examples</h3>
            <p className="text-sm text-muted-foreground">
              Each component page has copy-paste examples to help you implement quickly.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-lg font-medium">Customize</h3>
            <p className="text-sm text-muted-foreground">
              Adapt components to your needs using the provided props and CSS variables.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Popular Components</h2>
        <Tabs defaultValue="forms" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="overlay">Overlay</TabsTrigger>
          </TabsList>
          <TabsContent value="forms" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                href="/docs/forms/button" 
                className="block p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-medium">Button</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Displays a button or a component that looks like a button.
                </p>
              </Link>
              <Link 
                href="/docs/forms/input" 
                className="block p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-medium">Input</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Displays a form input field.
                </p>
              </Link>
              <Link 
                href="/docs/forms/select" 
                className="block p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-medium">Select</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Displays a dropdown list of options.
                </p>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="layout" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                href="/docs/layout/card" 
                className="block p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-medium">Card</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Displays a card with header, content, and footer.
                </p>
              </Link>
              <Link 
                href="/docs/layout/accordion" 
                className="block p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-medium">Accordion</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A vertically stacked set of interactive headings.
                </p>
              </Link>
              <Link 
                href="/docs/layout/tabs" 
                className="block p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-medium">Tabs</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Organize content into separate views.
                </p>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="overlay" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                href="/docs/overlay/dialog" 
                className="block p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-medium">Dialog</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A modal dialog that interrupts the user.
                </p>
              </Link>
              <Link 
                href="/docs/overlay/popover" 
                className="block p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-medium">Popover</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Displays floating content next to a trigger element.
                </p>
              </Link>
              <Link 
                href="/docs/overlay/command" 
                className="block p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-medium">Command</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Fast, composable command menu for React.
                </p>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Basic Usage Example</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileCode className="h-4 w-4" />
            <span>Example Code</span>
          </div>
        </div>
        <Card>
          <CardContent className="pt-6">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="default">Default Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="link">Link Button</Button>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="rounded-lg bg-muted px-4 py-3 font-mono text-sm overflow-x-auto">
                  <code>{`import { Button } from 'components-library';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
    </div>
  );
}`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/5 rounded-lg p-6 border">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold">Pro Tip</h2>
        </div>
        <p className="text-muted-foreground">
          All components support light and dark mode out of the box. The theme automatically adjusts based on user preference or can be toggled manually.
        </p>
      </div>

      <Separator />

      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Explore all components through the sidebar navigation
        </p>
        <Button asChild>
          <Link href="/docs/forms/button">
            View Button Component <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

