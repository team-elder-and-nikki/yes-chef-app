import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[200px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}

// w-38 sm:w-40 md:w-48 lg:w-56 hover:cursor-pointer hover:bg-red-50 m-4

export function SkeletonCardTest() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-35 w-38 sm:w-40 md:w-48 lg:w-56 rounded-xl m-4" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-38 sm:w-40 md:w-48 lg:w-56 mx-4" />
            </div>
        </div>
    )
}

export default function LoadingMenuItems() {
    return (
        // <div className="flex flex-col space-y-3">
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <SkeletonCardTest />
            <SkeletonCardTest />
            <SkeletonCardTest />
            <SkeletonCardTest />
        </div>
        // </div>
    )

}