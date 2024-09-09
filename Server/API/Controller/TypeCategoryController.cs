using Microsoft.AspNetCore.Mvc;
using Service;
using Service.Models;

namespace API.Controller;

[ApiController]
[Route("/api/[controller]")]
public class TypeCategoryController(TypeCategoryService typeCategoryService) : ControllerBase
{

    //Create
    [HttpPost]
    public async Task<ActionResult> CreateType(TypeCategory category)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var success = await typeCategoryService.CreateCategory(category);
        if (!success)
        {
            return StatusCode(500, "Error while creating category");
        }

        return CreatedAtAction(nameof(GetAll), new { id = category.TypeId }, category);
    }
    
    //Read
    [HttpGet]
    public async Task<ActionResult<List<TypeCategory>>> GetAll()
    {
        var products = await typeCategoryService.GetAll();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TypeCategory>> GetById(int id)
    {
        var typeCategory = await typeCategoryService.GetById(id);

        if (typeCategory == null)
        {
            return NotFound();
        }

        return typeCategory;
    }
    
    [HttpPut("{id}")]
    //Update
    public async Task<ActionResult<TypeCategory>> UpdateTypeCategory(int id, TypeCategory typeCategory)
    {
        if (id != typeCategory.TypeId)
        {
            return BadRequest("TypeCategory not found");
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var currentTypeCategory = await typeCategoryService.GetById(id);
        if (currentTypeCategory is null)
        {
            return NotFound();
        }

        var success = await typeCategoryService.UpdateTypeCategory(typeCategory);
        if (!success)
        {
            return StatusCode(500, "Error while updating TypeCategory");
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<TypeCategory>> DeleteTypeCategory(int id)
    {
        var typeCategory = await typeCategoryService.GetById(id);
        if (typeCategory is null)
        {
            return NotFound();
        }

        var success = await typeCategoryService.DeleteTypeCategory(id);
        if (!success)
        {
            return StatusCode(500, "Error while deleting");
        }

        return NoContent();
    }
}