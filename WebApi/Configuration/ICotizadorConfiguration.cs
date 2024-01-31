namespace Configuration;

public interface ICotizadorConfiguration
{
      public string BaseUrl { get; set; }
      public string LoginEndpoint { get; set; }
      public string CotizadorEndpoint { get; set; }
      public string User { get; set; }
      public string Password { get; set; }
}
