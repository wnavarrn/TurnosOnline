using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Ninject;
using Ninject.Modules;
using System.Web.Mvc;
using System.Web.Routing;
using TurnosOnline.Components;
using TurnosOnline.Data;

namespace TurnosOnline.Infraestructure
{
    public class NinjectControllerFactory : DefaultControllerFactory
    {
        // A Ninject "kernel" is the thing that can supply object instances
        //private IKernel kernel = new StandardKernel(new BayerServices());

        private IKernel ninjectKernel;

        public NinjectControllerFactory()
        {
            ninjectKernel = new StandardKernel();
            AddBindings();
        }

        protected override IController GetControllerInstance(RequestContext requestContext,
            Type controllerType)
        {
            return controllerType == null
            ? null
            : (IController)ninjectKernel.Get(controllerType);
        }

        private void AddBindings()
        {

            ninjectKernel.Bind<IEspecialidad>()
                  .To<EFEspecialidad>();
            ninjectKernel.Bind<IMedico>()
                 .To<EFMedico>();
            ninjectKernel.Bind<ITurnos>()
                .To<EFTurnos>();
        }

    }
}