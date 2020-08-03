import path from 'path';
import fs from 'fs';
import pluralize from 'pluralize';

type Content = {
    [collectionName: string]: Collections;
};

type Collections = Collection[] | Collection;

type Collection = {
    [key: string]: unknown;
};

type ContentEntries = [string, Collections][];

const readdirSync = (root: string): string[] => fs.readdirSync(root).map((basename) => path.resolve(root, basename));

const readFileAsJson = (file: string): Collection => JSON.parse(fs.readFileSync(file, 'utf8')) as Collection;

const parseCollection = (collectionPath: string): Collections =>
    readdirSync(collectionPath).map((file) => readFileAsJson(file));

const foreignKeySuffix = 'Id';

const findItem = (content: Content, collectionName: string, id: string): Collection | undefined => {
    const collections = content[collectionName];

    if (!Array.isArray(collections)) {
        return collections;
    }

    return collections.find((item) => item.id === id);
};

const findItems = (content: Content, collectionName: string, ids: string[] = []): Collections => {
    const collections = content[collectionName];

    if (!Array.isArray(collections)) {
        return collections;
    }

    return collections.filter((item) => typeof item.id === 'string' && ids.includes(item.id));
};

const resolveCollectionRelations = (contentEntries: ContentEntries, collection: Collection): Collection => {
    const itemEntries = Object.entries(collection).map(([key, value]) => {
        const [, relationSingular] = new RegExp(`([\\S]+)${foreignKeySuffix}$`).exec(key) || [];

        if (relationSingular) {
            const content: Content = Object.fromEntries(contentEntries);
            const relationPlural = pluralize.plural(relationSingular);

            if (typeof value === 'string') {
                return [relationSingular, findItem(content, relationPlural, value)];
            }

            if (Array.isArray(value)) {
                return [relationPlural, findItems(content, relationPlural, value)];
            }
        }

        return [key, value];
    });

    return Object.fromEntries(itemEntries) as Collection;
};

const resolveRelations = (contentEntries: ContentEntries): ContentEntries =>
    contentEntries.map(([name, collections]) => [
        name,
        Array.isArray(collections)
            ? collections.map((collection) => resolveCollectionRelations(contentEntries, collection))
            : resolveCollectionRelations(contentEntries, collections),
    ]);

const getContent = (contentPath: string): Content => {
    const contentEntries: ContentEntries = readdirSync(contentPath).map((filepath) => {
        if (fs.lstatSync(filepath).isFile()) {
            return [path.basename(filepath, '.json'), readFileAsJson(filepath)];
        }

        return [path.basename(filepath), parseCollection(filepath)];
    });

    return Object.fromEntries(resolveRelations(contentEntries));
};

export { getContent };
