import { useEffect, useState } from "react";
import './scroll.css'
import Banner1 from "../assets/img/FOTOS/CAMBIODEVISOR.jpeg";
import Baneer2 from "../assets/img/FOTOS/TAPATRASERAIP.jpeg";
import Baneer3 from "../assets/img/FOTOS/photo1696019325 (1).jpeg";
import Video from "../assets/img/VIDEOS/1.principal.mp4";
import BaneerSec from "../assets/img/foto2.jpg";
import BannerMed from "../assets/banner-medio.png"

// import Baneer5 from "../assets/img/FOTOS/photo1696019325 (3).jpeg";
// import Baneer6 from "../assets/img/FOTOS/photo1696019325 (4).jpeg";

const Banner = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [Banner1, Baneer2, Baneer3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((currentPhoto) => (currentPhoto + 1) % photos.length);
    }, 3000); // Cambia la foto cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="grid grid-cols-2 py-10 font-poppins">
        <article className="px-4">
          <div className="relative">
            <img src={BaneerSec} alt="" className="mb-8 rounded-md shadow-md shadow-white/10" />
            <h2 className="absolute top-10 left-4 px-3 font-bold text-2xl text-white/55 text-center">
              ¡Dale una nueva vida a tu celular con Soltecel y sorpréndete con
              los resultados!
            </h2>
          </div>
          <h1 className="font-bold text-2xl mb-4">¡Bienvenido a Soltecel!</h1>
          <p className="mb-4">
            Somos tu solución integral en reparación de dispositivos móviles.
            ¿Tu pantalla está agrietada? ¿La batería ya no carga como antes? ¿La
            tapa trasera de tu móvil necesita ser reemplazada? ¡No te preocupes
            más! En Soltecel, estamos aquí para ayudarte.
          </p>
          <p className="mb-4">
            Somos especialistas en reparación de pantallas, visores, baterías y
            tapas traseras de todo tipo de dispositivos móviles. Además, somos
            expertos en detectar y solucionar fallas de manufacturación de
            pantalla microelectrónica, garantizando que tu dispositivo vuelva a
            funcionar como nuevo.
          </p>
          <p className="mb-9">
            Nuestro equipo de técnicos altamente capacitados y con años de
            experiencia están listos para atender todas tus necesidades. En
            Soltecel, nos enorgullece ofrecer un servicio rápido, confiable y a
            precios competitivos.
          </p>
          <article>
          <img src={BannerMed} alt="" className=""/>
        </article>
        </article>
        <article className="mb-12">
          <video controls autoPlay muted width="600">
            <source src={Video} type="video/mp4" />  
          </video>
        </article>
        
      </section> 
    </div>
  );
};

export default Banner;
