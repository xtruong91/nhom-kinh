using System.Collections.Generic;
using NhomKinh.Domain;

namespace NhomKinh.Features.Comments
{
    public class CommentsEnvelope
    {
        public CommentsEnvelope(List<Comment> comments)
        {
            Comments = comments;
        }

        public List<Comment> Comments { get; }
    }
}