using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TurnosOnline.Models;

namespace TurnosOnline.Components
{
    public interface IEspecialidad
    {
        /// <summary>
        /// Traigo toda la lista de especialidades
        /// </summary>
        /// <returns>Lista de especialidades</returns>
        List<EspecialidadViewModels> GetAll();
    }
}