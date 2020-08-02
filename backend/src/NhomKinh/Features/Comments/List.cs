using System.Net;
using System.Threading;
using System.Threading.Tasks;
using NhomKinh.Infrastructure;
using NhomKinh.Infrastructure.Errors;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace NhomKinh.Features.Comments
{
    public class List
    {
        public class Query : IRequest<CommentsEnvelope>
        {
            public Query(string slug)
            {
                Slug = slug;
            }

            public string Slug { get; }
        }

        public class QueryHandler : IRequestHandler<Query, CommentsEnvelope>
        {
            private readonly NhomKinhContext _context;

            public QueryHandler(NhomKinhContext context)
            {
                _context = context;
            }

            public async Task<CommentsEnvelope> Handle(Query message, CancellationToken cancellationToken)
            {
                var article = await _context.Articles
                    .Include(x => x.Comments)
                        .ThenInclude(x => x.Author)
                    .FirstOrDefaultAsync(x => x.Slug == message.Slug, cancellationToken);

                if (article == null)
                {
                    throw new RestException(HttpStatusCode.NotFound, new { Article = Constants.NOT_FOUND });
                }

                return new CommentsEnvelope(article.Comments);
            }
        }
    }
}