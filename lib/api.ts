import { API, graphqlOperation } from "aws-amplify";
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { ExternalComponent, ListExternalComponentsQuery } from "src/API";
import { listExternalComponents } from "src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export async function getAllComponents(): Promise<ExternalComponent[]> {
  const externalToolsResult = (await API.graphql(
    graphqlOperation(listExternalComponents, {
      filter: {
        tags: {
          contains: "rjhuss",
        },
      },
      authMode: "AWS_IAM",
    })
  )) as GraphQLResult<ListExternalComponentsQuery>;
  let externalComponents: ExternalComponent[] = [];
  if (
    externalToolsResult.data !== undefined &&
    externalToolsResult.data.listExternalComponents !== undefined &&
    externalToolsResult.data.listExternalComponents !== null
  ) {
    externalToolsResult.data.listExternalComponents.items?.map((extComp: ExternalComponent | null) => (
      externalComponents.push(
        extComp = extComp ? extComp : {
          __typename: "ExternalComponent",
          id: "1",
          name: "Loading...",
          href: "",
          tags: [""],
          _version: 1,
          _deleted: false,
          _lastChangedAt: 1,
          createdAt: "2020-04-10",
          updatedAt: "2020-04-10",
        })
      )
    );
  } else {
    externalComponents = [];
  }
  return externalComponents;
}