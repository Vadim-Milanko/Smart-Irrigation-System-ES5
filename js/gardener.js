function Gardener(name, department, employeedId, availableField) {
    this._name = name;
    this._department = department;
    this._employeedId = employeedId;
    this._availableField = availableField;
}
Gardener.prototype.getName = function() {
    return this._name;
}
Gardener.prototype.setDepartment = function(department) {
    this._department = department;
}
Gardener.prototype.getDepartment = function() {
    return this._department;
}
Gardener.prototype.getEmployeedId = function() {
    return this._employeedId;
}
Gardener.prototype.setAvaiableField = function(field) {
    this._availableField = field;
}
Gardener.prototype.getAvailableField = function() {
    return this._availableField;
}
Gardener.prototype.onWatering = function(state) {
    this._availableField.triggerSprinklers(state);
}