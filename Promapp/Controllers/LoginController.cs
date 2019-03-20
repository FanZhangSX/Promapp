using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Promapp.Controllers
{
    [Route("api/[controller]")]
    
    public class LoginController : Controller
    {
        [HttpGet("[action]")]
        public IActionResult Teams()
        {
            var teams = new List<string>()
            {
                "Team1", "Team2", "Team3", "Team4", "Team5", "Team6"
            };

            return Ok(teams);
        }

        [HttpPost("[action]")]
        public IActionResult Login(string username, string password, string team, bool rememberMe = false)
        {
            
            if (string.IsNullOrEmpty(username))
            {
                return Json(new { success = false, message = "Username is null" });
            }

            if (string.IsNullOrEmpty(password))
            {
                return Json(new { success = false, message = "Password is null" });
            }

            if ( string.IsNullOrEmpty(team))
            {
                return Json(new { success = false, message = "TEAM is null" });
            }

            if (!username.Equals("fanzhang"))
            {
                return Json(new { success = false, message = "username does not exist" });
            }

            if (!password.Equals("123"))
            {
                return Json(new { success = false, message = "password does not match" });
            }

            if (!team.Equals("Team1"))
            {
                return Json(new { success=false, message= "team does not match" });
            }

            return Json(new { success=true, message="Login success" });

        }
    }
}