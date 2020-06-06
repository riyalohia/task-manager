import React from 'react';
import './Server.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Heading, Text } from '@innovaccer/design-system';

const Server = ({ id, ideal, updateServer }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (!ideal) {
      const interval = setInterval(() => {
        if (progress <= 100) {
          const value = progress + 5;
          setProgress(value);
        }
      }, 1000);
      if (updateServer && progress > 100) {
        updateServer(id);
        setProgress(0);
      }
      return () => clearInterval(interval);
    }
  }, [ideal, progress]);

  return (
    <div style={{marginBottom: '20px'}}>
      <div className='Server-heading'><Heading size='m'>{`Server ${id + 1}`}</Heading></div>
      <ProgressBar now={progress} />
      <Text>{progress / 5 < 10 ? `00:0${progress / 5}` : `00:${progress / 5}`}</Text>
    </div>
  )
};

export default Server;