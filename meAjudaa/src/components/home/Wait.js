import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react'

import './wait.scss';

class Wait extends Component {
  render() {
    return (
      <div>

        <Grid columns={2}>
          <Grid.Column>
            <p className='message'>
              Faça parte da melhor comunidade "Tira Dúvidas" do Momento !
            </p>

            <p className='message'>
              Inscreva-se ja !!
            </p>

          </Grid.Column>
        </Grid> </div>
    );
  }
}

export default Wait;
