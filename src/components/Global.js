import React from 'react';
import Covid from '../api/covid-19';

import { Table } from 'antd';

class Global extends React.Component {
	state = { globalData: [] };

	async componentDidMount() {
		this.getGlobal();
	}

	getGlobal = async () => {
		const res = await Covid.get('summary');
		const globalData = res.data.Global;
		this.setState({ globalData });
	};

	render() {
		// Table data
		const columns = [
			{
				title: 'New',
				dataIndex: 'new',
				key: 'new',
			},
			{
				title: 'Total',
				dataIndex: 'total',
				key: 'total',
			},
		];

		const dataSource = [
			{
				key: '1',
				new: `New Confirmed cases: ${this.state.globalData.NewConfirmed}`,
				total: `Total Confirmed cases: ${this.state.globalData.TotalConfirmed}`,
			},
			{
				key: '2',
				new: `New Deaths: ${this.state.globalData.NewDeaths}`,
				total: `Total Deaths: ${this.state.globalData.TotalDeaths}`,
			},
			{
				key: '3',
				new: `New Recovered: ${this.state.globalData.NewRecovered}`,
				total: `Total Recovered: ${this.state.globalData.TotalRecovered}`,
			},
		];

		return (
			<div>
				<h1>Global Numbers</h1>
				<Table
					columns={columns}
					dataSource={dataSource}
					pagination={false}
				/>
			</div>
		);
	}
}

export default Global;
