export const addData = (data) => ({
  type: "ADD_DATA",
  payload: data,
});

export const deleteData = (dataId) => ({
  type: "DELETE_DATA",
  payload: dataId,
});

export const updateData = (data) => ({
  type: "UPDATE_DATA",
  payload: data,
});
