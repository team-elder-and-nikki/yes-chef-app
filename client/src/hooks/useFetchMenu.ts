import { useState, useEffect } from "react";

import { IMenu } from "@/models/Menu"; // Ensure this type is defined
import { useQuery } from "@tanstack/react-query";
import { ENDPOINT_URL } from "../staticVar";

export default function useFetchMenuItems() {
  return useQuery<IMenu[]>({
    queryKey: ['menuItems'],
    queryFn: async () => {
      const response = await fetch(`${ENDPOINT_URL}/menu`);
      const data = await response.json();
      
      return data.map((item: any) => ({
        ...item,
        menuItem: item.name 
      }));
    },
    suspense: true,
    throwOnError: true,
  });
}
