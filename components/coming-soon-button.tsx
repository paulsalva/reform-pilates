"use client"

import * as React from "react"
import { Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface ComingSoonButtonProps extends React.ComponentProps<typeof Button> {
  label: string
  detail?: string
}

export function ComingSoonButton({
  label,
  detail = "Online booking is launching soon. In the meantime, call or text the studio and we'll get you on the schedule personally.",
  className,
  variant,
  size,
  ...props
}: ComingSoonButtonProps) {
  const [open, setOpen] = React.useState(false)
  const { onClick, ...rest } = props

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        className={cn(className)}
        onClick={(event) => {
          onClick?.(event)
          setOpen(true)
        }}
        {...rest}
      >
        {label}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border-border/60 bg-card sm:max-w-sm">
          <DialogHeader>
            <div className="mb-1 flex size-10 items-center justify-center rounded-full bg-accent">
              <Sparkles className="size-5 text-accent-foreground" />
            </div>
            <DialogTitle className="font-serif text-xl">
              This feature is coming soon
            </DialogTitle>
            <DialogDescription className="leading-relaxed text-pretty">
              {detail}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
