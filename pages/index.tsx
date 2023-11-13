import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Twitter, Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
        <meta property="og:url" content="https://stashblobweb.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="StashBlob" />
        <meta
          property="og:description"
          content="Easy way to share files with anyone without any hicups. Just upload and share."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1697331302/Site_Rollup_pmxaos.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="stashblobweb.vercel.app" />
        <meta
          property="twitter:url"
          content="https://stashblobweb.vercel.app"
        />
        <meta name="twitter:title" content="StashBlob" />
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
        <header className="fixed top-0 w-full md:p-8 lg:p-8 md:px-24 lg:px-24 p-4 flex items-stretch justify-between z-10 bg-bgon">
          <div className="flex items-stretch gap-8">
            <Link href="/">
              <Image
                src="/assets/TransparentBlob Color.png"
                width={200}
                height={200}
                alt="App"
              />
            </Link>
            <nav className="hidden items-center gap-3 md:flex lg:flex">
              <Link
                href=""
                className="text-blackmid hover:text-darkbluebg font-normal text-lg"
              >
                Overview
              </Link>
              <Link
                href="#features"
                className="text-blackmid hover:text-darkbluebg font-normal text-lg"
              >
                Features
              </Link>

              <Link
                href="#pricing"
                className="text-blackmid hover:text-darkbluebg font-normal text-lg"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="hidden md:block lg:block">
            <Link href="https://stashblob.vercel.app/" target="_blank">
              <Button className="bg-btnbg text-white hover:bg-blueroyal text-lg font-normal p-6">
                Start Sharing
              </Button>
            </Link>
          </div>
          <div className="block md:hidden lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="w-12 h-12" />
              </SheetTrigger>
              <SheetContent side={"left"} className="bg-white border-none">
                <SheetHeader>
                  <SheetTitle>StashBlob</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-8 mt-10">
                  <Link href="/" className="text-xl font-medium">
                    Overview
                  </Link>
                  <Link href="#features" className="text-xl font-medium">
                    Features
                  </Link>
                  <Link href="#pricing" className="text-xl font-medium">
                    Pricing
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <div className="md:p-8 lg:p-8 p-4 flex flex-col gap-40 md:px-24 lg:px-24 mt-44">
          <section
            className="flex flex-col items-center justify-center text-center gap-10"
            id="overview"
          >
            <hgroup className="flex flex-col gap-3">
              <h1 className="font-Gabarito md:text-8xl lg:text-8xl text-6xl font-medium text-hgin">
                Smart way to share files
              </h1>
              <p className="text-nuic md:text-2xl lg:text-2xl text-base">
                Easy way to share files with anyone without any hicups. Just
                upload and share.
              </p>
            </hgroup>
            <div className="">
              <Link href="https://stashblob.vercel.app/" target="_blank">
                <Button className="bg-btnbg text-white text-lg font-normal p-6 hover:bg-blueroyal">
                  Start Sharing
                </Button>
              </Link>
            </div>
            <div className="">
              <video
                src="https://qhgpubnqzskccobolzai.supabase.co/storage/v1/object/public/meta/lv_0_20231022233854.mp4"
                autoPlay
                muted
                loop
                className="x w-full max-w-7xl rounded-2xl shadow-md border border-googlebtn/20"
                controls={false}
              ></video>
            </div>
          </section>
          <section id="features">
            <div className="flex md:flex-row lg:flex-row flex-col items-center justify-between md:gap-10 lg:gap-10 gap-8">
              <div className="">
                <Image
                  src="/assets/app warn.png"
                  width={500}
                  height={500}
                  alt="App"
                />
              </div>
              <hgroup className="flex flex-col gap-3">
                <h3 className="text-cardbg md:text-5xl lg:text-5xl text-3xl">
                  Built-in protection against malware
                </h3>
                <span className="md:text-lg lg:text-lg text-base text-greymid">
                  StashBlob scans for all your files to find any suspecious
                  content laying around. <br /> File that contains malware would
                  be automatically deleted from your Drive.
                </span>
              </hgroup>
            </div>
          </section>
          <section id="features">
            <div className="flex md:flex-row-reverse lg:flex-row-reverse flex-col items-center justify-between md:gap-10 lg:gap-10 gap-8">
              <div className="">
                <Image
                  src="/assets/app upload.png"
                  width={500}
                  height={500}
                  alt="App"
                />
              </div>
              <hgroup className="flex flex-col gap-3">
                <h3 className="text-cardbg md:text-5xl lg:text-5xl text-3xl">
                  Fast Upload Stream for all users
                </h3>
                <span className="md:text-lg lg:text-lg text-base text-greymid">
                  Uploads are fast with StashBlob, with StashBlob we provide 3x
                  the upload speed power. <br /> Your files can now be delivered
                  on time.
                </span>
              </hgroup>
            </div>
          </section>
          <section id="features">
            <div className="flex md:flex-row lg:flex-row flex-col items-center justify-between md:gap-10 lg:gap-10 gap-8">
              <div className="">
                <Image
                  src="/assets/app search.png"
                  width={500}
                  height={500}
                  alt="App"
                />
              </div>
              <hgroup className="flex flex-col gap-3">
                <h3 className="text-cardbg md:text-5xl lg:text-5xl text-3xl">
                  Fast Search for all File large and small
                </h3>
                <span className="md:text-lg lg:text-lg text-base text-greymid">
                  Our new search engine simplifies file searches and will soon
                  include an AI query builder, <br /> making searches 2x faster.
                </span>
              </hgroup>
            </div>
          </section>
          <section id="features">
            <div className="flex md:flex-row-reverse lg:flex-row-reverse flex-col items-center justify-between md:gap-10 lg:gap-10 gap-8">
              <div className="">
                <Image
                  src="/assets/app share.png"
                  width={500}
                  height={500}
                  alt="App"
                />
              </div>
              <hgroup className="flex flex-col gap-3">
                <h3 className="text-cardbg md:text-5xl lg:text-5xl text-3xl">
                  Sharing Integration for our loved ones
                </h3>
                <span className="md:text-lg lg:text-lg text-base text-greymid">
                  Sharing files with your loved ones while maintaining the
                  quality of the content is <br /> now an easy task.
                </span>
              </hgroup>
            </div>
          </section>
          <section className="" id="pricing">
            <hgroup className="flex items-center justify-center">
              <h2 className="md:text-6xl lg:text-6xl text-4xl md:text-left lg:text-left text-center font-medium">
                Find the plan that’s right for you
              </h2>
            </hgroup>
            <section className="flex md:flex-row lg:flex-row flex-col gap-4 items-stretch mt-8">
              <div className="flex flex-col gap-6 w-full bg-white rounded-lg shadow-lg border border-darkbluebg/50 p-8">
                <hgroup>
                  <h3 className="x font-medium text-lg">PRO</h3>
                  <span className="text-lg">For Personal use</span>
                </hgroup>
                <hgroup>
                  <h2 className="text-5xl font-medium">
                    $25 <span className="text-base">/month</span>
                  </h2>
                </hgroup>
                <hgroup>
                  <span>Get started with:</span>
                </hgroup>
                <hgroup className="mt-10 flex flex-col gap-5">
                  <p className="text-lg flex items-center gap-2">
                    <Check className="text-googlebtn" /> 20GB Cloud Storage
                  </p>
                  <p className="text-lg flex items-center gap-2">
                    <Check className="text-googlebtn" /> Image Optimization
                  </p>
                  <p className="text-lg flex items-center gap-2">
                    <Check className="text-googlebtn" /> Send up to 50 emails
                  </p>
                  <p className="text-lg flex items-center gap-2">
                    <Check className="text-googlebtn" /> Community support
                  </p>
                </hgroup>
                <div className="flex items-center justify-center m-auto">
                  <Link href="https://timilab.lemonsqueezy.com/checkout/buy/47120f93-803e-435d-89bd-441482dca0e8">
                    <Button className="p-6 bg-googlebtn hover:bg-blueroyal text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col h-full gap-6 w-full bg-white rounded-lg shadow-lg border border-darkbluebg/50 p-8">
                <hgroup>
                  <h3 className="x font-medium text-lg">Team</h3>
                  <span className="text-lg">For Business use</span>
                </hgroup>
                <hgroup>
                  <h2 className="text-5xl font-medium">
                    $499 <span className="text-base">/month</span>
                  </h2>
                </hgroup>
                <hgroup>
                  <span>Everything in the Pro plan, plus:</span>
                </hgroup>
                <hgroup className="mt-10 flex flex-col gap-5">
                  <p className="text-lg flex items-center gap-2">
                    <Check className="text-googlebtn" /> 100GB Cloud Storage
                  </p>
                  <p className="text-lg flex items-center gap-2">
                    <Check className="text-googlebtn" /> Send up to 1000 emails
                  </p>
                  <p className="text-lg flex items-center gap-2">
                    <Check className="text-googlebtn" /> Backup Drive
                  </p>
                  <p className="text-lg flex items-center gap-2">
                    <Check className="text-googlebtn" /> AI query builder
                  </p>
                </hgroup>
                <div className="flex items-center justify-center">
                  <Link href="https://timilab.lemonsqueezy.com/checkout/buy/47120f93-803e-435d-89bd-441482dca0e8">
                    <Button className="p-6 bg-googlebtn hover:bg-blueroyal text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </section>
          <section className="flex flex-col gap-8 items-center justify-center">
            <hgroup>
              <h3 className="md:text-4xl lg:text-4xl text-2xl md:text-left lg:text-left text-center">
                Share files at 2x the speed now
              </h3>
            </hgroup>
            <div>
              <Link href="https://stashblob.vercel.app/" target="_blank">
                <Button className="p-6 bg-googlebtn hover:bg-blueroyal text-white text-lg font-normal">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </section>
        </div>
        <footer className="bg-white p-10 shadow-lg border border-transparent border-t-darkbluebg/25">
          <div className="flex gap-4">
            <hgroup>
              <p className="text-lg font-medium text-blackmid">Follow me on:</p>
            </hgroup>
            <div>
              <Link href="https://x.com/timi_networks" target="_blank">
                <Twitter className="text-boxicard" />
              </Link>
            </div>
          </div>
          <div className="flex md:items-end lg:items-end md:justify-end lg:justify-end md:mt-0 lg:mt-0 mt-4">
            <span className="text-greymid">
              Copyright &copy; 2023 StashBlob
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
