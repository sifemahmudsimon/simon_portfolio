import React from 'react'
import { Link as ChakraLink } from "@chakra-ui/react"
import Link from 'next/link'

export const CommonLink = ({ children, href, hoverDesign = { textDecoration: "none" }, ...rest }) => {
    return (
        <Link
            href={href}
            passHref
        >
            <ChakraLink
                _hover={{
                    ...hoverDesign
                }}
                {...rest}
            >
                {children}
            </ChakraLink>
        </Link>
    )
}