'use client';

import Header from "@/components/header";
import Main from "@/components/main";
/**
 * Home page component that displays the main landing page content
 * Features a header and two main sections:
 * - Left section with welcome text and description
 * - Right section with explore button
 */
const Page = (): JSX.Element => {

  const buttonContainer = {
    base: `flex items-center justify-center h-64 w-64 rounded-full bg-slate-300 relative cursor-pointer`,
    hover: `hover:after:bg-[rgba(255,255,255,0.3)] hover:after:pointer-events-auto`,
    after: `after:content-[''] after:absolute after:top-[50%] after:left-[50%] after:w-[150%] after:h-[150%] after:rounded-full after:z-10 after:transition-all after:duration-300 after:ease-in-out after:-translate-x-2/4 after:-translate-y-2/4 after:bg-transparent after:pointer-events-none`
  }

  return (
    <div className="h-screen max-h-screen flex flex-col">
      <Header />

      <Main>
        {/* Left content section with welcome message */}
        <section className="flex flex-col gap-6">
          <h2 className="order-1 text-xl uppercase tracking-wider">
            So, you want to travel to
          </h2>
          
          <h1 className="order-2 text-9xl uppercase ">
            Space
          </h1>
          
          <p className="order-3 max-w-prose leading-relaxed">
            Let's face it; if you want to go to space, you might as well genuinely 
            go to outer space and not hover kind of on the edge of it. Well sit back, 
            and relax because we'll give you a truly out of this world experience!
          </p>
        </section>

        {/* Right section with explore button */}
        <div className={`${buttonContainer.base} ${buttonContainer.hover} ${buttonContainer.after}`}>
          <button className="text-black text-2xl uppercase">
            Explore
          </button>
        </div>
      </Main>
    </div>
  );
};

export default Page;