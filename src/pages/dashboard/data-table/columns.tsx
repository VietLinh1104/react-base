import { formatDateTime } from "@/lib/utils"
import type { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Transaction = {
    id: string
    processId: number
    processStatus: string
    createdBy: string
    referenceNo: string
    documentNo: string
    createdAt: string
    updatedAt: string
    transactionType: string
    description: string
    documentDate: string
    accountingPeriod: string
    status?: string
    email?: string
    amount?: number
}

export const columns: ColumnDef<Transaction>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "processId",
        header: "Process ID",
    },
    {
        accessorKey: "processStatus",
        header: "Process Status",
    },
    {
        accessorKey: "createdBy",
        header: "Created By",
    },
    {
        accessorKey: "referenceNo",
        header: "Reference No",
    },
    {
        accessorKey: "documentNo",
        header: "Document No",
    },
    {
        accessorKey: "transactionType",
        header: "Transaction Type",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) => formatDateTime(row.getValue("createdAt")),

    },
    {
        accessorKey: "updatedAt",
        header: "Updated At",
        cell: ({ row }) => formatDateTime(row.getValue("updatedAt")),

    },
]