using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthLogix.Models
{
    public class UserDataAccess
    {
        HealthLogixContext db = new HealthLogixContext();
        public int SetUser(User user)
        {
            try
            {
                db.User.Add(user);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                return -1;
            }
        }
        //To get new user record     
        public int GetUser(User user)
        {
            try
            {
                User usr = db.User.Where(o => o.UserName.Equals(user.UserName) && o.Password.Equals(user.Password)).FirstOrDefault();
                if (usr != null)
                {
                    return 1;
                } else
                {
                    return -1;
                }
            }
            catch
            {
                return -1;
            }
        }
    }
}
