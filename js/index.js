
var sensor1 = new Sensor('1001', 'humidity');
var sensor2 = new Sensor('1002', 'humidity');
var sensorsArr = [sensor1, sensor2];

var sprinkler1 = new Sprinkler('001', 220, 80, sensorsArr);
var sprinkler2 = new Sprinkler('002', 220, 80, sensorsArr);
var sprinklersArr = [sprinkler1, sprinkler2];


var mainField = new Field('1', 100, 200, true, sprinklersArr);
var reserveField = new ReserveField('21', 80, 180, false, sprinklersArr, 'grass');
var headGardener = new Gardener('Bob', 'staff', '100', mainField);
var sunSensor = new Sensor('1000', 'sun');
var additionalSprinkler = new Sprinkler('010', 220, 80, sensorsArr);

console.log(mainField);
console.log(reserveField);
console.log(headGardener);
console.log(sunSensor);
console.log(additionalSprinkler);

headGardener.onWatering(true);
mainField.addSprinkler(additionalSprinkler)


mainField.getSquareAsync(function(square) {
    console.log(square);
    reserveField.getSquareAsync(function(square) {
        console.log(square);
    })
});
