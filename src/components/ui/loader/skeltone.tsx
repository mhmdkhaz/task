// components/ui/skeleton/Skeleton.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  rows?: number;
  rounded?: boolean;
}

export const Skeleton = ({
  className,
  rows = 1,
  rounded = false,
  ...props
}: SkeletonProps) => {
  const rowElements = Array.from({ length: rows }).map((_, i) => (
    <div
      key={i}
      className={cn(
        "h-3 bg-gray-200 dark:bg-gray-700 animate-pulse",
        rounded ? "rounded-full" : "rounded",
        className
      )}
      {...props}
    />
  ));

  return <>{rowElements}</>;
};

export const TableSkeleton = ({
  columns = 5,
  rows = 5,
}: {
  columns?: number;
  rows?: number;
}) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex} className="animate-pulse">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td key={colIndex} className="px-4 py-1">
              <Skeleton />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};
