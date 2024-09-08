using DataAccess;
using Microsoft.EntityFrameworkCore;
using Service.Models;

namespace Service;

public class ProductService
{

    private readonly MyDbContext _context;
    

    public ProductService(MyDbContext context)
    {
        _context = context;
    }
    
    //Create
    public async Task<bool> AddProduct(Product product)
    {
        try
        {
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();
            return true;
        }
        catch(Exception ex)
        {
            return false;
        }
    }
    
    //Read
    public async Task<List<Product>> GetAll() => await _context.Products.ToListAsync();
    
    public async Task<Product?> GetSpecific(int id) => await _context.Products.FindAsync(id);


    //Update
    public async Task<bool> UpdateProduct(Product product)
    {
        try
        {
            _context.Products.Update(product);
            await _context.SaveChangesAsync();
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
        var product = await GetSpecific(id);
        if (product is null)
            return false;

        try
        {
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception ex)
        {
            return false;
        }
    }
}