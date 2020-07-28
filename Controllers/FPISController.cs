using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using fpis.Klase;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using MySqlConnector;

namespace fpis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FPISController : ControllerBase
    {
        SqlConnection connection = new SqlConnection("Data Source=DESK-vtrajkovic;Initial Catalog=fpis;Integrated Security=True");

        DatabaseService ds = new DatabaseService();
       
        [HttpGet]
        public List<Klijent> getKlijenti()
        {
            return ds.getKlijenti();
        }
    }
}
