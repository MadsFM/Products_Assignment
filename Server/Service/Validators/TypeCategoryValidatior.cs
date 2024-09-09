using FluentValidation;
using Service.Models;

namespace Service.Validators;

public class CategoryValidatior : AbstractValidator<TypeCategory>
{
    public CategoryValidatior()
    {
        RuleFor(c => c.TypeName)
            .NotEmpty().WithMessage("Can't be empty")
            .MinimumLength(2).WithMessage("Must be at least 2 characters long")
            .MaximumLength(500).WithMessage("Can't be more than 500 characters");
        
        
    }
}