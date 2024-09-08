using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Service.Models;

public class Product
{
    [Key]
    public int Id { get; set; }

    [Required] 
    public string ProductName { get; set; } = "not defined";
    public string? Description { get; set; }
    public int TypeId { get; set; }
    [ForeignKey("TypeId")] 
    public TypeCategory? TypeCategory { get; set; }
    public double Price { get; set; }
    public int Stock { get; set; }
    public virtual ICollection<ProductType> ProductTypes { get; set; } = new List<ProductType>();
}
