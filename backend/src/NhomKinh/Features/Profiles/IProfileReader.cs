using System.Threading.Tasks;

namespace NhomKinh.Features.Profiles
{
    public interface IProfileReader
    {
        Task<ProfileEnvelope> ReadProfile(string username);
    }
}