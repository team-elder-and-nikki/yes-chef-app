import { Card, CardProps } from "@/components/ui/card"

export default function FloatingCard({ className, ...props }: CardProps) {
  return <Card className={`shadow-xl rounded-2xl bg-white dark:bg-gray-900 transition-all hover:shadow-2xl ${className || ""}`} {...props} />
}
