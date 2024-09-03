using FluentValidation;
using Service.Models;

namespace Service.Validators;

public class ProductValidator : AbstractValidator<Product>
{
    public ProductValidator()
    {
        RuleFor(product => product.name)
            .NotEmpty().WithMessage("Can't be empty")
            .MinimumLength(4).WithMessage("Must be more than 3 characters");

        RuleFor(product => product.price)
            .GreaterThan(0.0).WithMessage("Nothing is free");
    }
}