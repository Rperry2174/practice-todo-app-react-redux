import React, { Component, PropTypes } from 'react';
import GardenSquare from './GardenSquare';
import Knight from './Knight';

export default class Garden extends Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };

  renderGardenSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    console.log("x: ", x)
    console.log("y: ", y)


    const [knightX, knightY] = this.props.knightPosition;
    const piece = (x === knightX && y === knightY) ?
      <Knight /> :
      null;

    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}>
        <GardenSquare black={black}>
          {piece}
        </GardenSquare>
      </div>
    );
  }

  render() {
    const gardenSquares = [];
    for (let i = 0; i < 64; i++) {
      gardenSquares.push(this.renderGardenSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {gardenSquares}
      </div>
    );
  }



}
