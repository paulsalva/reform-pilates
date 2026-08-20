import Image from "next/image"

import { cn } from "@/lib/utils"

export function Logo({
  className,
  height = 32,
}: {
  className?: string
  height?: number
}) {
  return (
    <Image
      src="/images/reform-logo.webp"
      alt="Reform Pilates"
      height={height}
      width={height * 3}
      className={cn("h-8 w-auto object-contain", className)}
      style={{ height }}
      priority
    />
  )
}
