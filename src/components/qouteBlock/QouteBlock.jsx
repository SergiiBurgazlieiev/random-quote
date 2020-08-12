import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQoute} from '../../actions';
import styled from 'styled-components'; 

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
  return (
    <Qoute style={{ background: `${bgColor}` }}>
      <figure id='quote-box'>
        <blockquote cite=''>{quote}</blockquote>
        <figcaption> &mdash; {author}</figcaption>
      </figure>
      <button onClick={onClickHandler}>New Qoute</button>
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
