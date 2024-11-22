import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import homeIcon from "../../assets/images/homeIcon.png";
import correctIcon from "../../assets/images/correctIcon.png";
import wrongIcon from "../../assets/images/wrongIcon.png";

const Container = styled.div`
  width: 100%;
  min-width: 1194px;
  height: 100vh;
  min-height: 834px;
  background-color: #f6f6f6;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 46px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(73, 73, 73, 0.15);
  position: relative;
  text-align: center;

  p {
    color: #494949;
    font-family: "yg-jalnan";
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 70px; /* 200% */
    letter-spacing: 1.05px;
  }

  button {
    display: block;
    background: none;
    border: none;
    position: absolute;
    width: 40px;
    top: 25px;
    left: 46px;
    cursor: pointer;
  }
`;

const Comment = styled.div`
  padding: 4px 31px 5px 26px;
  align-items: center;
  border-radius: 20px;
  background-color: #fff;
  width: 385px;
  height: 70px;
  margin-top: 50px;
  margin-left: 720px;

  p {
    color: #494949;
    font-family: NanumSquareRound;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: 70px; /* 233.333% */
    letter-spacing: 0.9px;
  }
`;

const Question = styled.div`
  margin: 50px auto;
  display: flex;
  width: 1070px;
  height: auto;
  padding: 20px 120px 20px 120px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #fff;

  p {
    color: #494949;
    font-family: Pretendard-Bold;
    font-size: 45px;
    font-style: normal;
    font-weight: 800;
    line-height: 70px;
    letter-spacing: 1.35px;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;

const AnswerBtnWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 151px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

function QuizMain() {
  const navigate = useNavigate();

  const QuizList = [
    "물가는 사람들이 물건을 살 때 내는 돈의 평균적인 가격을 말한다.",
  ];
  return (
    <Container>
      <Header>
        <p>알쏭달쏭 경제 퀴즈</p>
        <button onClick={() => navigate(`/`)}>
          <img src={homeIcon} alt="homeIcon" />
        </button>
      </Header>
      <Comment>
        <p>알쏭달쏭 ~ 뭐가 정답일까 ~ ?</p>
      </Comment>
      <Question>
        <p>{QuizList[0]}</p>
      </Question>
      <AnswerBtnWrapper>
        <button>
          <img src={correctIcon} alt="correctIcon" />
        </button>
        <button>
          <img src={wrongIcon} alt="wrongIcon" />
        </button>
      </AnswerBtnWrapper>
    </Container>
  );
}

export default QuizMain;
