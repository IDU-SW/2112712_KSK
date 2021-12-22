import { IGatsbyImageData } from 'gatsby-plugin-image'

export type PostFrontmatterType = {
    title: string
    date: string 
    categories: string[]
    summary: string
    thumbnail: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData
        }

        pubicURL: string
    }
}

export type PostListItemType = {
    node: {
        id: string
        fields: {
            slug: string
        }
        frontmatter: PostFrontmatterType
    }
}

export type PostPageItemType = {
    node: {
        html: string
        fromtmatter: PostFrontmatterType
    }
}