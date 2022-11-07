import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Hero Overlay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-10 text-center border-red-700 border-4">
        <div className="hero-container flex flex-1 w-full border-violet-700 border-4 relative">
          <div className="foreground-overlay-text flex flex-col flex-wrap items-center sm:w-full border-blue-700 border-4 z-10 w-full h-full absolute top-0 left-0 border-slate-700 border-4 pt-64">
            <h1 className="heading-1">Clothing for the every woman</h1>{' '}
            <h2 className="heading-2">Find help for</h2>
            <div className="pills-container flex gap-2 flex-wrap">
              <button flex-1 border-violet-700 border-2>
                Business
              </button>
              <button flex-1 border-violet-700 border-2>
                Formal
              </button>
              <button flex-1 border-violet-700 border-2>
                Casual
              </button>
              <button flex-1 border-violet-700 border-2>
                Activewear
              </button>
              <button flex-1 border-violet-700 border-2>
                Underwear
              </button>
            </div>
          </div>
          <div className="two-column-background-hero-images grid gap-80 grid-cols-2 grid-rows-1 z-0 w-full h-full absolute top-0 left-0 flex-1">
            <div className="mt-1 flex max-w-xl flex-wrap items-end sm:w-full border-green-700 border-4">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </div>
            <div className="mt-1 flex max-w-xl flex-wrap items-end justify-end sm:w-full border-orange-700 border-4">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
};

export default Home;
