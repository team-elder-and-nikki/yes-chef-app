import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { House, Clock, Utensils, Clipboard } from "lucide-react"

export default function NavBar({}) {
    const activeRoute = window.location.pathname
    const isActiveRoute = (route: string) => activeRoute === route;

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" data-active={isActiveRoute("/")}>
                        <House />
                        Menu
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/reports" data-active={isActiveRoute("/reports")}>
                        <Clock />
                        Reports
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/kitchen" data-active={isActiveRoute("/kitchen")}>
                        <Utensils />
                        Kitchen
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/inventory" data-active={isActiveRoute("/inventory")}>
                        <Clipboard />
                        Inventory
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}