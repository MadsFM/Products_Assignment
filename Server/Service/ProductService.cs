using Service.Models;

namespace Service;

public class ProductService
{
    public static List<Product> Products { get; }
    static int nextId = 6;

    static ProductService()
    {
        Products = new List<Product>
        {
            new Product { id = 1, name = "Soda", price = 20.99 },
            new Product { id = 2, name = "French Fries", price = 25.99 },
            new Product { id = 3, name = "Burger", price = 54.49 },
            new Product { id = 4, name = "Sandwich", price = 66.99 },
            new Product { id = 5, name = "Cake", price = 32.99 }
        };
    }
    
    //Create
    public static void AddProduct(Product product)
    {
        product.id = nextId++;
        Products.Add(product);
    }
    
    //Read
    public static List<Product> GetAll() => Products;
    
    public static Product? GetSpecific(int id) => Products.FirstOrDefault(p => p.id == id);

    //Update
    public static void UpdateProduct(Product product)
    {
        var index = Products.FindIndex(p => p.id == product.id);
        if (index == -1)
            return;
        Products[index] = product;
    }
   
    //Delete
    public static void DeleteProduct(int id)
    {
        var product = GetSpecific(id);
        if (product is null)
            return;
        Products.Remove(product);
    }
}