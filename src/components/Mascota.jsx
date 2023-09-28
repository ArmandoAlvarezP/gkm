import { useEffect, useState } from "react";

export const Mascota = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 500) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
      }
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        })
    }

  return (
    <div className="mascota" onClick={() => scrollToTop() }>
        <img className={ scrolled ? "scale-up-center mascota-scrolled" : "" } src="/img/mascota-gkm.png" alt="mascota" />
    </div>
  )
}
