export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-lg text-foreground">Turavia Travels</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#tours" className="text-sm text-foreground hover:text-primary transition-colors">Tours</a>
            <a href="#regions" className="text-sm text-foreground hover:text-primary transition-colors">Destinations</a>
            <a href="#why" className="text-sm text-foreground hover:text-primary transition-colors">Why Us</a>
            <a href="#blog" className="text-sm text-foreground hover:text-primary transition-colors">Blog</a>
          </nav>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </header>
  )
}
