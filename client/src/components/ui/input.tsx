import * as React from "react"
import { cn } from "@/lib/utils"
import {InventoryTable} from "../InventoryTable"



function Input({ className, type, value,  ...props }: React.ComponentProps<"input"> & { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
 
  return (
    <input
      type="number"
      defaultValue="0"
      onChange={e => setFirstName(e.target.value)} 
      min={0}
      data-slot="input"
      className={cn(
        "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9  min-w-0 rounded-md border bg-transparent px-6 py-1 mx-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
