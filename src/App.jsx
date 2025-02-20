//importacion de componentes
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Line from "./components/Line";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Icons from "./components/Icons";
import HeadingImage from "./components/HeadingImage";
import CarouselWrapper from "./components/CarouselWrapper";

//import de estilos
import "./index.css";

//import videos
import video from "./assets/videos/video.webm";

//import de imagenes mobile

import principal1mobile from "./assets/images/mobile/principal1mobile.webp";
import target1Amobile from "./assets/images/mobile/target1Amobile.webp";
import caballomobile from "./assets/images/mobile/caballomobile.webp";
import Nemicamobile from "./assets/images/mobile/Nemicamobile.webp";
import intangible2mobile from "./assets/images/mobile/intangible2mobile.webp";
import bgMobileIcon from "./assets/images/mobile/bg-mobileIcon.webp";

//import de imagenes desktop
import target1Adesktop from "./assets/images/target1Adesktop.webp";
import caballodesktop from "./assets/images/caballodesktop.webp";
import Nemicadesktop from "./assets/images/Nemicadesktop.webp";
import intangible2desktop from "./assets/images/intangible2desktop.webp";
import bgDesktopIcon from "./assets/images/bg-desktopIcon.webp";

//import icons
import pc from "./assets/images/icons/pc.png";
import link from "./assets/images/icons/link.png";
import qrcode from "./assets/images/icons/qrcode.png";
import logo from "./assets/images/icons/logo.png";
import titulonemica from "./assets/images/icons/titulonemica.png";
import one from "./assets/images/icons/1.png";
import two from "./assets/images/icons/2.png";
import three from "./assets/images/icons/3.png";
import four from "./assets/images/icons/4.png";
import five from "./assets/images/icons/5.png";
import six from "./assets/images/icons/6.png";
import seven from "./assets/images/icons/7.png";
import eight from "./assets/images/icons/8.png";

//import Card
//import bio1A from "./assets/images/cards/Bio1A.jpg";
//import histograma1A from "./assets/images/cards/histograma1A.webp";
//import clip2 from "./assets/images/cards/Clip2.webp";
//import genealogia1A from "./assets/images/cards/Genealogia1A.webp";
//import testimonios from "./assets/images/cards/Testimonios.webp";
//import relaciones from "./assets/images/cards/Relaciones.webp";
//import genetica1A from "./assets/images/cards/genetica1A.webp";
//import Museum1B from "./assets/images/cards/Museum1B.webp";

