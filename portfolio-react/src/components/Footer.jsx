export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-forest-50/10 bg-forest-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 text-center">
        <p className="text-forest-300 text-sm">
          &copy; {currentYear}. Made by Zioney Jayce A. Bajalan. Crafted with 
          <i className="fas fa-heart text-forest-400 mx-1"></i>
        </p>
      </div>
    </footer>
  );
};
