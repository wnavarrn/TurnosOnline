using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TurnosOnline.Models;

namespace TurnosOnline.Components
{
    public interface ITurnos
    {
        List<FiltroTurnosViewModels> GetAll();
    }
}