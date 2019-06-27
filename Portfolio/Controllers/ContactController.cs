using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Portfolio.Data;
using System.Threading.Tasks;

namespace WebAppProj.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        //Initialise configuration, gives access to appsettings.json.
        public ContactController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("[action]")]
        public async Task<IActionResult> SendEmail([FromBody] ContactEmailDetails contactEmailDetails)
        {
            //https://www.humankode.com/asp-net-core/asp-net-core-configuration-best-practices-for-keeping-secrets-out-of-source-control
            //http://stevetalkscode.co.uk/configuration-bridging-part-4

            //http://www.projectcodify.com/how-to-send-email-in-aspnet-core-20
            var smtpClient = new SmtpClient
            {
                Host = "smtp.gmail.com", // set your SMTP server name here
                Port = 587, // Port 
                EnableSsl = true,
                Credentials = new NetworkCredential("from@gmail.com", "password")
            };

            using (var message = new MailMessage("from@gmail.com", "to@mail.com")
            {
                Subject = "Subject",
                Body = "Body"
            })
            {
                await smtpClient.SendMailAsync(message);
            }

            return Ok();
        }
    }
}
