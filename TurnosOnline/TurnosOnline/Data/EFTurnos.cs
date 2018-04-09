using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TurnosOnline.Components;
using TurnosOnline.EFDataBase;
using TurnosOnline.Models;

namespace TurnosOnline.Data
{
    public class EFTurnos : ITurnos
    {
        public List<FiltroTurnosViewModels> GetAll()
        {
            try
            {
                using (PwaEntities context = new PwaEntities())
                {
                    var query = context.FiltroTurnos
                        .ToList();

                    if (query == null)
                        return null;

                    List<FiltroTurnosViewModels> lst = new List<FiltroTurnosViewModels>();
                    var resp_lst = query.AsEnumerable()
                        .Select(o => new FiltroTurnosViewModels
                        {
                            Id = o.IdFiltroHorario,
                            Descripcion = o.Descripcion                          
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