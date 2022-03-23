function ItemListViewModel() {}

const appKnockout = document.querySelector("#knockout-app");
ko.applyBindings(new ItemListViewModel(), appKnockout);
