import imageList from '@/components/json/photografies.json'

export function VerticalSmoothScroll() {

  return (
    <section id="hero_gallery" className="relative w-full h-full flex justify-center items-center z-[2]">
      <ul id="hero_gallery_wrapper" className="flex flex-col justify-center items-center gap-[10rem]">
        {imageList.length > 0 ? (
          imageList.map(image => (
            <li id="hero_gallery_figure" className="w-full h-screen flex justify-center items-center" key={image.id}>
            <img src={image.src} alt={image.alt} id="hero_gallery_image" className="w-[23rem] h-[30rem] lg:w-[28rem] lg:h-[38rem] object-cover"/>
        </li>
          ))
        ) : (
          <li>
            <p>Nenhuma foto encontrada</p>
          </li>
        )}
      </ul>
    </section>
  )
}