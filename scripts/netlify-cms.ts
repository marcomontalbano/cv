
import path from 'path';
import fs from 'fs';
import pluralize from 'pluralize';

type Collection = {
    [key: string]: any;
};

type Collections = Collection[];

type ParseCollection = (collectionPath: string) => Collections;

type GetContent = (contentPath: string) => Content;

type ResolveRelations = (contentEntries: ContentEntries) => ContentEntries;
type ResolveCollectionRelations = (contentEntries: ContentEntries, collection: Collection) => Collection;

type Content = {
    [collection: string]: Collections;
}

type ContentEntries = [
    string,
    Collections
][];

const readdirSync = (root: string) => (fs.readdirSync(root) as string[]).map((basename) => path.resolve(root, basename));

const parseCollection: ParseCollection = collectionPath => readdirSync(collectionPath).map(file => JSON.parse(fs.readFileSync(file, 'utf8')));

const foreignKeySuffix = 'Id';

const findItem = (content: Content, collectionName: string, id: string) => content[collectionName].find(item => item.id === id);

const findItems = (content: Content, collectionName: string, ids: string[] = []) => content[collectionName].filter(item => ids.includes(item.id));

const resolveCollectionRelations: ResolveCollectionRelations = (contentEntries, collection) => {
    const itemEntries = Object.entries(collection).map(([key, value]) => {
        const [, relationSingular] = key.match(new RegExp(`([\\S]+)${foreignKeySuffix}$`)) || [];

        if (relationSingular) {
            const content: Content = Object.fromEntries(contentEntries);
            const relationPlural = pluralize.plural(relationSingular);

            if (typeof value === 'string') {
                return [
                    relationSingular,
                    findItem(content, relationPlural, value)
                ];
            }

            return [
                relationPlural,
                findItems(content, relationPlural, value)
            ];

        }

        return [key, value];
    });

    return Object.fromEntries(itemEntries);
};

const resolveRelations: ResolveRelations = contentEntries => contentEntries.map(([name, collections]) => [
    name,
    collections.map(collection => resolveCollectionRelations(contentEntries, collection))
]);

const getContent: GetContent = contentPath => {
    const contentEntries: ContentEntries = readdirSync(contentPath).map(folder => [
        path.basename(folder),
        parseCollection(folder)
    ]);

    return Object.fromEntries(resolveRelations(contentEntries));
};

export { getContent };
