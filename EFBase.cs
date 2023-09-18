using Microsoft.EntityFrameworkCore;

namespace newef
{
    public class ef : DbContext
    {
        public static ef context = new ef();
        protected override void OnConfiguring(DbContextOptionsBuilder op)
        {
            op.UseSqlServer(@"workstation id=mybasesql.mssql.somee.com;packet size=4096;user id=Egysoft_SQLLogin_1;pwd=8g1jppy9vq;data source=mybasesql.mssql.somee.com;persist security info=False;initial catalog=mybasesql;TrustServerCertificate=True");  
        }

        protected override void OnModelCreating(ModelBuilder mb)
        {
            mb.Entity<signupdata>().Property(x => x.Fullname)
            .HasComputedColumnSql("[Firstname] + ' ' + [Lastname]");

            mb.Entity<signupdata>()
            .HasOne(a => a.Code)
            .WithOne(a => a.signupdata)
            .HasForeignKey<Code>(c => c.OwnerID);

            mb.Entity<Code>().HasIndex(x => x.OwnerID).IsUnique(false);
            
        }

        public DbSet<signupdata> signupdata { get; set; }
        public DbSet<Code> Codes { get; set; }
    }
}