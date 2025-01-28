const GradientBackground = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="relative overflow-hidden h-full">
        {/* Gradient Background */}
        <div className="gradient absolute inset-0 -z-10 dark:gradient-dark"></div>
  
        {/* Content */}
        <div className="relative">{children}</div>
      </div>
    );
  };
  
  export default GradientBackground;




  