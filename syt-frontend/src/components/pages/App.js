import React from 'react';
import {Container, Segment, Table} from 'semantic-ui-react';
import Login from '../widgets/Login';

function App() {
  return (
    <div>
    <Login></Login>
    <Container>
      <Segment.Group>
      <Segment>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nintendo ID</Table.HeaderCell>
              <Table.HeaderCell>Turnip Price</Table.HeaderCell>
              <Table.HeaderCell>Time Left</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>SW-12345-32143</Table.Cell>
              <Table.Cell>500</Table.Cell>
              <Table.Cell textAlign='right'>1234</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
      </Segment.Group> 
    </Container>
    </div>
  );
}

export default App;
