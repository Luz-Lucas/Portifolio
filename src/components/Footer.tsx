const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Junior Developer. Built with React & TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
