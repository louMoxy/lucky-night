import {NextPage} from "next";
import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import Image from "next/image";
import img from '../public/freebies.png'
import img1 from '../public/freebies/2-CANVA-INSTA-TEMPLATES-1080X1080.jpg'
import img2 from '../public/freebies/brand-statement-1-square.jpg'
import {useRouter} from "next/router";
import * as React from "react";
import {ButtonStyle} from "../components/BookButton";
import {Square, Sun} from "../components/icons";

const Freebies: NextPage = () => {
    const theme = useTheme();
    const {pathname} = useRouter()
    const largerThanMG = useMediaQuery(theme.breakpoints.up('md'));
    const bgcolor = pathname === '/' ? '#FEF6F8' : pathname === '/freebies' ? '#F69FB9' : '#D4C0F2'

    return (
        <>
        <Box bgcolor={bgcolor}>
            <Container>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: 5,  flexDirection: largerThanMG ? 'row': 'column'}}>
                    <Box p={4} sx={{ flex: 3 }}>
                        <Typography variant={'h3'} component={'h1'} sx={{ color: '#fff'}}>
                            Create brand magic with <mark>free</mark> curated resources
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 2, mt: 'auto', mb: '-8px'}}>
                        <Box sx={{ maxWidth: largerThanMG ? img.width : 300 }}>
                            <Image
                                src={img.src}
                                alt={'freebies'}
                                height={img.height}
                                width={img.width}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
            <Box bgcolor={'white.main'}>
                <Container>
                    <Box sx={{ display: 'flex', px: 4, justifyContent: 'center', alignItems: 'center',  flexDirection: largerThanMG ? 'row': 'column' }}>
                        <Box sx={{ flex: 2, position: 'relative', pt: 8, pb: 4 }}>
                            <Box sx={{ width: 200, position: 'absolute', top: 20, left: -40 }}>
                                <Sun />
                            </Box>
                            <Box sx={{ py: 6, px: 5, maxWidth: largerThanMG ? img.width : 400 }}>
                                <Image
                                    src={img1.src}
                                    alt={'10 FREE Instagram templates in Canva'}
                                    height={img1.height}
                                    width={img1.width}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ flex: 3, py: 6 }}>
                            <Typography variant={'h5'} mb={2}>
                                10 FREE Instagram templates in Canva
                            </Typography>
                            <Typography mb={2} fontWeight={600}>
                                Capture the attention of your followers with these organic & colourful Instagram templates. Including functional designs like testimonials, blog posts, infographics and quotes, these templates have everything you need to make your audience say ‘woooowwww’.                            </Typography>
                            <Typography mb={2}>
                                All you’ll need to access these templates is a FREE Canva account. Update the text, replace images and pop in your brand colours and you’ll be good to go!
                            </Typography>
                            <a href='https://mailchi.mp/luckynightstudio/10-free-instagram-posts-in-canva' target='_blank' rel="noreferrer">
                                <Button variant='contained' sx={{ ...ButtonStyle, mt:4 }} color={'purple' as any} >
                                    Download Now
                                </Button>
                            </a>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: '#FBF9FE' }}>
                <Container>
                    <Box sx={{ display: 'flex', px: 4, justifyContent: 'center', alignItems: 'center',  flexDirection: largerThanMG ? 'row': 'column', pb: 5 }}>
                        <Box sx={{ flex: 2, position: 'relative'}}>
                            <Box sx={{ py: 6, px: 5, maxWidth: largerThanMG ? img.width : 400, position: 'relative', zIndex: 3  }}>
                                <Image
                                    src={img2.src}
                                    alt={'brand Statement'}
                                    height={img2.height}
                                    width={img2.width}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ flex: 3, py: 6}} >
                            <Typography variant={'h5'} mb={2}>
                                FREE 10 page guide: Craft Your Unique Brand Statement
                            </Typography>
                            <Typography mb={2} fontWeight={600}>
                                Get to know your brand’s unique superpowers, differentiate yourself from the competition and start creating content that actually works for your brand with this new free guide.                            </Typography>
                            <Typography mb={2}>
                                Create a statement that captures the unique essence of your brand and carves out your unique market position with this in-depth free guide. No more copying what everyone else is doing, instead craft effective assets that your audience love and that will make you money!
                            </Typography>
                            <a href='https://mailchi.mp/luckynightstudio/r3k0u71mir' target='_blank' rel="noreferrer">
                                <Button variant='contained' sx={{ ...ButtonStyle, mt:4 }} color={'secondary'} >
                                    Download Now
                                </Button>
                            </a>
                        </Box>
                    </Box>

                </Container>
            </Box>
        </>
    )
}

export default Freebies