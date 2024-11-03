import Main from "@/components/main";

/**
 * Home page component that displays the main landing page content
 * Features:
 * - Responsive full-screen layout
 * - Header with navigation
 * - Two-column main content
 * - Interactive explore button with hover effect
 */
const Page = (): JSX.Element => {
  return (
    // Main container with full viewport height
    <div className="h-dvh flex justify-center items-center">
      {/* Main content wrapper with two columns */}
      <Main className="h-[inherit]">
        {/* Left content section with welcome message */}
        <section className="flex flex-col gap-6">
          {/* Subheading with custom tracking */}
          <h2 className="order-1 text-xl uppercase tracking-wider">
            So, you want to travel to
          </h2>
          
          {/* Main heading with large text */}
          <h1 className="order-2 text-9xl uppercase">
            Space
          </h1>
          
          {/* Description paragraph with controlled width and line height */}
          <p className="order-3 max-w-prose leading-relaxed">
            Let's face it; if you want to go to space, you might as well genuinely 
            go to outer space and not hover kind of on the edge of it. Well sit back, 
            and relax because we'll give you a truly out of this world experience!
          </p>
        </section>

        {/* Right section with interactive explore button */}
        <div className="buttonContainer">
          <button className="text-black text-2xl uppercase">
            Explore
          </button>
        </div>
      </Main>
    </div>
  );
};

export default Page;