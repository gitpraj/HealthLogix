using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace HealthLogix.Models
{
    public class BlogDataAccess
    {
        HealthLogixContext db = new HealthLogixContext();
        public IEnumerable<Blog> GetAllBlogs()
        {
            try
            {
                var list = db.Blog.OrderByDescending(o => o.DateInserted).ToList();
                return list;
            }
            catch
            {
                return null;
            }
        }

        public IEnumerable<Blog> GetMonthsCount()
        {
            try
            {
                var list = db.Blog.OrderByDescending(o => o.DateInserted).ToList();
                
                return list;
            }
            catch
            {
                return null;
            }
        }
        //To Add new Blog record     
        public int AddBlog(Blog blog)
        {
            try
            {
                db.Blog.Add(blog);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                return -1;
            }
        }
        //To Update the records of a particluar Blog    
        public int UpdateBlog(Blog blog)
        {
            try
            {
                db.Entry(blog).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular Blog    
        public Blog GetBlogdata(int id)
        {
            try
            {
                Blog employee = db.Blog.Find(id);
                return employee;
            }
            catch
            {
                throw;
            }
        }
    }
}
