using Microsoft.AspNetCore.Mvc;
using Service;
using Service.Models;

namespace API.Controller;


[ApiController]
[Route("/api/[controller]")]
public class ProductsController : ControllerBase
{

    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService ?? throw new ArgumentNullException(nameof(productService));
    }
    
    
    //Create
    [HttpPost]
    public async Task<ActionResult> CreateProduct(Product product)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        var success = await _productService.AddProduct(product);
        if (!success)
        {
            return StatusCode(500, "An error happened while creating.  ");
        }
        return CreatedAtAction(nameof(GetAll), new { id = product.Id }, product);
    }


    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetAll()
    {
        var products = await _productService.GetAll();
        return Ok(products);
    }
        
    
    
    //Read specific
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetById(int id)
    {
        var product = await _productService.GetSpecific(id);

        if (product == null)
        {
            return NotFound();
        }
        return product;
    }
    
    //Update
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProduct(int id, Product product)
    {
        if (id != product.Id)
        {
            return BadRequest("No id found");
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        var currentProduct = await _productService.GetSpecific(id);
        if (currentProduct is null)
        {
            return NotFound();
        }
        var success = await _productService.UpdateProduct(product);
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
        var product = await _productService.GetSpecific(id);
        if (product is null)
        {
            return NotFound();
        }
        var success = await _productService.DeleteProduct(id);
        if (!success)
        {
            return StatusCode(500, "Error while updating");
        }
        return NoContent();
    }
}