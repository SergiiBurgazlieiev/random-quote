import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQoute } from '../../actions';
import styled from 'styled-components';
import Spinner from '../ui/Spinner';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

const Qoute = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #quote-box {
    padding: 2rem;
    width: 50%;
    height: auto;
    border-radius: 0.5rem;
    background: #f2f2f2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #author,
    #text {
      width: 100%;
      font-size: 1.3rem;
      font-weight: 400;
      letter-spacing: 1px;
      line-height: 150%;
    }
    #text {
      text-align: left;
    }
    #author {
      text-align: end;
      margin: 1rem 0 0 0;
    }
  }

  .social {
    padding: 1rem 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    font-size: 2.5rem;
  }

  #new-quote {
    color: #f2f2f2;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    letter-spacing: 1px;
    border-radius: 0.5rem;
    transition: all 0.4s ease;
  }
  #new-quote:focus {
    outline: none;
  }

  #facebook-quote:hover,
  #tweet-quote:hover,
  #new-quote:hover {
    transform: scale(0.95);
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      1px 1px 20px 2px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #000000, 1px 1px 20px 2px rgba(0, 0, 0, 0);
  }

  #facebook-quote,
  #tweet-quote {
    margin: 0 1rem 0 0;
    border-raduis: 5px;
    transition: all 0.4s ease;
  }
`;

const QouteBlock = ({ getQoute, qouteRes, bgColor }) => {
  useEffect(() => {
    getQoute();
  }, [getQoute]);

  const onClickHandler = () => {
    getQoute();
  };

  const { content, author } = qouteRes;

  if (qouteRes.length === 0) {
    return <Spinner />;
  }

  return (
    <Qoute style={{ background: `${bgColor}`, color: `${bgColor}` }}>
      <figure id='quote-box'>
        <blockquote cite='' id='text'>
          {content}
        </blockquote>
        <figcaption id='author'> &mdash; {author}</figcaption>
        <div className='social'>
          <button
            onClick={onClickHandler}
            id='new-quote'
            style={{ backgroundColor: `${bgColor}` }}
          >
            New Qoute
          </button>
          <div className='icons'>
            <a href='https://twitter.com/intent/tweet' id='tweet-quote'>
              <FaTwitterSquare style={{ color: `${bgColor}` }} />
            </a>
            <a href='https://facebook.com' id='facebook-quote'>
              <FaFacebookSquare style={{ color: `${bgColor}` }} />
            </a>
          </div>
        </div>
      </figure>
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