using System.Net.Http.Headers;
using System.Text;
using Configuration;
using DTOs.InfoAutoApiService;
using Newtonsoft.Json;

namespace Services.Implementations;

public class InfoAutoApiService : IInfoAutoApiService
{
    private readonly IInfoAutoConfiguration infoAutoConfiguration;
    private string AccessToken;
    private string RefreshToken;

    public InfoAutoApiService(
        IInfoAutoConfiguration infoAutoConfiguration
    )
    {
        this.infoAutoConfiguration = infoAutoConfiguration;
    }

    public async Task LoginAsync()
    {
        string base64Credentials = Convert.ToBase64String(Encoding.ASCII.GetBytes($"{infoAutoConfiguration.User}:{infoAutoConfiguration.Password}"));

        using HttpClient client = new HttpClient();

        HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, infoAutoConfiguration.BaseUrl + infoAutoConfiguration.AuthEndpoint + "/login");

        request.Headers.Authorization = new AuthenticationHeaderValue("Basic", base64Credentials);

        HttpResponseMessage response = await client.SendAsync(request);

        if (response.IsSuccessStatusCode)
        {
            string responseBody = await response.Content.ReadAsStringAsync();
            AuthRes responseClass = JsonConvert.DeserializeObject<AuthRes>(responseBody);
            Console.WriteLine(responseClass.access_token);
            Console.WriteLine(responseClass.refresh_token);
            AccessToken = responseClass.access_token;
            RefreshToken = responseClass.refresh_token;
        }
        else
        {
            Console.WriteLine($"Request failed with status code {response.StatusCode}");
        }
    }

    public async Task RefreshAsync()
    {
        using HttpClient client = new HttpClient();

        HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, infoAutoConfiguration.BaseUrl + infoAutoConfiguration.AuthEndpoint + "/refresh");

        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", RefreshToken);

        HttpResponseMessage response = await client.SendAsync(request);

        if (response.IsSuccessStatusCode)
        {
            string responseBody = await response.Content.ReadAsStringAsync();
            RefreshRes responseClass = JsonConvert.DeserializeObject<RefreshRes>(responseBody);
            Console.WriteLine(responseClass.access_token);
            AccessToken = responseClass.access_token;
        }
        else
        {
            Console.WriteLine($"Request failed with status code {response.StatusCode}");
        }
    }

    public async Task<BrandRes[]> GetBrandsAsync(uint page = 1, uint pageSize = 30)
    {
        await LoginAsync();

        pageSize = pageSize > 50 ? 50 : pageSize;

        using HttpClient client = new HttpClient();

        UriBuilder uriBuilder = new UriBuilder(infoAutoConfiguration.BaseUrl + infoAutoConfiguration.PubEndpoint + "/brands");
        uriBuilder.Query = $"page={page}&pageSize={pageSize}";

        HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, uriBuilder.ToString());

        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", AccessToken);

        HttpResponseMessage response = await client.SendAsync(request);

        if (response.IsSuccessStatusCode)
        {
            string responseBody = await response.Content.ReadAsStringAsync();
            BrandRes[] responseClass = JsonConvert.DeserializeObject<BrandRes[]>(responseBody);
            return responseClass;
        }
        else
        {
            Console.WriteLine($"Request failed with status code {response.StatusCode}");
            return null;
        }
    }

    public async Task<BrandModelRes[]> GetBrandsModelsAsync(uint brandId, uint page = 1, uint pageSize = 30)
    {
        await LoginAsync();

        pageSize = pageSize > 50 ? 50 : pageSize;

        using HttpClient client = new HttpClient();

        UriBuilder uriBuilder = new UriBuilder(infoAutoConfiguration.BaseUrl + infoAutoConfiguration.PubEndpoint + "/brands" + "/" + brandId + "/models");
        uriBuilder.Query = $"page={page}&pageSize={pageSize}";

        HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, uriBuilder.ToString());

        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", AccessToken);

        HttpResponseMessage response = await client.SendAsync(request);

        if (response.IsSuccessStatusCode)
        {
            string responseBody = await response.Content.ReadAsStringAsync();
            BrandModelRes[] responseClass = JsonConvert.DeserializeObject<BrandModelRes[]>(responseBody);
            return responseClass;
        }
        else
        {
            Console.WriteLine($"Request failed with status code {response.StatusCode}");
            return null;
        }
    }

}

