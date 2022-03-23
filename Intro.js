/**
 * 1. create a viewModel
 * ViewModel is an instance of a class that gets bound to chunk of html.
 * Inside of that class / function, we can have data and that data can then
 * interact with HTML and HTML can interact with the data.
 * (This concept is called two-way binding.)
 */

function CounterViewModel() {
  //recommended and very common to have reference of this
  //function level scope.
  var self = this;
}

/**
 * Wire up the knockout functionality to the html dom.
 * When we load knockout on the page, we have access to
 * window level library called 'ko'
 *
 * In applyBindings() arguments
 * 1. It takes in an instance of a viewModel.
 * 2. selector -> which will tell us which node inside
 * the dom tree to apply to.
 *
 */

ko.applyBindings(
  new CounterViewModel(),
  document.querySelector("#knockout-app")
);

/**
 * Now to verify above changes, we will create an
 * observable.
 *
 * Observable is a piece of state where a knockout under
 * the hood track changes of this.
 *
 * If an observable changes, knockout knows to update the
 * dom.
 */
