import { useState, useEffect } from "react";
import { IMenu } from "@/models/Menu";

// Data fetching function
const fetchMenu = async (): Promise<IMenu[]> => {
    const response = await fetch(`http://localhost:8000/menu`);
    if (!response.ok) {
        throw new Error("Failed to fetch menu");
    }
    return response.json();
};

// Custom hook for fetching menu data
export const useFetchMenu = () => {
    const [menuItems, setMenuItems] = useState<IMenu[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMenu();
                setMenuItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { menuItems, loading, error };
};