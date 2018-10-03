using System.Web.Http;
using System.Web.Mvc;

namespace WebApiMyProjct.Areas.HelpPage
{
    public class HelpPageAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "HelpPage";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "PageHome",
                "page/{action}/{apiId}",
                new { controller = "page", action = "PageHome", apiId = UrlParameter.Optional });

            HelpPageConfig.Register(GlobalConfiguration.Configuration);
        }
    }
}