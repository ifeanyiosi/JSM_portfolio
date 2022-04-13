import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'e07ifzsd',
    dataset: 'production',
    apiVersion: '2022-02-01', 
    useCdn: true,
    token:'skTWXjJ2ijjg6Joqej7fLGx7Dkv8VTk6wXfyJoUDFq73SvqQGU26c9jNKlrYwaJFqIk3y2paoOrUjZqdFAC90bfklaGLI2aOzLaT8O2bx8Ebharx5tsMRtTN87uGTsZXS5vGk84oLfNuDQw32ePlFaayHHfYSbKG79fngvCnWZIJAFLlngqM',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);