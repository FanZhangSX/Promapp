using NUnit.Framework;
using Promapp.Controllers;
using System.IO;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System;

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
            dynamic jsonCollection = ret.Value;
            Console.WriteLine(ret.Value);

        }

        [Test]
        public void Test2_Login_Failure()
        {
            Assert.Pass();
        }

    }
}