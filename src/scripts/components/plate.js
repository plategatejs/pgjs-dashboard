'use strict';

import module from 'module';

const controller = function (PlatesService) {
  this.delete = () => PlatesService.delete(this.identifier);
};

controller.$inject = ['PlatesService'];

module.component('plate', {
  controller,
  controllerAs: '$ctrl',
  template: () => require('template!plate.html'),
  bindings: {
    identifier: '='
  }
});
