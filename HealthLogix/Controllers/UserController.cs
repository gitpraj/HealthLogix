using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HealthLogix.Models;

namespace HealthLogix.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        UserDataAccess objUser = new UserDataAccess();

        [HttpPost]
        [Route("api/User/Set")]
        public int Set(User user)
        {

            return objUser.SetUser(user);
        }
        [HttpGet]
        [Route("api/User/Get")]
        public int Create(String username, String password)
        {
            User user = new User();
            user.UserName = username;
            user.Password = password;
            return objUser.GetUser(user);
        }
    }
}