
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Filter,
  BookOpen,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { Page } from '../types';
import { 
  BLOG_POSTS, 
  BLOG_CATEGORIES, 
  BlogCategory, 
  getFeaturedPosts,
  getRecentPosts
} from '../data/blogData';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');

  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(5);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-blue-200 px-5 py-2 rounded-full mb-6 border border-white/20">
              <BookOpen className="w-4 h-4" />
              <span className="font-semibold text-sm">Blog & Actualités</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Insights & Expertises<br/>
              <span className="text-blue-300">pour votre entreprise</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Actualités technologiques, guides pratiques et conseils d'experts pour accompagner votre transformation digitale.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 bg-slate-50 border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center space-x-2 text-slate-500 mr-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filtrer :</span>
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Tous
            </button>
            {Object.entries(BLOG_CATEGORIES).map(([key, { label }]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as BlogCategory)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && searchQuery === '' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Articles à la Une</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, idx) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className={`group relative overflow-hidden rounded-3xl ${
                    idx === 0 ? 'lg:row-span-2' : ''
                  }`}
                >
                  <div className={`relative ${idx === 0 ? 'h-full min-h-[500px]' : 'h-64'}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${BLOG_CATEGORIES[post.category].color}`}>
                        {BLOG_CATEGORIES[post.category].label}
                      </span>
                      <h3 className={`font-bold text-white mb-3 group-hover:text-blue-300 transition-colors ${
                        idx === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                      }`}>
                        {post.title}
                      </h3>
                      <p className="text-slate-300 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} min</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Articles List */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  {selectedCategory === 'all' ? 'Tous les articles' : BLOG_CATEGORIES[selectedCategory].label}
                </h2>
                <span className="text-sm text-slate-500">{filteredPosts.length} article(s)</span>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Aucun article trouvé</h3>
                  <p className="text-slate-500">Essayez avec d'autres mots-clés ou catégories.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all"
                    >
                      <div className="md:w-72 h-48 md:h-auto shrink-0 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${BLOG_CATEGORIES[post.category].color}`}>
                            {BLOG_CATEGORIES[post.category].label}
                          </span>
                          <span className="text-slate-400 text-sm flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime} min</span>
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
                              {post.author.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-900">{post.author}</p>
                              <p className="text-xs text-slate-500">{formatDate(post.publishedAt)}</p>
                            </div>
                          </div>
                          <span className="text-blue-600 font-semibold text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                            <span>Lire</span>
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Articles Récents</h3>
                </div>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="group flex space-x-4"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">{formatDate(post.publishedAt)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Catégories</h3>
                <div className="space-y-3">
                  {Object.entries(BLOG_CATEGORIES).map(([key, { label, color }]) => {
                    const count = BLOG_POSTS.filter(p => p.category === key).length;
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedCategory(key as BlogCategory)}
                        className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${color}`}>
                          {label}
                        </span>
                        <span className="text-sm text-slate-500">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Besoin d'aide ?</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Nos experts sont disponibles pour vous accompagner dans votre transformation digitale.
                </p>
                <Link
                  to={Page.Contact}
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-5 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all"
                >
                  <span>Contactez-nous</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Newsletter */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Newsletter</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Recevez nos derniers articles et actualités directement dans votre boîte mail.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-500 transition-colors"
                  >
                    S'abonner
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
