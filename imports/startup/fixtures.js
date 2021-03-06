/** ***************************************************************************

NAME: fixtures.js
DESCRIPTION: Configura o startup da App. Faz http call para banco de dados
AUTHOR: Gustavo Kluwe Saudade
LAST MODIFICATION: 25/05/2016

**************************************************************************** **/
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'

import { Rotas } from '../api/rotas';
import { RotasDefault } from '../api/rotasDefault';

Meteor.startup(() => {
  if (Rotas.find().count() === 0) {
    HTTP.call( 'GET', 'http://www.mocky.io/v2/573cbe2b1100003e24aa8b41', {"Content-Type": "application/json"}, function( error, response ) {
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
  if (RotasDefault.find().count() === 0) {
    HTTP.call( 'GET', 'http://www.mocky.io/v2/574600540f0000601eed3dc5', {"Content-Type": "application/json"}, function( error, response ) {
      if ( error ) {
        console.log( error );
      } else {
        var rotasDefault = response.data.rotasDefault;

        rotasDefault.forEach((rotaDefault) => {
          RotasDefault.insert(rotaDefault)
        });
      }
    });
  }
});
