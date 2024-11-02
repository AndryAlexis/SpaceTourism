const Template = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-desktop-image bg-cover">
    {children}
  </div>
}

export default Template;