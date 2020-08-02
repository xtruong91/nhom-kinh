using System.Net;
using System.Threading;
using System.Threading.Tasks;
using NhomKinh.Infrastructure;
using NhomKinh.Infrastructure.Errors;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace NhomKinh.Features.Articles
{
    public class Details
    {
        public class Query : IRequest<ArticleEnvelope>
        {
            public Query(string slug)
            {
                Slug = slug;
            }

            public string Slug { get; set; }
        }

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Slug).NotNull().NotEmpty();
            }
        }

        public class QueryHandler : IRequestHandler<Query, ArticleEnvelope>
        {
            private readonly NhomKinhContext _context;

            public QueryHandler(NhomKinhContext context)
            {
                _context = context;
            }

            public async Task<ArticleEnvelope> Handle(Query message, CancellationToken cancellationToken)
            {
                var article = await _context.Articles.GetAllData()
                    .FirstOrDefaultAsync(x => x.Slug == message.Slug, cancellationToken);

                if (article == null)
                {
                    throw new RestException(HttpStatusCode.NotFound, new { Article = Constants.NOT_FOUND });
                }
                return new ArticleEnvelope(article);
            }
        }
    }
}