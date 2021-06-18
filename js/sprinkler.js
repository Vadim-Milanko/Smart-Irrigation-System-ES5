function Sprinkler(id, power, capacity, sensors) {
    this._id = id;
    this._power = power;
    this._capacity = capacity;
    this._sensors = sensors;
}
Sprinkler.prototype.getId = function() {
    return this._id;
}
Sprinkler.prototype.getPower = function() {
    return this._power;
}
Sprinkler.prototype.setCapacity = function(capacity) {
    this._capacity = capacity;
}
Sprinkler.prototype.getCapacity = function() {
    return this._capacity;
}
Sprinkler.prototype.addSensor = function(sensor) {
    this._sensors.push(sensor);
}
Sprinkler.prototype.removeSensor = function(id) {
    this._sensors = this._sensors.filter(function(sensor) {
        return sensor.id !== id;
    });
}
Sprinkler.prototype.getSensors = function() {
    return this._sensors;
}
Sprinkler.prototype.onOff = function(state) {
    if (state === false) {
        this._capacity = 0;
        return;
    }

    var MIN_ENABLE_SENSITIVITY = 2;
    var MAX_ENABLE_SENSITIVITY = 4;
    var MIN_ENABLE_CAPACITY = 30;
    var AVERAGE_ENABLE_CAPACITY = 55;
    var MAX_ENABLE_CAPACITY = 80;

    var sprinklerSensorsSensitivity = this._sensors.map(function(sensor) {
        return sensor.getSensitivity();
    });
    var sensorsSensitivity = sprinklerSensorsSensitivity.reduce(function(sum, sensitivity) {
        return sum + sensitivity;
    }, 0);
    var averageSensitivity = sensorsSensitivity / this._sensors.length;

    if (averageSensitivity >= MIN_ENABLE_SENSITIVITY && averageSensitivity <= MAX_ENABLE_SENSITIVITY) {
        this.setCapacity(AVERAGE_ENABLE_CAPACITY);
    } else if (averageSensitivity < MIN_ENABLE_SENSITIVITY) {
        this.setCapacity(MAX_ENABLE_CAPACITY);
    } else {
        this.setCapacity(MIN_ENABLE_CAPACITY);
    }
}