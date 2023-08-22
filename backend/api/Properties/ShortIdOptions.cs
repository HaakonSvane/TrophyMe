using Microsoft.AspNetCore.Routing.Constraints;
using shortid.Configuration;

namespace api.Properties;

public static class ShortIdOptions
{
    public const int IdLength = 8;
    
    public static readonly GenerationOptions Config = new GenerationOptions(
        useNumbers: false,
        useSpecialCharacters: false,
        length: IdLength);
}