using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TornirServer;

namespace WebApiMyProjct.Controllers
{
    public class TornirController : ApiController
    {
        // GET api/Tornir
        public HttpResponseMessage Get()
        {
            using (TornirDBEntities entity = new TornirDBEntities())
            {
                return Request.CreateResponse(HttpStatusCode.OK, entity.Tornirs.ToList());
            }

        }

        // GET api/Tornir/5

        public HttpResponseMessage Get(int id)
        {
            using (TornirDBEntities entity = new TornirDBEntities())
            {
                Tornir tornir = entity.Tornirs.FirstOrDefault(x => x.ID == id);
                if (tornir != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, tornir);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }
            }
        }

        // POST api/Tornir
        public HttpResponseMessage Post([FromBody] Tornir value)
        {
            using (TornirDBEntities entity = new TornirDBEntities())
            {
                entity.Tornirs.Add(value);
                entity.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created, new Uri(Request.RequestUri + value.ID.ToString()));

            }
        }

        // PUT api/Tornir/5
        public HttpResponseMessage Put(int id, [FromBody]Tornir value)
        {
            using (TornirDBEntities entity = new TornirDBEntities())
            {
                Tornir tornirToUpdate = entity.Tornirs.FirstOrDefault(x => x.ID == id);
                if (tornirToUpdate != null)
                {
                    tornirToUpdate.Game_Name = value.Game_Name;
                    tornirToUpdate.Player1 = value.Player1;
                    tornirToUpdate.Player1 = value.Player2;
                    tornirToUpdate.Who_Won = value.Who_Won;
                    entity.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, string.Format($"tornir with id: {id} updeted"));
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format($"tornir with id:{id} was not found"));
                }
            }
        }

        // DELETE api/games/5
        public HttpResponseMessage Delete(int id)
        {
            using (TornirDBEntities entity = new TornirDBEntities())
            {
                Tornir tornirToDeleate = entity.Tornirs.FirstOrDefault(x => x.ID == id);
                if (tornirToDeleate != null)
                {
                    entity.Tornirs.Remove(tornirToDeleate);
                    entity.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, string.Format($"tornir with id:{id} delated"));
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format($"tornir with id:{id} was not found"));
                }
            }
        }

        // GET by  player name
        [Route("api/Tornir/getByName/{namePlayer}")]
        [HttpGet]
        public HttpResponseMessage GetByName(string namePlayer)
        {
            using (TornirDBEntities entity = new TornirDBEntities())
            {
                List<Tornir> tornirsList = entity.Tornirs.Where(x => x.Player1.ToUpper() == namePlayer.ToUpper() || x.Player2.ToUpper() == namePlayer.ToUpper()).ToList();
                if (tornirsList.Count > 0)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, tornirsList);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }
            }
        }


        // GET by  5 options
        [Route("api/Tornir/search")]
        [HttpGet]
        public HttpResponseMessage GetByFilter(int id = -1, string gameName = null, string player1 = null, string player2 = null, string whoWon = null)
        {
            using (TornirDBEntities entity = new TornirDBEntities())
            {
                List<Tornir> tornirSearch = entity.Tornirs.Where(x => id != -1 ? x.ID == id : true)
                    .Where(x => gameName != null ? x.Game_Name.ToUpper() == gameName.ToUpper() : true)
                    .Where(x => player1 != null ? x.Player1.ToUpper() == player1.ToUpper() : true)
                    .Where(x => player2 != null ? x.Player2.ToUpper() == player2.ToUpper() : true)
                    .Where(x => whoWon != null ? x.Who_Won.ToUpper() == whoWon.ToUpper() : true)
                    .ToList();
                if (tornirSearch.Count > 0)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, tornirSearch);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }
            }
        }
    }
}