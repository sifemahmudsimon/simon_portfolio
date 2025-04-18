import { Box, Button, Center, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const WorkTogether = ({social}) => {
  return (
    <Center
    mb={{base:'16px',md:'none'}}
      flexDir="column"
      justifyContent="space-between"
      h="100%"
      w="100%"
      p={{base:'16px',md:"1.32vw"}}
      maxH={{md:"9.93vw"}}
      bg="#101010"
      boxShadow="0px 0px 0px 1px rgba(255, 255, 255, 0.06)"
      borderRadius={{base:'12px',md:'1.32vw'}}
      gap={{base:'24px',md:0}}
    >
      <Text
        fontWeight="600"
        fontSize={{base:'18px',md:"1.32vw"}}
        lineHeight={{base:'24px',md:"1.59vw"}}
        color="#E6E6E6"
      >
        Let’s Work Together
      </Text>

      <Flex w="100%" gap={{base:'16px',md:"0.53vw"}}>
       <Link href={social?.email?.url} style={{width:'100%'}}>
        <Button
          flex={1}
          h={{base:'44px',md:"3.5vw"}}
          w="100%"
          fontWeight={"500"}
          fontSize={{base:'16px',md:"0.86vw"}}
          lineHeight={{base:'20px',md:"1.19vw"}}
          color={"#CCCCCC"}
          gap={{base:'8px',md:"0.53vw"}}
          rounded={{base:'8px',md:"0.66vw"}}
        >
          <Icon boxSize={{base:'22px',md:"1.19vw"}}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.59082 4.17432V11.4543C0.59082 12.1294 0.859001 12.7769 1.33637 13.2542C1.81373 13.7316 2.46118 13.9998 3.13627 13.9998H15.8635C16.5386 13.9998 17.1861 13.7316 17.6635 13.2542C18.1408 12.7769 18.409 12.1294 18.409 11.4543V4.17432L10.8337 8.83504C10.4326 9.08183 9.97087 9.21249 9.49991 9.21249C9.02895 9.21249 8.56722 9.08183 8.16609 8.83504L0.59082 4.17432Z"
                fill="#916CE7"
              />
              <path
                d="M18.409 2.67952V2.54545C18.409 1.87036 18.1408 1.22291 17.6635 0.745546C17.1861 0.268181 16.5386 0 15.8635 0H3.13627C2.46118 0 1.81373 0.268181 1.33637 0.745546C0.859001 1.22291 0.59082 1.87036 0.59082 2.54545V2.67952L8.833 7.75176C9.03357 7.87515 9.26443 7.94048 9.49991 7.94048C9.73539 7.94048 9.96626 7.87515 10.1668 7.75176L18.409 2.67952Z"
                fill="#916CE7"
              />
            </svg>
          </Icon>
          Email
        </Button>
        </Link>
        <Link href={social?.whatsapp?.url} target="_blank" style={{width:'100%'}}>
        <Button
          flex={1}
          h={{base:'44px',md:"3.5vw"}}
          w="100%"
          fontWeight={"500"}
          fontSize={{base:'16px',md:"0.86vw"}}
          lineHeight={{base:'20px',md:"1.19vw"}}
          color={"#CCCCCC"}
          gap={{base:'8px',md:"0.53vw"}}
          rounded={{base:'8px',md:"0.66vw"}}
        >
         <Icon boxSize={{base:'22px',md:"1.19vw"}}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25 0C4.28031 0 0.25 4.02938 0.25 9C0.250975 10.6257 0.695012 12.2203 1.53437 13.6125L0.329687 18L4.81094 16.8234C6.16313 17.595 7.69317 18.0005 9.25 18C14.2206 18 18.25 13.9697 18.25 9C18.25 6.61305 17.3018 4.32387 15.614 2.63604C13.9261 0.948211 11.6369 0 9.25 0ZM6.16937 4.80188C6.31562 4.80188 6.46656 4.80094 6.59594 4.8075C6.75625 4.81125 6.93156 4.82344 7.09844 5.19281C7.29719 5.6325 7.73031 6.735 7.78562 6.84656C7.84187 6.95906 7.88031 7.09031 7.80344 7.23656C7.72937 7.38656 7.69094 7.4775 7.58312 7.60969C7.47156 7.73906 7.34875 7.89937 7.24844 7.99688C7.13594 8.10844 7.02062 8.23125 7.15 8.45344C7.27844 8.67656 7.72656 9.40687 8.38937 9.99562C9.24062 10.7569 9.95875 10.9894 10.1819 11.1019C10.4059 11.2144 10.5353 11.1956 10.6637 11.0456C10.7969 10.9003 11.2216 10.3988 11.3716 10.1747C11.5178 9.95156 11.6669 9.99 11.8694 10.0631C12.0756 10.1372 13.1706 10.6772 13.3947 10.7887C13.6178 10.9003 13.7641 10.9556 13.8203 11.0466C13.8784 11.1403 13.8784 11.5866 13.6928 12.1069C13.5081 12.6262 12.5978 13.1287 12.19 13.1644C11.7784 13.2019 11.3941 13.35 9.51437 12.6094C7.24562 11.7159 5.81594 9.39375 5.70437 9.24375C5.59188 9.09656 4.795 8.03531 4.795 6.94031C4.795 5.84156 5.37156 5.30344 5.57312 5.08031C5.64787 4.99521 5.73944 4.92653 5.84207 4.87861C5.94469 4.83068 6.05614 4.80455 6.16937 4.80188Z"
                fill="#916CE7"
              />
            </svg>
          </Icon>
         {social?.whatsapp?.name}
        </Button>
        </Link>
       
      </Flex>
    </Center>
  );
};

export default WorkTogether;
