using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TurnosOnline.Models
{
    public class MedicoViewModels
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int? IdEspecialidad { get; set; }
        //DateTime FechaCreación { get; set; }
        public int IdLogAccion { get; set; }

        public string ApellidoNombre {
            get {
                return this.Apellido = this.Apellido + " " + this.Nombre;
            }
            set {
                this.ApellidoNombre = value;
            }
        }


    }
}