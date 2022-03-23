function InventoryViewModel() {
  var self = this;

  var iconTypes = [
    { icon: "icon-bone", text: "Bone" },
    { icon: "icon-ball", text: "Ball" },
    { icon: "icon-circle", text: "Circle" },
    { icon: "icon-rabbit", text: "Rabbit" },
  ];
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
 */
