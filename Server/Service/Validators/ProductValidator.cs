using FluentValidation;
using Service.Models;

namespace Service.Validators;

public class ProductValidator : AbstractValidator<Product>
{
    public ProductValidator()
    {
        RuleFor(product => product.ProductName)
            .NotEmpty().WithMessage("Can't be empty")
            .MinimumLength(4).WithMessage("Must be more than 3 characters")
            .MaximumLength(100).WithMessage("Can't have more than 100 characters in name");

        RuleFor(product => product.Price)
            .GreaterThan(0.0).WithMessage("Nothing is free");

        RuleFor(product => product.Stock)
            .GreaterThan(0).WithMessage("Can't have zero in stock from start");

        RuleFor(product => product.Description)
            .MaximumLength(500).WithMessage("Can't be more than 500 characters");
    }
}