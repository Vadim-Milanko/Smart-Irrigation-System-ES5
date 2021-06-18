function ReserveField(id, width, length, isActive, sprinklers, surface) {
    Field.call(this, id, width, length, isActive, sprinklers);
    this._surface = surface;
}

ReserveField.prototype = Object.create(Field.prototype);
ReserveField.prototype.construcor = ReserveField;
ReserveField.prototype.getSurface = function() {
    return this._surface;
}