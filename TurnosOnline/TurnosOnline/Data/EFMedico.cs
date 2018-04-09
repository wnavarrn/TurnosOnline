using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TurnosOnline.Components;
using TurnosOnline.EFDataBase;
using TurnosOnline.Models;

namespace TurnosOnline.Data
{
    public class EFMedico : IMedico
    {
        public List<MedicoViewModels> GetAllByEspecialidad(int idespecialidad)
        {
            try
            {
                using (PwaEntities context = new PwaEntities())
                {
                    var query = context.Profesionales.Where(x=>x.IdEspecialidad == idespecialidad)
                        .ToList();

                    if (query == null)
                        return null;

                    List<MedicoViewModels> lst = new List<MedicoViewModels>();
                    var resp_lst = query.AsEnumerable()
                        .Select(o => new MedicoViewModels
                        {
                            Id = o.IdProfesional,
                            Nombre = o.Nombre,
                            Apellido = o.Apellido,
                            IdEspecialidad = o.IdEspecialidad

                        }).ToList().OrderBy(x => x.Id.ToString());
                    lst.AddRange(resp_lst);
                    return lst;

                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}