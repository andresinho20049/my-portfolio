import { defineDocumentType, makeSource } from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Projects = defineDocumentType(() => ({
  name: "Projects",
  filePathPattern: `jobs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      default: "Model project developed for academic purposes",
    },
    tags: {
      type: "string",
      default: "Other"
    },
    date: {
      type: "date",
      required: true,
    },
    imgSrc: {
      type: "string",
      required: true,
    },
    linkPreview: {
      type: 'string'
    }
  },
  computedFields,
}));

export const Posts = defineDocumentType(() => ({
  name: "Posts",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      default: "Model project developed for academic purposes",
    },
    date: {
      type: "date",
      required: true,
    },
    imgSrc: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Posts, Projects],
});
