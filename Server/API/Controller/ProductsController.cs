using Microsoft.AspNetCore.Mvc;
using Service;
using Service.Models;

namespace API.Controller;


[ApiController]
[Route("/api/products")]
public class ProductsController : ControllerBase
{

    //Create
    [HttpPost]
    public IActionResult CreateProduct(Product product)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        ProductService.AddProduct(product);
        return CreatedAtAction(nameof(GetAll), new { id = product.id }, product);
    }
    
    
    [HttpGet]
    public ActionResult<List<Product>> GetAll() =>
        ProductService.GetAll();
    
    //Read specific
    [HttpGet("{id}")]
    public ActionResult<Product> GetById(int id)
    {
        var product = ProductService.GetSpecific(id);

        if (product == null)
        {
            return NotFound();
        }

        return product;
    }
    
    //Update
    [HttpPut("{id}")]
    public IActionResult UpdateProduct(int id, Product product)
    {
        if (id != product.id)
        {
            return BadRequest();
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        var currentProduct = ProductService.GetSpecific(id);
        if (currentProduct is null)
        {
            return NotFound();
        }
        ProductService.UpdateProduct(product);

        return NoContent();
    }
    
    //Delete
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        ProductService.DeleteProduct(id);
        return NoContent();
    }
}