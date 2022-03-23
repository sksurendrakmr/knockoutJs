function InventoryViewModel() {
  var self = this;

  var iconTypes = [
    { icon: "icon-bone", text: "Bone" },
    { icon: "icon-ball", text: "Ball" },
    { icon: "icon-circle", text: "Circle" },
    { icon: "icon-rabbit", text: "Rabbit" },
  ];

  //make our inventory list

  /**
   * since we told knockout its an array, under the hood it has
   * better mechanism for tracking changes that happens and with
   * that better methods it can make the dom updates more efficiently.
   *
   * To update observable array, we have a different method we can
   * use to update the state of the array. (called push)
   */
  self.inventory = ko.observableArray([]); //initialize with empty array

  self.addItem = function () {
    var index = Math.floor(Math.random() * iconTypes.length);
    self.inventory.push(iconTypes[index]);
  };

  /**
   * The first argument it will come here is the data.
   * The second will be the one which we attach in the element.
   * Not necessarily the element itself but the event and from the
   * event we can grab a reference to that element that was clicked.
   */
  self.removeItem = function (data, event) {
    var indexToRemove = event.target.getAttribute("item-index");
    self.inventory.splice(indexToRemove, 1);
  };
}

ko.applyBindings(
  new InventoryViewModel(),
  document.querySelector("#knockout-app")
);

/**
 * Knockout has utility called observableArray.
 * more like observable but more super powerful
 * for the intent of using arrays and list.
 * E.g iterating through something, showing cart items,
 * showing blog posts etc.
 *
 * Knockout has a built-in opinoin on how we should handle
 * arrays and it's backed up by some methods that are included
 * on it and some performance improvments that we get by using it.
 */

/**
 * we need to use $parent.removeItem because,
 * that button currently inside for loop and that is
 * in other context.
 * Meaning we want to call removeItem() which is in InventoryViewModel
 * that's why we need to access it with $parent.removeItem.
 *
 *To remove an item, we need to tell it which one we are going to
 *remove and one way we can do that by attaching extra data to the
 * element which we are clicking so that when we click, we kinda tell
 * which one we need to remove.
 *
 * The ability to bind data attribute to an element.
 * with attr and passing key-value pair.
 * E.g attr: {'index-value',$index}
 *
 * Anytime we want to add multiple data binding to a thing, we
 * can comma seperate them.
 *
 * visible data-bind will either make display none or block.
 * if else, remove the element from the dom
 */
