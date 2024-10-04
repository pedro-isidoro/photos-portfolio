import { HorizontalSmoothScroll } from "@/components/HorizontalSmoothScroll/HorizontalSmoothScroll";
import { VerticalSmoothScroll } from "@/components/VerticalSmoothScroll/VerticalSmoothScroll";
import { AsiderMenu } from "@/components/menu/AsiderMenu";
import { FooterButton } from "@/components/button/FooterButton";

export function App() {
  
  return (
      <main id="hero" className="w-full max-h-auto relative flex flex-col justify-center items-center overflow-y-auto bg-[#EFEDB9] dark:bg-[#0a0a0a]">
        <AsiderMenu />
        <div id="hero_wrapper">
          <HorizontalSmoothScroll />
          <VerticalSmoothScroll />
        </div>
        <FooterButton />
      </main>
  )
}
