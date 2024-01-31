namespace Configuration.Implementation;

public class CotizadorConfiguration : ICotizadorConfiguration
{
    public string BaseUrl { get; set; }
    public string LoginEndpoint { get; set; }
    public string CotizadorEndpoint { get; set; }
    public string User { get; set; }
    public string Password { get; set; }

    public CotizadorConfiguration(IConfiguration configuration)
    {
        Bind(configuration);
    }

    public CotizadorConfiguration Bind(IConfiguration configuration)
    {
        IConfigurationSection infoAutoConfig = configuration.GetSection(nameof(CotizadorConfiguration));

        if (infoAutoConfig.Exists())
            infoAutoConfig.Bind(this);
        else
            SetDefaultConfig();

        return this;
    }

    private void SetDefaultConfig()
    {
        BaseUrl = "https://replace-me-cotizador-adminse.com.ar:9443";
        LoginEndpoint = "/api/auth/login";
        CotizadorEndpoint = "/api/auth/cotizador";
        User = "CotizadorUser";
        Password = "CotizadorPassword";
    }
}

