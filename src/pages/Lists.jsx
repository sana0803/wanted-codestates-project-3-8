import React from 'react';
import styled from 'styled-components';
import DataList from '../components/DataList';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Lists = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Nav>
        <IoIosArrowBack size={24} onClick={() => navigate('/')} />
        <h2>데이터 목록</h2>
      </Nav>
      <ul>
        <DataList
          title={'속리산 숲 체험 휴양 마을'}
          address={'충청북도 보은군 속리산면 속리산로 596'}
          tel={'043-540-3220'}
        />
      </ul>
    </Wrap>
  );
};

const Nav = styled.nav`
  display: flex;
  padding-bottom: 10px;
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  box-sizing: border-box;
  line-height: 1.5;
  svg {
    transform: translateX(10px);
    transition: all 0.2s;
    cursor: pointer;
    :hover {
      transform: translateX(0px);
    }
  }
  h2 {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }
`;

const Wrap = styled.div`
  max-width: 428px;
  margin: 20px auto;
`;

export default Lists;