import { nanoid } from 'nanoid'

interface ListProps {
    name: string,
    done?: boolean,
    note?: boolean
}

function List({name, done}: ListProps) {
    const id = nanoid()
    return (
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
            {name}
        </div>
        )
}

export default List