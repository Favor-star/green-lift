import { cn } from "@/lib/utils";

export function DotBackgroundDemo() {
  return (
    <div className="relative flex h-[35rem] w-full items-center justify-center bg-white dark:bg-green-950">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#b5e3b5_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#2f5d2f_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a soft fade */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-green-950"></div>
      <p className="relative z-20 bg-gradient-to-b from-green-300 to-green-700 linear bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p>
    </div>
  );
}
