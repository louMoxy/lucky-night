export default {
    cms_manual_init: true,
    backend: {
        name: 'github',
        repo: 'LuckyNightStudio/lucky-night',
        branch: 'main',
    },
    publish_mode: 'editorial_workflow',
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
        {
            name: 'posts',
            label: 'Posts',
            create: true,
            folder: 'content',
            slug: "{{slug}}",
            identifier_field: 'slug',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    widget: 'string',
                },
                {
                    label: 'Summary',
                    name: 'summary',
                    widget: 'text',
                },
                {
                    label: 'Summary Image',
                    name: 'summaryImage',
                    widget: 'image',
                },
                {
                    label:  "Tags",
                    name: "tags",
                    widget: 'list',
                    max: 4,
                    allow_add: true
                },
                {
                    label: 'Blog post content',
                    name: 'body',
                    widget: 'markdown'
                },
                {
                label: "Publish Date",
                name: "date",
                widget: "datetime",
                format: "DD-MM-YYYY",
                dateFormat: "DD-MM-YYYY",
                timeFormat: false
                }
            ],
        },
    ],
};
