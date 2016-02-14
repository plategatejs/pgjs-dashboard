'use strict';

import module from 'module';

const GateService = function (GateResource) {
  this.GateResource = GateResource;
};

GateService.$inject = ['GateResource'];

GateService.prototype.open = function () {
  return this.GateResource.get();
};

module.service('GateService', GateService);
