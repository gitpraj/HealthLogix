using System;
using System.Collections.Generic;

namespace HealthLogix.Models
{
    public partial class Blog
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public Guid Image { get; set; }
        public string BlogEntry { get; set; }
        public string Pseudonym { get; set; }
        public DateTime? DateInserted { get; set; }
    }
}
