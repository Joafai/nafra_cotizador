namespace Configuration.Implementation;

public class InfoAutoConfiguration : IInfoAutoConfiguration
{
    public string BaseUrl { get; set; }
    public string PubEndpoint { get; set; }
    public string AuthEndpoint { get; set; }
    public string User { get; set; }
    public string Password { get; set; }

    public InfoAutoConfiguration(IConfiguration configuration)
    {
        Bind(configuration);
    }

    public InfoAutoConfiguration Bind(IConfiguration configuration)
    {
        IConfigurationSection infoAutoConfig = configuration.GetSection(nameof(InfoAutoConfiguration));

        if (infoAutoConfig.Exists())
            infoAutoConfig.Bind(this);
        else
            SetDefaultConfig();

        return this;
    }

    private void SetDefaultConfig()
    {
        BaseUrl = "https://replace-me-api.infoauto.com.ar/cars";
        PubEndpoint = "/pub";
        AuthEndpoint = "/auth";
        User = "InfoAutoUser";
        Password = "InfoAutoPassword";
    }
}

