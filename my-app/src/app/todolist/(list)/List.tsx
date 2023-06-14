"use client"
import { useState } from "react"
import Todo from "./Todo"
import { ChevronsUpDown, Plus, X } from "lucide-react"
import { Button } from "@/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/collapsible"


function List() {

    return (
    <div>
        <h4 className="text-sm font-semibold mb-3">
            Notes
        </h4>
        
        <div className="gap-3">
            <Todo name="Tofee" note />
            <Todo name="Walk" note/>
        </div>
 
        <CollapsibleDemo name="Done Activities"/>
        <CollapsibleDemo name="Not done Activities"/>
            
    </div>
    )
}




export function CollapsibleDemo({name}: {name: string}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
        { name ?? "empty heading"}
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <Todo name="Take a Walk 🚶" />
        <Todo name="Plan for the Future 🔮" done />
        <Todo name="Prepare for the exams 🧻" done />
      </CollapsibleContent>
    </Collapsible>
  )
}

export default List