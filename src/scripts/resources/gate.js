'use strict';

import module from 'module';

const GateResourceFactory = ($resource) => {
  return $resource(
    '/api/gate/open',
    null,
    {
      'get': {
        method: 'GET'
      }
    }
  );
};

GateResourceFactory.$inject = ['$resource'];

module.factory('GateResource', GateResourceFactory);
