using DataAccess;
using Microsoft.EntityFrameworkCore;
using Service.Models;

namespace Service;

public class TypeCategoryService(MyDbContext context)
{
    //Create
    public async Task<bool> CreateCategory(TypeCategory category)
    {
        try
        {
            await context.TypeCategories.AddAsync(category);
            await context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
        
    }
    
    //Read
    public async Task<List<TypeCategory>> GetAll() => await context.TypeCategories.ToListAsync();
    
    //Read specific
    public async Task<TypeCategory?> GetById(int id) => await context.TypeCategories.FindAsync(id);
    
    //Update
    public async Task<bool> UpdateTypeCategory(TypeCategory typeCategory)
    {
        try
        {
            context.TypeCategories.Update(typeCategory);
            await context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }
    
    //Delete
    public async Task<bool> DeleteTypeCategory(int Id)
    {
        var typeCategory = await GetById(Id);
        if (typeCategory is null)
        {
            return false;
        }

        try
        {
            context.TypeCategories.Remove(typeCategory);
            await context.SaveChangesAsync();
            return true;
        }
        catch (Exception ex)
        {
            return false;
        }
    }
}