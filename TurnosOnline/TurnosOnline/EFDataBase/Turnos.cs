//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TurnosOnline.EFDataBase
{
    using System;
    using System.Collections.Generic;
    
    public partial class Turnos
    {
        public int IdTurno { get; set; }
        public int IdProfesional { get; set; }
        public string Descripcion { get; set; }
        public string Observaciones { get; set; }
        public Nullable<System.DateTime> FechaDesde { get; set; }
        public Nullable<System.DateTime> FechaHasta { get; set; }
        public string Color { get; set; }
        public int IdPaciente { get; set; }
        public int IdCentroMedico { get; set; }
        public Nullable<bool> TodoEldia { get; set; }
    
        public virtual CentroMedico CentroMedico { get; set; }
        public virtual Pacientes Pacientes { get; set; }
        public virtual Profesionales Profesionales { get; set; }
    }
}
