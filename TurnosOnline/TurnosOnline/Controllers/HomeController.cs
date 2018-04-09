using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TurnosOnline.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public JsonResult GetPaciente(string dni)
        {
            //Voy ala base de datos a consultar si el paciente existe registrado.
            //Le mando un mail para que cree su password y contraseña o se la hago generar ahi.(ver);

            bool esPaciente = false;

            return Json(new
            {
                
                Success = true,
                EsPaciente = esPaciente,
            }, JsonRequestBehavior.AllowGet);



        }
    }
}