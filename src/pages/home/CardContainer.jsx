import React from "react";
import CardComponent from "../../components/home/CardComponent";
import stlyes from "../../styles/home/Home.module.css";

const HomePage = () => {
  return (
    <div className={stlyes.container}>
      <CardComponent
        header="기초개념"
        title="주식이 뭐예요?"
        subtitle="주식의 다양한 사례로 개념을 다져봐요."
      />
      <CardComponent
        header="심화개념"
        title="주식은 어떻게 하나요?"
        subtitle="주식에 접근하는 다양한 방법을 배워봐요."
      />
      <CardComponent
        header="실전개념"
        title="주식을 잘하는 방법이 궁금해요"
        subtitle="주식을 하기 위한 기업 분석 방법 등을 배워요."
      />
      <CardComponent
        header="기초개념"
        title="주식이 뭐예요?"
        subtitle="주식의 다양한 사례로 개념을 다져봐요."
      />
      <CardComponent
        header="심화개념"
        title="주식은 어떻게 하나요?"
        subtitle="주식에 접근하는 다양한 방법을 배워봐요."
      />
      <CardComponent
        header="실전개념"
        title="주식을 잘하는 방법이 궁금해요"
        subtitle="주식을 하기 위한 기업 분석 방법 등을 배워요."
      />
    </div>
  );
};

export default HomePage;
