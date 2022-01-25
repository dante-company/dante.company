import styled from 'styled-components';
import tw from 'twin.macro';

const Page = styled.div`
  ${tw`
    // frame
    w-full max-w-[900px]
    p-[16px] m-auto

    // font
    font-sans
    text-base
  `}
`;

export default Page;
