import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Line from "./components/Line";
import Card from "./components/Card";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./index.css";
//import de imagenes mobile
import principal1mobile from "./assets/images/mobile/principal1mobile.webp";
import target1Amobile from "./assets/images/mobile/target1Amobile.webp";
import caballomobile from "./assets/images/mobile/caballomobile.webp";
import Nemicamobile from "./assets/images/mobile/Nemicamobile.webp";
import intangible2mobile from "./assets/images/mobile/intangible2mobile.webp";
//import de imagenes desktop
import principal1desktop from "./assets/images/principal1desktop.webp";
import target1Adesktop from "./assets/images/target1Adesktop.jpg";
import caballodesktop from "./assets/images/caballodesktop.webp";
import Nemicadesktop from "./assets/images/Nemicadesktop.webp";
import intangible2desktop from "./assets/images/intangible2desktop.webp";

//import icons
import pc from "./assets/images/icons/pc.png";
import link from "./assets/images/icons/link.png";
import qrcode from "./assets/images/icons/qrcode.png";
import logo from "./assets/images/icons/logo.png";
import titulonemica from "./assets/images/icons/titulonemica.png";

//import Card
import bio1A from "./assets/images/cards/Bio1A.jpg";
import histograma1A from "./assets/images/cards/histograma1A.webp";
import clip2 from "./assets/images/cards/Clip2.webp";
import genealogia1A from "./assets/images/cards/genealogia1A.webp";
import testimonios from "./assets/images/cards/testimonios.webp";
import relaciones from "./assets/images/cards/relaciones.webp";
import genetica1A from "./assets/images/cards/genetica1A.webp";
import Museum1B from "./assets/images/cards/Museum1B.webp";

