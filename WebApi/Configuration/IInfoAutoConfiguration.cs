namespace Configuration;

public interface IInfoAutoConfiguration
{
      public string BaseUrl { get; set; }
      public string PubEndpoint { get; set; }
      public string AuthEndpoint { get; set; }
      public string User { get; set; }
      public string Password { get; set; }
}
