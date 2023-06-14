import List from "./(list)/List"
import { Input } from "./(input)/Input"
interface ListProps {
    name: string,
    id: string,
    done: boolean
}
function Page({name, id}: ListProps) {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h1 className="text-5xl text-center text-primary underline">Todo List</h1>
            <p className="text-center"> a list of todos </p>
            
        </div>
        <Input/>
        <List/>

        
        <div/>
        <div/>
        </main>
        )
}

export default Page