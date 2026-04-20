import { Calendar, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: '10 Must-Try Street Foods in Bangkok',
    excerpt: 'Discover the most authentic and delicious street food experiences that locals love in Bangkok\'s vibrant markets.',
    author: 'Sarah Chen',
    date: 'April 15, 2024',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop',
    category: 'Food & Culture'
  },
  {
    id: 2,
    title: 'Best Time to Visit the Great Wall',
    excerpt: 'Learn about seasonal weather patterns and crowd levels to plan your perfect Great Wall adventure.',
    author: 'Michael Liu',
    date: 'April 10, 2024',
    image: 'https://images.unsplash.com/photo-1668333140118-84e827fe42ca?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRoZSUyMGdyZWF0JTIwd2FsbCUyMG9mJTIwY2hpbmF8ZW58MHx8MHx8fDA%3D',
    category: 'Travel Tips'
  },
  {
    id: 3,
    title: 'Sustainable Tourism in Southeast Asia',
    excerpt: 'How to travel responsibly and make a positive impact on the communities and environments you visit.',
    author: 'Emma Rodriguez',
    date: 'April 5, 2024',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    category: 'Sustainability'
  }
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Travel Stories & Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights from our experts to help you make the most of your Asian adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <button className="inline-block text-primary font-medium hover:text-primary/80 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}
