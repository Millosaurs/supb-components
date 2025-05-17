"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Code, Copy, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodePopoverProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  maxHeight?: string;
  buttonLabel?: string;
  buttonVariant?: "default" | "secondary" | "outline" | "ghost";
  buttonSize?: "sm" | "default" | "lg";
  width?: string;
  className?: string;
}

export function CodePopover({
  code,
  language = "tsx",
  showLineNumbers = false,
  maxHeight = "300px",
  buttonLabel = "View Code",
  buttonVariant = "outline",
  buttonSize = "sm",
  width = "600px",
  className,
}: CodePopoverProps) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant={buttonVariant} 
          size={buttonSize} 
          className={cn("gap-1", className)}
        >
          <Code className="h-4 w-4" />
          {buttonLabel}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="p-0" 
        style={{ width: width, maxWidth: "calc(100vw - 32px)" }}
      >
        <div className="flex items-center justify-between bg-muted px-4 py-2 border-b">
          <div className="text-sm font-medium">{language.toUpperCase()}</div>
          <div className="flex gap-1">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={copyToClipboard} 
              className="h-8 px-2 text-muted-foreground"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy code</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setOpen(false)} 
              className="h-8 px-2 text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
        <div 
          className="overflow-auto"
          style={{ maxHeight }}
        >
          <pre className="p-4 text-sm font-mono">
            {showLineNumbers ? (
              code.split("\n").map((line, i) => (
                <div key={i} className="table-row">
                  <span className="table-cell pr-4 text-right text-muted-foreground select-none">
                    {i + 1}
                  </span>
                  <span className="table-cell">{line}</span>
                </div>
              ))
            ) : (
              <code>{code}</code>
            )}
          </pre>
        </div>
      </PopoverContent>
    </Popover>
  );
}

