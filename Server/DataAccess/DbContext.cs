using Microsoft.EntityFrameworkCore;
using Service.Models;

namespace DataAccess;

public class MyDbContext : DbContext

{
    public MyDbContext(DbContextOptions<MyDbContext> options)
    : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ProductType>()
            .HasKey(pt => pt.ProductTypeId);

        modelBuilder.Entity<ProductType>()
            .HasOne(pt => pt.Product)
            .WithMany(p => p.ProductTypes)
            .HasForeignKey(pt => pt.ProductId);

        modelBuilder.Entity<ProductType>()
            .HasOne(pt => pt.TypeCategory)
            .WithMany(tc => tc.ProductTypes)
            .HasForeignKey(pt => pt.TypeId);
        
        modelBuilder.Entity<Product>().HasKey(p => p.Id);
        modelBuilder.Entity<TypeCategory>().HasKey(t => t.TypeId);
    }
    
    
    public DbSet<Product> Products { get; set; }
    public DbSet<TypeCategory> TypeCategories { get; set; }
    public DbSet<ProductType> ProductTypes { get; set; }
}