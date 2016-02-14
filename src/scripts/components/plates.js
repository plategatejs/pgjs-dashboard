'use strict';

import module from 'module';

const controller = function (PlatesService) {
  this.plates = [];

  PlatesService.on('plates', (plates) => {
    this.plates = plates;
  });

  PlatesService.load();

  this.isAddDisabled = () => (this.identifier || '').length < 3;

  this.add = () => {
    PlatesService.add(this.identifier);
    this.identifier = '';
  };
};

controller.$inject = ['PlatesService'];

module.component('plates', {
  controller,
  controllerAs: '$ctrl',
  template: () => require('template!plates.html')
});
