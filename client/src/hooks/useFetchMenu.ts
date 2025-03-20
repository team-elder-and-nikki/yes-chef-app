
import { useQuery } from "@tanstack/react-query";
import { IMenu } from "@/models/Menu"; // Ensure this type is defined

export default function useFetchMenuItems() {
    return useQuery<IMenu[]>({
        queryKey: ['menuItems'],
        queryFn: () => fetch(`http://localhost:8000/menu`).then(res => res.json()),
        suspense: true,
        throwOnError: true,
    });
}