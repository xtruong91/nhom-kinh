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
    public class Delete
    {
        public class Command : IRequest
        {
            public Command(string slug)
            {
                Slug = slug;
            }

            public string Slug { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Slug).NotNull().NotEmpty();
            }
        }

        public class QueryHandler : IRequestHandler<Command>
        {
            private readonly NhomKinhContext _context;

            public QueryHandler(NhomKinhContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command message, CancellationToken cancellationToken)
            {
                var article = await _context.Articles
                    .FirstOrDefaultAsync(x => x.Slug == message.Slug, cancellationToken);

                if (article == null)
                {
                    throw new RestException(HttpStatusCode.NotFound, new { Article = Constants.NOT_FOUND });
                }

                _context.Articles.Remove(article);
                await _context.SaveChangesAsync(cancellationToken);
                return Unit.Value;
            }
        }
    }
}