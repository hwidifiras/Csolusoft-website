
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Bookmark,
  User,
  Tag,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Link2
} from 'lucide-react';
import { Page } from '../types';
import { 
  getPostBySlug, 
  getRelatedPosts, 
  BLOG_CATEGORIES,
  BlogPost as BlogPostType
} from '../data/blogData';

// Logo component for blog post header
const BlogLogo: React.FC = () => (
  <img 
    src="/img/solusoft-logo-hero-dark.svg" 
    alt="CSoluSoft" 
    className="h-10 w-auto opacity-80"
  />
);

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = post ? getRelatedPosts(post, 3) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Article non trouvé</h1>
          <p className="text-slate-600 mb-8">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 bg-accent-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-accent-600 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(post.title);

  const renderContent = (content: string) => {
    // Simple markdown-like rendering
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let inList = false;
    let listItems: string[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 my-4 text-slate-600">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-100">
                  {tableRows[0].map((cell, i) => (
                    <th key={i} className="px-4 py-3 text-left text-sm font-bold text-slate-900 border-b border-slate-200">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(2).map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-slate-100 last:border-0">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-4 py-3 text-sm text-slate-600">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
      inTable = false;
    };

    lines.forEach((line, idx) => {
      const trimmedLine = line.trim();

      // Table detection
      if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
        if (!inTable) {
          flushList();
          inTable = true;
        }
        const cells = trimmedLine.split('|').filter(c => c.trim() !== '').map(c => c.trim());
        if (!trimmedLine.includes('---')) {
          tableRows.push(cells);
        }
        return;
      } else if (inTable) {
        flushTable();
      }

      // Headers
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={idx} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
        return;
      }

      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={idx} className="text-xl font-bold text-slate-900 mt-8 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
        return;
      }

      if (trimmedLine.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4 key={idx} className="text-lg font-bold text-slate-900 mt-6 mb-2">
            {trimmedLine.replace('#### ', '')}
          </h4>
        );
        return;
      }

      // Blockquote
      if (trimmedLine.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote key={idx} className="border-l-4 border-primary-400 bg-primary-50 px-6 py-4 my-6 rounded-r-xl">
            <p className="text-primary-800 font-medium italic">
              {trimmedLine.replace('> ', '').replace(/\*\*/g, '')}
            </p>
          </blockquote>
        );
        return;
      }

      // List items
      if (trimmedLine.startsWith('- ') || trimmedLine.match(/^\d+\. /)) {
        inList = true;
        const itemText = trimmedLine.replace(/^- /, '').replace(/^\d+\. /, '');
        listItems.push(itemText.replace(/\*\*/g, ''));
        return;
      }

      // Regular paragraph
      if (trimmedLine !== '') {
        flushList();
        // Handle bold text
        const processedText = trimmedLine.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        elements.push(
          <p key={idx} className="text-slate-600 leading-relaxed my-4">
            {processedText}
          </p>
        );
      }
    });

    flushList();
    flushTable();

    return elements;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero / Header */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-dark-900 via-primary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Logo */}
          <div className="mb-6">
            <BlogLogo />
          </div>
          
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-primary-100 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white truncate max-w-xs">{post.title}</span>
          </nav>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${BLOG_CATEGORIES[post.category].color}`}>
              {BLOG_CATEGORIES[post.category].label}
            </span>
            <span className="flex items-center space-x-2 text-primary-100 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </span>
            <span className="flex items-center space-x-2 text-primary-100 text-sm">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min de lecture</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-white font-semibold">{post.author}</p>
              <p className="text-primary-100 text-sm">{post.authorRole}</p>
            </div>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-[150px] opacity-20 translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar - Share */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32 flex lg:flex-col items-center gap-4">
                <span className="text-xs text-slate-400 font-medium hidden lg:block">Partager</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary-500 hover:text-white transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary-600 hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(shareUrl)}
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-dark-900 hover:text-white transition-all"
                  title="Copier le lien"
                >
                  <Link2 className="w-4 h-4" />
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-11 order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">Tags :</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Besoin d'accompagnement ?</h3>
                <p className="text-primary-50 mb-6">
                  Nos experts sont disponibles pour vous aider à mettre en œuvre les solutions adaptées à votre entreprise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={Page.Contact}
                    className="inline-flex items-center justify-center space-x-2 bg-white text-primary-500 px-6 py-3 rounded-xl font-bold hover:bg-primary-50 transition-all"
                  >
                    <span>Contactez-nous</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to={Page.Billing}
                    className="inline-flex items-center justify-center space-x-2 bg-primary-400 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-300 transition-all"
                  >
                    <span>Voir nos solutions</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-primary-100 transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${BLOG_CATEGORIES[relatedPost.category].color}`}>
                      {BLOG_CATEGORIES[relatedPost.category].label}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au blog</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
