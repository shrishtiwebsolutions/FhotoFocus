import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteData } from "@/config/siteData"
import ContactSection from "@/components/ContactSection"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Perfect Wedding Photography",
    excerpt:
      "Discover the essential techniques and tips that will help you capture stunning wedding moments that couples will treasure forever.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501499/_J7A3450_sfixoc.jpg",
    author: "FhotoFocus Team",
    date: "December 15, 2024",
    category: "Wedding Tips",
    slug: "10-tips-perfect-wedding-photography",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Art of Pre-Wedding Photography",
    excerpt:
      "Learn how to create magical pre-wedding sessions that tell your couple's unique love story through creative compositions and lighting.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501538/VS1_63_yftdsi.jpg",
    author: "FhotoFocus Team",
    date: "December 10, 2024",
    category: "Pre-Wedding",
    slug: "art-of-prewedding-photography",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Choosing the Perfect Wedding Venue",
    excerpt:
      "A comprehensive guide to selecting the ideal venue for your special day, considering lighting, space, and photographic opportunities.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501110/_A2A8144_dfhitk.jpg",
    author: "FhotoFocus Team",
    date: "December 5, 2024",
    category: "Wedding Planning",
    slug: "choosing-perfect-wedding-venue",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Fashion Photography Trends 2024",
    excerpt:
      "Explore the latest trends in fashion photography and how to incorporate contemporary styles into your portrait sessions.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501565/_A2A0821_lu9mj8.jpg",
    author: "FhotoFocus Team",
    date: "November 28, 2024",
    category: "Fashion",
    slug: "fashion-photography-trends-2024",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Capturing Emotions: The Heart of Photography",
    excerpt:
      "Understanding how to capture genuine emotions and candid moments that make photographs truly memorable and meaningful.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501572/_A2A9751_kwyltf.jpg",
    author: "FhotoFocus Team",
    date: "November 20, 2024",
    category: "Photography Tips",
    slug: "capturing-emotions-heart-of-photography",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Destination Wedding Photography Guide",
    excerpt:
      "Everything you need to know about planning and executing stunning destination wedding photography sessions around the world.",
    image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1750501497/_J7A3086_fktcdt.jpg",
    author: "FhotoFocus Team",
    date: "November 15, 2024",
    category: "Destination Weddings",
    slug: "destination-wedding-photography-guide",
    readTime: "9 min read",
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#eee1d0]">
      <div className="container mx-auto px-4 py-16">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-7xl font-light mb-6 text-gray-900">Our Stories</h1>
            <p className="font-serif text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Behind every photograph lies a story. Discover insights, inspiration, and the artistry that goes into
              capturing life's most precious moments.
            </p>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-full">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                    Featured Story
                  </span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].category}</span>
                </div>

                <h2 className="font-display text-3xl lg:text-4xl font-medium mb-4 text-gray-900 leading-tight">
                  {blogPosts[0].title}
                </h2>

                <p className="font-serif text-gray-700 mb-6 leading-relaxed text-lg">{blogPosts[0].excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>

                  <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full">
                    <Link href={`/blogs/${blogPosts[0].slug}`}>
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-cream-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>

                <h3 className="font-display text-xl font-medium text-gray-900 leading-tight group-hover:text-amber-700 transition-colors">
                  {post.title}
                </h3>

                <p className="font-serif text-gray-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-amber-700 hover:text-amber-800 hover:bg-amber-50 rounded-full px-4"
                  >
                    <Link href={`/blogs/${post.slug}`}>
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ContactSection data={siteData.contact} />
    </div>
  )
}
