import fetch from 'isomorphic-fetch';

const defaultFetchOpts = {};

export default async (url, opts = {}) => {
    // TODO: Errors enum
    if (!url) return Promise.reject(new Error('Missing url parameter'));

    try {
        const responseStream = await fetch(url, { ...defaultFetchOpts, ...opts });
        const { status } = responseStream;

        if (status < 400) {
            const contentType = responseStream.headers.get('Content-Type');

            return /json/ig.test(contentType) ? responseStream.json() : responseStream.blob();
        }

        throw new Error('Fetch error');
    } catch (err) {
        // TODO: Errors enum
        throw new Error('api err', err);
    }
};
