require(["common"],function(){require(["app/theme-init"])}),define("theme-script",function(){}),define("ThemesView",["BaseView","users"],function(e,t){var n=e.extend({el:"#themes-widget",events:{"click .grids__block":"proceed"},proceed:function(e){function i(){function r(e,t){n["row"+(t+1)]=e}var t=$(e.currentTarget),n={};return _.each(t.data("theme-config").split("-"),r),n}e.preventDefault();var n=window.location.pathname,r=t.findWhere({userEmail:_.getCookieValue("user")||localStorage.getItem("user")});r.set("themeConfig",i()).save(),window.location.pathname=n.replace("theme.html","constructor.html")}});return n}),define("app/theme-init",["jquery","ThemesView","helpers"],function(e,t){e(function(){new t})});