import type { NextPage } from 'next';
import {
  Text, Heading, Container, Input, Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const Home: NextPage = () => {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container maxW="xl" mt="100px">
      <Heading mb="20px" size="l">formサンプル</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input mb="20px" defaultValue="example" {...register('example')} />
        <Input mb="20px" {...register('exampleRequired', { required: true })} />
        <Text mb="20px" color="red.600">{errors.exampleRequired && <span>This field is required</span>}</Text>
        <Button mb="20px" type="submit">送信</Button>
      </form>
    </Container>
  );
};

export default Home;
