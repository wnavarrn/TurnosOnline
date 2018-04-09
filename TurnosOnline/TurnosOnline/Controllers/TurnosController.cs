using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TurnosOnline.Components;

namespace TurnosOnline.Controllers
{
    public class TurnosController : Controller
    {

        private IEspecialidad RepositorioEspecialidades;
        private IMedico RepositorioMedicos;
        private ITurnos RepositorioTurnos;

        public TurnosController(IEspecialidad repositorioEspecialidades, IMedico repositorioMedicos, ITurnos repositorioTurnos)
        {
            RepositorioEspecialidades = repositorioEspecialidades;
            RepositorioMedicos = repositorioMedicos;
            RepositorioTurnos = repositorioTurnos;
        }
        // GET: Turnos
        public ActionResult Index()
        {
            ViewBag.lstEspecialidades = new SelectList(RepositorioEspecialidades.GetAll(), "Id", "Descripcion");
            ViewBag.lstMedico = new SelectList(RepositorioMedicos.GetAllByEspecialidad(2), "Id", "ApellidoNombre");
            ViewBag.lstFiltros = new SelectList(RepositorioTurnos.GetAll(), "Id", "Descripcion");
            return View();
        }
    }
}