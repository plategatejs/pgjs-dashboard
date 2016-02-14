'use strict';

import module from 'module';

const PlatesResourceFactory = ($resource) => {
  return $resource(
    '/api/plates',
    null,
    {
      'get': {
        method: 'GET'
      },
      'delete': {
        method: 'DELETE',
        url: '/api/plates/:identifier',
        params: {
          identifier: '@identifier'
        }
      },
      'post': {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        params: {
          identifier: '@identifier'
        }
      }
    }
  );
};

PlatesResourceFactory.$inject = ['$resource'];

module.factory('PlatesResource', PlatesResourceFactory);
