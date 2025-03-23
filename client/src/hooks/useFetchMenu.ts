import { useState, useEffect } from "react";

import { IMenu } from "@/models/Menu"; // Ensure this type is defined
import { useQuery } from "@tanstack/react-query";
import { ENDPOINT_URL } from "../staticVar";

export default function useFetchMenuItems() {
  return useQuery<IMenu[]>({
    queryKey: ['menuItems'],
    queryFn: () => fetch(`${ENDPOINT_URL}/menu`).then(res => res.json()),
    suspense: true,
    throwOnError: true,
  });
}
