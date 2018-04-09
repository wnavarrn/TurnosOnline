using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TurnosOnline.Models;

namespace TurnosOnline.Components
{
    public interface IMedico
    {
        /// <summary>
        /// Traigo la lista de los médicos segun especialidad
        /// </summary>
        /// <returns>Lista de mdicos</returns>
        List<MedicoViewModels> GetAllByEspecialidad(int idespecialidad);
    }
}