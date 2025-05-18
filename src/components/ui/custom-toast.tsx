import { toast as sonnerToast, ToastT } from "sonner";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";

type ToastProps = ToastT & {
  description?: string;
};

// Custom toast function that wraps sonner's toast
export function toast(message: string, options?: ToastProps) {
  return sonnerToast(message, {
    ...options,
    className: cn(
      "border border-border rounded-lg shadow-sm",
      options?.className
    ),
  });
}

// Custom success toast
toast.success = (message: string, options?: ToastProps) => {
  return sonnerToast.success(
    <div className="flex items-start gap-2">
      <CheckCircle className="h-5 w-5 text-green-500" />
      <div>
        <p className="font-medium">{message}</p>
        {options?.description && (
          <p className="text-sm text-muted-foreground">{options.description}</p>
        )}
      </div>
    </div>,
    {
      ...options,
      className: cn(
        "border-green-100 bg-green-50 dark:border-green-800 dark:bg-green-950/50",
        options?.className
      ),
    }
  );
};

// Custom error toast
toast.error = (message: string, options?: ToastProps) => {
  return sonnerToast.error(
    <div className="flex items-start gap-2">
      <XCircle className="h-5 w-5 text-red-500" />
      <div>
        <p className="font-medium">{message}</p>
        {options?.description && (
          <p className="text-sm text-muted-foreground">{options.description}</p>
        )}
      </div>
    </div>,
    {
      ...options,
      className: cn(
        "border-red-100 bg-red-50 dark:border-red-800 dark:bg-red-950/50",
        options?.className
      ),
    }
  );
};

// Add similar methods for info and warning toasts
// ...

export type { ToastT };
