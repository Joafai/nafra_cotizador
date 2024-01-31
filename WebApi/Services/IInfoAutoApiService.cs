namespace Services;

public interface IInfoAutoApiService
{
    Task<BrandRes[]> GetBrandsAsync();
    Task<BrandModelRes[]> GetBrandsModelsAsync(uint brandId);
}
