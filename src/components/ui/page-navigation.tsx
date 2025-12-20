import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageNavigationProps {
  previousPage?: {
    name: string;
    href: string;
  };
  nextPage?: {
    name: string;
    href: string;
  };
}

export function PageNavigation({ previousPage, nextPage }: PageNavigationProps) {
  return (
    <div className="py-12 bg-gradient-to-r from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {previousPage ? (
            <a href={previousPage.href}>
              <Button variant="outline" className="flex items-center gap-2 hover:bg-emerald-50">
                <ChevronLeft className="w-4 h-4" />
                <span>Previous: {previousPage.name}</span>
              </Button>
            </a>
          ) : (
            <div></div>
          )}
          
          {nextPage ? (
            <a href={nextPage.href}>
              <Button variant="outline" className="flex items-center gap-2 hover:bg-emerald-50">
                <span>Next: {nextPage.name}</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}