define(["BaseWidgetView"],function(e){var t=e.extend({tagName:"hr",initialize:function(){this.baseInitialize()},render:function(){return this.$el.append(this.editView.render().el),this}});return t});