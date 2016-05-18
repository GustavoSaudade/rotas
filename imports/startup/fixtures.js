import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'

import { Rotas } from '../api/rotas';

Meteor.startup(() => {
  if (Rotas.find().count() === 0) {
    HTTP.call( 'GET', 'http://www.mocky.io/v2/573cabab110000c321aa8b1d', {"Content-Type": "application/json"}, function( error, response ) {
      if ( error ) {
        console.log( error );
      } else {
        var rotas = response.data.rotas;

        rotas.forEach((rota) => {
          Rotas.insert(rota)
        });
      }
    });

  }
});
