import {
    Alert,
    AlertDescription,
    AlertTitle
} from "@/components/ui/alert"
import { InfoIcon, CheckCircle2Icon, AlertTriangleIcon, XCircleIcon } from "lucide-react"

export interface AlertAppProps {
    title: string;
    description: string;
    variant: "default" | "destructive";
    type: "info" | "success" | "warning" | "error";
}

export function AlertApp({ title, description, variant, type }: AlertAppProps) {
    return (
        <Alert variant={variant}>
            {type === "info" && <InfoIcon className="h-4 w-4" />}
            {type === "success" && <CheckCircle2Icon className="h-4 w-4" />}
            {type === "warning" && <AlertTriangleIcon className="h-4 w-4" />}
            {type === "error" && <XCircleIcon className="h-4 w-4" />}
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
                {description}
            </AlertDescription>
        </Alert>
    )
}
