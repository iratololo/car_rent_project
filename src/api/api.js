import axios from "axios";

const baseURL = 'https://65ae61ad1dfbae409a74b5b0.mockapi.io/adverts';

// const PER_PAGE = 4;

// export const getAllCars = async (page) => {
//     const response = await axios.get(baseURL, {
//         params: {
//         limit: PER_PAGE,
//         page: page,
//   },
//     });
//     return response;
// }

export const getAllCars = async () => {
    const response = await axios.get(baseURL);
    console.log('response :>> ', response);
    return response;
}