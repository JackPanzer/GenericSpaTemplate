using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenericSpaTemplate
{
    [Route("api/test")]
    [ApiController]
    public class TestController : ControllerBase
    {
        public TestController()
        { 
        }

        [HttpGet()]
        public IActionResult ReturnTestData()
        {
            return new OkObjectResult(new List<TestData>() 
            {
                new TestData { Id = Guid.NewGuid(), Time = DateTimeOffset.Now },
                new TestData { Id = Guid.NewGuid(), Time = DateTimeOffset.Now },
                new TestData { Id = Guid.NewGuid(), Time = DateTimeOffset.Now },
                new TestData { Id = Guid.NewGuid(), Time = DateTimeOffset.Now },
                new TestData { Id = Guid.NewGuid(), Time = DateTimeOffset.Now }
            });
        }
    }
}
