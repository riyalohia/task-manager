import React from 'react';
import './WaitingList.css';
import { Heading, Card, Button } from '@innovaccer/design-system';
import ProgressBar from 'react-bootstrap/ProgressBar';

const WaitingList = ({ list, onDeleteWaitingTask }) => {
	const CardStyle = {
		marginTop: '20px',
		paddingLeft: '20px',
		paddingRight: '20px',
		maxHeight: '300px',
		overflowY: 'scroll'
	};

	const onDeleteTask = (event, id) => {
		if (onDeleteWaitingTask) onDeleteWaitingTask(id);
	};

	return (
		<Card shadow='medium' style={CardStyle}>
			{
				list.map((task, ind) => {
					return (
						<div>
							<div className='WaitingList-heading'><Heading size='m'>{task}</Heading></div>
							<div className='WaitingList-progress'>
								<ProgressBar now={0} label={'waiting..'} />
								<Button icon='delete' onClick={e => onDeleteTask(e, ind)} />
							</div>
						</div>
					)
				})
			}
		</Card>
	)
};

export default WaitingList;