using Microsoft.AspNetCore.Mvc;
using Service;
using Service.Models;

namespace API.Controller;


[ApiController]
[Route("/api/[controller]")]
public class ProductsController(ProductService productService) : ControllerBase
{
    
    
    //Create
    [HttpPost]
    public async Task<ActionResult> CreateProduct(Product product)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        var success = await productService.AddProduct(product);
        if (!success)
        {
            return StatusCode(500, "An error happened while creating.  ");
        }
        return CreatedAtAction(nameof(GetAll), new { id = product.Id }, product);
    }


    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetAll()
    {
        var products = await productService.GetAll();
        return Ok(products);
    }
        
    
    
    //Read specific
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetById(int id)
    {
        var product = await productService.GetById(id);

        if (product == null)
        {
            return NotFound();
        }
        return product;
    }
    
    //Update
    [HttpPut("{Id}")]
    public async Task<ActionResult> UpdateProduct(int Id, Product product)
    {
        if (Id != product.Id)
        {
            return BadRequest("Product not found");
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        var currentProduct = await productService.GetById(Id);
        if (currentProduct is null)
        {
            return NotFound();
        }
        var success = await productService.UpdateProduct(product);
        if (!success)
        {
            return StatusCode(500, "Error happened while updating");
        }

        return NoContent();
    }
    
    //Delete
    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        var product = await productService.GetById(id);
        if (product is null)
        {
            return NotFound();
        }
        var success = await productService.DeleteProduct(id);
        if (!success)
        {
            return StatusCode(500, "Error while deleting");
        }
        return NoContent();
    }
}