import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';

const NameSearchDiv = styled.div`
    color: white;
    background-color: grey;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const SearchTitle = styled.h3`

`
const SearchInput = styled.input`
    height: 30px;
    width: 80%;
    margin-left: 10px;
    border-radius: 10px;
`
const NameSearch = props => {
    return (
        <NameSearchDiv className="nameForm">
            <SearchTitle>Search Personnel Data by Name: </SearchTitle>
            <SearchInput type="text" />
        </NameSearchDiv>    
    );
}



export default NameSearch;