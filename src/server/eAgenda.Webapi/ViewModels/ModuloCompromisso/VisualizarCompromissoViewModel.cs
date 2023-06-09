﻿using eAgenda.Webapi.ViewModels.ModuloContato;
using System;

namespace eAgenda.Webapi.ViewModels.ModuloCompromisso
{
    public class VisualizarCompromissoViewModel
    {
        public Guid Id { get; set; }
        public string Assunto { get; set; }
        public DateTime Data { get; set; }
        public TimeSpan HoraInicio { get; set; }
        public TimeSpan HoraTermino { get; set; }
        public VisualizarContatoViewModel Contato { get; set; }
        public string TipoLocalizacao { get; set; }
        public string Local { get; set; }
        public string Link { get; set; }
    }
}
