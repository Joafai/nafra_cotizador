using Resource.Library;
using Domain.Entities.Constants.Authentication;
using Ignite.Framework.Entities;
using Ignite.Framework.ExceptionHandling.Types;
using Ignite.Framework.Helpers;
using Ignite.Framework.Interfaces.DAL;
using Ignite.Framework.WebTools;
using Domain.Entities.Model;
using Domain.Entities.Model.Enum;
using Domain.Logic.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Localization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Ignite.Framework.WebTools.Attributes;
using WebApp.Models;
using Ignite.Framework.WebTools.TagHelpers.Models;
using Ignite.Framework.WebTools.DataTable;
using JsLang = Ignite.Framework.Localization.WebTools.Js;
using Lang = Resource.Library.Localization.WebAppLocalization.Controllers.AutoController;

namespace WebApp.Controllers
{
    [AuthorizeAnyRoles(Roles.BackofficeSuperAdministrator, Roles.BackofficeAutoAdministrator)]
    public class AutoController : Controller
    {

        public AutoController()
        {
          IInfoAutoConfiguration infoAutoConfiguration
        }


        public IActionResult Index()
        {
            ViewData["Title"] = localizer[Lang.IndexTitle];
            ViewData["DatatableResources"] = JsLocalizer.GetLocalizedResources(JsLang.Datatables, this.localizer);

            return View();
        }

        [HttpPost]
        public JsonResult GetAll(DataTableRequest request)
        {
            var searchTerm = request.search.value;
            Expression<Func<Auto, bool>> predicate = null;

            // If search term is not empty...
            if (!string.IsNullOrEmpty(searchTerm))
            {
                predicate = p =>
                (
                    p.Name.Contains(searchTerm) ||
                    p.Description.Contains(searchTerm)
                );
            }

            // Order
            Expression<Func<Auto, object>> order = null;
            var orderBy = request.order.FirstOrDefault();
            if (orderBy != null)
            {
                order = request.columns[orderBy.column].data switch
                {
                    "title" => o => o.Name,
                    "description" => o => o.Description,
                    "from" => o => o.From,
                    "to" => o => o.To,
                    _ => o => o.From,
                };
            };

            var response = new DataTableResponse<Auto, AutoRow>(
                req: request,
                query: this.autoService.GetAll(),
                selector: n => new AutoRow(n, localizer),
                predicate,
                order);

            return new JsonResult(response);
        }

        public IActionResult Create()
        {
            var viewModel = new AutoViewModel();
            CreateSetup(viewModel);

            return View("CreateOrEdit", viewModel);
        }

        [HttpPost]
        public async Task<IActionResult> Create(AutoViewModel newViewModel)
        {
            if (ModelState.IsValid)
            {
                await this.autoService.CreateAsync(newViewModel.ToEntity());
                return RedirectToAction("Index", "Auto");
            }
            else
            {
                CreateSetup(newViewModel);
                return View("CreateOrEdit", newViewModel);
            }

        }

        private void CreateSetup(AutoViewModel autoViewModel)
        {
            ViewData["Title"] = localizer[Lang.CreateTitle];
            ViewData["Action"] = "Create";
            ViewData["Files"] = GetFiles(autoViewModel);
            ViewData["Users"] = GetUsers(autoViewModel);
            ViewData["SecurityProfiles"] = GetSecurityProfiles(autoViewModel);
            ViewData["Targets"] = GetTargets(autoViewModel);

        }


        [HttpGet]
        public IActionResult Edit(string id)
        {
            var auto = this.autoService.GetFull(new Guid(id));
            var viewModel = new AutoViewModel(auto);
            EditSetup(viewModel);

            return View("CreateOrEdit", viewModel);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(AutoViewModel autoViewModel)
        {
            if (ModelState.IsValid)
            {
                await this.autoService.UpdateAsync(autoViewModel.ToEntity());
                return RedirectToAction("Index", "Auto");
            }
            else
            {
                EditSetup(autoViewModel);
                return View("CreateOrEdit", autoViewModel);
            }
        }

        private void EditSetup(AutoViewModel autoViewModel) 
        {
            ViewData["Title"] = localizer[Lang.EditTitle];
            ViewData["Action"] = "Edit";
            ViewData["Files"] = GetFiles(autoViewModel);
            ViewData["Users"] = GetUsers(autoViewModel);
            ViewData["SecurityProfiles"] = GetSecurityProfiles(autoViewModel);
            ViewData["Targets"] = GetTargets(autoViewModel);
        }

        public IActionResult Details(string id)
        {
            var auto = this.autoService.GetFull(new Guid(id));
            var viewModel = new AutoViewModel(auto);
            DetailsSetup(viewModel);

            return View(viewModel);
        }

        private void DetailsSetup(AutoViewModel autoViewModel)
        {
            ViewData["Title"] = localizer[Lang.DetailsTitle];
            ViewData["Files"] = GetFiles(autoViewModel);
            ViewData["Users"] = GetUsers(autoViewModel);
            ViewData["SecurityProfiles"] = GetSecurityProfiles(autoViewModel);
        }


        public async Task<JsonResult> Delete(string id)
        {
            string message = string.Empty;
            try
            {
                await this.autoService.DeleteAsync(new Guid(id));
                message = localizer[Lang.DeleteSuccess];
            }
            catch (NotFoundException ex)
            {
                this.HttpContext.Response.StatusCode = 404;
                message = ex.Message;
            }
            catch (UserException ex)
            {
                this.HttpContext.Response.StatusCode = 500;
                message = ex.Message;
            }
            catch (Exception)
            {
                this.HttpContext.Response.StatusCode = 500;
                message = localizer[Lang.DeleteUnexpectedError];
            }

            return new JsonResult(new
            {
                message = message
            });
        }

        private async Task InfoAutoLoginAsync()
        {
            HttpClient httpClient = new();
            httpClient.BaseAddress = ;
        }
    }
}
