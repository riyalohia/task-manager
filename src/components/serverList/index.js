import React from 'react';
import Server from '../Server';
import { Card } from '@innovaccer/design-system';

const ServerList = ({ servers, updateServerList }) => {
	const CardStyle = {
		marginTop: '10px',
		paddingLeft: '20px',
		paddingRight: '20px',
		maxHeight: '300px',
		overflowY: 'scroll'
	};

	const onUpdateServer = (id) => {
		if (updateServerList) updateServerList(id);
	}

	return (
		<Card shadow='medium' style={CardStyle}>
			{
				servers.map((serverInfo, ind) => {
					return (
						<Server
							id={ind}
							ideal={serverInfo.ideal}
							updateServer={onUpdateServer}
						/>
					);
				})
			}
		</Card>
	);
};

export default ServerList;