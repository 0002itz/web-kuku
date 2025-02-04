import { defineCollection, z } from "astro:content";

const contributors = defineCollection({
    schema: z.object({
        colab_name: z.string(),
        tec: z.string(),
        email: z.string(),
        // avatar_img: z.string(),
        // github: z.string(),
    })
})

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        done_by: z.string(),
        tec_use: z.string(),
        //image: z.string(),
    })
})

export const collections = { contributors, projects }