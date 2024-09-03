using Microsoft.AspNetCore.Mvc;
using Service;
using Service.Models;

namespace API.Controller;


[ApiController]
[Route("/api/products")]
public class ProductsController : ControllerBase
{

    [HttpPost]
    public ActionResult CreateProduct(Product product)
    {
        ProductService.AddProduct(product);
        return CreatedAtAction(nameof(GetAll), new { id = product.id }, product);
    }
    
    
    [HttpGet]
    public ActionResult<List<Product>> GetAll() =>
        ProductService.GetAll();
}