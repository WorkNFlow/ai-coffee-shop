import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "white";
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, href, variant = "secondary", ...props }, ref) => {
  const Component = href ? "a" : "button";

  // Color classes mapping based on variant
  const variantClasses = {
    primary: {
      btn: "border-[#021a35] text-[#021a35]",
      textHover: "text-white",
      dot: "bg-[#021a35]",
    },
    secondary: {
      btn: "border-[#815500] text-[#815500]",
      textHover: "text-white",
      dot: "bg-[#815500]",
    },
    white: {
      btn: "border-white text-white",
      textHover: "text-[#021a35]",
      dot: "bg-white",
    },
  };

  const colors = variantClasses[variant] || variantClasses.secondary;

  return (
    <Component
      ref={ref as any}
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center cursor-pointer overflow-hidden rounded-full border bg-transparent py-3 px-8 text-center font-semibold tracking-wide transition-all duration-300 min-w-[200px] h-12",
        colors.btn,
        className
      )}
      {...(props as any)}
    >
      <span className="relative z-20 inline-flex items-center justify-center gap-2 translate-x-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className={cn(
        "absolute inset-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
        colors.textHover
      )}>
        <span className="font-semibold">{text}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
      <div className={cn(
        "absolute left-6 top-[40%] h-2.5 w-2.5 scale-[1] rounded-full opacity-0 transition-all duration-500 ease-out group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[2.5] group-hover:opacity-100 z-10",
        colors.dot
      )}></div>
    </Component>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
