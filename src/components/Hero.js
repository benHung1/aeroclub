const Hero = () => {
  return (
    <>
      <section className="w-full border-b-2 border-normal h-[16.5vw] flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="230"
          height="30"
          viewBox="0 0 229.399 29.43"
          style={{ top: "159px", left: "40px", width: "995px", height: "auto" }}
        >
          <path
            d="M-126.159-10.632l-9.865-27.622h-7.727L-153.945-9.769h6.864l1.973-5.878h9.742l2.137,6.166Zm-10.892-10.523h-6.412l3.206-9.865ZM-100.88-9.769V-15.4h-11.139v-6.124h9.125l-.9-5.8h-8.221V-32.5h10.769v-5.631h-17.675V-9.769Zm21.949-18.99c0,2.713-1.767,4.193-4.768,4.193h-2.178v-8.262h2.261C-80.575-32.828-78.931-31.39-78.931-28.759Zm1.644,7.645a8.217,8.217,0,0,0,5.261-8.056c0-5.837-4.028-8.961-10.892-8.961h-9.906V-9.769h6.988v-9.742H-83.9L-77.7-9.481l7.193-1.192Zm39.542-2.877c0-8.755-5.3-14.674-13.523-14.674S-64.832-32.7-64.832-23.909c0,8.755,5.343,14.674,13.482,14.674C-43.089-9.235-37.745-15.236-37.745-23.991Zm-7.07.041c0,5.631-2.384,9.207-6.494,9.207-4.069,0-6.494-3.576-6.494-9.207s2.384-9.207,6.494-9.207S-44.815-29.581-44.815-23.95Zm36.13,12.578-.9-5.754a12.994,12.994,0,0,1-6.453,1.973c-4.275,0-7.44-3.124-7.44-8.8,0-5.549,2.8-8.8,7.07-8.8a10.428,10.428,0,0,1,6.33,2.3l.986-6.33a15.83,15.83,0,0,0-7.851-1.85c-8.056,0-13.564,5.919-13.564,14.715,0,8.878,5.179,14.633,13.77,14.633A16.281,16.281,0,0,0-8.685-11.372Zm24.868,1.6-.945-6.083H6.523V-38.131H-.505V-9.769ZM46.147-21.032v-17.1h-7.07v17.181c0,3.617-1.6,5.713-4.809,5.713-3.165,0-4.809-2.137-4.809-5.8v-17.1h-7.07v17.14c0,7.933,4.85,11.673,11.8,11.673C41.05-9.317,46.147-13.14,46.147-21.032Zm29.307,3.083c0-3.864-2.055-5.837-5.138-6.823a6.3,6.3,0,0,0,4.069-6c0-4.6-3.165-7.358-9.618-7.358H55.108V-9.769h9.454C71.344-9.769,75.454-12.482,75.454-17.949ZM68.138-29.992c0,2.055-1.4,3.329-4.028,3.329H61.767v-6.412h2.507C66.987-33.075,68.138-31.883,68.138-29.992Zm.7,11.591c0,2.384-1.644,3.576-4.48,3.576h-2.59v-7.316h2.507C67.233-22.141,68.836-20.867,68.836-18.4Z"
            transform="translate(153.945 38.665)"
            fill="#e20613"
          ></path>
        </svg>
      </section>

      {/* video */}

      <section className="videoContainer border-b-2  border-normal">
        <video muted loop autoPlay playsInline preload="auto">
          <source
            src="https://aeroclubdesign.com/wp-content/uploads/2023/02/Aeroclun-Trento-1.mp4#t=0.1"
            type="video/mp4"
          />
        </video>
      </section>

      {/* text */}

      <section className="textGroup flex pt-10 text-normal justify-around items-center pb-[250px] flex-wrap p-8 gap-8">
        <div className="leftText max-lg:w-full">
          <h1 className="text-[6vw] font-black">Ride the high.</h1>
        </div>

        <div className="rightText lg:w-1/2 w-full">
          <p>
            In un tempo che scorre a gran velocità, in un loop di abitudini e
            monotonia, esci dagli schemi, evadi dalla tua safe zone, abbandonati
            alla meraviglia di un universo che unisce adrenalina ed emozioni
            estreme.
          </p>
        </div>
      </section>

      {/* productCard */}

      <section className="productContainer  flex h-full w-full border-normal border-t-2">
        <article className="h-[44.vw] w-padSize lg:w-card border-normal border-r-2 relative flex flex-col">
          <img
            className="object-cover h-full border-b-2 border-normal"
            src="https://aeroclubdesign.com/wp-content/uploads/231PO1704CJ603-39289-aeroclub-zephyros-poloshirt-green-unisex-0.jpg"
            alt=""
          />

          <div className="productName absolute top-4 left-4 text-normal max-sm:text-xs">
            <h3
              style={{
                writingMode: "tb-rl",
                transform: "rotate(-180deg) translateZ(0)",
              }}
            >
              Zephyros Polo basica
            </h3>
          </div>

          <div className="productOptionContainer border-b-2 border-normal relative h-10 flex justify-between  items-center">
            <div className="h-full w-full ">
              <div className="bagWrapper w-10 border-r-2 border-normal   text-normal h-full flex items-center justify-center">
                <i class="lni lni-briefcase "></i>
              </div>

              <div className="hideSizeWrapper absolute flex items-center w-full h-full bg-white text-normal top-0 -left-[1000%]">
                <div className="w-size border-r-2 border-normal h-full flex items-center justify-center bg-normal text-white relative">
                  <i class="lni lni-briefcase "></i>
                </div>
                <div className="w-size border-r-2 border-normal h-full flex items-center justify-center relative">
                  <span>S</span>
                </div>
                <div className="w-size border-r-2 border-normal h-full flex items-center justify-center relative">
                  <span>M</span>
                </div>
                <div className="w-size border-r-2 border-normal h-full flex items-center justify-center relative">
                  <span>L</span>
                </div>
                <div className="w-size h-full flex items-center justify-center relative">
                  <span>XL</span>
                </div>
              </div>
            </div>

            <div className="priceWrapper  text-normal border-l-2 border-normal h-full flex items-center gap-2 px-2">
              <span className="max-sm:text-xs">$69,30</span>
              <del className="text-black max-sm:text-xs">$99,00</del>
            </div>
          </div>
        </article>

        <div className="titleText max-lg:w-[7rem] w-[9rem] pt-8 text-normal">
          <h2
            className="max-lg:text-[4rem] text-[5rem]"
            style={{
              writingMode: "tb-rl",
              transform: "rotate(-180deg) translateZ(0)",
            }}
          >
            Featured
          </h2>
        </div>
      </section>

      {/* marquee */}

      <section className="marquee flex justify-center my-40 border-t-2 border-b-2 border-normal py-6 font-black text-normal text-4xl whitespace-nowrap overflow-hidden">
        <img
          src="https://aeroclubdesign.com/wp-content/themes/aeroclub-child/assets/svg/icona-svg.svg"
          alt="logo"
        />
        <h3>EXPERIENCE. EXPLORE. EXCHANGE THE OVERLOAD WITH A NEW LIFE. </h3>
      </section>

      {/* lookbookSection */}

      <section className="lookbookSection max-lg:flex-col flex text-normal border-t-2 border-b-2 border-normal">
        <div className="pl-10 pt-11 pb-16 flex w-1/2 max-lg:w-full flex-col items-start justify-around   border-normal max-lg:order-2 max-lg:gap-8">
          <div className="lg:max-w-[28.5vw]  max-lg:w-full ">
            Aeroclub si ispira agli sport dell’aria per creare una community
            forte e un lifestyle dinamico e coinvolgente.
          </div>

          <button className="bg-normal text-white rounded-full max-lg:w-[13rem] w-[15rem]  h-[2.6rem]">
            LOOKBOOK
          </button>
        </div>

        <div className="w-1/2 max-lg:w-full">
          <img
            src="https://aeroclubdesign.com/wp-content/uploads/2023/02/Foto-09_225A5595rit_.jpg"
            alt="lookbook"
            className="w-full"
          />
        </div>
      </section>

      {/* newsletter */}

      <section className="mt-40">
        <div className="footerTopSection flex items-center justify-between flex-wrap border-t-2  border-normal text-normal  mb-16">
          <div className="igSection flex items-center border-b-2 border-normal  h-24  w-full lg:w-1/2">
            <div className="border-r-2 border-normal  h-full flex items-center justify-center px-4">
              <i class="lni lni-instagram text-[34px]"></i>
            </div>
            <span className="px-2">
              Iscriviti per ottenere uno sconto del 10% sul tuo primo ordine.
            </span>
          </div>

          <div className="emailSection border-b-2  w-full lg:w-1/2 lg:border-l-2 border-normal   flex items-center justify-between px-4 h-24">
            <div className="flex flex-col">
              <input
                type="text"
                name=""
                id=""
                placeholder="EMAIL.."
                className="w-[30%] bg-inherit focus:outline-none placeholder-normal font-extrabold"
              />
              <span className="text-xs">
                Inserisci un indirizzo email valido.
              </span>
            </div>
            <button className="bg-normal text-white rounded-full max-lg:w-[13rem] w-[15rem]  h-[2.6rem]">
              ISCRIVITI
            </button>
          </div>
        </div>
      </section>

      {/* footer */}

      <footer>
        <ul className="flex text-normal  justify-between flex-wrap flex-row w-full px-10">
          <li className=" max-lg:w-padSize max-lg:mb-4 max-sm:w-full">
            GENERAL CONDITIONS OF SALE
          </li>
          <li className=" max-lg:w-padSize max-lg:mb-4 max-sm:w-full">
            PAYMENTS
          </li>
          <li className=" max-lg:w-padSize max-lg:mb-4 max-sm:w-full">
            SHIPPING
          </li>
          <li className=" max-lg:w-padSize max-lg:mb-4 max-sm:w-full">
            RETURNS AND REFUNDS
          </li>
          <li className=" max-lg:w-padSize max-lg:mb-4 max-sm:w-full">FAQ</li>
          <li className=" max-lg:w-padSize max-lg:mb-4 max-sm:w-full">
            CONTACTS
          </li>
          <li className=" max-lg:w-padSize max-lg:mb-4 max-sm:w-full">
            ACCOUNT
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Hero;
