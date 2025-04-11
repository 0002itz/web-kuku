import { defineCollection, z } from "astro:content";

const contributors = defineCollection({
    schema: z.object({
        colab_name: z.string(),
        tec: z.string(),
        email: z.string(),
        user_img: z.string(),
        // github: z.string(),
    })
})

const projects = defineCollection({
    schema: z.object({
        p_name: z.string(),
        m_by: z.string(),
        t_use: z.string(),
        leg: z.string(),
        images: z.array(z.string()),
    })
})

export const collections = { contributors, projects }