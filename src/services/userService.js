import axios from "../axios";

const handleLoginAPI = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};

const deleteUserService = (userId) => {
  return axios.delete("/api/delete-user", { data: { id: userId } });
};

const editUserService = (inputData) => {
  return axios.put("/api/edit-user", inputData);
};

const getAllCodeServices = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
}

export {
  handleLoginAPI,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getAllCodeServices,
};
