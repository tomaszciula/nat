import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function AboutMeView() {
  return (
    <>
      <div className="aboutMe__container">
        <div className="aboutMe__container--navbar">
          <NavBar text1="Powrót" text2="Galeria" text3="Kontakt" color='white' />
        </div>
        <div className="aboutMe__container--container">
          <div className="aboutMe__container--container--text">
            <span>
              Cześć! Jestem Natalia, kocham psy a moją równie wielką pasją jest
              fotografia. Postanowiłam połączyć te dwa "światy" i zająć się
              fotografią naszych czwronożnych przyjaciół. Zapraszam Cię zatem do
              mojego pieskiego świata! Gwarantuję, że znajdziesz tu mnóstwo
              kadrów pełnych psich emocji. Skąd moja pasja do psiej fotografii ?
              Na pewno to duża zasługa mojej już 9-letniej labradorki, którą
              uwielbiam fotografować i której mam niezliczoną ilość zdjęć w
              swoich albumach 🙂 Robiłam zdjęcia dla frajdy, dla siebie, wtedy
              psia fotografia nie była tym czym chciałabym się zająć na większą
              skalę. Kiedy natomiast, pojawił się pomysł by fotografować psy ze
              schroniska i w ten sposób pomogłam wielu psiakom znaleźć nowy dom,
              dało mi to motywację do działania. Poczułam, że fotografia psów
              sprawia mi ogromną radość i satysfakcję. Zaczęłam robić zdjęcia
              znajomym z ich pupilami, a to jaką ilość endorfin fundowały mi
              sesje piesko-ludzkie coraz bardziej przekonywały mnie by rozwijać
              się w kierunku fotografii psów. Kilka dni temu ukończyłam
              warsztaty z psiej fotografii, które dodatkowo dały mi dużego kopa
              do działania z Waszymi pupilami 🙂 Tak właściwie pomyślałam.. To
              prosta historia jak zaczęła się moja przygoda z psią fotografią
              ale czy proste historie nie są najlepsze ? 🙂 Zapraszam Cię zatem
              do mojego pieskiego świata! 🙂 Głęboko wierzę, że Ciebie i Twojego
              pupila łączy wyjątkowa i silna więź. Postaram się o to, aby
              została ona odzwierciedlona na zrobionych przeze mnie zdjęciach 🙂
            </span>
          </div>
          <div className="aboutMe__container--container--carousel">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              arrows={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={10000}
              keyBoardControl={false}
              customTransition="all .5"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="carouselItem">
                „Pies jest jedynym stworzeniem na ziemi, które kocha cię więcej
                niż siebie samego” - Josh Billings
              </div>
              <div className="carouselItem">
                „Największą przyjemnością w posiadaniu psa jest to, że możesz
                się przed nim wygłupić, a on nie tylko, że się nie będzie śmiał,
                ale też zrobi z siebie głupka” - Samuel Butler
              </div>
              <div className="carouselItem">
                „Chciałbym się stać tak dobrym człowiekiem, za jakiego uważa
                mnie mój pies”
              </div>
              <div className="carouselItem">
                „Nie ma na świecie przyjaźni, która trwa wiecznie. Jedynym
                wyjątkiem jest ta, którą obdarza nas pies”- Konrad Lorenz
              </div>
              <div className="carouselItem">
                "Im lepiej poznaję ludzi, tym bardziej zaczynam lubić psy" -
                Charles de Gaulle
              </div>
              <div className="carouselItem">
                „Myślisz, że psy nie pójdą do nieba, a ja ci mówię, że one tam
                będą dużo wcześniej niż my” - Robert Louis Stevenson
              </div>
              <div className="carouselItem">
                "Jeśli w niebie nie ma psów, to po śmierci chce trafić tam,
                gdzie one" - Will Rogers
              </div>
              <div className="carouselItem">
                „Jest Twoim przyjacielem, partnerem, obrońcą - Twoim Psem.
                Jesteś jego życiem, miłością i przewodnikiem. Będzie Twój -
                wierny i oddany do ostatniego uderzenia serca. Winien mu jesteś
                zasłużyć na to oddanie" - Allan M. Siegal
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMeView;
