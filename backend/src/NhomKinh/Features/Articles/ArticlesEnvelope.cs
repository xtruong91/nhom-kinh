using NhomKinh.Domain;
using System.Collections.Generic;

namespace NhomKinh.Features.Articles
{
    public class ArticlesEnvelope
    {
        public List<Article> Articles { get; set; }

        public int ArticlesCount { get; set; }
    }
}