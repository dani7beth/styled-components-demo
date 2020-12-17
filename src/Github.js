import styled, {keyframes} from 'styled-components';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import { Card, Grid, Icon } from 'semantic-ui-react';
import {device} from './styled/sizes'

export default () =>{

  const [repos, setRepos] = useState([]);

  const getRepos = async () =>{
    let res = await Axios.get(
      'https://api.github.com/users/dani7beth/repos?sort=created'
      );
      console.log(res.data);
      setRepos(res.data);
  }

  useEffect(()=>{
    getRepos();
  },[])

  return (
    <Grid>
      <Grid.Row>
        {repos &&
          repos.map((r) => (
            <Grid.Column key={r.id} width={4}>
              <StyledCard color="red">
                <Card.Content>
                  <Card.Header>
                    <Truncated>
                      <Star>
                        <Icon name="star" />
                      </Star>
                      {r.full_name}
                    </Truncated>
                  </Card.Header>
                  <Card.Meta>
                    <Truncated wrap>{r.description}</Truncated>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <ButtonLink href={r.html_url} target="_blank">
                    view
                  </ButtonLink>
                </Card.Content>
              </StyledCard>
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  );
};

const ButtonLink = styled.a`
  float: right;
  padding: 10px 30px;
  color: white !important;
  background-color: black;
`;

const StyledButton = styled(ButtonLink)`
  display: flex;
  background: #234567;
  color: white;
  padding: 15px 30px !important;
  justify-content: center;
  transition: background .2s ease;
  cursor: pointer;

  &:hover{
    background: #765432;
    transition: background .2s ease;
  }
`;



const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to{
    transform: rotate(360deg);
  }
 `;

const StyledCard = styled(Card)`
  height: 200px !important;
  margin-bottom: 10px !important;
  @media ${device.laptop}{
    min-height: 400px !important;
    background-color: blue !important;
  }
  @media ${device.tablet}{
    min-height: 400px !important;
    background-color: red !important;
  }
  @media ${device.mobile}{
    min-height: 400px !important;
    background-color: green !important;
  }
`;

const Truncated = styled.div`
  white-space: ${(props)=> props.wrap ? 'wrap' : 'nowrap'};
  overflow: hidden;
  text-overflow: ellipsis;

`;

const Star = styled.div`
  display: inline-block;
  color: yellow;
  text-shadow: 1px 2px 1px black;
  // animation: ${rotate360} 2s linear infinite;
`;