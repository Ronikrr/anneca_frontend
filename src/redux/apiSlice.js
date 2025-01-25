import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCategories, setError, setLoading } from './slices/categoriesSlice';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://anneca-backend-89l2.vercel.app/api/v1',
        // baseUrl: 'http://localhost:8000/api/v1',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('Authorization', `${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: '/auth/register',
                method: 'POST',
                body: user,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response) => response,
        }),
        productReview: builder.mutation({
            query: ({ productId, rating, comment }) => ({
                url: `/product/add-review`,
                method: 'POST',
                body: { productId, rating, comment },
            }),
        }),
        getProducts: builder.query({
            query: ({ category, page, searchTerm }) => `/product/?category=${category}&page=${page}&search=${searchTerm ? searchTerm : ""}`,
        }),
        getAllCategories: builder.query({
            query: () => 'category',
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    dispatch(setLoading());
                    const { data } = await queryFulfilled;
                    dispatch(setCategories(data?.data || []));
                } catch (error) {
                    dispatch(setError(error));
                }
            },
        }),
        getSingleProduct: builder.query({
            query: (id) => `/product/${id}`,
        }),
        getProductMeasurement: builder.query({
            query: (id) => `/measurements/${id}`,
            transformResponse: (response) => {
                console.log(response,"llll")
                const transformedMeasurements = response.data.measurements.map((measurement) => {
                    return Object.fromEntries(
                        Object.entries(measurement).filter(([key, value]) => value !== null)
                    );
                });
                return {
                    ...response,
                    data: {
                        ...response.data,
                        measurements: transformedMeasurements
                    }
                };
            },
        }),
        getSimilarProduct: builder.query({
            query: ({ productId, categoryId }) => `product/similar/${categoryId}/${productId}`,
        }),
        getProductReview: builder.query({
            query: ({ productId }) => `product/get-review/${productId}`,
        }),
        getFeaturedProduct: builder.query({
            query: () => `product/featured`,
        }),
        getPopularProduct: builder.query({
            query: () => `product/popular`,
        })
    }),
});

export const {
    useSignupMutation,
    useLoginMutation,
    useGetProductsQuery,
    useGetAllCategoriesQuery,
    useGetSingleProductQuery,
    useGetProductMeasurementQuery,
    useGetSimilarProductQuery,
    useGetFeaturedProductQuery,
    useProductReviewMutation,
    useGetProductReviewQuery,
    useGetPopularProductQuery
} = apiSlice;
