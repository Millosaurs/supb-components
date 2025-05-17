"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  AlignJustify,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  Type,
  FileInput,
  Table2,
  Bell,
  Navigation,
  Layers,
  Image as ImageIcon,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface ComponentLink {
  title: string;
  href: string;
  disabled?: boolean;
}

interface ComponentCategory {
  title: string;
  icon: React.ReactNode;
  components: ComponentLink[];
}

const components: ComponentCategory[] = [
  {
    title: "Typography",
    icon: <Type className="h-4 w-4" />,
    components: [
      {
        title: "Headings",
        href: "/docs/typography/headings",
      },
      {
        title: "Text",
        href: "/docs/typography/text",
      },
    ],
  },
  {
    title: "Layout",
    icon: <LayoutGrid className="h-4 w-4" />,
    components: [
      {
        title: "Accordion",
        href: "/docs/layout/accordion",
      },
      {
        title: "Aspect Ratio",
        href: "/docs/layout/aspect-ratio",
      },
      {
        title: "Card",
        href: "/docs/layout/card",
      },
      {
        title: "Separator",
        href: "/docs/layout/separator",
      },
      {
        title: "Collapsible",
        href: "/docs/layout/collapsible",
      },
      {
        title: "Resizable",
        href: "/docs/layout/resizable",
      },
    ],
  },
  {
    title: "Forms",
    icon: <FileInput className="h-4 w-4" />,
    components: [
      {
        title: "Button",
        href: "/docs/forms/button",
      },
      {
        title: "Input",
        href: "/docs/forms/input",
      },
      {
        title: "Textarea",
        href: "/docs/forms/textarea",
      },
      {
        title: "Select",
        href: "/docs/forms/select",
      },
      {
        title: "Checkbox",
        href: "/docs/forms/checkbox",
      },
      {
        title: "Radio Group",
        href: "/docs/forms/radio-group",
      },
      {
        title: "Toggle",
        href: "/docs/forms/toggle",
      },
      {
        title: "Switch",
        href: "/docs/forms/switch",
      },
      {
        title: "Slider",
        href: "/docs/forms/slider",
      },
      {
        title: "Form",
        href: "/docs/forms/form",
      },
    ],
  },
  {
    title: "Data Display",
    icon: <Table2 className="h-4 w-4" />,
    components: [
      {
        title: "Avatar",
        href: "/docs/data-display/awatar",
      },
      {
        title: "Badge",
        href: "/docs/data-display/badge",
      },
      {
        title: "Calendar",
        href: "/docs/data-display/calendar",
      },
      {
        title: "Table",
        href: "/docs/data-display/table",
      },
      {
        title: "Progress",
        href: "/docs/data-display/progress",
      },
      {
        title: "Skeleton",
        href: "/docs/data-display/skeleton",
      },
      {
        title: "Tabs",
        href: "/docs/data-display/tabs",
      },
    ],
  },
  {
    title: "Feedback",
    icon: <Bell className="h-4 w-4" />,
    components: [
      {
        title: "Alert",
        href: "/docs/feedback/alert",
      },
      {
        title: "Alert Dialog",
        href: "/docs/feedback/alert-dialog",
      },
      {
        title: "Sonner",
        href: "/docs/feedback/sonner",
      },
      {
        title: "Tooltip",
        href: "/docs/feedback/tooltip",
      },
    ],
  },
  {
    title: "Navigation",
    icon: <Navigation className="h-4 w-4" />,
    components: [
      {
        title: "Breadcrumb",
        href: "/docs/navigation/breadcrumb",
      },
      {
        title: "Dropdown Menu",
        href: "/docs/navigation/dropdown-menu",
      },
      {
        title: "Menubar",
        href: "/docs/navigation/menubar",
      },
      {
        title: "Navigation Menu",
        href: "/docs/navigation/navigation-menu",
      },
      {
        title: "Pagination",
        href: "/docs/navigation/pagination",
      },
      {
        title: "Sidebar",
        href: "/docs/navigation/sidebar",
      },
    ],
  },
  {
    title: "Overlay",
    icon: <Layers className="h-4 w-4" />,
    components: [
      {
        title: "Dialog",
        href: "/docs/overlay/dialog",
      },
      {
        title: "Drawer",
        href: "/docs/overlay/drawer",
      },
      {
        title: "Hover Card",
        href: "/docs/overlay/hover-card",
      },
      {
        title: "Popover",
        href: "/docs/overlay/popover",
      },
      {
        title: "Sheet",
        href: "/docs/overlay/sheet",
      },
      {
        title: "Command",
        href: "/docs/overlay/command",
      },
    ],
  },
  {
    title: "Media",
    icon: <ImageIcon className="h-4 w-4" />,
    components: [
      {
        title: "Carousel",
        href: "/docs/media/carousel",
      },
      {
        title: "Chart",
        href: "/docs/media/chart",
      },
    ],
  },
];

interface SidebarNavProps {
  className?: string;
}

export function SidebarNav({ className }: SidebarNavProps) {
  const pathname = usePathname();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    // Initialize open state based on current path
    const initialOpenState: Record<string, boolean> = {};
    components.forEach((category) => {
      const isActive = category.components.some(
        (component) => pathname === component.href
      );
      initialOpenState[category.title] = isActive;
    });
    setOpenCategories(initialOpenState);
  }, [pathname]);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <ScrollArea className={cn("h-full py-6", className)}>
      <div className="px-4 py-2">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          Components
        </h2>
        <div className="space-y-1">
          {components.map((category) => (
            <div key={category.title} className="mb-2">
              <Button
                variant="ghost"
                onClick={() => toggleCategory(category.title)}
                className="w-full justify-between font-semibold"
              >
                <div className="flex items-center">
                  {category.icon}
                  <span className="ml-2">{category.title}</span>
                </div>
                {openCategories[category.title] ? (
                  <ChevronDown className="h-4 w-4 shrink-0" />
                ) : (
                  <ChevronRight className="h-4 w-4 shrink-0" />
                )}
              </Button>
              {openCategories[category.title] && (
                <div className="mt-1 space-y-1 pl-6">
                  {category.components.map((component) => (
                    <Link
                      key={component.href}
                      href={component.href}
                      className={cn(
                        "flex w-full items-center rounded-md py-2 px-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                        pathname === component.href
                          ? "bg-accent text-accent-foreground"
                          : "transparent",
                        component.disabled && "pointer-events-none opacity-60"
                      )}
                    >
                      {component.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="w-full flex h-16 items-center gap-4 px-6 sm:px-8 sm:gap-6">
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <AlignJustify className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 pr-0">
              <div className="py-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Components Library
                </Link>
              </div>
              <Separator />
              <SidebarNav />
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="hidden md:inline-block">Components Library</span>
            </Link>
            <nav className="flex items-center gap-4">
              <Link
                href="/docs"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary"
                )}
              >
                Documentation
              </Link>
              <Link
                href="https://github.com/shadcn-ui/ui"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                GitHub
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block border-r">
          <SidebarNav className="w-full" />
        </aside>
        <main className="relative py-6 px-4 md:px-6 lg:px-8 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
      <footer className="border-t py-6 bg-card">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn/ui
            </a>
            . Components are open source and available on{" "}
            <a
              href="https://github.com/shadcn-ui/ui"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
