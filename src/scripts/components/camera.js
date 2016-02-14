'use strict';

import module from 'module';

const controller = function () {
  const img = document.getElementById('camera-img');

  const updateSrc = (i) => () => {
    img.setAttribute('src', `/api/camera?${i}`);
    setTimeout(updateSrc(++i), 1000);
  };

  updateSrc(0)();
};

controller.$inject = ['$element'];

module.component('camera', {
  controller,
  controllerAs: '$ctrl',
  template: () => require('template!camera.html')
});
