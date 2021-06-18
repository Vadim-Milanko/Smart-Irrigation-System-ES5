function Sensor(id, type) {
    this._id = id;
    this._type = type;
}
Sensor.prototype.getId = function() {
    return this._id;
}
Sensor.prototype.getType = function() {
    return this._type;
}
Sensor.prototype.getSensitivity = function() {
    return randomInteger(1, 5);
}
