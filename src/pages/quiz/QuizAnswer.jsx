import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container as QuizContainer, Header } from "./QuizMain";
import styled from "styled-components";
import homeIcon from "../../assets/images/homeIcon.png";
import correctAnswerIcon from "../../assets/images/correctAnswerIcon.png";
import wrongAnswerIcon from "../../assets/images/wrongAnswerIcon.png";

const Container = styled(QuizContainer)`
  background-color: #fff;
`;

const AnswerContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 198.76px;
    height: 164.003px;
  }

  p {
    margin-top: 40px;
    color: #3986ff;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: 70px; /* 140% */
    letter-spacing: 1.5px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 100px;
  margin-right: 40px;
  gap: 20px;

  button {
    height: 71px;
    padding: 0px 51px;
    border-radius: 20px;
    cursor: pointer;
  }
`;

const ReadBtn = styled.button`
  border: 3px solid #3986ff;
  background-color: #fff;
  color: #3986ff;
  font-family: NanumSquareRound;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
`;

const QuizBtn = styled.button`
  border: none;
  background-color: #3986ff;
  color: #fff;
  font-family: NanumSquareRound;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px; /* 133.333% */
`;

function QuizAnswer() {
  const navigate = useNavigate();
  const { newsId } = useParams();
  const { answer } = useParams();
  return (
    <Container>
      <Header>
        <p>알쏭달쏭 경제 퀴즈</p>
        <button onClick={() => navigate(`/`)}>
          <img src={homeIcon} alt="homeIcon" />
        </button>
      </Header>
      <AnswerContainer>
        {answer === "true" ? (
          <>
            <img src={correctAnswerIcon} alt="correctAnswerIcon" />
            <p>우와! 정답이야!</p>
          </>
        ) : (
          <>
            <img src={wrongAnswerIcon} alt="wrongAnswerIcon" />
            <p>이런...틀렸어..</p>
          </>
        )}
      </AnswerContainer>
      <BtnWrapper>
        <ReadBtn onClick={() => navigate(`/news/${newsId}`)}>
          경제 돋보기 다시 읽기
        </ReadBtn>
        <QuizBtn onClick={() => navigate(`/quiz/${newsId}`)}>
          경제 퀴즈 다시 풀기
        </QuizBtn>
      </BtnWrapper>
    </Container>
  );
}

export default QuizAnswer;
