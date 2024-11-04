import Main from "@/components/main";

/**
 * Home page component that displays the main landing page content
 * Features:
 * - Header with navigation
 * - Interactive explore button with hover effect
 * - Responsive full-screen layout
 * - Two-column main content
 */
const Page = (): JSX.Element => {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Main className="h-[inherit]">
        {/* Welcome content section */}
        <section className="flex flex-col gap-6 mobile:px-4">
          <h2 className="order-1 text-xl tracking-wider uppercase mobile:text-lg">
            So, you want to travel to
          </h2>
          
          <h1 className="order-2 text-9xl uppercase mobile:text-8xl">
            Space
          </h1>
          
          <p className="order-3 leading-loose max-w-prose mobile:text-sm">
            Let's face it; if you want to go to space, you might as well genuinely 
            go to outer space and not hover kind of on the edge of it. Well sit back, 
            and relax because we'll give you a truly out of this world experience!
          </p>
        </section>

        {/* Explore button */}
        <div className={`
          relative flex items-center justify-center
          h-60 w-60 min-h-60 min-w-60 
          rounded-full bg-slate-300 
          cursor-pointer
          after:content-['']
          after:absolute after:top-1/2 after:left-1/2
          after:-translate-x-1/2 after:-translate-y-1/2
          after:w-[150%] after:h-[150%]
          after:rounded-full after:z-10
          after:bg-transparent after:pointer-events-none
          after:transition-all after:duration-300 after:ease-in-out
          hover:after:bg-[rgba(255,255,255,0.3)]
          hover:after:pointer-events-auto

          mobile:h-40 mobile:w-40 mobile:min-h-40 mobile:min-w-40
        `}>
          <button className="text-2xl text-black uppercase">
            Explore
          </button>
        </div>
      </Main>
    </div>
  );
};

export default Page;