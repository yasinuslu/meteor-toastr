Package.describe({
  "summary": "JavaScript library for Gnome / Growl type non-blocking notifications."
});

Package.on_use(function (api) {

  api.use("jquery", "client");

  api.add_files("lib/toastr.js", "client");
  api.add_files("lib/toastr.css", "client");

});