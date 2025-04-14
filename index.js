const restauran = {
  name: "Marugame Udon",
  location: 'Jakarta',
  reservations: [],
  reserveTable(tableNum, name) {
    console.log(`${name} reserved a table at ${this.name}, table number ${tableNum}`);
    this.reservations.push({table: tableNum, name})
  },
};


const restauranBogor = {
  owner: "Sasa Muhammad Said",
  name: "Bumi Aki",
  location: "Bogor",
  reservations: []
}

// call object
restauran.reserveTable.call(restauranBogor, 5, 'Agus');
const reservationInfoBogor = [3, "Harun"];
restauran.reserveTable.call(restauranBogor, ...reservationInfoBogor);
console.log(restauranBogor);  


const restauranPuncak = {
  name: "Bumi Aki Puncak",
  location: "Puncak Pass Kab. Bogor",
  reservations: []
}

//apply object
const reservationInfo = [8, "Ucup Simon"];
restauran.reserveTable.apply(restauranPuncak, reservationInfo);
const reservationInfo2 = [5, "Naina"];
restauran.reserveTable.apply(restauranPuncak, reservationInfo2);
console.log(restauranPuncak);

const restauranCibinong = {
  name: "Bumi Aki Cibinong",
  location: "Cibinong Kab. Bogor",
  reservations: []
}

// Bind Object
const reserveTableAtRestaurant = restauran.reserveTable.bind(restauranCibinong);
reserveTableAtRestaurant(15, 'Mamat');
console.log(restauranCibinong);

