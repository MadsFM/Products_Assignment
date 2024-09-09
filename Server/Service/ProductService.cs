using DataAccess;
using Microsoft.EntityFrameworkCore;
using Service.Models;

namespace Service;

public class ProductService(MyDbContext context)
{

    
    
    //Create
    public async Task<bool> AddProduct(Product product)
    {
        try
        {
            await context.Products.AddAsync(product);
            await context.SaveChangesAsync();
            return true;
        }
        catch(Exception ex)
        {
            return false;
        }
    }
    
    //Read
    public async Task<List<Product>> GetAll() => await context.Products.ToListAsync();
    
    public async Task<Product?> GetById(int id) => await context.Products.FindAsync(id);


    //Update
    public async Task<bool> UpdateProduct(Product product)
    {
        try
        {
            context.Products.Update(product);
            await context.SaveChangesAsync();
            return true;
        }
        catch (DbUpdateConcurrencyException ex)
        {
            return false;
        }
    }
   
    //Delete
    public async Task<bool> DeleteProduct(int id)
    {
        var product = await GetById(id);
        if (product is null)
            return false;

        try
        {
            context.Products.Remove(product);
            await context.SaveChangesAsync();
            return true;
        }
        catch (Exception ex)
        {
            return false;
        }
    }
}