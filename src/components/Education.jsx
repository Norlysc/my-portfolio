import styled from 'styled-components';
import useLang from '../hooks/useLang';
import StyledContainer from './elements/StyledContainer';

const Container = styled(StyledContainer)`
  flex-direction: column;

  h3 {
    color: var(--white);
  }

  ul {
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    }
  }

  a {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    font-weight: 700;
    background-color: var(--oxford-blue);
    box-shadow: 3px 3px 5px 1px #00000032;

    img {
      border-radius: 8px;
      font-size: clamp(0.9rem, 2vw, 1.2rem);
    }
  }
`;

export default function Education({ id }) {
  const { lang } = useLang();

  return (
    <Container id={id}>
      <h3>{lang.education.title}</h3>
      <ul>
        <li title='Valle del Momboy'>
          <a href='https://uvm.edu.ve/' target='_blank' rel='noreferrer'>
            <img
              src={require('../assets/images/valle-del-momboy.png')}
              alt='Valle del Momboy'
              loading='lazy'
              style={{
                width: '80px',
                height: '80px',
              }}
            />
            <p>{lang.education.valleDelMomboy}</p>
          </a>
        </li>

        <li title='Digital House'>
          <a href='https://www.digitalhouse.com/' target='_blank' rel='noreferrer'>
            <img
              src={require('../assets/images/digital-house.png')}
              alt='Digital House'
              loading='lazy'
              style={{
                width: '80px',
                height: '80px',
              }}
            />
            <p>{lang.education.digitalHouse}</p>
          </a>
        </li>

        <li title='Jesús Enrique Lossada'>
          <a href='http://www.iujel.com.ve/' target='_blank' rel='noreferrer'>
            <img
              src={require('../assets/images/jesus-enrique-lossada.png')}
              alt='Jesús Enrique Lossada'
              loading='lazy'
              style={{
                width: '80px',
                height: '80px',
              }}
            />
            <p>{lang.education.jesusEnriqueLossada}</p>
          </a>
        </li>
      </ul>
    </Container>
  );
}
