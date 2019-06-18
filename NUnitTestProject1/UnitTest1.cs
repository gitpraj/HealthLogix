using NUnit.Framework;
using HealthLogix;
using HealthLogix.Controllers;
using HealthLogix.Models;
using System.Collections.Generic;
using System.Linq;
using System;

namespace Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Blog blog = new Blog();
            BlogDataAccess objBlog = new BlogDataAccess();

            //IEnumerable<Blog> allBlogs = objBlog.GetAllBlogs();
            int maxid = 40;
            if (maxid != 0)
            {
                blog.Id = maxid + 1;
            }
            else
            {
                blog.Id = 1;
            }
            blog.Subject = "Random";
            blog.Description = "Test Description";
            blog.BlogEntry = "<div></div>";
            blog.Pseudonym = "Prajith";
            blog.Image = Guid.NewGuid();
            blog.DateInserted = DateTime.Now;

            int ret = objBlog.AddBlog(blog);

            Assert.AreEqual(1, ret);
        }
    }
}