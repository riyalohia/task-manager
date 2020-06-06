import React from 'react';
import './TaskManager.css';
import { Button, Input, Text } from '@innovaccer/design-system';
import ServerList from './serverList';
import WaitingList from './waitingList';

export const useIsMount = () => {
  const isMountRef = React.useRef(true);
  React.useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

const TaskManager = () => {
  const [servers, setServers] = React.useState([]);
  const [waitingList, setWaitingList] = React.useState([]);
  const [totalTasks, setTotalTasks] = React.useState(0);
  const [tasks, setTasks] = React.useState(0);

  const initialRender = useIsMount();

  // Assign Task to Server when server is free or new task is added
  React.useEffect(() => {
    if (!initialRender) {
      if (waitingList.length > 0) {
        const serversList = servers.slice();
        const index = serversList.findIndex(server => server.ideal === true);

        if (index >= 0) {
          const waitingListCopy = waitingList.slice();
          waitingListCopy.splice(0, 1);
          serversList[index].ideal = false;
          setWaitingList(waitingListCopy);
          setServers(serversList);
        }
      }
    }
  }, [servers, waitingList]);

  const onAddServer = () => {
    const serversList = servers.concat({ ideal: true });
    setServers(serversList);
  };

  const onRemoveServer = () => {
    const serversList = servers.slice();
    const index = serversList.length - 1;
    serversList.splice(index, 1);

    setServers(serversList);
  };

  const onAddTasks = () => {
    const tasksArray = [];
    for (let i = 0; i < tasks; i++) {
      tasksArray.push(`Waiting Task ${waitingList.length + i + 1}`);
    };

    const list = waitingList.concat(tasksArray);
    setTotalTasks(tasks + totalTasks);
    setWaitingList(list);
  };

  const onUpdateServerList = (index) => {
    const serversList = servers.slice();
    serversList[index].ideal = true;
    setServers(serversList);
  }

  const onDeleteWaitingTask = (index) => {
    const waitingListCopy = waitingList.slice();
    waitingListCopy.splice(index, 1);
    setWaitingList(waitingListCopy);
    setTotalTasks(totalTasks - 1);
  }

  const onChangeInput = (event) => {
    setTasks(Number(event.target.value));
  };

  return (
    <div className='TaskManager'>
      <div className='TaskManager-wrapper'>
        <div className='TaskManager-button'>
          <Button
            appearance='primary'
            onClick={onAddServer}
            disabled={servers.length >= 10}
          >
            Add Server
          </Button>
          <Button
            appearance='primary'
            onClick={onRemoveServer}
            disabled={servers.length > 0 && !servers[servers.length - 1].ideal}
          >
            Remove Server
          </Button>
        </div>
        <div className='TaskManager-input'>
          <Input
            name="input"
            type="number"
            onChange={onChangeInput}
          />
          <Button appearance='primary' onClick={onAddTasks}>Add Tasks</Button>
        </div>
      </div>
      <div className='TaskManager-info'>
        {totalTasks > 0 && (
          <div>
            <Text weight='strong' appearance='subtle'>Total Tasks: {totalTasks}</Text>
            <Text weight='strong' appearance='subtle'>Completed Tasks: {totalTasks - waitingList.length}</Text>
            <Text weight='strong' appearance='subtle'>Waiting Tasks: {waitingList.length}</Text>
          </div>
        )}
      </div>
      <ServerList
        servers={servers}
        updateServerList={onUpdateServerList}
      />
      <WaitingList
        list={waitingList}
        onDeleteWaitingTask={onDeleteWaitingTask}
      />
    </div>
  );
}

export default TaskManager;