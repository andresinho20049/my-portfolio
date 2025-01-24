import { CardResume } from "@/components/cards/cardResume";
import  { FooterComponent }  from "@/components/footer/footer";
import { AdsenseSquareComponent, AdsenseVerticalComponent } from "@/components/google/AdsenseComponent";
import { HeaderNav } from "@/components/header/header_nav";
import { ReactNode } from "react";

interface ILayoutProps {
    children: ReactNode;
}
export default function LayoutContent({ children }: ILayoutProps) {

    return (
      <section className="flex flex-col justify-start items-center h-lvh snap-y snap-mandatory overflow-y-auto overscroll-y-contain scroll-smooth">
        <nav className="snap-start w-full">
          <HeaderNav />
        </nav>
        <main className="flex-1 w-full px-8 py-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:max-w-48 max-md:snap-start py-8 space-y-2">
              <div className="md:sticky top-2">
                <CardResume />
              </div>
            </div>
            <div className="flex-1">{children}</div>
          </div>
        </main>
        <div className="snap-end w-full">
          <FooterComponent />
        </div>
      </section>
    );
}