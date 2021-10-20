import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { Box, Stack, Text, VStack, Heading } from '@chakra-ui/layout'

export default function leavePolicy() {
  return (
    <DashboardLayout>
      <VStack padding='30px' spacing='20px'>
        <Box>
          <Heading fontSize='32px'>Leave Policy</Heading>
        </Box>
        <Box w='90%'>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            efficitur sit amet erat at tincidunt. In non consectetur neque, quis
            dictum nunc. Donec condimentum sagittis justo eu efficitur. Nunc in
            turpis mollis diam tempor fringilla eu egestas nibh. Cras venenatis
            nisi et ex congue luctus. Quisque consequat diam erat, non blandit
            ligula ultrices rhoncus. Maecenas sagittis tellus rutrum convallis
            ullamcorper. Mauris blandit nibh porttitor est dignissim, non mattis
            ante sollicitudin. Suspendisse pretium suscipit orci, vitae lacinia
            neque sagittis at. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Curabitur viverra venenatis imperdiet. Nullam sed
            turpis non libero malesuada pretium id non orci. Aliquam erat
            volutpat. Nulla venenatis et turpis eu mattis. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Curabitur condimentum
            consectetur mauris, vitae pharetra leo tempor ut.
          </Text>
        </Box>

        <Box w='90%'>
          <Text>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nunc bibendum ex metus. Integer ac nisi
            ultricies, ultrices nunc eget, mattis diam. Pellentesque nec sem non
            sem egestas lacinia. Quisque consequat sem iaculis elit volutpat
            viverra. In pellentesque augue viverra sapien tempus lobortis.
            Vivamus lobortis sapien at dolor ultrices, sit amet egestas lectus
            posuere. Curabitur ut est sagittis, tincidunt metus sed, laoreet
            tellus. Donec dignissim tortor et consectetur imperdiet.
          </Text>
        </Box>
        <Box w='90%'>
          <Text>
            Aliquam purus magna, dapibus nec tortor id, iaculis accumsan nunc.
            Integer pharetra suscipit risus et gravida. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nulla egestas quis massa at
            condimentum. Phasellus commodo leo in elit posuere, quis pulvinar
            elit vestibulum. Ut eget egestas diam, eu porttitor orci. Sed justo
            velit, ullamcorper sit amet tortor ut, semper tincidunt enim. Sed
            tincidunt nulla erat, eget interdum odio maximus at. Nam nec lectus
            convallis, varius ante nec, pharetra odio. Nulla nisi erat, rutrum
            sed odio scelerisque, malesuada vehicula ipsum. Vivamus rhoncus
            neque id urna viverra, vel condimentum quam feugiat. Aliquam erat
            volutpat. Integer sed elit augue. Phasellus tempus euismod orci, ac
            pulvinar dui. Morbi in placerat mauris.
          </Text>
        </Box>
      </VStack>
    </DashboardLayout>
  )
}
