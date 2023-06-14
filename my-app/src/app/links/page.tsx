import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/table";

interface Link {
    id: string;
    createdAt: string;
    url: string;
    slug: string;
}

const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
async function Page() {
    const URL = "https://links.themanan.me/api/trpc/allLinks"
    const allLinks = await fetch(URL, {
        next: {revalidate: 1000}
    }).then(res => res.json())
    return (
    <main>
        <h1>Links</h1>

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
    </main>
    )
}

export default Page;