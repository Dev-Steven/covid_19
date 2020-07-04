import React from 'react';

import Covid from '../api/covid-19';

// antd stuff
import { Select, Table } from 'antd';
const { Option } = Select;

class Country extends React.Component {
	state = {
		countries: [],
		country: {},
	};

	async componentDidMount() {
		await this.getCountries();
		await this.onChange('united-states');
	}

	getCountries = async () => {
		const res = await Covid.get('/summary');
		const countries = res.data.Countries;
		this.setState({ countries });
	};

	countryNames = () => {
		return this.state.countries.map(country => {
			return (
				<Option value={country.Slug} key={country.CountryCode}>
					{country.Country}
				</Option>
			);
		});
	};

	onChange = value => {
		return this.state.countries.map(country => {
			if (value === country.Slug) {
				this.setState({ country });
			}
		});
	};

	render() {
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
				new: `New Confirmed cases: ${this.state.country.NewConfirmed}`,
				total: `New Total cases: ${this.state.country.TotalConfirmed}`,
			},
			{
				key: '2',
				new: `New Deaths: ${this.state.country.NewDeaths}`,
				total: `Total Deaths: ${this.state.country.TotalDeaths}`,
			},
			{
				key: '3',
				new: `New Recovered: ${this.state.country.NewRecovered}`,
				total: `Total Recovered: ${this.state.country.TotalRecovered}`,
			},
		];
		return (
			<div>
				<Select
					defaultValue='united-states'
					style={{ width: 200 }}
					onChange={this.onChange}
				>
					{this.countryNames()}
				</Select>
				{this.state.country.Country ? (
					<div>
						<h1>{this.state.country.Country}</h1>
						<Table
							columns={columns}
							dataSource={dataSource}
							pagination={false}
						/>
					</div>
				) : (
					<Table
						columns={columns}
						// dataSource={dataSource}
						pagination={false}
					/>
				)}
			</div>
		);
	}
}

export default Country;
