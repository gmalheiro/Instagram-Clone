import { USERS } from "./users";

export const POSTS = [
    {
        imageURL : 'https://images.mubicdn.net/images/cast_member/563422/cache-510322-1580854988/image-w856.jpg?size=800x',
        user: USERS[3].user,
        likes:20,
        caption:"I love working in HR with my work colleagues. And they love me too!",
        profile_picture: USERS[3].image,
        comments:[
            {
                user: 'michaelscott',
                comment:'I hate you Toby'
            },
            {
                user: 'dwightschrute',
                comment:
                "I know what you've been planning."
            },
        ]
    },
    {
        imageURL : 'https://imagenes.elpais.com/resizer/chKCbCF2vAsg-ocin7kw-Yq97zE=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/BGRBZZZN6LLKZRU6FHJ6DUDI6Y.jpg',
        user: USERS[0].user,
        likes:200,
        caption:"Jim gave me this mug",
        profile_picture: USERS[0].image,
        comments:[
            {
                user: 'jimhalpert',
                comment:"I didn't, actually you bought yourself this mug"
            },
            {
                user: 'dwightschrute',
                comment:
                "'BEST BOSS IN THE WHOLE WORLD'"
            },
        ]
    },
]
