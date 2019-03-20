using NUnit.Framework;
using Promapp.Controllers;
using System.IO;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System;
using System.Linq;
using System.Collections.Generic;

namespace Tests
{
    public class Tests
    {
        LoginController login;
        [SetUp]
        public void Setup()
        {
            login = new LoginController();
        }

        [Test]
        public void Test1_Login_Success()
        {
            var ret = login.Login("fanzhang", "123", "Team1", true) as JsonResult;
            var obj = ret.Value as object;

            Assert.IsTrue((bool)obj.GetType().GetProperty("success").GetValue(obj));
        }

        [Test]
        public void Test2_Login_Failure()
        {
            object obj;
            JsonResult ret;

            var list = new List<List<object>>
            {
                new List<object> { "", "123", "Team1", true, false, "Username is null" },
                new List<object> { "fanzhang", "", "Team2", true, false, "Password is null"},
                new List<object> { "fanzhang", "123", "", true, false, "TEAM is null"},
                new List<object> { "fanzhan", "123", "Team1", true, false, "username does not exist"},
                new List<object> { "fanzhang", "12", "Team1", true, false, "password does not match"},
                new List<object> { "fanzhang", "123", "Team2", true, false, "team does not match"},
            };

            foreach (var l in list)
            {
                ret = login.Login((string)l[0], (string)l[1], (string)l[2], (bool)l[3]) as JsonResult;
                obj = ret.Value as object;
                Assert.AreEqual((bool)obj.GetType().GetProperty("success").GetValue(obj), (bool)l[4]);
                Assert.AreEqual((string)obj.GetType().GetProperty("message").GetValue(obj), (string)l[5]);
            }
        }

        [Test]
        public void Test2_Teams()
        {
            var ret = login.Teams() as OkObjectResult;
            object dValue = ret.Value as object;

            Assert.AreNotEqual(dValue, null);
        }
    }
}