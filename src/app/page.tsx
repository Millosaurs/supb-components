"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Code,
  Copy,
  Check,
  Layers,
  Paintbrush,
  Accessibility,
  Zap,
  Github,
  ArrowRight,
  Package,
  Sparkles,
  Moon,
  Sun,
  ExternalLink,
  BookOpen,
  Palette,
  FileCode,
  Laptop,
  CheckCircle2,
  Boxes,
  Workflow,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      icon: <Accessibility className="h-10 w-10" />,
      title: "Accessible",
      description: "All components follow WAI-ARIA standards and support keyboard navigation and screen readers."
    },
    {
      icon: <Paintbrush className="h-10 w-10" />,
      title: "Customizable",
      description: "Easily customize components with Tailwind CSS or override styles with your own CSS."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Fast",
      description: "Optimized for performance with minimal bundle size and efficient rendering."
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Composable",
      description: "Components are designed to work together seamlessly and can be composed to create complex UIs."
    }
  ];

  const testimonials = [
    {
      quote: "This component library has dramatically improved our development workflow. The components are well-designed and easy to use.",
      author: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechCorp"
    },
    {
      quote: "The accessibility features built into these components have saved us countless hours of work. Highly recommended!",
      author: "Michael Chen",
      role: "UI/UX Designer",
      company: "DesignHub"
    },
    {
      quote: "We've been able to build our product twice as fast since adopting this library. The documentation is excellent.",
      author: "Alex Rodriguez",
      role: "CTO",
      company: "StartupX"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-full h-full max-w-7xl mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/20 to-primary/40 blur-3xl opacity-50" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8">
              <div className="inline-flex items-center self-start px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Beautifully crafted UI components</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Build stunning interfaces <span className="text-primary">faster</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
                A modern, accessible component library built with Radix UI and Tailwind CSS.
                Designed for developers who value quality, customization, and speed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/docs">
                  <Button size="lg" className="px-8">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
              
              <div className="w-full p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-center p-2 rounded-md bg-muted/50">
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    npm install components-library
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 gap-1"
                    onClick={() =>
                      copyToClipboard("npm install components-library")
                    }
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-card border rounded-xl shadow-lg overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">
                    components-preview.tsx
                  </div>
                  <div className="w-4"></div>
                </div>
                <div className="p-6">
                  <ResizablePanelGroup
                    direction="horizontal"
                    className="min-h-[400px] rounded-lg border"
                  >
                    <ResizablePanel defaultSize={40}>
                      <div className="flex h-full flex-col">
                        <div className="p-4 border-b">
                          <h3 className="text-sm font-medium">Components</h3>
                        </div>
                        <div className="p-4 space-y-4">
                          <div className="flex items-center space-x-2 rounded-md bg-primary/10 p-2">
                            <Button className="h-8" size="sm">Button</Button>
                            <div className="text-xs text-muted-foreground">Default</div>
                          </div>
                          <div className="flex items-center space-x-2 rounded-md p-2">
                            <Button variant="outline" className="h-8" size="sm">Button</Button>
                            <div className="text-xs text-muted-foreground">Outline</div>
                          </div>
                          <div className="flex items-center space-x-2 rounded-md p-2">
                            <Button variant="secondary" className="h-8" size="sm">Button</Button>
                            <div className="text-xs text-muted-foreground">Secondary</div>
                          </div>
                          <div className="flex items-center space-x-2 rounded-md p-2">
                            <Button variant="destructive" className="h-8" size="sm">Button</Button>
                            <div className="text-xs text-muted-foreground">Destructive</div>
                          </div>
                        </div>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={60}>
                      <div className="flex h-full flex-col">
                        <div className="p-4 border-b">
                          <h3 className="text-sm font-medium">Preview</h3>
                        </div>
                        <div className="flex-1 flex items-center justify-center p-4">
                          <div className="space-y-4 w-full max-w-[300px]">
                            <Card>
                              <CardHeader>
                                <CardTitle>Create project</CardTitle>
                                <CardDescription>
                                  Deploy your new project in one-click.
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="h-32 rounded-md bg-muted flex items-center justify-center">
                                  <FileCode className="h-10 w-10 text-muted-foreground/50" />
                                </div>
                              </CardContent>
                              <CardFooter className="flex justify-between">
                                <Button variant="outline">Cancel</Button>
                                <Button>Deploy</Button>
                              </CardFooter>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Designed for developers
            </h2>
            <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
              Our components are built with a focus on developer experience, accessibility, and customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border bg-card">
                <CardHeader>
                  <div className="p-2 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Explore our components
            </h2>
            <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
              Browse through our extensive collection of UI components, designed to work together seamlessly.
            </p>
          </div>

          <Tabs defaultValue="layout" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-xl">
                <TabsTrigger value="layout">Layout</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="display">Display</TabsTrigger>
                <TabsTrigger value="overlay">Overlay</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="layout" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/docs/layout/accordion" className="group">
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Accordion
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Is it accessible?</AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link href="/docs/layout/card" className="group">
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Card
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Card>
                        <CardHeader className="p-3">
                          <CardTitle className="text-sm">Nested Card</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                          <p className="text-xs text-muted-foreground">Card content example</p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link href="/docs/layout/separator" className="group">
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Separator
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium">Section One</h4>
                        <p className="text-xs text-muted-foreground">Description text</p>
                      </div>
                      <Separator />
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium">Section Two</h4>
                        <p className="text-xs text-muted-foreground">Description text</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
              
              <div className="flex justify-center mt-8">
                <Link href="/docs">
                  <Button variant="outline" className="gap-2">
                    View all components
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="forms" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/docs/forms/button" className="group">
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Button
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      <Button size="sm">Default</Button>
                      <Button size="sm" variant="outline">Outline</Button>
                      <Button size="sm" variant="secondary">Secondary</Button>
                    </CardContent>
                  </Card>
                </Link>
                
                {/* Add more form components here */}
              </div>
              
              <div className="flex justify-center mt-8">
                <Link href="/docs">
                  <Button variant="outline" className="gap-2">
                    View all components
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="display" className="space-y-4">
              {/* Display components */}
              <div className="flex justify-center mt-8">
                <Link href="/docs">
                  <Button variant="outline" className="gap-2">
                    View all components
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="overlay" className="space-y-4">
              {/* Overlay components */}
              <div className="flex justify-center mt-8">
                <Link href="/docs">
                  <Button variant="outline" className="gap-2">
                    View all components
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Why choose our component library?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Built with modern tools</h3>
                    <p className="text-muted-foreground">
                      Leveraging React, Radix UI, and Tailwind CSS for a modern development experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Boxes className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive collection</h3>
                    <p className="text-muted-foreground">
                      Over 50 components covering everything from basic elements to complex UI patterns.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Flexible workflow</h3>
                    <p className="text-muted-foreground">
                      Designed to fit into your existing workflow with minimal configuration.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Thoughtful defaults</h3>
                    <p className="text-muted-foreground">
                      Sensible defaults that look great out of the box but can be easily customized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
              <div className="relative bg-card border rounded-xl shadow-lg overflow-hidden">
                <AspectRatio ratio={4/3}>
                  <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background flex items-center justify-center">
                    <div className="text-center p-8">
                      <Palette className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Themeable</h3>
                      <p className="text-muted-foreground">
                        Customize colors, spacing, and more with simple CSS variables or Tailwind config.
                      </p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Trusted by developers
            </h2>
            <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
              See what others are saying about our component library.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="inline-block mr-1">★</span>
                    ))}
                  </div>
                  <p className="mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-t border-b">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to build better interfaces?
          </h2>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto mb-8">
            Get started with our component library today and see how it can transform your development workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs">
              <Button size="lg" className="px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Components Library</h3>
              <p className="text-muted-foreground mb-4">
                Beautiful, accessible UI components for modern applications.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Components
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    License
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Components Library. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {mounted && theme === "dark" ? (
                  <Sun className="h-4 w-4 mr-2" />
                ) : (
                  <Moon className="h-4 w-4 mr-2" />
                )}
                {mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
