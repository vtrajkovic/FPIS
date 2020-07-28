using fpis.Klase;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fpis
{
    public class DatabaseService
    {
        SqlConnection connection = new SqlConnection("Data Source=DESK-vtrajkovic;Initial Catalog=fpis;Integrated Security=True");
        public List<Klijent> getKlijenti()
        {
            try
            {
                connection.Open();
                List<Klijent> lista = new List<Klijent>();
                SqlCommand komanda = connection.CreateCommand();
                komanda.CommandText = "Select * from Klijent";
                SqlDataReader citac = komanda.ExecuteReader();
                while (citac.Read())
                {
                    Klijent k = new Klijent();
                    k.Id = citac.GetInt32(0);
                    k.Email = citac.GetString(1);
                    k.Naziv = citac.GetString(2);

                    lista.Add(k);
                }
                citac.Close();
                return lista;
            }
            catch (Exception ex)
            {

                throw;
            }
            finally { if (connection != null) connection.Close(); }
        }
    }
}

