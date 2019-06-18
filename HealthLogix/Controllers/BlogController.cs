using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HealthLogix.Models;

namespace HealthLogix.Controllers
{
    public class BlogController : Controller
    {
        BlogDataAccess objBlog = new BlogDataAccess();

        [HttpGet]
        [Route("api/Blog/Index")]
        public IEnumerable<Blog> Index()
        {
            return objBlog.GetAllBlogs();
        }
        [HttpPost]
        [Route("api/Blog/Create")]
        public int Create(Blog blog)
        {
            IEnumerable<Blog> allBlogs = objBlog.GetAllBlogs();
            int maxid = allBlogs.Max(o => o.Id);
            if (maxid != 0)
            {
                blog.Id = maxid + 1;
            } else
            {
                blog.Id = 1;
            }
            blog.Image = Guid.NewGuid();
            blog.DateInserted = DateTime.Now;
            return objBlog.AddBlog(blog);
        }
        [HttpGet]
        [Route("api/Blog/Details/{id}")]
        public Blog Details(int id)
        {
            return objBlog.GetBlogdata(id);
        }
        [HttpPut]
        [Route("api/Blog/Edit")]
        public int Edit(Blog blog)
        {
            return objBlog.UpdateBlog(blog);
        }
    }
}
