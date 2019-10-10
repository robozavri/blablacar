import React, { Component } from 'react';

export const SetRoute = (fromProps) => async dispatch => {
	dispatch({ type:'SET_ROUTE',payload:'this is test payload from set route' })
	console.log('hello it works SetRoute Action')
};

export const ChangeStartDatetime = (datetime) => async dispatch => {
	dispatch({ type:'CHANGE_START_TIME',payload: datetime })
	console.log('Trip datatime was set')
};