namespace DTOs.BrandModelDTOs;

public class BrandModelRes
{
    public bool As_codia { get; set; }
    public BrandModelBrandRes brand { get; set; }
    public uint Codia { get; set; }
    public string Description { get; set; }
    public uint[] Features { get; set; }
    public BrandModelGroupRes group { get; set; }
    public bool List_price { get; set; }
    public string Photo_url { get; set; }
    public uint Position { get; set; }
    public bool Prices { get; set; }
    public string Prices_from { get; set; }
    public string Prices_to { get; set; }
    public string R_codia { get; set; }
    public string Summary { get; set; }
}

public class BrandModelBrandRes
{
    public uint Id { get; set; }
    public string Name { get; set; }
}

public class BrandModelGroupRes
{
    public uint Id { get; set; }
    public string Name { get; set; }
}
