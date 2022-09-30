import App from './main.imba'	
import {render} from '@testing-library/react'
import {screen, waitFor} from "@testing-library/dom"
import userEvent from '@testing-library/user-event'
import React from 'react'
import ReactApp from './App.jsx'

bench "Imba", do
	imba.mount <App>
	const counter = screen.getByTestId "imba-1"
	expect(counter).toHaveTextContent("1")
	for i in [1 .. 500]
		userEvent.click screen.getByTestId "imba-1"
	waitFor do expect(screen.getByTestId("imba-1")).toHaveTextContent("501")
bench "React", do
	render React.createElement ReactApp
	const counter = screen.getByTestId "react-1"
	expect(counter).toHaveTextContent("1")
	for i in [1 .. 500]
		userEvent.click screen.getByTestId "react-1"
	waitFor do expect(screen.getByTestId("react-1")).toHaveTextContent("6")

