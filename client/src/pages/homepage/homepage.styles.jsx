import styled from 'styled-components';

export const HomepageContainer = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 90vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-repeat: no-repeat;
  overflow-x: hidden;
  background-attachment: fixed;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url('../../assets/a1.jpg');
`;
