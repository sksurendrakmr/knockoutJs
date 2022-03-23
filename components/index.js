function ItemListViewModel() {
  var self = this;
  self.items = ko.observableArray([]);

  self.fetchItems = function (callback) {
    setTimeout(function () {
      var MOCK_RESPONSE = {
        items: ["I", "Found", "Some", "Items"],
      };
      callback(MOCK_RESPONSE.items);
    }, 400);
  };

  self.onNewItems = function (newItems) {
    self.items.push(newItems);
  };
}

ko.components.register("loading-button", {
  // template:'<button></button>' //single line
  template: [
    "<button class='LoadingButton' data-bind='click: onClick, css:{loading:isLoading}'>",
    "<span data-bind='text:buttonText'>Get Items</span>",
    "</button>",
  ].join(""),
  viewModel: function (params) {
    var self = this;
    self.buttonText = ko.observable(params.buttonText);

    self.isLoading = ko.observable(false);

    self.onClick = function () {
      self.isLoading(true);
      params.action(function (data) {
        self.isLoading(false);
        params.onDone(data); //sending data back to parent
      });
    };
  },
});

const appKnockout = document.querySelector("#knockout-app");
ko.applyBindings(new ItemListViewModel(), appKnockout);

/**
 * dynamic css -> css:{"classname":when}
 * onDone callback we are using -> similar to callback from parent meaning sending some thing to parent
 */
