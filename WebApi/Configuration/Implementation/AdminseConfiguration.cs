namespace Configuration.Implementation;

public class AdminseConfiguration : IAdminseConfiguration
{
    public string BaseUrl { get; set; }
    public string ProvinceEndpoint { get; set; }
    public string LocationEndpoint { get; set; }

    public AdminseConfiguration(IConfiguration configuration)
    {
        Bind(configuration);
    }

    public AdminseConfiguration Bind(IConfiguration configuration)
    {
        IConfigurationSection infoAutoConfig = configuration.GetSection(nameof(AdminseConfiguration));

        if (infoAutoConfig.Exists())
            infoAutoConfig.Bind(this);
        else
            SetDefaultConfig();

        return this;
    }

    private void SetDefaultConfig()
    {
        BaseUrl = "https://replace-me-adminse.com.ar";
        ProvinceEndpoint = "/api/provinces";
        LocationEndpoint = "/api/provinces/{locationId}/locations";
    }
}

