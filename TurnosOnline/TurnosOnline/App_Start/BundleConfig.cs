using System.Web;
using System.Web.Optimization;

namespace TurnosOnline
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate.js",
                        "~/Scripts/jquery.validate.unobtrusive.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));


            bundles.Add(new ScriptBundle("~/bundles/custom").Include(
                       "~/Scripts/Custom/_custom.js",
                       "~/Scripts/Custom/jquery.mask.min.js"
                       ));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Assets/Bootstrap-4/js/popper.min.js",
                      "~/Assets/Bootstrap-4/js/bootstrap.min.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Assets/Bootstrap-4/css/bootstrap.min.css",
                      //"~/Assets/FontAwesome/font-awesome.css",
                      "~/Assets/custom.css"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/datatable").Include(
                     "~/Assets/DataTables/js/jquery.dataTables.min.js",
                     "~/Assets/DataTables/js/dataTables.bootstrap4.min.js",
                      "~/Assets/DataTables/js/dataTables.responsive.min.js",
                       "~/Assets/DataTables/js/responsive.bootstrap4.min.js",
                       "~/Assets/DataTables/js/buttons/dataTables.buttons.min.js",
                        "~/Assets/DataTables/js/buttons/buttons.bootstrap4.min.js",
                         //"~/Assets/DataTables/js/buttons/buttons.colVis.min.js",
                         "~/Assets/DataTables/js/buttons/jszip.min.js",
                         "~/Assets/DataTables/js/buttons/pdfmake.min.js",
                         "~/Assets/DataTables/js/buttons/vfs_fonts.js",
                         //"~/Assets/DataTables/js/buttons/buttons.flash.min.js",
                         //"~/Assets/DataTables/js/buttons/buttons.fundation.min.js",
                         "~/Assets/DataTables/js/buttons/buttons.html5.min.js"
                     //"~/Assets/DataTables/js/buttons/buttons.print.min.js"
                     ));
            bundles.Add(new StyleBundle("~/Content/datatable").Include(
                     "~/Assets/DataTables/css/dataTables.bootstrap4.css",
                     "~/Assets/DataTables/css/responsive.bootstrap4.min.css",
                     "~/Assets/DataTables/css/buttons/buttons.bootstrap4.css"
                     //"~/Assets/DataTables/css/buttons/buttons.dataTable.css"
                     ));

            bundles.Add(new ScriptBundle("~/bundles/combobox").Include(
                      "~/Assets/ComboBox/js/bootstrap-combobox.js"
                     ));

            bundles.Add(new StyleBundle("~/Content/combobox").Include(
                      "~/Assets/ComboBox/css/bootstrap-combobox.css"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/bootbox").Include(
                  "~/Assets/BootBox/js/bootbox.min.js"
                 ));

            bundles.Add(new ScriptBundle("~/bundles/toastr").Include(
                     "~/Assets/Toastr/js/toastr.min.js"
                    ));

            bundles.Add(new ScriptBundle("~/bundles/animsition").Include(
                   "~/Assets/Animsition/js/animsition.min.js"
                  ));

            bundles.Add(new ScriptBundle("~/bundles/combobox").Include(
                    "~/Assets/ComboBox/js/bootstrap-combobox.js"
                   ));

            bundles.Add(new ScriptBundle("~/bundles/switch").Include(
                   "~/Assets/Bootstrap-Switch/js/bootstrap-switch.min.js"
                  ));

            bundles.Add(new ScriptBundle("~/bundles/signature").Include(
                 "~/Assets/Signature/js/jquery.signature.min.js"
                ));

            bundles.Add(new StyleBundle("~/Content/toastr").Include(
                      "~/Assets/Toastr/css/toastr.min.css"
                      ));

            bundles.Add(new StyleBundle("~/Content/animsition").Include(
                     "~/Assets/Animsition/css/animsition.min.css"
                     ));

            bundles.Add(new StyleBundle("~/Content/animate").Include(
                    "~/Assets/Animate/css/animate.css"
                    ));

            bundles.Add(new StyleBundle("~/Content/switch").Include(
                  "~/Assets/Bootstrap-Switch/css/bootstrap-switch.min.css"
                  ));

            bundles.Add(new StyleBundle("~/Content/signature").Include(
                  "~/Assets/Signature/css/jquery.signature.css"
                  ));
        }
    }
}

