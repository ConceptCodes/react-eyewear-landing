import Head from "next/head";
import { GlobeIcon, ChevronRightIcon } from "@heroicons/react/solid";
const navItems = ["technology", "demo", "about us", "contact"];
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Optical Eyewear</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="pt-5 px-10 bg-gray-300">
          <header className="flex justify-between">
            <div className="flex items-center space-x-5">
              <GlobeIcon className="h-5 text-black" />
              <h1 className="capitalize font-bold">optical eyewear</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ul className="hidden md:inline-flex space-x-5">
                {navItems.map((x, index) => (
                  <li key={index} className="font-medium capitalize">
                    {x}
                  </li>
                ))}
              </ul>
              <button className="hidden xl:inline-flex capitalize border-2 border-black rounded-full px-5 py-2">
                get started
              </button>
            </div>
          </header>
          <section className="flex justify-between pt-20">
            <div className="space-y-10 pb-10">
              <h1 className="text-6xl xl:text-8xl">
                A personalized <br />eyewear shopping <br />experience
              </h1>
              <p className="text-gray-600 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex items-center space-x-5">
                <button className="capitalize bg-black text-white rounded-full px-5 py-2">
                  get started
                </button>
                <div className="hidden md:inline-flex items-center">
                  <p className="text-xl">See product demo</p>
                  <ChevronRightIcon className="text-black h-8" />
                </div>
              </div>
            </div>
            <div className="hidden bottom-0 xl:inline-flex">
              <Image
                src="/banner-bg.png"
                width={400}
                height={300}
              />
            </div>
          </section>
        </div>
          <section className="py-20 px-10 flex justify-around">
              <h1 className="text-4xl">no more wall <br/> of glasses.</h1>
              <div className="flex flex-col space-y-5">
              <p className="text-gray-600  max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex items-center">
                  <p className="text-lg font-medium">Take our quiz to find your frames</p>
                  <ChevronRightIcon className="text-black h-5" />
                </div>
              </div>
          </section>
      </main>

      <footer className=""></footer>
    </div>
  );
}
