import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQoute } from '../../actions';
import styled from 'styled-components';
import Spinner from '../ui/Spinner';
import UseAnimations from 'react-useanimations';
import facebook from 'react-useanimations/lib/facebook'
import twitter from 'react-useanimations/lib/twitter'


const Qoute = styled.div`
  width: 100%;
  height: 100vh;
`;

const QouteBlock = ({ getQoute, qouteRes, bgColor }) => {
  useEffect(() => {
    getQoute();
  }, [getQoute]);

  const onClickHandler = () => {
    getQoute();
  };

  const { author, quote } = qouteRes;

  if (qouteRes.length === 0) {
    return <Spinner />;
  }

  return (
    <Qoute style={{ background: `${bgColor}` }}>
      <figure id='quote-box'>
        <blockquote cite='!#' id='text'>
          {quote}
        </blockquote>
        <figcaption id='author'> &mdash; {author}</figcaption>
      </figure>
      <button onClick={onClickHandler} id='new-quote'>
        New Qoute
      </button>
      <div>
        <a href='https://twitter.com' id='tweet-quote'>
          <UseAnimations animation={twitter} size={30} />
        </a>
        <a href='https://facebook.com' id='facebook-quote'>
        <UseAnimations animation={facebook} size={30} />
        </a>
      </div>
    </Qoute>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    qouteRes: state.randomQoute.qoute,
    bgColor: state.randomQoute.color
  };
};

export default connect(mapStateToProps, { getQoute })(QouteBlock);
