using DTOs.InfoAutoApiService;

namespace Services;

public interface IInfoAutoApiService
{

    Task LoginAsync();
    Task RefreshAsync();
    Task<BrandRes[]> GetBrandsAsync(uint page = 1, uint pageSize = 30);
    Task<BrandModelRes[]> GetBrandsModelsAsync(uint brandId, uint page = 1, uint pageSize = 30);
}
