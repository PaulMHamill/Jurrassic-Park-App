const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

//   - Add a dinosaur to its collection of dinosaurs
Park.prototype.add = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

// - Remove a dinosaur from its collection of dinosaurs
Park.prototype.remove = function (dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

// - Find the dinosaur that attracts the most visitors
Park.prototype.findMostAttractiveDinosaur = function () {
    let mostAttractiveDinosaur = this.dinosaurs[0];

    for (const dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > mostAttractiveDinosaur.guestsAttractedPerDay) {
            mostAttractiveDinosaur = dino;
        }
    }
    return mostAttractiveDinosaur;
}

// - Find all dinosaurs of a particular species
Park.prototype.findBySpecies = function (species) {
    const foundDinosaurs = [];

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            foundDinosaurs.push(dinosaur);
        }
    }
    return foundDinosaurs;
}

// - Calculate the total number of visitors per day
Park.prototype.calculateTotalVisitors = function () {
    let totalDailyVisitors = 0;

    for (const dinosaur of this.dinosaurs) {
        totalDailyVisitors += dinosaur.guestsAttractedPerDay;
    }
    return totalDailyVisitors;
}

// - Calculate the total number of visitors per year
Park.prototype.calculateTotalVisitorsPerYear = function () {
    return this.calculateTotalVisitors() * 365;
}

// - Calculate the total revenue from ticket sales for one year
Park.prototype.calculateTotalYearlyRevenue = function () {
    return this.ticketPrice * this.calculateTotalVisitorsPerYear()
}

Park.prototype.removeBySpecies = function (species) {
    const newDinosaurs = [];
  
    for (const dinosaur of this.dinosaurs) {
      if (dinosaur.species !== species) {
        newDinosaurs.push(dinosaur);
      }
    }
  
    this.dinosaurs = newDinosaurs;
  }


  Park.prototype.numberOfDinosaursByDiet = function () {
    const numberOfDinosaursByDiet = {};
  
    for (const dinosaur of this.dinosaurs) {
      if (numberOfDinosaursByDiet[dinosaur.diet]) {
        numberOfDinosaursByDiet[dinosaur.diet] += 1;
      }
      else {
        numberOfDinosaursByDiet[dinosaur.diet] = 1;
      }
    }
  
    return numberOfDinosaursByDiet;
  }

module.exports = Park;