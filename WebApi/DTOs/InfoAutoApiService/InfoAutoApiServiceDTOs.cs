namespace DTOs.InfoAutoApiService;

public class AuthRes
{
    public string access_token;
    public string refresh_token;

    public AuthRes()
    {
    }
}

public class RefreshRes
{
    public string access_token;

    public RefreshRes()
    {
    }
}

public class BrandRes
{
    public uint id;
    public bool list_price;
    public string logo_url;
    public string name;
    public bool prices;
    public uint prices_from;
    public uint prices_to;
    public string summary;

    public BrandRes()
    {
    }
}

public class BrandModelRes
{
    public bool as_codia;
    public BrandModelBrandRes brand;
    public uint codia;
    public string description;
    public uint[] features;
    public BrandModelGroupRes group;
    public bool list_price;
    public string photo_url;
    public uint position;
    public bool prices;
    public uint prices_from;
    public uint prices_to;
    public string z_codia;
    public string summary;

    public BrandModelRes()
    {
    }
}

public class BrandModelBrandRes
{
    public uint id;
    public string name;

    public BrandModelBrandRes()
    {
    }
}

public class BrandModelGroupRes
{
    public uint id;
    public string name;

    public BrandModelGroupRes()
    {
    }
}
