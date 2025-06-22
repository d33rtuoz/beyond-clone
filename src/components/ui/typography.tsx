import { cn } from "@/lib/utils";

export function H1({ className, ...props }: React.ComponentProps<"h1">) {
  return <h1 className={cn("text-2xl font-bold", className)} {...props} />;
}

export function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return <h2 className={cn("text-xl font-semibold", className)} {...props} />;
}

export function P({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("", className)} {...props} />;
}
