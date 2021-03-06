import React, { Component } from 'react';
import
  { Grid,
    Button,
    Container,
    Icon,
    Form,
  } from 'semantic-ui-react'
import styled from 'styled-components';
import myImage from './Pic/LogoMoovle_01.png';
import SortMenu from './SortMenu';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class Homepage extends Component {
  state = { item: ''}

  handleChange = (e, { item, value }) => {
    this.setState({ [item]: value })
  }

  handleChangeState = () => {
    this.props.changeText(this.state.item)
  }

  handleSubmit = () => {
    const { text_search } = this.state

    this.setState({ submittedItem: text_search })
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      window.location.href = window.location.href + 'search?q=' + this.state.item
    }
  }

  routeChange(){
    window.location.hash = "search";
    }


  render() {
    const { text_search, submittedItem } = this.state
    return (
      <Container>
        <Layout>
          <Grid centered style={{marginTop:'5em'}}>
            <Grid.Row>
              <img src= {myImage} width = '210px' height = '210px' flide/>
            </Grid.Row>
            <Grid.Row>
              <Form
                style={{
                  width: '75%',
                }}
                onSubmit={this.handleSubmit}>
                <Form.Group
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                  <Icon flipped='horizontally' size='big' disabled name='search' />
                  <Form.Input placeholder='Search..' item='item' value={ text_search } onChange={this.handleChange} width={10} onKeyDown={this.handleKeyDown} />
                </Form.Group>
                  {/* <SortMenu /> */}
                   <Button
                   onClick = {this.handleChangeState}
                   content='SEARCH'
                   as={Link}
                   to={'/search?q=' + this.state.item}>
                   Search
                  </Button>
                </Form>
            </Grid.Row>
          </Grid>
        </Layout>
      </Container>
    );
  }
}

export default Homepage;

Homepage.propTypes = {
  changeText: PropTypes.function
}

const Layout = styled.div`
  padding-top: 5em;
  text-align: center;
`
const TextFont = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 6em;
  padding: 0 0 0.2em 0;
  color: #B50000;
`
const Ellipsis = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