export default function App() {
  return (
    <div className="bg-grisMedio">
      <div>
        <section>
          <NavBar imgSrc={logo} title={titulonemica} />
        </section>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute w-[500px] h-[500px]"></div>

        <HeadingImage
          imgSrcMobile={principal1mobile}
          videoSrc={video}
          alt="imagen principal"
          className="absolute w-full h-full object-cover scale-[1.5] translate-y-[-15%] md:scale-100 md:translate-y-0"
        />
        <div
          className="absolute top-25 left-0 p-4 text-white text-7xl font-extrabold drop-shadow-lg text-left tracking-wide leading-20 | lg:text-8xl lg:left-260 lg:top-45 lg:text-gris lg:drop-shadow-none"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          <span className="block md:inline ">DEJÁ</span>
          <span className="block md:inline "> TU</span>
          <span className="block"> HUELLA</span>
        </div>
      </div>

      <div className="bg-crema text-purpura p-6 py-6 | lg:p-10 lg:px-15">
        <Header
          heading={
            <div className="leading-10 text-3xl font-bold font-sans text-left tracking-wider | lg:px-40 lg:text-center lg:text-5xl lg:leading-15">
              Transmití de generación en generación la tradición familiar y tu
              legado.
            </div>
          }
          description={
            <div className="text-purpura mt-2 font-normal leading-8 text-left tracking-wider text-2xl py-4 | lg:text-purpura lg:text-3xl lg:px-50 lg:leading-10 lg:text-center lg:font-normal">
              Concretiza y deja marcada la huella que podrá ser una fuente de
              inspiración y un faro para otros, para que quede en los corazones
              y las mentes de quienes amas.
            </div>
          }
        />
      </div>
      <div className="font-bold text-2xl pb-8 | lg:text-3xl lg:pb-10 bg-crema">
        <Line imgSrc={logo} description="EL LEGADO IMBORRABLE" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0">
        {/* Hero 1 */}
        <div className="relative overflow-hidden lg:[grid-column:1] lg:[grid-row:1] -mb-8 lg:mb-0">
          <Hero
            imgSrcMobile={target1Amobile}
            imgSrcDesktop={target1Adesktop}
            className="w-full h-full object-cover"
          />
          <div
            className="text-left absolute drop-shadow-xl bottom-4 left-4 p-4 text-white text-4xl font-extrabold lg:text-4xl lg:bottom-10 lg:left-20 lg:p-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            <span className="block md:inline"> ¡TU VIDA MERECE</span>
            <span className="block"> SER CONTADA!</span>
          </div>
        </div>
        {/* Header 1 */}
        <div className="bg-lila text-white p-2 lg:[grid-column:1] lg:[grid-row:2]">
          <div className="p-6 pt-15 lg:p-13">
            <Header
              heading={
                <div className="text-2xl font-bold text-left lg:px-9">
                  Somos el apoyo y guía necesario para recrear tu historia.
                </div>
              }
              description={
                <div className="text-left text-xl font-extralight py-3 lg:px-9 lg:w-[570px]">
                  Te ayudamos a clarificar y resignificar el camino propio.
                  Mucha gente cree que la tarea es titánica. Por eso nunca
                  empiezan. ¡Ahora vos podes!
                </div>
              }
            />
          </div>
        </div>
        {/* Hero 2 */}
        <div className="relative overflow-hidden lg:[grid-column:2] lg:[grid-row:1] -mb-8 lg:mb-0">
          <Hero
            imgSrcMobile={caballomobile}
            imgSrcDesktop={caballodesktop}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bottom-5 left-3 p-4 text-left text-white text-4xl font-extrabold drop-shadow-lg lg:text-4xl lg:bottom-10 lg:left-20 lg:p-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            <span className="block md:inline"> ¡EL HOMENAJE AL</span>
            <span className="block"> SER MAS QUERIDO!</span>
          </div>
        </div>
        {/* Header 2 */}
        <div className="bg-lila text-white p-0 lg:[grid-column:2] lg:[grid-row:2]">
          <div className="p-8 pt-18 lg:p-15">
            <Header
              heading={
                <div className="text-2xl font-bold text-left lg:px-9">
                  Pone en valor el legado de quien amas.
                </div>
              }
              description={
                <div className="text-left text-xl font-extralight py-4 lg:px-9 lg:w-[570px]">
                  Lo que le gustaba hacer, con quien le gustaba estar, lugares a
                  donde le encantaba ir, momentos que disfrutaba vivir y lo que
                  caracterizaba su persona: sus cualidades, sus valores, su
                  carácter, sus pasiones. Su sello. Recordalo y honralo para
                  siempre!
                </div>
              }
            />
          </div>
        </div>
      </div>

      <div className="font-bold text-2xl bg-lila p-5 border-lila text-white">
        <Line imgSrc={logo} description="NO OLVIDES TUS RAÍCES" />
      </div>

      <div className="w-screen h-screen">
        <CarouselWrapper/>
      </div>

      <div className="bg-gris text-white text-2xl p-5 font-bold lg:pt-20">
        <h1>RESGUARDA DE FORMA SEGURA Y PERSONAL ESE TESORO</h1>
      </div>
      <div
        className="flex flex-col items-center justify-center text-center p-6 bg-gris text-white text-xl font-medium tracking-wide 
            lg:grid lg:grid-cols-3 lg:gap-7 lg:pt-20 lg:px-60 "
      >
        {/* Contenedor 1 */}
        <div className="flex flex-col items-center text-center lg:pr-20">
          <Hero imgSrcMobile={pc} imgSrcDesktop={pc} />
          <h2 className="mt-5 pb-10 w-[320px] lg:w-[400px]">
            Un lugar único, para tener y ver de una manera clara, atractiva y
            simple tu legado completo.
          </h2>
        </div>

        {/* Contenedor 2 */}
        <div className="flex flex-col items-center text-center">
          <Hero imgSrcMobile={link} imgSrcDesktop={link} />
          <h2 className="mt-5 pb-10 w-[400px] lg:w-[400px] lg:pb-13">
            Un espacio de fácil y rápido acceso para que esté por siempre a la
            mano de las generaciones por vivir.
          </h2>
        </div>

        {/* Contenedor 3 */}
        <div className="flex flex-col items-center text-center">
          <Hero imgSrcMobile={qrcode} imgSrcDesktop={qrcode} />
          <h2 className="mt-5 pb-10 w-[300px] lg:w-[300px]">
            Una estructura flexible para compartirlo de la forma que quieras y
            con quien quieras.
          </h2>
        </div>
      </div>

      <div className="bg-gris text-beige text-xl p-5 font-medium pb-10 | lg:text-xl text-center">
        <Line imgSrc={logo} description="LA EXPERIENCIA INOLVIDABLE" />
      </div>

      <section className="hidden lg:block">
        <h1 className="text-center bg-gris text-beige text-3xl p-10 font-medium font-serif">
          “A todo lo que queremos recordar uno debe adjudicarle una imagen”
          Matteo Ricci (1596).
        </h1>
      </section>
      <div className="relative overflow-hidden">
        {/* Contenedor con el Hero */}
        <Hero imgSrcMobile={Nemicamobile} imgSrcDesktop={Nemicadesktop} />

        {/* Header para Desktop: se muestra solo en md y superiores */}
        <div className="hidden md:block absolute top-25 right-25 lg:w-[800px] w-full p-4 bg-crema/75 bg lg:p-9 ">
          <Header
            heading={
              <div className="text-2xl font-normal font-sans text-left p-3 text-purpura">
                Las huellas mnémicas son los rastros que quedan en el cerebro
                como resultado del almacenamiento de la información. Estas
                huellas se forman a través de las experiencias y son esenciales
                para el funcionamiento de la memoria.
              </div>
            }
            description={
              <div className="text-2xl font-normal font-sans text-left p-3 text-purpura">
                En NEMICA, realizamos un proceso que emula la función de las
                células mnémicas que permiten la reconstrucción y recuperación
                de los recuerdos para preservar la memoria.
              </div>
            }
          />
        </div>
      </div>

      {/* Header para Mobile: se muestra solo en pantallas pequeñas */}
      <div className="md:hidden bg-beige text-purpura p-5 border-beige">
        <Header
          heading={
            <div className="text-xl font-normal font-sans text-left p-3 leading-7">
              Las huellas mnémicas son los rastros que quedan en el cerebro como
              resultado del almacenamiento de la información. Estas huellas se
              forman a través de las experiencias y son esenciales para el
              funcionamiento de la memoria.
            </div>
          }
          description={
            <div className="text-xl font-normal font-sans text-left p-3 leading-7">
              En NEMICA, realizamos un proceso que emula la función de las
              células mnémicas que permiten la reconstrucción y recuperación de
              los recuerdos para preservar la memoria.
            </div>
          }
        />
      </div>

      <div>
        <Icons
          BackgroundWithIcons
          bgDesktopIcon={bgDesktopIcon}
          bgMobileIcon={bgMobileIcon}
          icons={[one, two, three, four, five, six, seven, eight]}
        />
      </div>

      <div className="relative overflow-hidden ">
        <section
          className="hidden lg:block absolute text-xl text-beige font-bold 
                    left-1/2 bottom-8 transform -translate-x-1/2"
        >
          <Line imgSrc={logo} description="VIVIR ES TRASCENDER" />
        </section>
        <Hero
          imgSrcMobile={intangible2mobile}
          imgSrcDesktop={intangible2desktop}
        />
        <div
          className="absolute top-8 left-3 p-3 text-white text-3xl font-bold drop-shadow-lg text-left tracking-wide leading-12
        lg:top-25 lg:left-20 lg:w-[800px]"
          style={{ textShadow: ":2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          <span className="block md:inline lg:text-4xl lg:text-purpura">
            MAS ALLÁ DE LA{" "}
          </span>
          <span className="block md:inline lg:text-4xl lg:text-purpura">
            HERENCIA MATERIAL
          </span>
          <span className="block font-normal py-2 text-2xl lg:text-3xl tracking-wide leading-8 pl-0 pr-15 lg:w-700px] lg:text-purpura">
            Ahora tenés la oportunidad de dejar plasmado ese patrimonio
            intangible e inmaterial muy valioso que pocos conservan
          </span>
        </div>
      </div>
      <div className="bg-grisMedio">
        <Form />
      </div>
      <div>
        <section id="contactenos">
          <Footer />
        </section>
      </div>
    </div>
  );
}
