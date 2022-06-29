import React, { Component } from 'react';
import { FaHeart } from 'react-icons/fa';
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from 'react-icons/fa';

class Icons extends Component {
  render() {
    return (
    <div>
      <FaHeart />
      <BiMessageRounded />
      <FaRetweet />
    </div>
    ) 
  }
}

export default Icons