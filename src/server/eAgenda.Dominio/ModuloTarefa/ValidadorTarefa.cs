using FluentValidation;
using System;

namespace eAgenda.Dominio.ModuloTarefa
{
    public class ValidadorTarefa : AbstractValidator<Tarefa>
    {
        public ValidadorTarefa()
        {
            RuleFor(x => x.Titulo)
                .NotNull().WithMessage("O campo titulo e obrigatorio")
                .NotEmpty().WithMessage("O campo titulo e obrigatorio");

            RuleFor(x => x.DataCriacao)
                .NotEqual(DateTime.MinValue)
                .WithMessage("O campo Data de Criacao e obrigatorio");
        }
    }
}