export function FooterButton() {

  return (
    <footer id="footer_button" className="w-full h-10 flex justify-start items-center px-2 z-[5]">
      <a id="hero_action" className="dark:text-[#EFEDB9] cursor-pointer" onClick={() => scrollTo({ top: 0, behavior: 
      'smooth',
    })}>GoToTop</a>
    </footer>
  )
}