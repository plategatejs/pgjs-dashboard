'use strict';

import EventEmitter from 'events';
import module from 'module';

const PlatesService = function (PlatesResource) {
  this.GateResource = PlatesResource;
};

PlatesService.$inject = ['PlatesResource'];

PlatesService.prototype = Object.create(EventEmitter.prototype);
PlatesService.prototype.constructor = PlatesService;

PlatesService.prototype.load = function () {
  this.GateResource.query().$promise.then((plates) => {
    this.emit('plates', plates);
  });
};

PlatesService.prototype.delete = function (identifier) {
  this.GateResource.delete({ identifier }).$promise.then(() => this.load());
};

PlatesService.prototype.add = function (identifier) {
  this.GateResource.post({ identifier }).$promise.then(() => this.load());
};

module.service('PlatesService', PlatesService);
