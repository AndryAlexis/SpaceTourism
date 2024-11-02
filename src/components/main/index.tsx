interface MainProps {
  children: React.ReactNode;
}

const Main = ({children}: MainProps): JSX.Element => <>
  <main className="h-full relative z-10 flex gap-36 justify-between items-center px-36 max-w-screen-2xl mx-auto">
    {children}
  </main>
</>

export default Main;