using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TurnosOnline.Startup))]
namespace TurnosOnline
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
