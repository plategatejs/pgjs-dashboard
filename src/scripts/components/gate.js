'use strict';

import module from 'module';

const controller = function (GateService) {
  this.open = () => GateService.open();
};

controller.$inject = ['GateService'];

module.component('gate', {
  controller,
  controllerAs: '$ctrl',
  template: () => require('template!gate.html')
});
