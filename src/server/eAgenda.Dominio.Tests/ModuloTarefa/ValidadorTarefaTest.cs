using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Globalization;

namespace eAgenda.Dominio.ModuloTarefa.Tests
{
    [TestClass]
    public class ValidadorTarefaTest
    {
        public ValidadorTarefaTest()
        {
            CultureInfo.CurrentUICulture = new CultureInfo("pt-BR");
        }

        [TestMethod]
        public void Titulo_da_tarefa_deve_ser_obrigatorio()
        {
            //arrange
            var t = new Tarefa();
            t.Titulo = null;

            ValidadorTarefa validador = new ValidadorTarefa();

            //action
            var resultado = validador.Validate(t);

            //assert
            Assert.AreEqual("O campo titulo e obrigatorio", resultado.Errors[0].ErrorMessage);
        }

        [TestMethod]
        public void DataCriacao_da_tarefa_deve_ser_obrigatorio()
        {
            //arrange
            var t = new Tarefa();
            t.Titulo = "Tarefa 01";
            t.DataCriacao = DateTime.MinValue;

            ValidadorTarefa validador = new ValidadorTarefa();

            //action
            var resultado = validador.Validate(t);

            //assert
            Assert.AreEqual("O campo Data de Criacao e obrigatorio", resultado.Errors[0].ErrorMessage);
        }
    }
}
