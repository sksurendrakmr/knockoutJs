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

  /**
   * ko.observable will create a new observable.
   * It will takes an argument which is initial state.
   */
  self.firstName = ko.observable("sk");
  self.count = ko.observable(0);

  /**
   * The way we update observables in knockout by calling
   * the variable as a function.
   */
  self.firstName("suri");

  //To get the value
  self.firstName(); //calling without argument

  self.increase = function () {
    var currentValue = self.count();
    self.count(currentValue + 1);
  };

  self.decrease = function () {
    var currentValue = self.count();
    if (currentValue > 0) {
      self.count(currentValue - 1);
    }
  };
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

/**
 * Three things that knockout gives us (building block of knockoutjs) :-
 * 1. Concept of an observable.
 * 2. applyBindings -> get the knockout initialize on the page and get it wired up.
 *                     Typically, we call it once unless we have components entering
 *                     leaving page.
 * 3. data-bind -> its an attribute that we put on anywhere in the dom and that's
 *                  how we get information from the javascript directly into the dom
 *                  without needing to manually select elements and do the stuff by ourself.
 *
 */
