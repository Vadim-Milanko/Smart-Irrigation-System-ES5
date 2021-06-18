function Field(id, width, length, isActive, sprinklers) {
    this._id = id;
    this._width = width;
    this._length = length;
    this._isActive = isActive;
    this._sprinklers = sprinklers;
}
Field.prototype.getId = function() {
    return this._id;
}
Field.prototype.getWidth = function() {
    return this._width;
}
Field.prototype.getLength = function() {
    return this._length;
}
Field.prototype.getSquare = function() {
    return this._width * this._length;
}
Field.prototype.getSquareAsync = function(callback) {
    setTimeout(function() {
       var square = this._width * this._length;
        callback(square);
    }.bind(this), 5000);
}
Field.prototype.setActive = function() {
    this._isActive = true;
}
Field.prototype.setInactive = function() {
    this._isActive = false
}
Field.prototype.getIsActive = function() {
    return this._isActive;
}
Field.prototype.addSprinkler = function(sprinkler) {
    this._sprinklers.push(sprinkler);
}
Field.prototype.removeSprinkler = function(id) {
    this._sprinklers = this._sprinklers.filter(function(sprinkler) {
        return sprinkler.id !== id;
    });
}
Field.prototype.getSprinklers = function() {
    return this._sprinklers;
}
Field.prototype.triggerSprinklers = function(state) {
    this._sprinklers.forEach(function(sprinkler) {
        sprinkler.onOff(state);
    });
}