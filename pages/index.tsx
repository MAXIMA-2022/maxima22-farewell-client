import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box
        minH={"100vh"}
        bgImg={[
          "tyLs.webp",
          "tyLs.webp",
          "tyLs.webp",
          "tySm.webp",
          "tySm.webp",
        ]}
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      ></Box>
    </>
  );
}
