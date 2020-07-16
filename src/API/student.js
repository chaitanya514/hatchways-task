import axios from 'axios';

const url = 'https://www.hatchways.io/api/assessment/students';

export const searchStudentApi= async () => {
  try {
    const response = await axios.get(url);
    console.log(response)
    const {data} = response;
    return data;
  } 
  catch (err) {
    console.log('error in studentApi', err);
  }
};