import styled, { css } from "styled-components";

const HeroWrapper = styled.div`
  padding: 0 20px;
  height: 270px;
  background-color: #dbebf7f0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
    gap: 100px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const HeroText = styled.h1`
  color: #2676a1e6;
  text-shadow: 2px 1px 1px #01263ae6;
  text-align: center;
  font-size: 2rem;
  filter: drop-shadow(3px 3px 1px rgba(79, 76, 76, 0.493));
  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 6px;
  border: none;
  padding: 5px;
  background-color: #2676a1e6;
  font-weight: bold;
  transition: all 0.35s;
  color: white;
  &:hover {
    text-decoration: underline;
    box-shadow: 2px 2px 4px rgb(49, 49, 49);
    background-color: #031d2be6;
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 130px;
  }
`;

const HeroImg = styled.img`
  width: 250px;
  filter: drop-shadow(13px 13px 1px $shadowBlackAlpha);
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
const Hero = ({ text, img, setReservationModalOpen }) => {
  const onHandleBookBtn = () => {
    setReservationModalOpen(() => true);
  };

  return (
    <HeroWrapper>
      <TextWrapper>
        <HeroText>{text}</HeroText>
        <Button onClick={onHandleBookBtn}>Book your table</Button>
      </TextWrapper>
      <HeroImg src={img}></HeroImg>
    </HeroWrapper>
  );
};

export default Hero;
