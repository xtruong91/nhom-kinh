using System.Linq;
using Microsoft.EntityFrameworkCore;
using NhomKinh.Domain;

namespace NhomKinh.Features.Articles
{
    public static class ArticleExtensions
    {
        public static IQueryable<Article> GetAllData(this DbSet<Article> articles)
        {
            return articles
                .Include(x => x.Author)
                .Include(x => x.ArticleFavorites)
                .Include(x => x.ArticleTags)
                .AsNoTracking();
        }
    }
}