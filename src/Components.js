import React from 'react'
import styled from 'styled-components';

export const HoverDiv = styled.div`
	width: 100%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 50px;
`;

export const SignUpButton = styled.button`
	color: white;
	border: 1px solid transparent;
	border-radius: .3rem;
	background-color: #1a95ff;
	padding: .6rem;
	box-sizing: border-box;
	cursor: pointer;
	font-size: 1rem;
	&:hover {
		background-color: #0069d9;
		transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	}
`;
