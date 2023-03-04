import styled from "styled-components";
export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
flex:1;
padding-right: 5rem ;
h2
{
    font-weight: lighter;
}
`;

export const Image =styled.div `
flex: 1;
overflow: hidden;
img{ 
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`;
export const Hide =styled.div`
overflow: hidden;
`
