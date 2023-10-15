import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>StashBlob</title>
        <meta
          name="description"
          content="Easy way to share files with anyone without any hicups. Just upload and share."
        />
        <meta
          name="keywords"
          content="Cloud Storage, File Sharing, Storage Bucket, Dropbox, StashBlob"
        />
        <meta
          name="google-site-verification"
          content="l1a2fyP4jz21WqSIR2HNxLAyt__hUNkV-48f_zbVHYE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://resubase-me.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="StashBlob"
        />
        <meta
          property="og:description"
          content="Easy way to share files with anyone without any hicups. Just upload and share."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1697331302/Site_Rollup_pmxaos.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resubase-me.vercel.app" />
        <meta property="twitter:url" content="https://resubase-me.vercel.app" />
        <meta
          name="twitter:title"
          content="StashBlob"
        />
        <meta
          name="twitter:description"
          content="Easy way to share files with anyone without any hicups. Just upload and share."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1697331302/Site_Rollup_pmxaos.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
      </Head>
      <main>
        <header className="fixed top-0 z-10 left-0 p-4 md:p-4 lg:p-4 md:px-10 lg:px-10 flex items-center justify-between w-full bg-bgon/50 backdrop-blur-md border border-transparent border-b-greymid">
          <div className="">
            <Link href="/">
              <Image
                src="/assets/TransparentBlob.png"
                width={150}
                height={150}
                className="pointer-events-none select-none"
                alt="Picture of the author"
              />
            </Link>
          </div>
          <nav className="">
            <Link href="https://tally.so/r/mOXADa">
              <Button className="rounded-md bg-transparent border border-white text-white hover:bg-whitehub hover:text-blackmid text-base">
                Join waitlist
              </Button>
            </Link>
          </nav>
        </header>
        <div className="flex items-center justify-center min-h-screen">
          <section className="md:p-10 lg:p-10 p-4">
            <div className="flex items-center justify-center flex-col gap-5 text-center">
              <h1 className="md:text-8xl lg:text-8xl text-5xl font-Gabarito font-medium text-center text-midwhite">
                Smart way to share files
              </h1>
              <p className="md:text-xl lg:text-xl text-base font-normal text-midgrey">
                Easy way to share files with anyone without any hicups. Just
                upload and share.
              </p>
              <Link href="https://tally.so/r/mOXADa" className="mt-4">
                <Button className="p-6 rounded-lg text-lg bg-white text-blackmid hover:bg-whitehub">
                  Join waitlist
                </Button>
              </Link>
            </div>
          </section>
        </div>
        <section className="md:p-10 lg:p-10 p-4">
          <div className="flex md:flex-row-reverse lg:md:flex-row-reverse flex-col items-center w-full border border-sinegrey md:p-4 md:px-10 lg:p-4 lg:px-10 p-3 px-6 justify-between gap-4 rounded-lg">
            <div className="">
              <Image
                src="/assets/Cloud1.png"
                width={800}
                height={800}
                className="object-cover rounded-lg"
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="md:text-[2.6rem] lg:text-[2.6rem] text-3xl font-medium text-white md:text-left lg:text-left text-center">
                The Best Solutions for Cloud Storage
              </h3>
              <p className="text-textmidgrey md:text-base lg:text-base text-sm md:text-left lg:text-left text-center">
                You would find our services easy to use, uploading has never
                been easier
              </p>
            </div>
          </div>
        </section>
        <section className="md:p-10 lg:p-10 p-4">
          <div className="flex md:flex-row lg:flex-row flex-col md:gap-0 lg:gap-0 gap-4 items-center justify-between md:text-left lg:text-left text-center">
            <h3 className="text-4xl text-white font-medium">
              We give you absolutely control
            </h3>
            <p className="text-textmidgrey md:text-2xl lg:text-2xl text-lg">
              When choosing us, we give you control <br /> over your files and
              data.
            </p>
          </div>
          <div className="flex md:flex-row lg:flex-row flex-col items-stretch gap-4 mt-10">
            <div className="p-8 bg-cardbg transition-colors hover:bg-textbg border border-greymid/40 rounded-md w-full flex flex-col gap-8">
              <div className="">
                <span className="md:text-3xl lg:text-3xl text-lg text-white p-3 bg-textbg rounded-md">
                  Realtime Analytics
                </span>
              </div>
              <div className="">
                <p className="text-white md:text-lg lg:text-lg text-base">
                  Know what&apos;s useful and what&apos;s not, we give you the
                  ability to know what to delete right on dashboard analytics
                  page
                </p>
              </div>
            </div>
            <div className="p-8 bg-cardbg transition-colors hover:bg-textbg border border-greymid/40 rounded-md w-full flex flex-col gap-8">
              <div className="">
                <span className="md:text-3xl lg:text-3xl text-lg text-white p-3 bg-textbg rounded-md">
                  Error Logs
                </span>
              </div>
              <div className="">
                <p className="text-white md:text-lg lg:text-lg text-base">
                  Know what really went wrong. We&apos;ve made error logs
                  inbuilt into the app, an error that&apos;s your friend.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="md:p-10 lg:p-10 p-4">
          <div className="flex items-center gap-3 justify-center flex-col text-center">
            <h3 className="md:text-7xl lg:text-7xl text-4xl text-white font-bold">
              Share files better with Forget
            </h3>
            <p className="text-textmidgrey md:text-lg lg:text-lg text-base">
              Upload, and Share any file, and access them from anywhere
            </p>
          </div>
          <div className="flex md:flex-row lg:flex-row flex-col items-stretch gap-4 mt-20">
            <div className="p-4 flex flex-col gap-4 relative overflow-hidden items-center w-full md:max-w-md lg:max-w-md bg-cardbg border border-greymid/40 hover:border-greymid/80 rounded-lg">
              <div className="">
                <svg
                  width="60"
                  height="60"
                  fill="#7148FC"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-[60px] lg:w-[60px] md:h-[60px] lg:h-[60px] w-[90px] h-[90px]"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.56 1.255A1.2 1.2 0 0 1 14.4 2.4v6h4.8a1.2 1.2 0 0 1 .984 1.888l-8.4 12A1.2 1.2 0 0 1 9.6 21.6v-6H4.8a1.2 1.2 0 0 1-.984-1.888l8.4-12a1.2 1.2 0 0 1 1.344-.456Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="absolute md:block lg:block hidden top-0 left-0">
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 419 408"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_ii_49_10)">
                    <circle
                      cx="177"
                      cy="166"
                      r="242"
                      fill="url(#paint0_linear_49_10)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_ii_49_10"
                      x="-65"
                      y="-87.704"
                      width="484"
                      height="507.408"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-11.704" />
                      <feGaussianBlur stdDeviation="5.852" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0820334 0 0 0 0 0.0820334 0 0 0 0 0.0929557 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_49_10"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="11.704" />
                      <feGaussianBlur stdDeviation="5.852" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0396579 0 0 0 0 0.0396579 0 0 0 0 0.0449382 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_49_10"
                        result="effect2_innerShadow_49_10"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_49_10"
                      x1="177"
                      y1="-76"
                      x2="177"
                      y2="408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0B0B0D" />
                      <stop offset="1" stopColor="#141416" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center gap-4 relative">
                <p className="md:text-3xl lg:text-3xl md:leading-9 lg:leading-9 text-5xl leading-tight text-white font-medium">
                  <span className="text-btnbg underline">Fast</span> Upload
                  Stream
                </p>
                <span className="text-doubleAgrey md:text-lg lg:text-lg">
                  Upload request are faster, giving you the time to grab a
                  coffee and come back.
                </span>
              </div>
              <div className="absolute bottom-[-5rem] right-[-2rem]">
                <div className="w-96 h-96 rounded-full bg-gradient-to-l from-btnbg/20"></div>
              </div>
              <div className="mt-60"></div>
              <div className="flex items-center justify-center absolute bottom-0">
                <svg
                  width="222"
                  height="222"
                  viewBox="0 0 682 463"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M298.375 383.625H383.625V213.125H511.5L341 42.625L170.5 213.125H298.375V383.625ZM426.25 287.719V353.446L621.43 426.25L341 530.809L60.5701 426.25L255.75 353.446V287.719L0 383.625V554.125L341 682L682 554.125V383.625L426.25 287.719Z"
                    fill="url(#paint0_linear_49_57)"
                    fillOpacity="0.3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_49_57"
                      x1="341"
                      y1="42.625"
                      x2="341"
                      y2="682"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7148FC" />
                      <stop offset="1" stopColor="#7148FC" stopOpacity="0.44" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            {/*  */}
            <div className="p-4 flex flex-col gap-4 relative overflow-hidden items-center w-full md:max-w-md lg:max-w-md bg-cardbg border border-greymid/40 hover:border-greymid/80 rounded-lg">
              <div className="">
                <svg
                  width="60"
                  height="60"
                  fill="#7148FC"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-[60px] lg:w-[60px] md:h-[60px] lg:h-[60px] w-[90px] h-[90px]"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 10.8V8.4a6 6 0 0 1 12 0v2.4a2.4 2.4 0 0 1 2.4 2.4v6a2.4 2.4 0 0 1-2.4 2.4H6a2.4 2.4 0 0 1-2.4-2.4v-6A2.4 2.4 0 0 1 6 10.8Zm9.6-2.4v2.4H8.4V8.4a3.6 3.6 0 1 1 7.2 0Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="absolute md:block lg:block hidden top-0 left-0">
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 419 408"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_ii_49_10)">
                    <circle
                      cx="177"
                      cy="166"
                      r="242"
                      fill="url(#paint0_linear_49_10)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_ii_49_10"
                      x="-65"
                      y="-87.704"
                      width="484"
                      height="507.408"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-11.704" />
                      <feGaussianBlur stdDeviation="5.852" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0820334 0 0 0 0 0.0820334 0 0 0 0 0.0929557 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_49_10"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="11.704" />
                      <feGaussianBlur stdDeviation="5.852" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0396579 0 0 0 0 0.0396579 0 0 0 0 0.0449382 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_49_10"
                        result="effect2_innerShadow_49_10"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_49_10"
                      x1="177"
                      y1="-76"
                      x2="177"
                      y2="408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0B0B0D" />
                      <stop offset="1" stopColor="#141416" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center gap-4 relative">
                <p className="md:text-3xl lg:text-3xl md:leading-9 lg:leading-9 text-5xl leading-tight text-white font-medium">
                  <span className="text-btnbg underline">Secured</span>{" "}
                  Interactions
                </p>
                <span className="text-doubleAgrey md:text-lg lg:text-lg">
                  Adding security workflow to make every upload & download
                  request, with many more interactions very secure.
                </span>
              </div>
              <div className="absolute bottom-[-5rem] right-[-2rem]">
                <div className="w-96 h-96 rounded-full bg-gradient-to-l from-btnbg/20"></div>
              </div>
              <div className="mt-60"></div>
              <div className="flex items-center justify-center absolute bottom-0">
                <svg
                  width="222"
                  height="222"
                  viewBox="0 0 682 396"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M56.8333 341C56.8333 233.841 56.8332 180.247 90.1376 146.971C123.414 113.667 177.007 113.667 284.167 113.667H397.833C504.993 113.667 558.586 113.667 591.862 146.971C625.167 180.247 625.167 233.841 625.167 341C625.167 448.159 625.167 501.753 591.862 535.029C558.586 568.333 504.993 568.333 397.833 568.333H284.167C177.007 568.333 123.414 568.333 90.1376 535.029C56.8332 501.753 56.8333 448.159 56.8333 341Z"
                    fill="#7148FC"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M362.312 284.167C362.312 278.514 360.067 273.093 356.07 269.097C352.073 265.1 346.652 262.854 341 262.854C335.347 262.854 329.926 265.1 325.93 269.097C321.933 273.093 319.687 278.514 319.687 284.167V304.087L302.438 294.141C300.012 292.625 297.306 291.613 294.48 291.165C291.655 290.717 288.768 290.842 285.992 291.534C283.216 292.225 280.607 293.469 278.322 295.19C276.037 296.911 274.121 299.075 272.69 301.552C271.259 304.029 270.341 306.769 269.991 309.608C269.641 312.448 269.866 315.328 270.654 318.079C271.441 320.829 272.774 323.393 274.573 325.617C276.372 327.842 278.601 329.681 281.126 331.026L298.375 340.972L281.126 350.946C276.227 353.772 272.652 358.429 271.186 363.891C269.721 369.353 270.485 375.174 273.311 380.073C276.138 384.972 280.794 388.547 286.256 390.013C291.719 391.478 297.54 390.714 302.438 387.888L319.687 377.913V397.833C319.687 403.486 321.933 408.907 325.93 412.904C329.926 416.9 335.347 419.146 341 419.146C346.652 419.146 352.073 416.9 356.07 412.904C360.067 408.907 362.312 403.486 362.312 397.833V377.942L379.561 387.888C384.46 390.714 390.281 391.478 395.743 390.013C401.206 388.547 405.862 384.972 408.688 380.073C411.515 375.174 412.279 369.353 410.813 363.891C409.348 358.429 405.773 353.772 400.874 350.946L383.625 341L400.874 331.054C405.773 328.228 409.348 323.572 410.813 318.109C412.279 312.647 411.515 306.826 408.688 301.927C405.862 297.028 401.206 293.453 395.743 291.987C390.281 290.522 384.46 291.286 379.561 294.113L362.312 304.058V284.167ZM191.329 262.854C196.982 262.854 202.403 265.1 206.399 269.097C210.396 273.093 212.642 278.514 212.642 284.167V304.058L229.862 294.113C234.761 291.286 240.582 290.522 246.044 291.987C251.507 293.453 256.163 297.028 258.989 301.927C261.816 306.826 262.58 312.647 261.114 318.109C259.649 323.572 256.073 328.228 251.175 331.054L233.926 341L251.175 350.946C253.6 352.345 255.727 354.209 257.432 356.43C259.138 358.651 260.389 361.186 261.114 363.891C261.84 366.596 262.026 369.417 261.661 372.193C261.297 374.97 260.389 377.647 258.989 380.073C257.59 382.499 255.726 384.625 253.505 386.33C251.284 388.036 248.749 389.287 246.044 390.013C243.34 390.738 240.518 390.924 237.742 390.56C234.965 390.195 232.288 389.287 229.862 387.888L212.642 377.942V397.833C212.642 403.486 210.396 408.907 206.399 412.904C202.403 416.9 196.982 419.146 191.329 419.146C185.677 419.146 180.256 416.9 176.259 412.904C172.262 408.907 170.017 403.486 170.017 397.833V377.913L152.739 387.859C147.863 390.456 142.169 391.058 136.857 389.537C131.546 388.017 127.032 384.494 124.268 379.71C121.504 374.927 120.706 369.257 122.041 363.896C123.377 358.535 126.742 353.902 131.427 350.974L148.676 341L131.427 331.054C129.001 329.655 126.875 327.791 125.17 325.57C123.464 323.349 122.213 320.814 121.487 318.109C120.762 315.404 120.576 312.583 120.94 309.807C121.305 307.03 122.213 304.353 123.612 301.927C125.012 299.502 126.875 297.375 129.096 295.67C131.317 293.964 133.853 292.713 136.557 291.987C139.262 291.262 142.083 291.076 144.86 291.441C147.636 291.805 150.314 292.713 152.739 294.113L170.017 304.087V284.167C170.017 278.514 172.262 273.093 176.259 269.097C180.256 265.1 185.677 262.854 191.329 262.854ZM512.011 284.167C512.011 278.514 509.766 273.093 505.769 269.097C501.772 265.1 496.351 262.854 490.699 262.854C485.046 262.854 479.625 265.1 475.629 269.097C471.632 273.093 469.386 278.514 469.386 284.167V304.087L452.137 294.141C449.711 292.625 447.005 291.613 444.179 291.165C441.354 290.717 438.467 290.842 435.691 291.534C432.915 292.225 430.306 293.469 428.021 295.19C425.736 296.911 423.82 299.075 422.389 301.552C420.958 304.029 420.04 306.769 419.69 309.608C419.34 312.448 419.565 315.328 420.353 318.079C421.14 320.829 422.473 323.393 424.272 325.617C426.071 327.842 428.3 329.681 430.825 331.026L448.074 340.972L430.825 350.946C428.399 352.345 426.273 354.209 424.568 356.43C422.862 358.651 421.611 361.186 420.885 363.891C420.16 366.596 419.974 369.417 420.338 372.193C420.703 374.97 421.611 377.647 423.01 380.073C424.41 382.499 426.273 384.625 428.494 386.33C430.715 388.036 433.251 389.287 435.955 390.013C438.66 390.738 441.481 390.924 444.258 390.56C447.034 390.195 449.712 389.287 452.137 387.888L469.386 377.913V397.833C469.386 403.486 471.632 408.907 475.629 412.904C479.625 416.9 485.046 419.146 490.699 419.146C496.351 419.146 501.772 416.9 505.769 412.904C509.766 408.907 512.011 403.486 512.011 397.833V377.942L529.26 387.888C534.159 390.714 539.98 391.478 545.442 390.013C550.905 388.547 555.561 384.972 558.387 380.073C561.214 375.174 561.978 369.353 560.512 363.891C559.047 358.429 555.472 353.772 550.573 350.946L533.324 341L550.573 331.054C552.998 329.655 555.125 327.791 556.83 325.57C558.536 323.349 559.787 320.814 560.512 318.109C561.238 315.404 561.424 312.583 561.059 309.807C560.695 307.03 559.787 304.353 558.387 301.927C556.988 299.502 555.124 297.375 552.903 295.67C550.682 293.964 548.147 292.713 545.442 291.987C542.738 291.262 539.916 291.076 537.14 291.441C534.363 291.805 531.686 292.713 529.26 294.113L512.011 304.058V284.167Z"
                    fill="#7148FC"
                    fillOpacity="0.3"
                  />
                </svg>
              </div>
            </div>
            {/*  */}
            <div className="p-4 flex flex-col gap-4 relative overflow-hidden items-center w-full md:max-w-md lg:max-w-md bg-cardbg border border-greymid/40 hover:border-greymid/80 rounded-lg">
              <div className="">
                <svg
                  width="60"
                  height="60"
                  fill="#7148FC"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-[60px] lg:w-[60px] md:h-[60px] lg:h-[60px] w-[90px] h-[90px]"
                >
                  <path d="M2.4 13.2A1.2 1.2 0 0 1 3.6 12H6a1.2 1.2 0 0 1 1.2 1.2v6A1.2 1.2 0 0 1 6 20.4H3.6a1.2 1.2 0 0 1-1.2-1.2v-6Zm7.2-4.8a1.2 1.2 0 0 1 1.2-1.2h2.4a1.2 1.2 0 0 1 1.2 1.2v10.8a1.2 1.2 0 0 1-1.2 1.2h-2.4a1.2 1.2 0 0 1-1.2-1.2V8.4Zm7.2-3.6A1.2 1.2 0 0 1 18 3.6h2.4a1.2 1.2 0 0 1 1.2 1.2v14.4a1.2 1.2 0 0 1-1.2 1.2H18a1.2 1.2 0 0 1-1.2-1.2V4.8Z"></path>
                </svg>
              </div>
              <div className="absolute md:block lg:block hidden top-0 left-0">
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 419 408"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_ii_49_10)">
                    <circle
                      cx="177"
                      cy="166"
                      r="242"
                      fill="url(#paint0_linear_49_10)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_ii_49_10"
                      x="-65"
                      y="-87.704"
                      width="484"
                      height="507.408"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-11.704" />
                      <feGaussianBlur stdDeviation="5.852" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0820334 0 0 0 0 0.0820334 0 0 0 0 0.0929557 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_49_10"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="11.704" />
                      <feGaussianBlur stdDeviation="5.852" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0396579 0 0 0 0 0.0396579 0 0 0 0 0.0449382 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_49_10"
                        result="effect2_innerShadow_49_10"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_49_10"
                      x1="177"
                      y1="-76"
                      x2="177"
                      y2="408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0B0B0D" />
                      <stop offset="1" stopColor="#141416" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center gap-4 relative">
                <p className="md:text-3xl lg:text-3xl md:leading-9 lg:leading-9 text-5xl leading-tight text-white font-medium">
                  <span className="text-btnbg underline">Realtime</span>{" "}
                  Analytics
                </p>
                <span className="text-doubleAgrey md:text-lg lg:text-lg">
                  Providing you with storage sense analytics, to know what to
                  delete and what to keep.
                </span>
              </div>
              <div className="absolute bottom-[-5rem] right-[-2rem]">
                <div className="w-96 h-96 rounded-full bg-gradient-to-l from-btnbg/20"></div>
              </div>
              <div className="mt-60"></div>
              <div className="flex items-center justify-center absolute bottom-0">
                <svg
                  width="222"
                  height="222"
                  viewBox="0 0 682 463"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_49_95)">
                    <path
                      d="M644.111 549.389C644.111 559.438 640.119 569.075 633.014 576.18C625.908 583.286 616.271 587.278 606.222 587.278H75.7776C65.7288 587.278 56.0916 583.286 48.9861 576.18C41.8805 569.075 37.8887 559.438 37.8887 549.389V132.611C37.8887 122.562 41.8805 112.925 48.9861 105.82C56.0916 98.7141 65.7288 94.7222 75.7776 94.7222H415.982L333.896 234.816C318.172 257.663 333.308 288.808 361.157 290.816C362.483 290.93 363.752 290.968 365.059 290.93H520.063L423.976 417.914L296.101 227.333L175.804 403.138L127.875 360.702L102.679 388.929L182.814 459.971L295.723 294.776L422.082 483.083L567.556 290.93H644.111V549.389Z"
                      fill="url(#paint0_linear_49_95)"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M508.734 21.6725L400.372 208.465C397.851 212.165 396.404 216.491 396.191 220.964C395.977 225.436 397.007 229.88 399.165 233.804C401.323 237.727 404.525 240.976 408.416 243.192C412.307 245.407 416.736 246.501 421.211 246.354H638.125C642.6 246.501 647.029 245.407 650.92 243.192C654.811 240.976 658.013 237.727 660.171 233.804C662.329 229.88 663.358 225.436 663.145 220.964C662.932 216.491 661.485 212.165 658.964 208.465L550.601 21.6725C548.464 18.0172 545.408 14.9853 541.735 12.8782C538.062 10.7712 533.902 9.66254 529.668 9.66254C525.434 9.66254 521.273 10.7712 517.601 12.8782C513.928 14.9853 510.871 18.0172 508.734 21.6725Z"
                      fill="url(#paint1_linear_49_95)"
                      fillOpacity="0.3"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_49_95"
                      x1="341"
                      y1="94.7222"
                      x2="341"
                      y2="587.278"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7148FC" />
                      <stop
                        offset="1"
                        stopColor="#7148FC"
                        stopOpacity="0.44"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_49_95"
                      x1="529.668"
                      y1="9.66254"
                      x2="529.668"
                      y2="246.367"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7148FC" />
                      <stop
                        offset="1"
                        stopColor="#7148FC"
                        stopOpacity="0.44"
                      />
                    </linearGradient>
                    <clipPath id="clip0_49_95">
                      <rect width="682" height="682" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="md:p-10 lg:p-10 p-4">
          <div className="p-10 rounded-md flex items-center justify-between bg-gradient-to-tl from-princepurple/30 border border-doubleAgrey/10">
            <div className="flex flex-col gap-3">
              <h3 className="text-white md:text-6xl lg:text-6xl text-4xl font-medium">
                The change starts with you
              </h3>
              <Link
                href="/"
                className="flex items-center gap-1 hover:underline text-white"
              >
                Join Forget{" "}
                <svg
                  width="17"
                  height="17"
                  fill="#FFFFFF"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.752 6.352a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 0 1 0 1.696l-4.8 4.8a1.2 1.2 0 0 1-1.696-1.696l2.751-2.752H3.6a1.2 1.2 0 1 1 0-2.4h13.903l-2.751-2.752a1.2 1.2 0 0 1 0-1.696Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="md:block lg:block hidden">
              <svg
                width="300"
                height="300"
                viewBox="0 0 1051 1067"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <rect width="936" height="936" rx="30" fill="#ffff" />
                <rect
                  x="270"
                  y="287"
                  width="781"
                  height="780"
                  rx="30"
                  fill="#ffff"
                />
                <rect x="63" y="80" width="261" height="790" fill="#131026" />
                <rect x="740" y="340" width="260" height="681" fill="#131026" />
              </svg>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
