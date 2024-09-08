using System.ComponentModel.DataAnnotations;

namespace Service.Models;

public class TypeCategory
{
    [Key]
    public int TypeId { get; set; }

    [Required] [MaxLength(100)] public string TypeName { get; set; } = string.Empty;
    
    public virtual ICollection<ProductType> ProductTypes { get; set; } = new List<ProductType>();
}