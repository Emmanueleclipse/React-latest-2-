import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

export const createQueryHook = (key, path) => {
  const getInstances = async () => {
    const { data } = await axios.get(path);
    return data;
  };

  return () => useQuery(key, getInstances);
};

export const createQueryOneHook = (key, getPath) => {
  const getInstanceById = async (id) => {
    const { data } = await axios.get(getPath(id));
    return data;
  };

  return (instanceId) => {
    return useQuery([key, instanceId], () => getInstanceById(instanceId));
  };
};

export const createMutationToPost = (path, sideEffects) => {
  const createInstance = (newInstance) => axios.post(path, newInstance);
  return () => useMutation(createInstance, sideEffects);
};

export const createMutationToDelete = (getPath, sideEffects) => {
  const deleteInstance = (instanceId) => axios.delete(getPath(instanceId));
  return () => useMutation(deleteInstance, sideEffects);
};

export const createMutationToUpdate = (getPath, sideEffects) => {
  const updateInstance = ({ id, ...data }) => axios.put(getPath(id), data);
  return () => useMutation(updateInstance, sideEffects);
};
