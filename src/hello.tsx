import React from 'react';
import {useQuery} from 'react-query'
import fetchRemoteMessage from './fetchRemoteMessage';

function useQuery_fetchRemoteMessage() {
  return useQuery('fetchRemoteMessage', () => fetchRemoteMessage('RemoteHello1'), {
    retry: false
  })
}

function useQuery_fetchRemoteMessage2() {
  const {data, ...rest} = useQuery_fetchRemoteMessage();
  return {
    ...rest,
    data: data?.toUpperCase()
  }
}


export default function Hello() {
  const {isLoading, error, data} = useQuery_fetchRemoteMessage2();

  return <div>
    {isLoading && <div>Loading...</div>}
    {error && <div>Error: {error?.message}</div>}
    {data !== undefined && <div>Hello, {data}</div>}
  </div>;
};
