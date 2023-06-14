"use client"
import { Input as InputComponent } from "@/components/input"
// import { Label } from "@/components/label"
import { Checkbox as CheckboxComponent } from "@/components/checkbox"
import React from "react"
import { useToast } from "@/components/use-toast"
import { CheckboxProps } from "@radix-ui/react-checkbox"

export function Input() {
  const [val, setVal] = React.useState("");
  const [type, setType] = React.useState<"note" | "todo" | "">("");
  const { toast } = useToast()

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      if (val.length < 3) {
        return toast({
          description: "Todo length must be greater than 3"
          
        })
      }

      toast({
        description: `${type ?? "TODO"} added`,
      })
    }
    
  }
  return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
          {/* <Label htmlFor="email-2"></Label> */}
          <InputComponent type="text" 
          id="todo-input" 
          placeholder="Enter todo" 
          value={val} 
          onChange={e => setVal(e.target.value)}
          onKeyDown={handleKeyPress}
          />
          <p className="text-sm text-muted-foreground">Press enter to add todo</p>
          <div className="flex flex-row gap-5">
            <Checkbox text="Note" onClick={() => !type ? setType("note") : setType("") } disabled={val.length < 3} checked={type === "note"} />
            {/* <Checkbox text=""  onClick={() => setType("todo")} disabled={val.length < 3} checked={type === "todo"}/> */}

          </div>
          </div>
      )
}

interface MyCheckboxProps extends CheckboxProps {
  disabled?: boolean
  text: string,
  checked: boolean,
  onClick: () => void
}

export function Checkbox({
  disabled,
  text,
  checked,
  onClick
}: MyCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <CheckboxComponent id="terms2" disabled={disabled} onCheckedChange={onClick} checked={checked} />
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       {text}
      </label>
    </div>
  )
}
