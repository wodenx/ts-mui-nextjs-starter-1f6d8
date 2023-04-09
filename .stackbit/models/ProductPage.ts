import { Model } from "@stackbit/types";

export const ProductPage: Model =  {
    name: 'ProductPage',
    type: 'page',
    label: 'Product Page',
    readOnly: true,
    folder: 'pages',
    urlPath: '/{slug}',
    filePath: 'content/pages/products/{slug}/index.json',
    hideContent: true,
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    fields: [
        { type: 'slug', name: 'slug', label: 'slug', required: true },
        { type: 'string', name: 'title', label: 'Title', default: 'This Is a New Product Page', required: true },
    ]
};

