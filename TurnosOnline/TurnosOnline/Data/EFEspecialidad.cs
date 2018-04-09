using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TurnosOnline.Components;
using TurnosOnline.EFDataBase;
using TurnosOnline.Models;

namespace TurnosOnline.Data
{
    public class EFEspecialidad : IEspecialidad
    {
        public List<EspecialidadViewModels> GetAll()
        {
            try
            {
                using (PwaEntities context = new PwaEntities())
                {
                    var query = context.Especialidades
                        .ToList();

                    if (query == null)
                        return null;

                    List<EspecialidadViewModels> lst = new List<EspecialidadViewModels>();
                    var resp_lst = query.AsEnumerable()
                        .Select(o => new EspecialidadViewModels
                        {
                            Id = o.IdEspecialidad,
                            Descripcion = o.Descrpcion,                    

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