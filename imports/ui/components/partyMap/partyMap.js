import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';

import template from './partyMap.html';

class PartyMap {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8,
      events: {},
      location: {
        lat: 0,
        lon: 0
      }
    };

    this.marker = {
      options: {
        draggable: true
      },
      events: {}
    };
  }
}

const name = 'partyMap';

// create a module
export default angular.module(name, [
  angularMeteor,
  'nemLogging', // https://github.com/angular-ui/angular-google-maps/issues/1633
  'uiGmapgoogle-maps'
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  bindings: {
    location: '='
  },
  controller: PartyMap
});
