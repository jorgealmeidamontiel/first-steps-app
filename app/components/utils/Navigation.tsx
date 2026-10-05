import { navigationItems } from "@/app/data/navigation-items";
import NavigationLink from "./NavigationLink";



function Navigation() {
    return (
        <nav
            aria-label="Navegación principal"
            className="order-3 w-full sm:order-0 sm:w-auto"
        >
            <ul className="flex items-center gap-5 overflow-x-auto text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {navigationItems.map((item) => (
                    <li key={item.href}>
                        <NavigationLink
                            href={item.href}
                            label={item.label}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;