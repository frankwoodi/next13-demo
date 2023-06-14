"use client"
import * as React from 'react'
import { Input as InputComponent } from "@/components/input"
import { Label } from "@/components/label"
// import { Checkbox as CheckboxComponent } from "@/components/checkbox"
import { useToast } from "@/components/use-toast"
import lunr from "lunr"
interface SearchContextProps {
    fields: string[],
    content: object[]
}

const searchContext = ({fields, content}: SearchContextProps) => {
    const idx = lunr(
    function() {
        // adding fields
        fields.forEach(f => {
            this.field(f)
        })

        // adding content
        content.forEach(c => {
            this.add(c)
        })
    })

    return (word: string) => idx.search(word)
}

function Search<T extends { id: string }>({
    content: initialContent
}: {content: T[]}) {
    const content = initialContent;
    const {toast} = useToast()
    const [input, setInput] = React.useState("")
    const [matched, setMatched] = React.useState<(T | {})[]>()
    const search = searchContext({
        fields: ["slug", "url"],
        content: content
    })

    const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {

        if (e.key === "Enter") {
            const res = search(input)

            if (res.length < 1) {
                toast({
                    description: input + " Not found"
                })
                return;
            }

            const contentRes = res
            .map(result => {
                for (const c of content) {
                    if (c?.id === result.ref)
                        return {...c, score: result.score}
                }

                return {} as T
            })
            .filter(c => c?.id)

            setMatched(contentRes)
            // TODO: handle search here
        }
    }
    return (
        <div>
                  <Label htmlFor="search">Search</Label>
                  <InputComponent type="text" 
                  id="search" 
                  placeholder="Search" 
                  value={input} 
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  />
                  <p className="text-sm text-muted-foreground">Press enter to search</p>
                  {JSON.stringify(matched)}
        </div>
    )
}

export default Search