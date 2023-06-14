import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/table";
import Search from "./(search)/Search"
interface Link {
    id: string;
    createdAt: string;
    url: string;
    slug: string;
}


async function Page() {
    const URL = "https://links.themanan.me/api/trpc/allLinks"
    const allLinks = await fetch(URL, {
        next: {revalidate: 1000}
    }).then(res => res.json())
    return (
    <main>
        <h1>Links</h1>
        {allLinks?.result?.data?.links &&
          <Search content={allLinks.result.data.links}/>
        }
      <div className="mx-16 my-24">
        <Table>
          <TableCaption>A list of Manan's links</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Slug</TableHead>
              <TableHead>Url</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allLinks?.result?.data?.links?.map((link: Link, idx: number) => (
              <TableRow key={link.id}>
                <TableCell className="font-medium">{link.slug}</TableCell>
                <TableCell>{link.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
    </main>
    )
}

export default Page;