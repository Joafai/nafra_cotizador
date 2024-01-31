namespace DTOs.BrandDTOs;

public class BrandRes
{
    public uint Id { get; set; }
    public string Name { get; set; }
    public string LogoUrl { get; set; }
    public bool ListPrice { get; set; }
    public BrandGroupRes[] Groups { get; set; }
    public bool Prices { get; set; }
    public uint Prices_to { get; set; }
    public uint Prices_from { get; set; }
    public bool Summary { get; set; }
}

public class BrandGroupRes
{
    public uint Id { get; set; }
    public string Name { get; set; }
    public bool ListPrice { get; set; }
    public bool Prices { get; set; }
    public uint Prices_to { get; set; }
    public uint Prices_from { get; set; }
    public bool Summary { get; set; }
}