export default function App() {
  return (
    <div className="lg:px-20 ">
      <div>
        <section>
          <NavBar imgSrc={logo} title={titulonemica} />
        </section>
      </div>

      <div className="relative w-full overflow-hidden">
        <Hero
          imgSrcMobile={principal1mobile}
          imgSrcDesktop={principal1desktop}
          alt="imagen principal"
          className="absolute w-full h-full object-cover scale-[1.5] translate-y-[-15%] md:scale-100 md:translate-y-0"
        />
        <div
          className="absolute top-25 left-0 p-4 text-white text-7xl font-extrabold drop-shadow-lg text-left tracking-wide leading-20 | lg:text-8xl lg:left-25 lg:top-50 "
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          <span className="block md:inline ">DEJÁ</span>
          <span className="block md:inline "> TU</span>
          <span className="block"> HUELLA</span>
        </div>
      </div>

      <div className="bg-crema text-purpura p-5 py-10 | lg:p-10 lg:px-15">
        <Header
          heading={
            <div className="leading-10 text-4xl font-bold font-sans text-left tracking-wider | lg:px-50 lg:text-center lg:text-5xl lg:leading-15">
              Transmití de generación en generación la tradición familiar y tu
              legado.
            </div>
          }
          description={
            <div className="text-gris mt-2 font-semibold leading-8 text-left tracking-wider text-2xl py-4 | lg:text-gris lg:text-3xl lg:px-30 lg:leading-10 lg:text-center">
              Concretiza y deja marcada la huella que podrá ser una fuente de
              inspiración y un faro para otros, para que quede en los corazones
              y las mentes de quienes amas.
            </div>
          }
        />
      </div>
      <div className="font-bold text-2xl p-6 | lg:text-3xl lg:p-15 bg-crema">
        <Line imgSrc={logo} description="EL LEGADO IMBORRABLE" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
        {/* Hero 1 */}
        <div className="relative overflow-hidden lg:[grid-column:1] lg:[grid-row:1] -mb-8 lg:mb-0">
          <Hero
            imgSrcMobile={target1Amobile}
            imgSrcDesktop={target1Adesktop}
            className="w-full h-full object-cover"
          />
          <div
            className="text-left absolute drop-shadow-xl bottom-4 left-4 p-4 text-white text-4xl font-extrabold  | lg:text-4xl  lg:bottom-10 lg:left-10 lg:p-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            <span className="block md:inline"> ¡TU VIDA MERECE</span>
            <span className="block"> SER CONTADA!</span>
          </div>
        </div>
        {/* Header 1 */}
        <div className="bg-lila text-white p-0 lg:[grid-column:1] lg:[grid-row:2]">
          <div className="p-6 lg:p-15">
            <Header
              heading={
                <div className="text-2xl font-bold text-left lg:px-9">
                  Somos el apoyo y guía necesario para recrear tu historia.
                </div>
              }
              description={
                <div className="text-left text-2xl font-extralight py-4 lg:px-9">
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
            className="absolute bottom-5 left-3 p-4 text-left text-white text-4xl font-extrabold drop-shadow-lg | lg:text-4xl lg:bottom-10 lg:left-18 lg:p-4 "
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            <span className="block md:inline"> ¡EL HOMENAJE AL</span>
            <span className="block"> SER MAS QUERIDO!</span>
          </div>
        </div>
        <div className="bg-lila text-white p-0 lg:[grid-column:2] lg:[grid-row:2]">
          <div className="p-6 lg:py-15 lg:pt-5">
            <Header
              heading={
                <div className="text-2xl font-bold text-left lg:p-9">
                  Pone en valor el legado de quien amas.
                </div>
              }
              description={
                <div className="text-left text-2xl font-extralight lg:px-9">
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

      <div className="grid grid-flow-col auto-cols-[minmax(300px,1fr)] gap-6 p-6 overflow-hidden bg-gradient-to-b from-lila to-gris">
        <Card
          title="Resumen Biográfico"
          imgSrc={bio1A}
          h1="¡De generación en generación!"
          description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
        />
        <Card
          title="Histograma"
          imgSrc={histograma1A}
          h1="¡Los hechos más significativos!"
          description="Destacá los hitos más importantes que marcaron el camino construido, y mira cronológicamente esos logros y eventos del proyecto de vida que fueron únicos."
        />
        <Card
          title="Clip de Vida"
          imgSrc={clip2}
          h1="¡Esos buenos momentos vividos!"
          description="Transmití esas experiencias que llenaron el corazón, que son vivencias que emocionan y que reviven momentos que entusiasman."
        />

        <Card
          title="ÁRBOL GENEALÓGICO"
          imgSrc={genealogia1A}
          h1="¡De generación en generación!"
          description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
        />
        <Card
          title="TESTIMONIOS"
          imgSrc={testimonios}
          h1="¡Esos relatos que nos pintan tal cual somos!"
          description="Recreá y captá desde la mirada y experiencia del círculo íntimo esa esencia personal, generando un retrato con los rasgos característicos."
        />
        <Card
          title="CÏRCULOS DE RELACIONES"
          imgSrc={relaciones}
          h1="¡Esos vínculos construidos!"
          description="Mostrá las relaciones con familiares y amigos que marcaron e influenciaron el desarrollo y crecimiento personal."
        />
        <Card
          title="SÍNTESIS GENÉTICA"
          imgSrc={genetica1A}
          h1="¡De tal palo tal astilla!"
          description="Dejá claro esos rasgos tradicionales que inevitablemente se heredan, que son parte de la identidad y que seguramente se transmitan a las siguientes generaciones."
        />
        <Card
          title="MUSEUM"
          imgSrc={Museum1B}
          h1="¡Olvidate del altillo!"
          description="Que mejor que tener ese espacio propio donde encontrar todo de forma rápida y ágil, y mediante una experiencia visual increíble que se puede disfrutar a cada momento."
        />
      </div>

      <div className="bg-gris text-beige text-4xl p-5 font-bold py-10 lg:pt-20">
        <h1>RESGUARDA DE FORMA SEGURA Y PERSONAL ESE TESORO</h1>
      </div>

      <div
        className="flex flex-col items-center justify-center text-center p-6 bg-gris text-beige text-2xl font-bold tracking-widest leading-8
                lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 lg:py-5"
      >
        <Hero
          imgSrcMobile={pc}
          imgSrcDesktop={pc}
          className="lg:row-start-1 lg:col-start-1"
        />
        <div className="text-center p-6 lg:row-start-2 lg:col-start-1 lg:text-xl">
          <h2>
            Un lugar único, para tener y ver de una manera clara, atractiva y
            simple tu legado completo.
          </h2>
        </div>
        <Hero
          imgSrcMobile={link}
          imgSrcDesktop={link}
          className="lg:row-start-1 lg:col-start-2"
        />
        <div className="text-center p-6 lg:row-start-2 lg:col-start-2 lg:text-xl">
          <h2>
            Un espacio de fácil y rápido acceso para que esté por siempre a la
            mano de las generaciones por vivir.
          </h2>
        </div>
        <Hero
          imgSrcMobile={qrcode}
          imgSrcDesktop={qrcode}
          className="lg:row-start-1 lg:col-start-3"
        />
        <div className="text-center p-6 lg:row-start-2 lg:col-start-3 lg:text-xl lg:p-2 lg:pb-17">
          <h2>
            Una estructura flexible para compartirlo de la forma que quieras y
            con quien quieras.
          </h2>
        </div>
      </div>

      <div className="bg-gris text-beige text-1xl p-5 font-bold | lg:text-2xl">
        <Line imgSrc={logo} description="LA EXPERIENCIA INOLVIDABLE" />
      </div>
      <section className="hidden lg:block">
        <h1 className="text-center bg-gris text-beige text-3xl p-10 font-medium font-serif">
          “A todo lo que queremos recordar uno debe adjudicarle una imagen”
          Matteo Ricci (1596).
        </h1>
      </section>
      <div className="relative overflow-hidden">
        <Hero imgSrcMobile={Nemicamobile} imgSrcDesktop={Nemicadesktop} />
        <div className="absolute top-0 left-0 p-4 text-white text-4xl font-extrabold drop-shadow-lg"></div>
      </div>
      <div className="bg-beige text-gris p-5 border-beige">
        <Header
          heading={
            <div className="text-xl font-normalñ font-sans text-left p-3 ">
              Las huellas mnémicas son los rastros que quedan en el cerebro como
              resultado del almacenamiento de la información. Estas huellas se
              forman a través de las experiencias y son esenciales para el
              funcionamiento de la memoria.
            </div>
          }
          description={
            <div className="text-xl font-normalñ font-sans text-left p-3">
              En NEMICA, realizamos un proceso que emula la función de las
              células mnémicas que permiten la reconstrucción y recuperación de
              los recuerdos para preservar la memoria.
            </div>
          }
        />
      </div>
      <div>
        <Card imgSrc="icons" />
      </div>
      <div className="relative overflow-hidden ">
        <Hero
          imgSrcMobile={intangible2mobile}
          imgSrcDesktop={intangible2desktop}
        />
        <div className="absolute top-8 left-0 p-4 text-white text-4xl font-extrabold drop-shadow-lg text-left tracking-wide leading-12">
          <span className="block md:inline">MAS ALLÁ DE LA </span>
          <span className="block md:inline"> HERENCIA MATERIAL </span>
          <span className="block md:inline font-normal py-6 text-3xl tracking-wide leading-9 ">
            Ahora tenés la oportunidad de dejar plasmado ese patrimonio
            intangible e inmaterial muy valioso que pocos conservan.
          </span>
        </div>
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
