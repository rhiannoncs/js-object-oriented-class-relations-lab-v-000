let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor (name) {
    this.id = ++driverId;
    this.name = name;
    
    store.drivers.push(this);
  }
  
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    });
  }
}

class Passenger {
  constructor (name) {
    this.id = ++passengerId;
    this.name = name;
    
    store.passengers.push(this);
  }
  
  trips() {
    return store.trips.filter(trip => {return trip.passengerId === this.id;});
  }
  
  passengers() {
    const trips = this.trips();
    const passengers = [];
    trips.forEach(function(trip))
    
  }
}

class Trip {
  constructor (driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    
    store.trips.push(this);
  }
  
  driver() {
    const findId = this.driverId;
    return store.drivers.find(function(driver) {
      return driver.id === findId;
    });
    }
    
  passenger() {
    const findId = this.passengerId;
    return store.passengers.find(function(passenger) {
      return passenger.id === findId;
    })
  }
  
}