import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mainNavigation = [{
    label: "Strona główna",
    href: "/"
  }, {
    label: "O nas",
    href: "/o-nas"
  }, {
    label: "Kontakt",
    href: "/kontakt"
  }];
  const offerNavigation = [{
    label: "Okna",
    href: "/okna"
  }, {
    label: "Drzwi",
    href: "/drzwi"
  }, {
    label: "Rolety",
    href: "/rolety"
  }, {
    label: "Bramy garażowe",
    href: "/bramy-garazowe"
  }];
  const allNavigation = [{
    label: "Strona główna",
    href: "/"
  }, {
    label: "Okna",
    href: "/okna"
  }, {
    label: "Drzwi",
    href: "/drzwi"
  }, {
    label: "Rolety",
    href: "/rolety"
  }, {
    label: "Bramy garażowe",
    href: "/bramy-garazowe"
  }, {
    label: "O nas",
    href: "/o-nas"
  }, {
    label: "Kontakt",
    href: "/kontakt"
  }];
  return <header className="sticky top-0 z-50 backdrop-blur-sm border-b shadow-soft bg-stone-950">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img src="/lovable-uploads/5e4daf5a-bb8f-42e0-b505-dcdeac92fe72.png" alt="Logo" className="h-10 w-auto" />
              
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map(item => <a key={item.href} href={item.href} className="text-sm font-medium text-white hover:text-white/80 transition-colors">
                {item.label}
              </a>)}
            
            {/* Oferta Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-white hover:text-white/80 p-0 h-auto font-normal">
                  Oferta <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white border shadow-lg">
                {offerNavigation.map(item => <DropdownMenuItem key={item.href} asChild>
                    <a href={item.href} className="text-sm font-medium text-red-600 hover:text-red-700">
                      {item.label}
                    </a>
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button size="sm" className="bg-white text-black hover:bg-white/90" asChild>
              <a href="tel:+48733633507" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                733 633 507
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white hover:text-white/80" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden py-4 border-t">
            <nav className="space-y-2">
              {allNavigation.map(item => <a key={item.href} href={item.href} className="block px-4 py-2 text-sm font-medium text-white hover:text-white/80 hover:bg-secondary/50 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>)}
            </nav>
            <div className="mt-4 px-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full bg-white text-black border-white hover:bg-white/90" asChild>
                <a href="/kontakt#wycena">Darmowa wycena</a>
              </Button>
              <Button size="sm" className="w-full bg-white text-black hover:bg-white/90" asChild>
                <a href="tel:+48733633507" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Zadzwoń: 733 633 507
                </a>
              </Button>
            </div>
          </div>}
      </div>
    </header>;
};
export default Navigation;
