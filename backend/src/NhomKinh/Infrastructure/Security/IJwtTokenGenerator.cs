using System.Threading.Tasks;

namespace NhomKinh.Infrastructure.Security
{
    public interface IJwtTokenGenerator
    {
        Task<string> CreateToken(string username);
    }
}