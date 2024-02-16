using Configuration;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace WebApp.Controllers;

[ApiController]
[Route("[controller]")]
public class InfoAutoController : ControllerBase
{
    private readonly IInfoAutoConfiguration infoAutoConfiguration;
    private readonly IInfoAutoApiService infoAutoApiService;

    public InfoAutoController(
            IInfoAutoConfiguration infoAutoConfiguration,
            IInfoAutoApiService infoAutoApiService
            )
    {
        this.infoAutoConfiguration = infoAutoConfiguration;
        this.infoAutoApiService = infoAutoApiService;
    }

    [HttpGet]
    public async Task<ActionResult> GetBrands([FromQuery] int page = 1, [FromQuery] int pageSize = 20)
    {
        var result = await infoAutoApiService.GetBrandsAsync();
        return Ok(result);
    }

}
