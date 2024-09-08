using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Service.Models;

public class ProductType
{
    [Key]
    public int ProductTypeId { get; set; }

    // Foreign keys
    [ForeignKey("Product")]
    public int ProductId { get; set; }

    [ForeignKey("TypeCategory")]
    public int TypeId { get; set; }

    // Navigation properties
    public virtual Product Product { get; set; }
    public virtual TypeCategory TypeCategory { get; set; }
    
}